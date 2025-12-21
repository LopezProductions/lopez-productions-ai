'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FinalCTASection() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-text-primary"
        >
          Ready to Build Your Interface Layer?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
        >
          Let&apos;s accelerate your next release — whether you need a UI kit, a launch site, or a complete AEO ecosystem.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="btn-primary px-8 py-4 text-lg"
          >
            Start a Project
          </Link>
          <Link
            href="/pricing"
            className="btn-outline px-8 py-4 text-lg"
          >
            Pricing & Systems
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
