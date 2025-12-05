'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-brand-black" />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-white mb-6">
            Welcome to the Community!
          </h1>
          <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
            Thanks for joining! Here are your free resources to help you plan content like a pro.
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark mb-8"
        >
          <h2 className="text-2xl font-serif font-bold text-brand-white mb-6">
            🎁 Your Free Content Planning Kit
          </h2>
          
          <div className="space-y-4">
            {/* Notion Template Download */}
            <motion.a
              href="/downloads/1_month_content_planner.md"
              download="1_month_content_planner.md"
              className="flex items-center justify-between p-4 bg-brand-black rounded-lg border border-brand-gray-dark hover:border-brand-gold transition-colors duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div className="text-left">
                  <h3 className="text-brand-white font-semibold">1-Month Content Planner</h3>
                  <p className="text-brand-gray-light text-sm">Notion template + CSV version</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-brand-gold group-hover:text-brand-gold-dark transition-colors duration-300" />
            </motion.a>

            {/* Setup Guide Download */}
            <motion.a
              href="/downloads/Notion_Setup_Guide.pdf"
              download="Notion_Setup_Guide.pdf"
              className="flex items-center justify-between p-4 bg-brand-black rounded-lg border border-brand-gray-dark hover:border-brand-gold transition-colors duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📖</span>
                </div>
                <div className="text-left">
                  <h3 className="text-brand-white font-semibold">Notion Setup Guide</h3>
                  <p className="text-brand-gray-light text-sm">Beginner-friendly instructions</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-brand-gold group-hover:text-brand-gold-dark transition-colors duration-300" />
            </motion.a>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark mb-8"
        >
          <h3 className="text-lg font-serif font-bold text-brand-white mb-4">
            What's Next?
          </h3>
          <div className="space-y-3 text-brand-gray-light text-sm mb-6">
            <p>• Check your email for a copy of these downloads</p>
            <p>• Follow me on <a href="https://www.youtube.com/@LopezWorkflows" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">YouTube</a> for more content tips</p>
            <p>• Need help? <a href="https://www.linkedin.com/company/lopez-productions/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Connect on LinkedIn</a></p>
          </div>
          <div className="pt-4 border-t border-brand-gray-dark">
            <p className="text-brand-gray-light mb-4">
              Want to talk through your project?
            </p>
            <a
              href="https://calendly.com/reuben-lopezproductions/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
            >
              <span>Book a 15-minute Zoom call here</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>

        {/* Back to Site */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Link
            href="/"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}

