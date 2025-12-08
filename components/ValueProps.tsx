'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Layout, Rocket } from 'lucide-react'

export default function ValueProps() {
  const props = [
    {
      icon: Zap,
      title: 'Fast Frontends',
      description: 'Launch your product or dashboard UI in days, not weeks. React, Next.js, Tailwind, Vite — performance-first.',
    },
    {
      icon: Layout,
      title: 'Clean Architecture',
      description: 'Technical SEO → GEO → AEO alignment. Pages structured so AI models understand your product.',
    },
    {
      icon: Rocket,
      title: 'Startup Velocity',
      description: 'Systems designed for shipping: UI kits, docs frameworks, onboarding flows, automation loops.',
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
          Why Founders Come Here
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {props.map((prop, index) => {
            const Icon = prop.icon
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl border border-border p-8 card-hover text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-brand-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                  {prop.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

