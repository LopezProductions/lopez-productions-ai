'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Zap, Rocket } from 'lucide-react'

const ThreeStepProcess = () => {
  const steps = [
    {
      icon: Palette,
      title: 'Design',
      description: 'Custom portfolio architecture tailored to your brand and goals.',
      color: 'from-brand-gold to-brand-gold-dark'
    },
    {
      icon: Zap,
      title: 'Automate',
      description: 'AI-powered systems that sync your content and update automatically.',
      color: 'from-brand-gold to-brand-gold-dark'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Go live in 48 hours with a portfolio that works while you sleep.',
      color: 'from-brand-gold to-brand-gold-dark'
    }
  ]

  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Design. Automate. Launch.</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Three simple steps to an AI-powered portfolio that grows your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10 text-brand-black" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">
                {step.title}
              </h3>
              <p className="text-brand-gray-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeStepProcess





