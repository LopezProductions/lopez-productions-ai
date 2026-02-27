'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export default function InfrastructureSection() {
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl border border-border p-8 md:p-10 card-hover max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-brand-gold" />
            <h3 className="text-xl font-serif font-bold text-text-primary">
              The Zero-G Dashboard Kit
            </h3>
          </div>
          <p className="text-text-secondary text-sm mb-6">
            The physics-based React UI system designed specifically for dashboards and LLM tools. Built for teams who want governed interfaces without the bloat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/google-antigravity-ui"
              className="btn-primary text-center"
            >
              Explore Zero-G Dashboard
            </Link>
            <Link
              href="/systems#phenom-demo"
              className="btn-outline text-center"
            >
              View Phenom Reference System
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
