'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { CheckCircle, Mail } from 'lucide-react'

interface PurchaseConfirmationContentProps {
  productType: 'template' | 'service'
}

function PurchaseConfirmationContent({ productType }: PurchaseConfirmationContentProps) {
  const isTemplate = productType === 'template'

  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      <section className="py-20 px-6 md:px-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="container mx-auto max-w-[600px] text-center">
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
              Order Confirmed!
            </h1>
            
            <p className="text-xl text-brand-gray-light mb-8">
              {isTemplate
                ? "Your template will arrive in your inbox shortly."
                : "Your project has been received. I'll email your intake form and next steps within 24 hours."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark mb-8"
          >
            {isTemplate ? (
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-white mb-2">
                      Need Help?
                    </h3>
                    <p className="text-brand-gray-light leading-relaxed">
                      If you don&apos;t receive your download within a few minutes, email{' '}
                      <a
                        href="mailto:support@lopezproductions.ai"
                        className="text-brand-gold hover:text-brand-gold-dark transition-colors underline"
                      >
                        support@lopezproductions.ai
                      </a>{' '}
                      and I&apos;ll resend it manually.
                    </p>
                    <p className="text-brand-gray-light mt-2">
                      Response time: under 24 hours (usually much faster).
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-left">
                <p className="text-brand-gray-light">
                  If you need help, contact{' '}
                  <a
                    href="mailto:support@lopezproductions.ai"
                    className="text-brand-gold hover:text-brand-gold-dark transition-colors underline"
                  >
                    support@lopezproductions.ai
                  </a>
                </p>
              </div>
            )}
          </motion.div>

          {isTemplate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-sm text-brand-gray-light">
                This confirmation page does not include your download link.
                <br />
                Your files will be delivered via email.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/"
              className="btn-primary px-8 py-3 inline-block"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function PurchaseConfirmationPage() {
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
      <PurchaseConfirmationPageContent />
    </Suspense>
  )
}

function PurchaseConfirmationPageContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const productType = type === 'service' ? 'service' : 'template'

  return <PurchaseConfirmationContent productType={productType} />
}

