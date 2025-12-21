'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Template } from '../app/data/templates'
import WaitlistModal from './WaitlistModal'

interface TemplatesGridProps {
  templates: Template[]
}

export default function TemplatesGrid({ templates }: TemplatesGridProps) {
  const [waitlistModal, setWaitlistModal] = useState<{
    isOpen: boolean
    productName: string
    waitlistId?: string
  }>({
    isOpen: false,
    productName: '',
  })

  const handleWaitlistClick = (template: Template) => {
    setWaitlistModal({
      isOpen: true,
      productName: template.title,
      waitlistId: template.waitlistId,
    })
  }

  const getTemplateLink = (template: Template) => {
    if (template.externalLink) {
      return template.externalLink
    }
    return `/templates/${template.slug}`
  }

  return (
    <>
      <section id="templates" className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {templates.map((template, index) => {
              const isComingSoon = template.status === 'coming_soon'
              const isAvailable = template.status === 'available' || !template.status

              return (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur card-hover flex flex-col ${
                    isComingSoon ? 'opacity-75' : ''
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-full h-48 rounded-lg overflow-hidden bg-brand-gray-dark mb-4 relative">
                    <Image
                      src={template.thumbnail}
                      alt={template.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    {isComingSoon && (
                      <div className="absolute top-2 right-2">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    {template.featured && isAvailable && (
                      <div className="absolute top-2 left-2">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
                          {template.badge || 'Featured'}
                        </span>
                      </div>
                    )}
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
                    {isComingSoon ? (
                      <button
                        onClick={() => handleWaitlistClick(template)}
                        className="btn-outline text-sm py-2 px-4"
                      >
                        Join Waitlist
                      </button>
                    ) : (
                      <Link
                        href={getTemplateLink(template)}
                        className="btn-outline text-sm py-2 px-4"
                      >
                        View
                      </Link>
                    )}
                  </div>
                </motion.div>
              )
            })}
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

      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={() => setWaitlistModal({ isOpen: false, productName: '' })}
        productName={waitlistModal.productName}
        waitlistId={waitlistModal.waitlistId}
      />
    </>
  )
}

