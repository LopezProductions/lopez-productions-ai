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
          Designed by Someone Who Actually Ships.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
        >
          Lopez Productions is led by Reuben Lopez—an AI systems designer, strategist, and SaaS co-founder. We don&apos;t do fluffy coaching or generic productivity templates. You get engineering-minded systems built by a team that understands what it takes to launch, scale, and maintain real products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="/playbook"
            className="text-accent hover:underline font-medium"
          >
            Read the Playbook →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
