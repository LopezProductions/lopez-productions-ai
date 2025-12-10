'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getFeaturedTemplates } from '../app/data/templates'

export default function FeaturedTemplates() {
  const featured = getFeaturedTemplates()

  return (
    <section className="py-16 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary text-center mb-12">
          Featured Templates
        </h2>
        <div className="space-y-6">
          {featured.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border p-8 card-hover relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                {/* Thumbnail */}
                <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden bg-brand-gray-dark flex-shrink-0">
                  <Image
                    src={template.thumbnail}
                    alt={template.title}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      {template.badge && (
                        <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-semibold rounded-full mb-2">
                          {template.badge}
                        </span>
                      )}
                      <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                        {template.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-4">
                        {template.description}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-3xl font-serif font-bold text-accent mb-2">
                        {template.price === 'Free' ? 'Free' : `$${template.price}`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={template.externalLink || `/templates/${template.slug}`}
                      className="btn-outline inline-block"
                    >
                      View Template →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

