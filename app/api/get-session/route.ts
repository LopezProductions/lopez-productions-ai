import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Mark this route as dynamic
export const dynamic = 'force-dynamic'

// Initialize Stripe with error handling
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is not set in environment variables')
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

export async function GET(request: NextRequest) {
  try {
    // Check if Stripe is initialized
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.' },
        { status: 500 }
      )
    }

    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'session_id is required' },
        { status: 400 }
      )
    }

    // Retrieve the Stripe checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'line_items'],
    })

    // Extract relevant data
    const sessionData = {
      id: session.id,
      customer_email: session.customer_email || session.customer_details?.email || null,
      metadata: session.metadata || {},
      amount_total: session.amount_total,
      currency: session.currency,
      payment_status: session.payment_status,
    }

    return NextResponse.json(sessionData)
  } catch (error) {
    console.error('Error retrieving checkout session:', error)
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: 500 }
      )
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to retrieve session: ${errorMessage}` },
      { status: 500 }
    )
  }
}

