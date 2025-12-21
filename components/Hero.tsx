'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-text-primary mb-6 leading-tight"
        >
          Websites & Search Systems for AI-Native Startups
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-4 leading-relaxed"
        >
          I design marketing sites, dashboards, and content structures that show up correctly in Google, ChatGPT, and modern AI search.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-accent font-semibold mb-12"
        >
          Ship faster. Look polished. Operate like a real product — without hiring a full agency.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/pricing"
            className="btn-primary px-8 py-4 text-lg"
          >
            Explore Pricing & Systems
          </Link>
          <Link
            href="/templates"
            className="btn-outline px-8 py-4 text-lg"
          >
            Download a UI Kit
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

