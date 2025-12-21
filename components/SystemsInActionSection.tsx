'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const SystemsInActionSection = () => {
  const systems = [
    {
      title: 'AI Notion Dashboards',
      slug: 'ai-notion-dashboards',
      tags: ['Design', 'Automation', 'AI'],
      description: 'Custom Notion dashboards powered by AI to streamline project management and client workflows.',
      comingSoon: true
    },
    {
      title: 'Automation Workflows',
      slug: 'automation-workflows',
      tags: ['Automation', 'AI', 'Design'],
      description: 'Intelligent automation systems that connect your tools and eliminate manual repetitive tasks.',
      comingSoon: true
    },
    {
      title: 'AI Marketing Systems',
      slug: 'ai-marketing-systems',
      tags: ['AI', 'Automation', 'Design'],
      description: 'End-to-end marketing automation with AI-driven analytics, lead generation, and campaign optimization.',
      comingSoon: true
    }
  ]

  return (
    <section id="systems-in-action" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Systems in Action</h2>
          <p className="section-subtitle">
            See how we've built AI-powered systems that transform businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {system.comingSoon ? (
                <div className="bg-surface rounded-xl p-8 h-full relative overflow-hidden border border-border opacity-75">
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      {system.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {system.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {system.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-background text-accent text-xs rounded-full border border-accent/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Coming Soon indicator */}
                    <div className="mt-6 flex items-center text-text-muted text-sm font-medium">
                      Coming Soon
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={`/case-studies/${system.slug}`}>
                  <div className="bg-surface rounded-xl p-8 h-full card-hover relative overflow-hidden border border-border hover:border-accent transition-all duration-300">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                        {system.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {system.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {system.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-background text-accent text-xs rounded-full border border-accent/30 group-hover:border-accent transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link indicator */}
                      <div className="mt-6 flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                        View Case Study
                        <span className="ml-2">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SystemsInActionSection








