'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TemplatesCTA() {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6"
        >
          Build Your Interface Layer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you&apos;re planning your product, shipping your first dashboard, or scaling your platform — these systems accelerate everything.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="btn-primary px-8 py-3 text-lg"
          >
            Start a Project
          </Link>
          <Link
            href="/pricing"
            className="btn-outline px-8 py-3 text-lg"
          >
            Pricing & Systems
          </Link>
          <a
            href="#templates"
            className="btn-outline px-8 py-3 text-lg"
          >
            Browse UI Kits
          </a>
        </motion.div>
      </div>
    </section>
  )
}

