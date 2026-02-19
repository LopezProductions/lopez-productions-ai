'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TheArchitectSection() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold mb-4 text-text-primary"
        >
          The Architect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
        >
          Lopez Productions is led by Reuben Lopez — an AI systems designer and strategist who has built and co-founded SaaS products, not just consulted on them. Your infrastructure is designed by someone who ships.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="/about"
            className="text-accent hover:underline font-medium"
          >
            Learn more about the studio →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
