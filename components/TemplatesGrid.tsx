'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Template } from '../app/data/templates'

interface TemplatesGridProps {
  templates: Template[]
}

export default function TemplatesGrid({ templates }: TemplatesGridProps) {
  return (
    <section id="templates" className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur card-hover flex flex-col"
            >
              {/* Thumbnail */}
              <div className="w-full h-48 rounded-lg overflow-hidden bg-brand-gray-dark mb-4">
                <Image
                  src={template.thumbnail}
                  alt={template.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Tag */}
              <span className="text-xs uppercase tracking-wide text-blue-400 mb-2">
                {template.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-text-primary mt-2 mb-2">
                {template.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-4 flex-grow">
                {template.description}
              </p>

              {/* Price and CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <p className="font-semibold text-accent">
                  {template.price === 'Free' ? 'Free' : `$${template.price}`}
                </p>
                <Link
                  href={`/templates/${template.slug}`}
                  className="btn-outline text-sm py-2 px-4"
                >
                  View
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {templates.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary text-lg">
              No templates found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

