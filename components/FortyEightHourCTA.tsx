'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactFormModal from './ContactFormModal'

const FortyEightHourCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 bg-brand-gray-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-brand-black rounded-2xl p-12 border border-brand-gray-dark shadow-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Book Your 48-Hour Build
            </h2>
            <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a custom AI-powered portfolio website that updates automatically, connects your tools, and converts visitors into clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Build
              </motion.button>
              <motion.a
                href="/ai-portfolio-builder"
                className="btn-outline text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More →
              </motion.a>
            </div>
            <p className="text-sm text-brand-gray-muted mt-6">
              No credit card required • Free consultation included
            </p>
          </div>
        </motion.div>
      </div>
      
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default FortyEightHourCTA






