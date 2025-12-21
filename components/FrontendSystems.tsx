'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Rocket } from 'lucide-react'

export default function FrontendSystems() {
  const products = [
    {
      id: 'antigravity-kit-source',
      name: 'Antigravity Kit',
      price: '$149',
      description: 'The physics-based React UI system for dashboards and LLM tools.',
      icon: Code,
      href: '/pricing#antigravity-kit-source',
    },
    {
      id: 'concierge-deployment',
      name: 'Concierge Deployment',
      price: '$495',
      description: 'We configure the kit, inject your brand, wire auth, and deploy in 48 hours.',
      icon: Rocket,
      href: '/pricing#concierge-deployment',
    },
  ]

  return (
    <section className="py-16 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-text-primary"
        >
          Products (Frontend Systems)
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 mt-12">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-xl border border-border p-8 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-brand-gold" />
                  <h3 className="text-2xl font-serif font-bold text-text-primary">
                    {product.name}
                  </h3>
                </div>
                <p className="text-3xl font-serif font-bold text-accent mb-4">
                  {product.price}
                </p>
                <p className="text-text-secondary text-sm mb-6">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="btn-primary w-full text-center block"
                >
                  {product.id === 'antigravity-kit-source' ? 'Download Source Code' : 'Start Deployment'}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

