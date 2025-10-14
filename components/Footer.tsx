'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ExternalLink, Coffee } from 'lucide-react'
import ContactFormModal from './ContactFormModal'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/lopez-productions/',
      icon: '💼'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@LopezWorkflows',
      icon: '📺'
    },
    {
      name: 'Email',
      url: 'mailto:hello@lopezproductions.ai',
      icon: '📧'
    }
  ]

  const quickLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Resources', href: '#resources' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const resources = [
    { name: 'Free Notion Template', href: '#resources' },
    { name: 'YouTube Channel', href: 'https://www.youtube.com/@LopezWorkflows' },
    { name: 'Linktree', href: 'https://linktr.ee/lopezproductions' }
  ]

  return (
    <footer className="bg-brand-gray-dark border-t border-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
              Lopez Productions
            </h3>
            <p className="text-brand-gray-light mb-6 leading-relaxed">
              AI-powered workflows and creative strategies for non-techies who want results.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                link.name === 'Email' ? (
                  <button
                    key={link.name}
                    onClick={() => setIsModalOpen(true)}
                    className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-brand-gray-light hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300 border border-brand-gray-dark hover:border-brand-gold cursor-pointer"
                  >
                    <span className="text-lg">{link.icon}</span>
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-brand-gray-light hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300 border border-brand-gray-dark hover:border-brand-gold"
                  >
                    <span className="text-lg">{link.icon}</span>
                  </a>
                )
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-gray-light hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand-gold font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    target={resource.href.startsWith('http') ? '_blank' : undefined}
                    rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-brand-gray-light hover:text-brand-gold transition-colors duration-300 flex items-center"
                  >
                    {resource.name}
                    {resource.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand-gold font-semibold mb-4">Support</h4>
            <p className="text-brand-gray-light text-sm mb-4">
              If you find my content helpful, consider supporting the work:
            </p>
            <a
              href="https://buymeacoffee.com/lopezproductions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-brand-black text-brand-white rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 border border-brand-gray-dark hover:border-brand-gold"
            >
              <Coffee className="w-4 h-4 mr-2" />
              Tip Jar
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-brand-gray-dark mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-brand-gray-muted text-sm">
                &copy; 2024 Lopez Productions. All rights reserved.
              </p>
              <p className="text-brand-gray-muted text-sm mt-1">
                Designed for creators who want to work smarter, not harder.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-brand-gray-light text-sm">
                Built for the future by Lopez Productions.
              </p>
              <p className="text-brand-gold text-sm font-medium mt-1">
                Transitioning to lpx.so soon.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </footer>
  )
}

export default Footer 