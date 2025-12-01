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
          Ready to Operate Like a Real Digital Business?
        </h2>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          Build your portfolio, automate your workflows, and launch a content engine that removes 80% of the stress from your day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onPointerDown={openModal}
            className="btn-primary"
          >
            Start Your Build →
          </button>
          <Link
            href="/solutions"
            className="btn-outline"
          >
            View Solutions →
          </Link>
          <Link
            href="/pricing"
            className="btn-outline"
          >
            View Pricing →
          </Link>
        </div>
      </div>
    </section>
  )
}

