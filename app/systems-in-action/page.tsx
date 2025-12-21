import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import SystemsInActionSection from '../../components/SystemsInActionSection'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Systems in Action | Real AI Portfolio Builds',
  description: 'Explore real examples of AI-powered portfolio systems by Lopez Productions. Each system automates content, analytics, and lead flow.',
  keywords: 'AI workflow systems, AI business optimization, portfolio automation systems',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/systems-in-action',
    title: 'Systems in Action | Real AI Portfolio Builds',
    description: 'Explore real examples of AI-powered portfolio systems by Lopez Productions.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systems in Action | Real AI Portfolio Builds',
    description: 'Explore real examples of AI-powered portfolio systems by Lopez Productions.',
    images: ['/og-image.jpg'],
  },
}

export default function SystemsInActionPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
            Systems in Action
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore real examples of AI-powered portfolio systems by Lopez Productions. Each system automates content, analytics, and lead flow.
          </p>
        </div>
      </section>

      <SystemsInActionSection />

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
            Ready to Build Your System?
          </h2>
          <p className="text-xl text-brand-gray-light mb-8">
            See how we can build a custom AI portfolio system for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-portfolio-builder" className="btn-primary">
              Start Your Build →
            </Link>
            <Link href="/" className="btn-outline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}








