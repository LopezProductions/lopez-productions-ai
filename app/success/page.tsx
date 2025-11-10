'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Calendar } from 'lucide-react'

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-brand-gold text-xl">Loading...</div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-gold/20 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-brand-gold" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-white mb-4">
              Payment Successful!
            </h1>
            
            <p className="text-xl text-brand-gray-light mb-8">
              Thank you for your purchase. We've received your payment and will begin working on your package.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark mb-8"
          >
            <h2 className="text-2xl font-serif font-bold text-brand-white mb-6">
              What Happens Next?
            </h2>
            
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-white mb-2">
                    Confirmation Email
                  </h3>
                  <p className="text-brand-gray-light">
                    You'll receive a confirmation email with your order details and next steps within the next few minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-white mb-2">
                    Project Kickoff
                  </h3>
                  <p className="text-brand-gray-light">
                    Within 24 hours, we'll reach out to schedule a kickoff call or request any assets we need to get started.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-gold text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-white mb-2">
                    Get Started
                  </h3>
                  <p className="text-brand-gray-light">
                    We'll begin working on your package based on the turnaround time specified. You'll receive regular updates throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {sessionId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-sm text-brand-gray-light">
                Order ID: <span className="font-mono text-brand-gold">{sessionId}</span>
              </p>
            </motion.div>
          )}

          {sessionId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8"
            >
              <Link
                href={`/intake?session_id=${sessionId}`}
                className="btn-primary px-8 py-3 inline-block"
              >
                Complete Your Intake Form
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/get-started"
              className="btn-outline px-8 py-3"
            >
              Build Another Package
            </Link>
            <Link
              href="/"
              className="btn-primary px-8 py-3"
            >
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-brand-gray-dark"
          >
            <p className="text-sm text-brand-gray-light mb-4">
              Have questions about your order?
            </p>
            <a
              href="mailto:hello@lopezproductions.ai"
              className="text-brand-gold hover:text-brand-gold-dark transition-colors"
            >
              hello@lopezproductions.ai
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-brand-gold text-xl">Loading...</div>
        </div>
        <Footer />
      </main>
    }>
      <SuccessPageContent />
    </Suspense>
  )
}

