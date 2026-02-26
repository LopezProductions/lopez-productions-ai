'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Layout, Database, Shield } from 'lucide-react'

export default function ValueProps() {
  const props = [
    {
      icon: Layout,
      title: 'Clean Architecture, No Stitched Stacks',
      description: 'Move past the limitations of traditional, bloated CMS platforms. We build with React, Next.js, and Tailwind to ensure your frontend is fast, secure, and fully owned by you.',
    },
    {
      icon: Database,
      title: 'Deterministic Data for AI Discovery',
      description: "We engineer your site's structure so modern LLMs (like ChatGPT and Perplexity) cite your product accurately, eliminating AI hallucinations about your brand.",
    },
    {
      icon: Shield,
      title: 'Controlled Infrastructure',
      description: 'Systems designed for data control and privacy. We prioritize self-hosted workflows and controlled infrastructure over generic, third-party data handling.',
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
          Engineered to Perform, Not Just Look Good.
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/systems"
            className="btn-primary px-8 py-3 text-lg"
          >
            View Live Examples & Systems
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

