'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, CheckCircle } from 'lucide-react'

const FreeTemplateSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    // In real implementation, this would submit to Typedream/Airtable
    setTimeout(() => {
      // Redirect to template or show success message
      window.open('https://notion.so/template', '_blank')
    }, 2000)
  }

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-brand-black via-brand-gray-dark to-brand-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-gold/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Steal My AI Content Engine</h2>
          <p className="section-subtitle">
            The exact Notion system I use to plan, schedule, and repurpose content. Yours free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Template info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark hover:border-brand-gold transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-brand-black" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">
                Complete Content Engine
              </h3>
              
              <p className="text-brand-gray-light mb-6 leading-relaxed">
                This Notion template includes everything I use to create consistent, engaging content without the burnout. 
                Perfect for creators, consultants, and small businesses.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-brand-gray-light">Content calendar with AI prompts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-brand-gray-light">Repurposing workflow templates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-brand-gray-light">Analytics tracking dashboard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-brand-gray-light">Brand asset organization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-brand-gray-light">Automation integration guides</span>
                </div>
              </div>
              
              <div className="bg-brand-black rounded-lg p-4 border border-brand-gray-dark">
                <p className="text-sm text-brand-gray-light">
                  <strong className="text-brand-gold">What you'll get:</strong> Instant access to the template, 
                  setup video walkthrough, and email support for 30 days.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark">
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl font-semibold text-brand-white mb-6">
                    Get Your Free Template
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-gray-light mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-muted focus:border-brand-gold focus:outline-none transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-gray-light mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-muted focus:border-brand-gold focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-brand-gray-light mb-2">
                        Business Type (Optional)
                      </label>
                      <select
                        id="business"
                        name="business"
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select your business type</option>
                        <option value="creator">Content Creator</option>
                        <option value="consultant">Consultant</option>
                        <option value="agency">Agency</option>
                        <option value="startup">Startup</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Free Template
                    </motion.button>
                  </form>
                  
                  <p className="text-xs text-brand-gray-muted mt-4 text-center">
                    No spam, ever. Unsubscribe anytime. By signing up, you'll also receive weekly tips on AI workflows.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-brand-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-white mb-4">
                    Template Sent!
                  </h3>
                  <p className="text-brand-gray-light mb-6">
                    Check your email for the template link. You'll also get a setup video to help you get started.
                  </p>
                  <div className="bg-brand-black rounded-lg p-4 border border-brand-gray-dark">
                    <p className="text-sm text-brand-gray-light">
                      <strong className="text-brand-gold">Next steps:</strong> Open the template, 
                      watch the setup video, and start building your content engine!
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FreeTemplateSection 