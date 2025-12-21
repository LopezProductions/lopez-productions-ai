import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

// Mark this route as dynamic
export const dynamic = 'force-dynamic'

// Initialize Stripe with error handling
// Following the same pattern as other API routes
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is not set in environment variables')
}

const cleanStripeKey = process.env.STRIPE_SECRET_KEY 
  ? process.env.STRIPE_SECRET_KEY.trim().replace(/^["']|["']$/g, '')
  : null

const stripe = cleanStripeKey 
  ? new Stripe(cleanStripeKey, {
      apiVersion: '2025-10-29.clover',
      typescript: true,
    })
  : null

// Initialize Supabase client with SERVICE ROLE KEY
// SECURITY: Service role key bypasses Row Level Security (RLS)
// This is intentional - we need server-side access to generate signed URLs
// NEVER expose this key to the client - it's only used in server-side API routes
if (!process.env.SUPABASE_URL) {
  console.error('SUPABASE_URL is not set in environment variables')
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('SUPABASE_SERVICE_ROLE_KEY is not set in environment variables')
}

// Clean the service role key (remove quotes and whitespace)
const cleanSupabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY 
  ? process.env.SUPABASE_SERVICE_ROLE_KEY.trim().replace(/^["']|["']$/g, '')
  : null

const supabase = process.env.SUPABASE_URL && cleanSupabaseKey
  ? createClient(process.env.SUPABASE_URL, cleanSupabaseKey)
  : null

// Product interface matching Supabase products table schema
interface Product {
  slug: string
  name: string
  price_cents: number
  file_path: string
  active: boolean
}

export async function POST(request: NextRequest) {
  try {
    // Validate Stripe is configured
    if (!stripe) {
      console.error('STRIPE_SECRET_KEY is missing or invalid')
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 500 }
      )
    }

    // Validate Supabase is configured
    if (!supabase) {
      console.error('Supabase is not configured - missing URL or service role key')
      return NextResponse.json(
        { error: 'Download service is not configured' },
        { status: 500 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const { sessionId, productSlug } = body

    // Validate input - both sessionId and productSlug are required
    if (!sessionId || typeof sessionId !== 'string' || sessionId.trim().length === 0) {
      return NextResponse.json(
        { error: 'sessionId is required and must be a non-empty string' },
        { status: 400 }
      )
    }

    if (!productSlug || typeof productSlug !== 'string' || productSlug.trim().length === 0) {
      return NextResponse.json(
        { error: 'productSlug is required and must be a non-empty string' },
        { status: 400 }
      )
    }

    const trimmedSessionId = sessionId.trim()
    const trimmedProductSlug = productSlug.trim()

    // SECURITY: Verify the Stripe session to prevent:
    // - Reusing old session IDs (check session age)
    // - Guessing slugs (verify session is valid and paid)
    // - Bypassing payment (verify payment_status === "paid")
    let session: Stripe.Checkout.Session
    try {
      session = await stripe.checkout.sessions.retrieve(trimmedSessionId, {
        expand: ['line_items'],
      })
    } catch (error) {
      console.error('Error retrieving Stripe session:', error)
      // If session doesn't exist or is invalid, return 400
      if (error instanceof Stripe.errors.StripeError && error.code === 'resource_missing') {
        return NextResponse.json(
          { error: 'Invalid session ID' },
          { status: 400 }
        )
      }
      return NextResponse.json(
        { error: 'Failed to verify session' },
        { status: 500 }
      )
    }

    // Verify payment status - prevents bypassing payment
    if (session.payment_status !== 'paid') {
      console.warn(`Session ${trimmedSessionId} payment status is not paid: ${session.payment_status}`)
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 403 }
      )
    }

    // Verify session was created recently (within last 24 hours)
    // This prevents reusing old session IDs
    const sessionCreated = session.created ? new Date(session.created * 1000) : null
    const now = new Date()
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

    if (!sessionCreated || sessionCreated < twentyFourHoursAgo) {
      console.warn(`Session ${trimmedSessionId} is too old. Created: ${sessionCreated}`)
      return NextResponse.json(
        { error: 'Session expired' },
        { status: 403 }
      )
    }

    // TODO: Verify that the session includes the requested product
    // This would prevent guessing slugs by ensuring the session actually contains the product
    // Implementation could check session metadata or line items for product slug/ID
    // For now, we rely on the product lookup and active status check below

    // Query Supabase products table to lookup product by slug
    // SECURITY: Using service role key to query products table server-side
    // This ensures we can check product existence and active status without exposing data to client
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('slug, name, price_cents, file_path, active')
      .eq('slug', trimmedProductSlug)
      .single()

    if (productError) {
      console.error('Error querying products table:', productError)
      // If product not found, return 404
      if (productError.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Product not found' },
          { status: 404 }
        )
      }
      return NextResponse.json(
        { error: 'Failed to lookup product' },
        { status: 500 }
      )
    }

    // Validate product exists and is active
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    if (!product.active) {
      console.warn(`Product ${trimmedProductSlug} is not active`)
      return NextResponse.json(
        { error: 'Product is not available for download' },
        { status: 404 }
      )
    }

    // Validate file_path exists
    if (!product.file_path || typeof product.file_path !== 'string' || product.file_path.trim().length === 0) {
      console.error(`Product ${trimmedProductSlug} has no file_path configured`)
      return NextResponse.json(
        { error: 'Product download not configured' },
        { status: 500 }
      )
    }

    const filePath = product.file_path.trim()

    // Generate signed URL from Supabase Storage
    // SECURITY: Signed URLs are time-limited (10 minutes) to prevent link sharing
    // The service role key allows us to generate signed URLs server-side
    // Using file_path from products table - never expose raw file paths to client
    const bucketName = 'downloads'
    const expiresIn = 600 // 10 minutes in seconds

    const { data, error: storageError } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(filePath, expiresIn)

    if (storageError) {
      console.error('Error generating signed URL:', storageError)
      return NextResponse.json(
        { error: 'Failed to generate download link' },
        { status: 500 }
      )
    }

    if (!data?.signedUrl) {
      console.error('No signed URL returned from Supabase')
      return NextResponse.json(
        { error: 'Failed to generate download link' },
        { status: 500 }
      )
    }

    // TODO: Log successful download request for audit trail
    // TODO: Track download analytics
    // TODO: Optionally send download notification email

    console.log('Download URL generated successfully:', {
      sessionId: trimmedSessionId,
      productSlug: trimmedProductSlug,
      filePath: filePath,
    })

    return NextResponse.json({ url: data.signedUrl })
  } catch (error) {
    console.error('Error processing download request:', error)
    
    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe error details:', {
        type: error.type,
        code: error.code,
        message: error.message,
        statusCode: error.statusCode
      })
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: 500 }
      )
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to process download request: ${errorMessage}` },
      { status: 500 }
    )
  }
}

