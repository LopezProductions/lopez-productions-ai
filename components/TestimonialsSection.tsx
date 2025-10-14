'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This saved me 6 hours a week.",
      author: "@someone",
      platform: "X",
      type: "social"
    },
    {
      quote: "I finally launched without burning out.",
      author: "SalonSync user",
      platform: "Client",
      type: "client"
    },
    {
      quote: "The automation workflows are game-changing.",
      author: "@techcreator",
      platform: "X",
      type: "social"
    }
  ]

  const logos = [
    { name: 'Solana', logo: '🔸' },
    { name: 'Notion', logo: '📋' },
    { name: 'Make.com', logo: '⚙️' },
    { name: 'Zapier', logo: '🔗' },
    { name: 'Drift', logo: '💬' },
    { name: 'Airtable', logo: '📊' }
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
          <h2 className="section-title">What People Are Saying</h2>
          <p className="section-subtitle">
            Real results from creators and businesses using Lopez Productions solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-brand-gray-dark rounded-xl p-8 h-full card-hover relative">
                <div className="absolute top-6 right-6 text-brand-gold/20">
                  <Quote size={24} />
                </div>
                
                <div className="relative z-10">
                  <p className="text-brand-gray-light text-lg mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-brand-white font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-brand-gray-muted text-sm">
                        {testimonial.platform}
                      </p>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      testimonial.type === 'social' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-brand-gold/20 text-brand-gold'
                    }`}>
                      {testimonial.type === 'social' ? 'Social' : 'Client'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-brand-gray-light mb-8 text-sm uppercase tracking-wide">
            Trusted by creators using these tools
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {logo.logo}
                  </div>
                  <span className="text-brand-gray-muted text-xs font-medium">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection 