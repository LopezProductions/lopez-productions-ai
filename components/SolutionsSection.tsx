'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Palette, FileText, Image } from 'lucide-react'

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI Workflow Setup',
      description: 'Build intelligent automation systems using Make, Dify, and Airtable that handle repetitive tasks while you focus on what matters.',
      tools: ['Make', 'Dify', 'Airtable'],
      features: ['Process automation', 'Data integration', 'Smart notifications']
    },
    {
      icon: Palette,
      title: 'Brand Kit Systems',
      description: 'Create comprehensive brand identities with strategic color palettes, typography, and visual guidelines for consistent branding.',
      tools: ['Color Strategy', 'Font Selection', 'Logo Design'],
      features: ['Visual identity', 'Brand guidelines', 'Asset organization']
    },
    {
      icon: FileText,
      title: 'Content Engine Design',
      description: 'Design streamlined content creation workflows for X, YouTube, and Instagram that maximize reach and engagement.',
      tools: ['X (Twitter)', 'YouTube', 'Instagram'],
      features: ['Content calendars', 'Repurposing systems', 'Publishing workflows']
    },
    {
      icon: Image,
      title: 'Visual Assets & Automation',
      description: 'Create professional graphics and automate visual content creation with AI-powered tools and templates.',
      tools: ['Canva', 'Midjourney', 'Automation'],
      features: ['Social graphics', 'Video thumbnails', 'Brand assets']
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Solutions</h2>
          <p className="section-subtitle">
            Comprehensive AI-powered solutions that transform how you work and create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-brand-black rounded-xl p-8 h-full card-hover relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-brand-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-brand-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-gray-light mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-brand-gold mb-3 uppercase tracking-wide">
                      Tools & Platforms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-brand-gray-dark text-brand-gray-light text-xs rounded-full border border-brand-gray-dark group-hover:border-brand-gold transition-colors duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-brand-gold mb-3 uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-brand-gray-light text-sm flex items-center">
                          <span className="text-brand-gold mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <motion.a
                      href="#contact"
                      className="inline-block px-6 py-3 bg-brand-gray-dark text-brand-white rounded-lg font-medium hover:bg-brand-gold hover:text-brand-black transition-all duration-300 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.a>
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

export default SolutionsSection 