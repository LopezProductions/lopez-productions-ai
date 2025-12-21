'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Breadcrumbs from './Breadcrumbs'

export default function TemplatesHero() {
  return (
    <section className="py-20 px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto mb-8">
        <Breadcrumbs 
          title="Templates" 
          type="simple"
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
      >
        UI Kits & Systems for AI Builders
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
      >
        Modular templates designed for founders, indie hackers, and technical teams.
        <br />
        Everything you need to plan, ship, and scale your product.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="#templates"
          className="btn-primary px-8 py-3 text-lg"
        >
          Browse All Templates
        </a>
        <Link
          href="/pricing"
          className="btn-outline px-8 py-3 text-lg"
        >
          Pricing & Systems
        </Link>
      </motion.div>
    </section>
  )
}

