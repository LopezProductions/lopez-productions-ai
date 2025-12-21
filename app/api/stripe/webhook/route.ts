import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Mark this route as dynamic - webhooks must be dynamic
export const dynamic = 'force-dynamic'

// Initialize Stripe with error handling
// Following the same pattern as create-checkout-session/route.ts
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is not set in environment variables')
} else {
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
        { error: 'Stripe is not configured' },
        { status: 500 }
      )
    }

    // Check if webhook secret is configured
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('STRIPE_WEBHOOK_SECRET is not set in environment variables')
      return NextResponse.json(
        { error: 'Webhook secret is not configured' },
        { status: 500 }
      )
    }

    // Clean the webhook secret (remove quotes and whitespace)
    const cleanWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET.trim().replace(/^["']|["']$/g, '')

    // Read the raw request body as text
    // This is required for Stripe webhook signature verification
    // DO NOT use request.json() as it will parse the body and break signature verification
    const body = await request.text()
    
    // Get the Stripe signature from headers
    const signature = request.headers.get('stripe-signature')
    
    if (!signature) {
      console.error('Missing stripe-signature header')
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    // Verify the webhook signature
    // This ensures the request actually came from Stripe
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        cleanWebhookSecret
      )
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      )
    }

    // Listen only for checkout.session.completed events
    if (event.type !== 'checkout.session.completed') {
      // Return success for other event types (we just ignore them)
      return NextResponse.json({ received: true })
    }

    // Type-safe access to the session object
    const session = event.data.object as Stripe.Checkout.Session

    // Verify payment_status is "paid"
    if (session.payment_status !== 'paid') {
      console.warn(`Payment status is not paid for session ${session.id}: ${session.payment_status}`)
      // Still return success, but log the warning
      // TODO: Add logic to handle unpaid sessions if needed
      return NextResponse.json({ received: true })
    }

    // Extract session.id and customer_email
    const sessionId = session.id
    const customerEmail = session.customer_email || session.customer_details?.email || null

    // TODO: Persist payment record to database
    // TODO: Log successful payment for audit trail
    // TODO: Send confirmation email to customer
    // TODO: Trigger any post-payment workflows

    console.log('Payment verified successfully:', {
      sessionId,
      customerEmail,
      amountTotal: session.amount_total,
      currency: session.currency,
    })

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    
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
      { error: `Failed to process webhook: ${errorMessage}` },
      { status: 500 }
    )
  }
}

