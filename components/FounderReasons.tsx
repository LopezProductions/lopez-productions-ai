'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, TrendingUp, Shield } from 'lucide-react'

export default function FounderReasons() {
  const reasons = [
    {
      icon: Code,
      title: 'Technical, Not Fluffy',
      description: 'No coaching, no generic productivity templates. Engineering-minded systems for product teams.',
    },
    {
      icon: Zap,
      title: 'Fast to Ship, Easy to Scale',
      description: 'Everything is built for iteration — not perfection paralysis.',
    },
    {
      icon: TrendingUp,
      title: 'Aligned With Search Trends',
      description: 'Your blog already dominates AI keyword paths. This homepage now aligns with that audience.',
    },
    {
      icon: Shield,
      title: 'Sovereign Infrastructure',
      description: 'Systems designed for data control and privacy. We prioritize self-hosted workflows and controlled infrastructure over generic, leaky API wrappers.',
    },
  ]

  return (
    <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-text-primary"
        >
          Why AI Founders Trust Us
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl border border-border p-8 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-brand-gold" />
                  <h3 className="text-xl font-serif font-bold text-text-primary">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

