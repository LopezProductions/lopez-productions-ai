'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Download, CheckCircle, Zap } from 'lucide-react'

export default function FreePortfolioTemplate() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setFormSubmitted(true)
  }

  const features = [
    'Notion database structure ready to customize',
    'CSV export for easy data migration',
    'Step-by-step setup guide included',
    'Portfolio sections pre-configured',
    'AI sync instructions for automation',
    'Responsive design examples'
  ]

  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
            Free AI Portfolio Template
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Download a free Notion-to-Website AI portfolio template and start customizing your showcase today.
          </p>
          <p className="text-brand-gray-muted text-sm mb-8">
            Launch your site in 10 minutes • No coding required
          </p>
        </div>
      </section>

      {/* Email Capture Form */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-brand-gray-dark rounded-2xl p-12 border border-brand-gray-dark shadow-xl"
            >
              <h2 className="text-3xl font-serif font-bold text-brand-white mb-6 text-center">
                Get Your Free Template
              </h2>
              <p className="text-brand-gray-light mb-8 text-center">
                Enter your email to instantly download the Notion portfolio template + setup guide
              </p>
              
              <form
                action="https://formspree.io/f/xldpoywb"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Free Portfolio Template Download" />
                <input type="hidden" name="_next" value="https://lopezproductions.ai/free-portfolio-template?success=true" />
                
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold"
                />
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Template
                </button>
              </form>
              
              <p className="text-xs text-brand-gray-muted mt-4 text-center">
                By downloading, you agree to receive email updates about portfolio tips and automation tools. Unsubscribe anytime.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-gray-dark rounded-2xl p-12 border border-brand-gray-dark shadow-xl text-center"
            >
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-brand-black" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-brand-white mb-4">
                Check Your Email!
              </h2>
              <p className="text-brand-gray-light mb-8">
                We've sent your free portfolio template and setup guide. Check your inbox (and spam folder) to get started.
              </p>
              <div className="space-y-4">
                <Link href="/ai-portfolio-builder" className="btn-primary inline-block">
                  Learn About Custom AI Portfolio Setup →
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-8 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-brand-black rounded-lg p-6 border border-brand-gray-dark">
                <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-brand-black" />
                </div>
                <p className="text-brand-gray-light">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-gold/10 to-brand-black rounded-2xl p-12 border border-brand-gold/30 text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-brand-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-4">
              Want a Custom AI Portfolio Built for You?
            </h2>
            <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
              Skip the template. Get a fully custom AI-powered portfolio website that syncs automatically and converts visitors into clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-portfolio-builder" className="btn-primary">
                See Custom Build Options →
              </Link>
              <Link href="/#lead-magnet" className="btn-outline">
                Learn More
              </Link>
            </div>
            <p className="text-sm text-brand-gray-muted mt-6">
              Custom builds include design, automation setup, and launch in 48 hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}








