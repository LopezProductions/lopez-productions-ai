'use client'

import React from 'react'
import Link from 'next/link'
import { useModal } from './HomePageClient'

export default function FinalCTASection() {
  const { openModal } = useModal()
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient">
          Ready to Launch Your Brand System?
        </h2>
        <p className="text-lg text-brand-gray-light mb-8 max-w-2xl mx-auto">
          Let's build your portfolio, content engine, and digital identity — together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onPointerDown={openModal}
            className="btn-primary"
          >
            Start Your Build
          </button>
          <Link
            href="/solutions"
            className="btn-outline"
          >
            View Solutions
          </Link>
          <Link
            href="/pricing"
            className="btn-outline"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

