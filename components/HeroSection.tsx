'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactFormModal from './ContactFormModal'

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with logo - very dark silhouette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lp_logo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      ></div>
      {/* Dark overlay to create silhouette effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black/85 via-brand-gray-dark/80 to-brand-black/85"></div>
      
      {/* Subtle gold halo effect around the logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
      </div>
      
      {/* Minimal gold glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-gradient leading-tight">
              Smarter Brands.
              <br />
              Automated Systems.
              <br />
              Practical Solutions.
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-gray-light mb-12 max-w-4xl mx-auto leading-relaxed">
              AI-powered workflows and creative strategies for non-techies who want results — without the overwhelm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="#lead-magnet"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#lead-magnet')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get My Free Notion Template
              </motion.a>
              
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Now – Free Consultation
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default HeroSection 