import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getStripePriceId, validateStripePriceIds } from '../../data/stripe-prices'
import { getServiceById } from '../../data/packages'

// Initialize Stripe with error handling
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is not set in environment variables')
} else {
  // Check if key might have quotes or whitespace (without logging the key)
  const trimmedKey = process.env.STRIPE_SECRET_KEY.trim()
  if (trimmedKey !== process.env.STRIPE_SECRET_KEY) {
    console.warn('WARNING: STRIPE_SECRET_KEY has leading/trailing whitespace')
  }
  if (trimmedKey.startsWith('"') || trimmedKey.startsWith("'")) {
    console.warn('WARNING: STRIPE_SECRET_KEY appears to have quotes - remove them from .env file')
  }
}

// Clean the key (remove quotes and whitespace)
const cleanStripeKey = process.env.STRIPE_SECRET_KEY 
  ? process.env.STRIPE_SECRET_KEY.trim().replace(/^["']|["']$/g, '')
  : null

const stripe = cleanStripeKey 
  ? new Stripe(cleanStripeKey, {
      apiVersion: '2025-10-29.clover',
      typescript: true,
    })
  : null

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is initialized
    if (!stripe) {
      console.error('STRIPE_SECRET_KEY is missing or invalid')
      return NextResponse.json(
        { error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable in your .env file and restart the dev server.' },
        { status: 500 }
      )
    }
    
    const body = await request.json()
    console.log('Received checkout request:', { 
      selectedServiceIds: body.selectedServiceIds?.length || 0,
      bundleIds: body.bundleIds?.length || 0,
      total: body.total 
    })
    const { selectedServiceIds, bundleIds, total, customNotes } = body

    // Validate required fields
    if (!selectedServiceIds || !Array.isArray(selectedServiceIds)) {
      return NextResponse.json(
        { error: 'selectedServiceIds is required and must be an array' },
        { status: 400 }
      )
    }

    if (!bundleIds || !Array.isArray(bundleIds)) {
      return NextResponse.json(
        { error: 'bundleIds is required and must be an array' },
        { status: 400 }
      )
    }

    if (typeof total !== 'number' || total <= 0) {
      return NextResponse.json(
        { error: 'total is required and must be a positive number' },
        { status: 400 }
      )
    }

    // Combine all service IDs (individual services + bundles)
    const allServiceIds = [...selectedServiceIds, ...bundleIds]

    // Validate that we have at least one service
    if (allServiceIds.length === 0 && !customNotes) {
      return NextResponse.json(
        { error: 'At least one service must be selected or custom notes provided' },
        { status: 400 }
      )
    }

    // Validate that all service IDs have corresponding Stripe Price IDs
    const missingPriceIds = validateStripePriceIds(allServiceIds)
    if (missingPriceIds.length > 0) {
      return NextResponse.json(
        { 
          error: `Missing Stripe Price IDs for services: ${missingPriceIds.join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Build line items for Stripe Checkout
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    // Add individual services
    for (const serviceId of selectedServiceIds) {
      const priceId = getStripePriceId(serviceId)
      if (priceId) {
        const service = getServiceById(serviceId)
        lineItems.push({
          price: priceId,
          quantity: 1,
        })
      }
    }

    // Add bundles
    for (const bundleId of bundleIds) {
      const priceId = getStripePriceId(bundleId)
      if (priceId) {
        const bundle = getServiceById(bundleId)
        lineItems.push({
          price: priceId,
          quantity: 1,
        })
      }
    }

    // Stripe requires at least one line item
    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: 'No valid services found to create checkout session. Please select at least one service.' },
        { status: 400 }
      )
    }

    // Get base URL for redirects
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
      metadata: {
        selectedServiceIds: JSON.stringify(selectedServiceIds),
        bundleIds: JSON.stringify(bundleIds),
        total: total.toString(),
        customNotes: customNotes || '',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    
    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe error details:', {
        type: error.type,
        code: error.code,
        message: error.message,
        statusCode: error.statusCode
      })
      return NextResponse.json(
        { 
          error: `Stripe error: ${error.message}`,
          type: error.type,
          code: error.code
        },
        { status: 500 }
      )
    }

    // Log the full error for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Full error details:', error)
    
    return NextResponse.json(
      { error: `Failed to create checkout session: ${errorMessage}` },
      { status: 500 }
    )
  }
}

// Add GET handler for testing
export async function GET() {
  const hasKey = !!process.env.STRIPE_SECRET_KEY
  const keyLength = process.env.STRIPE_SECRET_KEY?.length || 0
  
  return NextResponse.json({ 
    message: 'Stripe Checkout API endpoint is working',
    stripeConfigured: !!stripe,
    hasSecretKey: hasKey,
    keyLength: keyLength,
    keyPrefix: hasKey ? 'sk_live' : 'N/A', // Only show prefix, not actual key
    note: hasKey ? 'If stripeConfigured is false, check that the key is valid and restart the dev server' : 'Add STRIPE_SECRET_KEY to .env.local and restart the dev server'
  })
}

