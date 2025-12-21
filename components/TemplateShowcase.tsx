'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Rocket, FileText, Zap, Settings, Palette } from 'lucide-react'

export default function TemplateShowcase() {
  const categories = [
    { name: 'UI Kits', icon: Code },
    { name: 'Startup OS', icon: Rocket },
    { name: 'Documentation Systems', icon: FileText },
    { name: 'AI Workflow Tools', icon: Zap },
    { name: 'Automation & Ops', icon: Settings },
    { name: 'Design Packs', icon: Palette },
  ]

  return (
    <section className="py-16 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-text-primary"
        >
          Templates & Systems
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary text-center mb-8 max-w-3xl mx-auto"
        >
          UI Kits & Startup Systems
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
        >
          Notion, docs frameworks, planning systems, architecture stacks.
        </motion.p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-xl border border-border p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-brand-gold" />
                  <h3 className="text-lg font-serif font-bold text-text-primary">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/templates"
            className="btn-primary px-8 py-3 text-lg"
          >
            Browse Templates
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

