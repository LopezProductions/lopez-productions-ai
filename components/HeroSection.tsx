'use client'

import React from 'react'
import HeroButtons from './HeroButtons'
import { useModal } from './HomePageClient'

export default function HeroSection() {
  const { openModal } = useModal()
  return (
    <section className="pt-20 pb-16 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-gradient mb-6 leading-tight">
          Build a Brand That Actually Looks Professional
        </h1>
        <p className="text-xl md:text-2xl text-brand-gray-light max-w-4xl mx-auto mb-4 leading-relaxed">
          AI-Powered Portfolios, Content Systems & Digital Identity — designed for creators, founders, and small businesses.
        </p>
        <p className="text-lg md:text-xl text-brand-gold font-semibold mb-12">
          Launch sharper. Create faster. Stand out everywhere.
        </p>
        <HeroButtons onOpenModal={openModal} />
      </div>
    </section>
  )
}
