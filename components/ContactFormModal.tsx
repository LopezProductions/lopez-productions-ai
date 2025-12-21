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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
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
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-surface rounded-xl border border-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-serif font-bold text-text-primary">
                  Tell Me What You're Building
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Whether you need a system, a template, or a complete transformation — 
                  this form helps me understand exactly how to help.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* FORM */}
            <form 
              action="https://formspree.io/f/xldpoywb"
              method="POST"
              className="p-6 space-y-6"
            >
              <input type="hidden" name="_next" value="https://lopezproductions.ai/thank-you" />

              {/* Full Name */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-accent transition"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-accent transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Primary Focus */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  What are you trying to achieve right now? *
                </label>
                <select
                  name="focus"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:border-accent transition"
                >
                  <option value="" disabled selected>Choose one</option>
                  <option value="Launch or improve my website">Launch or improve my website</option>
                  <option value="Set up a professional brand system">Set up a professional brand system</option>
                  <option value="Build a content engine (Notion + AI)">Build a content engine (Notion + AI)</option>
                  <option value="Customize a template from your library">Customize a template from your library</option>
                  <option value="Automate or organize my workflow">Automate or organize my workflow</option>
                  <option value="Get clarity and a plan">Get clarity and a plan</option>
                  <option value="Not sure yet — exploring options">Not sure yet — exploring options</option>
                </select>
              </div>

              {/* Help Needed — Updated */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-3">
                  What do you need help with?
                </label>

                <div className="space-y-2">
                  {[
                    'Website template (Next.js)',
                    'Portfolio or landing page',
                    'Brand blueprint + identity system',
                    'Notion dashboard setup',
                    'Content engine (AI-assisted)',
                    'Workflow automation',
                    'Custom template build',
                    'Something else'
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="help[]"
                        value={option}
                        className="w-4 h-4 text-accent bg-background border-border rounded focus:ring-brand-gold"
                      />
                      <span className="text-text-secondary text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Describe what you're trying to build
                </label>
                <textarea
                  name="description"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-accent transition resize-none"
                  placeholder="Tell me as much or as little as you'd like..."
                />
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Timeline *
                </label>
                <select
                  name="timeline"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:border-accent transition"
                >
                  <option value="" disabled selected>Choose one</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                  <option value="This month">This month</option>
                  <option value="Flexible">Flexible</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:border-accent transition"
                >
                  <option value="" disabled selected>Choose one</option>
                  <option value="$100–$300">$100–$300</option>
                  <option value="$300–$750">$300–$750</option>
                  <option value="$750–$1,500">$750–$1,500</option>
                  <option value="Over $1,500">Over $1,500</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>

              {/* Referral */}
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  How did you hear about Lopez Productions?
                </label>
                <input
                  type="text"
                  name="referral"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-accent transition"
                  placeholder="Social media, search, referral, etc."
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg font-medium"
                >
                  Submit Request
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
