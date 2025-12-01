'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, FileText, Target, Palette } from 'lucide-react'

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'AI Workflow Systems',
      tagline: 'Connect your tools into seamless automation flows.',
      description: 'We design custom AI workflows that automate repetitive tasks and integrate your favorite apps — from Notion to Zapier to Make.',
      tools: ['Notion', 'Zapier', 'Make', 'Airtable'],
      features: ['Tool integration', 'Process automation', 'Workflow design']
    },
    {
      icon: FileText,
      title: 'Content Automation Engine',
      tagline: 'Turn your ideas into posts automatically.',
      description: 'Build AI-powered content pipelines that plan, write, and schedule posts while you focus on growth.',
      tools: ['Content Planning', 'AI Writing', 'Auto-Publishing'],
      features: ['Content planning', 'Automated writing', 'Multi-platform publishing']
    },
    {
      icon: Target,
      title: 'Brand Automation Systems',
      tagline: 'Keep your brand consistent everywhere.',
      description: 'Your fonts, colors, and assets update across every platform automatically — no more manual design chaos.',
      tools: ['Brand Guidelines', 'Asset Management', 'Multi-Platform Sync'],
      features: ['Brand consistency', 'Automated asset updates', 'Cross-platform sync']
    },
    {
      icon: Palette,
      title: 'AI Design Systems',
      tagline: 'Generate visuals instantly with AI.',
      description: 'Create and organize visuals for your site, campaigns, and socials using the best AI design tools.',
      tools: ['AI Image Generation', 'Design Automation', 'Asset Libraries'],
      features: ['AI image generation', 'Visual asset creation', 'Design system management']
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our 4 Core Systems</h2>
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
              <div className="bg-background rounded-xl p-8 h-full card-hover relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-background" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-accent text-sm font-medium mb-4 leading-relaxed">
                    {solution.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                      Tools & Platforms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-surface text-text-secondary text-xs rounded-full border border-brand-gray-dark group-hover:border-accent transition-colors duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-text-secondary text-sm flex items-center">
                          <span className="text-accent mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <motion.a
                      href={solution.title === 'AI Workflow Systems' ? '/solutions#workflow' : 
                            solution.title === 'Content Automation Engine' ? '/solutions#content' :
                            solution.title === 'Brand Automation Systems' ? '/solutions#brand' :
                            solution.title === 'AI Design Systems' ? '/solutions#design' : '/solutions'}
                      className="inline-block px-6 py-3 bg-surface text-text-primary rounded-lg font-medium hover:bg-primary hover:text-background transition-all duration-300 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More →
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