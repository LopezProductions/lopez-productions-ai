'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function BlackFridayPopup() {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000) // slight delay
    return () => clearTimeout(timer)
  }, [])

  const handleBookNow = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServiceIds: [],
          bundleIds: ['black_friday_special'],
          total: 50,
          customNotes: 'Black Friday Special - 48 Hour Launch Page',
        }),
      })

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Non-JSON response received:', text.substring(0, 200))
        throw new Error('Server returned an error. Please check the console for details.')
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err) {
      console.error('Error creating checkout session:', err)
      alert(err instanceof Error ? err.message : 'Something went wrong. Please try again or contact support.')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brand-black border border-brand-gold/40 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-brand-gold hover:text-brand-white text-xl transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-3xl font-serif font-bold text-brand-gold mb-3">
              Black Friday Special
            </h2>

            <p className="text-brand-white text-lg font-semibold mb-3">
              Ship your site in 48 hours for <span className="text-brand-gold">$50</span> — Black Friday Only.
            </p>

            <p className="text-brand-gray-light mb-6 leading-relaxed">
              Perfect for college students, creators, or anyone ready to launch fast
              and on a budget. From idea to online in 48 hours — let's make it real.
            </p>

            <button
              onClick={handleBookNow}
              disabled={isLoading}
              className="bg-brand-gold text-brand-black font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : '🚀 Book Now'}
            </button>

            <div className="flex justify-center mt-6 mb-4">
              <Image
                src="/lpfavicon-64.png"
                alt="Lopez Productions Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            <p className="text-xs text-brand-gray-muted mt-4">
              Offer ends Cyber Monday or when remaining slots are filled.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

