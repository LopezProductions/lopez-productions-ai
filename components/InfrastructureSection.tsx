'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Rocket, TrendingUp, Search, Crown } from 'lucide-react'
import PackageRequestForm from './PackageRequestForm'

interface PackageData {
  selectedServiceIds: string[]
  bundleIds: string[]
  total: number
  customNotes: string
  packageSelection: string
}

export default function InfrastructureSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [packageData, setPackageData] = useState<PackageData | null>(null)

  const uiSystems = [
    {
      id: 'antigravity-kit-source',
      name: 'The Zero-G Dashboard Kit',
      price: '$149',
      description: 'The physics-based React UI system designed specifically for dashboards and LLM tools.',
      icon: Code,
      href: '/pricing#antigravity-kit-source',
      cta: 'Download Source Code',
    },
    {
      id: 'concierge-deployment',
      name: 'Concierge Deployment',
      price: '$495',
      description: "We configure the Zero-G Kit, inject your brand's visual identity, wire your authentication, and set up your deployment pipeline with precision.",
      icon: Rocket,
      href: '/pricing#concierge-deployment',
      cta: 'Start Deployment',
    },
  ]

  const customBuilds = [
    {
      id: 'growth-wrapper',
      name: 'Launch Infrastructure',
      price: 2800,
      priceDisplay: '$2,800',
      description: 'A conversion-optimized, Next.js marketing site engineered specifically for SaaS and AI tools.',
      icon: TrendingUp,
      cta: 'Request Build Slot',
    },
    {
      id: 'geo-architecture',
      name: 'Search Visibility System',
      price: 4800,
      priceDisplay: '$4,800',
      description: 'Architecture built for generative engines. We structure your content specifically for AI answer surfaces.',
      icon: Search,
      cta: 'Request Build Slot',
    },
    {
      id: 'aeo-ecosystem',
      name: 'AEO Ecosystem',
      price: 7800,
      priceDisplay: '$7,800',
      description: 'Total market presence. Become the definitive answer that AI models return when users search for your software category.',
      icon: Crown,
      cta: 'Request Full Quote',
    },
  ]

  const handleServiceClick = (service: typeof customBuilds[0]) => {
    setPackageData({
      selectedServiceIds: [service.id],
      bundleIds: [],
      total: service.price,
      customNotes: `Service: ${service.name}`,
      packageSelection: service.name,
    })
    setIsFormOpen(true)
  }

  return (
    <>
      <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-text-primary"
          >
            Infrastructure for Growing Startups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-text-secondary max-w-2xl mx-auto mb-12"
          >
            Global SaaS teams pay for scalable systems and technical execution—not just generic web design. We ship without creating technical debt.
          </motion.p>

          {/* UI Systems & Frameworks */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl font-serif font-bold text-text-primary mb-6"
          >
            UI Systems & Frameworks
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            {uiSystems.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl border border-border p-8 card-hover flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-brand-gold" />
                    <h4 className="text-xl font-serif font-bold text-text-primary">
                      {product.name}
                    </h4>
                  </div>
                  <p className="text-3xl font-serif font-bold text-accent mb-4">
                    {product.price}
                  </p>
                  <p className="text-text-secondary text-sm mb-6 flex-grow">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="btn-primary w-full text-center block"
                  >
                    {product.cta}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Custom Studio Builds */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl font-serif font-bold text-text-primary mb-6"
          >
            Custom Studio Builds
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-3">
            {customBuilds.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl border border-border p-8 card-hover flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-brand-gold" />
                    <h4 className="text-xl font-serif font-bold text-text-primary">
                      {service.name}
                    </h4>
                  </div>
                  <p className="text-3xl font-serif font-bold text-accent mb-4">
                    {service.priceDisplay}
                  </p>
                  <p className="text-text-secondary text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="btn-primary w-full text-center"
                  >
                    {service.cta}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <PackageRequestForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageData={packageData}
      />
    </>
  )
}
