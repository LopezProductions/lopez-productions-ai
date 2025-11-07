'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface PackageRequestFormProps {
  isOpen: boolean
  onClose: () => void
  packageData: {
    selectedServiceIds: string[]
    bundleIds: string[]
    total: number
    customNotes: string
    packageSelection: string
  } | null
}

const PackageRequestForm: React.FC<PackageRequestFormProps> = ({ isOpen, onClose, packageData }) => {
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

  if (!packageData) return null

  const hasReelBundle = packageData.bundleIds.includes('reel_bundle')

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
                  Request Your Package
                </h2>
                <p className="text-brand-gray-light text-sm mt-1">
                  Complete the form below and we'll send you a custom quote within 24 hours.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-brand-gray-light hover:text-brand-gold transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Package Summary */}
            <div className="p-6 bg-brand-black border-b border-brand-gray-dark">
              <h3 className="text-lg font-semibold text-brand-white mb-3">Package Summary</h3>
              <div className="space-y-2 text-sm text-brand-gray-light mb-4 whitespace-pre-line">
                {packageData.packageSelection || 'Custom package'}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-brand-gray-dark">
                <span className="text-brand-gray-light font-medium">Estimated Total:</span>
                <span className="text-2xl font-serif font-bold text-brand-gold">
                  ${packageData.total}
                </span>
              </div>
            </div>

            {/* Form */}
            <form 
              action="https://formspree.io/f/xldpoywb" 
              method="POST" 
              className="p-6 space-y-6"
            >
              <input type="hidden" name="_next" value="https://lopezproductions.ai/thank-you" />
              
              {/* Hidden fields for Formspree personalization */}
              <input type="hidden" name="package_selection" value={packageData.packageSelection} />
              <input type="hidden" name="total_price" value={packageData.total.toString()} />
              <input type="hidden" name="bundle_type" value={hasReelBundle ? '5-Reel Special' : ''} />
              <input type="hidden" name="selected_services" value={JSON.stringify(packageData.selectedServiceIds)} />
              <input type="hidden" name="bundle_ids" value={JSON.stringify(packageData.bundleIds)} />

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

              {/* Custom Notes (pre-filled) */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  Additional Notes or Custom Requests
                </label>
                <textarea
                  name="custom_request"
                  rows={4}
                  defaultValue={packageData.customNotes}
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Any additional details about your project..."
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-brand-white text-sm font-medium mb-2">
                  Budget Range (optional)
                </label>
                <select
                  name="budget"
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-200"
                >
                  <option value="">Choose one (optional)</option>
                  <option value="$100–$300">$100–$300</option>
                  <option value="$300–$750">$300–$750</option>
                  <option value="$750–$1,500">$750–$1,500</option>
                  <option value="Over $1,500">Over $1,500</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg font-medium"
                >
                  Submit Package Request
                </button>
                <p className="text-xs text-brand-gray-light text-center mt-3">
                  You'll receive a confirmation email immediately with next steps.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PackageRequestForm

