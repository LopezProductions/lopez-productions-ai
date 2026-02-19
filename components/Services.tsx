'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Search, Crown } from 'lucide-react'
import PackageRequestForm from './PackageRequestForm'

interface PackageData {
  selectedServiceIds: string[]
  bundleIds: string[]
  total: number
  customNotes: string
  packageSelection: string
}

export default function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [packageData, setPackageData] = useState<PackageData | null>(null)

  const services = [
    {
      id: 'growth-wrapper',
      name: 'Launch Infrastructure',
      price: 2800,
      priceDisplay: '$2,800',
      description: 'Conversion-optimized marketing site for SaaS and AI tools.',
      icon: TrendingUp,
      cta: 'Request Build Slot',
    },
    {
      id: 'geo-architecture',
      name: 'Search Visibility System',
      price: 4800,
      priceDisplay: '$4,800',
      description: 'Built for generative engines (ChatGPT, Perplexity). Structured content for answer surfaces.',
      icon: Search,
      cta: 'Request Build Slot',
    },
    {
      id: 'aeo-ecosystem',
      name: 'AEO Ecosystem',
      price: 7800,
      priceDisplay: '$7,800',
      description: 'Total Market Presence. Become the answer AI models return.',
      icon: Crown,
      cta: 'Request Full Quote',
    },
  ]

  const handleServiceClick = (service: typeof services[0]) => {
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
            Services for Growing Startups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-text-secondary max-w-2xl mx-auto mb-12"
          >
            Global startups pay for velocity and system delivery — not just custom design. We ship fast without creating technical debt.
          </motion.p>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
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
                    <h3 className="text-xl font-serif font-bold text-text-primary">
                      {service.name}
                    </h3>
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

