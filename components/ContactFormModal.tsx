'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brand-gray-dark rounded-xl border border-brand-gray-dark shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-gray-dark">
              <div>
                <h2 className="text-2xl font-serif font-bold text-brand-white">
                  Let's Get You Unstuck
                </h2>
                <p className="text-brand-gray-light text-sm mt-1">
                  AI-powered workflows and creative strategies for non-techies who want results — without the overwhelm.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-brand-gray-light hover:text-brand-gold transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form 
              action="https://formspree.io/f/xldpoywb" 
              method="POST" 
              className="p-6 space-y-6"
            >
              <input type="hidden" name="_next" value="https://lopezproductions.ai/thank-you" />
              {/* Full Name */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Current Focus */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  What best describes your current focus? *
                </label>
                <select
                  name="focus"
                  required
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-200"
                >
                  <option value="" disabled selected>Choose one</option>
                  <option value="Starting a business">Starting a business</option>
                  <option value="Growing my brand">Growing my brand</option>
                  <option value="Building systems/workflows">Building systems/workflows</option>
                  <option value="Launching a product or service">Launching a product or service</option>
                  <option value="Just exploring options">Just exploring options</option>
                </select>
              </div>

              {/* Help Needed */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-3">
                  What kind of help are you looking for?
                </label>
                <div className="space-y-2">
                  {[
                    'Custom landing page',
                    'Content strategy',
                    'Workflow automation',
                    'Marketing audit',
                    'Something else'
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="help[]"
                        value={option}
                        className="w-4 h-4 text-brand-gold bg-brand-black border-brand-gray-dark rounded focus:ring-brand-gold focus:ring-2"
                      />
                      <span className="text-brand-gray-light text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  Briefly describe your current situation or challenge
                </label>
                <textarea
                  name="description"
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your current situation, challenges, or what you're hoping to achieve..."
                />
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  What's your timeline? *
                </label>
                <select
                  name="timeline"
                  required
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-200"
                >
                  <option value="" disabled selected>Choose one</option>
                  <option value="ASAP (this week)">ASAP (this week)</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="This month">This month</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-200"
                >
                  <option value="" disabled selected>Choose one</option>
                  <option value="$100–$300">$100–$300</option>
                  <option value="$300–$750">$300–$750</option>
                  <option value="$750–$1,500">$750–$1,500</option>
                  <option value="Over $1,500">Over $1,500</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              {/* Referral */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  How did you hear about Lopez Productions?
                </label>
                <input
                  type="text"
                  name="referral"
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                  placeholder="Social media, referral, search, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg font-medium"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactFormModal
