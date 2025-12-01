'use client'

import React from 'react'
import HeroButtons from './HeroButtons'

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-gradient mb-6 leading-tight">
          Build a Business That Feels Professional — and Operates Without Overwhelm
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-4 leading-relaxed">
          Lopez Productions builds AI-powered websites, content engines, and workflow systems that save creators and small teams 10+ hours a week while giving them a portfolio that finally looks legitimate.
        </p>
        <p className="text-lg md:text-xl text-accent font-semibold mb-12">
          Launch sharper. Create faster. Remove friction from every part of your digital identity.
        </p>
        <HeroButtons />
      </div>
    </section>
  )
}
