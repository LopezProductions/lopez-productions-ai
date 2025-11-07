'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ContactFormModal from '../../components/ContactFormModal'
import { CheckCircle, XCircle, Zap, Database, RefreshCw } from 'lucide-react'

export default function AIPortfolioBuilder() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const comparison = [
    {
      feature: 'Automatic Updates',
      ai: true,
      wix: false,
      framer: false,
      adobe: false
    },
    {
      feature: 'AI Content Sync',
      ai: true,
      wix: false,
      framer: false,
      adobe: false
    },
    {
      feature: 'Tool Integration',
      ai: true,
      wix: false,
      framer: false,
      adobe: false
    },
    {
      feature: '48-Hour Build',
      ai: true,
      wix: false,
      framer: false,
      adobe: false
    },
    {
      feature: 'Custom Design',
      ai: true,
      wix: true,
      framer: true,
      adobe: true
    },
    {
      feature: 'Template-Based',
      ai: false,
      wix: true,
      framer: true,
      adobe: true
    }
  ]

  return (
    <>
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              Your AI Portfolio Site — Built Smarter, Not Harder.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Forget cookie-cutter templates. We build intelligent portfolio systems that update automatically, integrate your tools, and impress clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Book Your Build
              </button>
              <a href="#demo" className="btn-outline">
                See How It Works →
              </a>
            </div>
          </div>
        </section>

        {/* Demo Example: AI Notion + Web Sync */}
        <section id="demo" className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                  Your Notion Database → Your Portfolio Website
                </h2>
                <p className="text-brand-gray-light mb-6 leading-relaxed">
                  Update your Notion portfolio database, and your website updates automatically. No coding, no manual uploads, no hassle.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-brand-black" />
                    </div>
                    <div>
                      <h3 className="text-brand-white font-semibold mb-2">Notion Database</h3>
                      <p className="text-brand-gray-light text-sm">Add new projects, update descriptions, or change images in your Notion database.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-6 h-6 text-brand-black" />
                    </div>
                    <div>
                      <h3 className="text-brand-white font-semibold mb-2">AI Sync System</h3>
                      <p className="text-brand-gray-light text-sm">Our AI system detects changes and syncs them to your website in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-brand-black" />
                    </div>
                    <div>
                      <h3 className="text-brand-white font-semibold mb-2">Live Portfolio</h3>
                      <p className="text-brand-gray-light text-sm">Your portfolio website reflects updates instantly—no manual work required.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark"
              >
                <div className="bg-brand-black rounded-lg p-6 mb-4">
                  <div className="h-48 bg-gradient-to-br from-brand-gold/20 to-brand-black rounded-lg flex items-center justify-center">
                    <p className="text-brand-gray-light text-sm">Notion Database View</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-brand-gold mb-4">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span className="text-sm">Syncing...</span>
                </div>
                <div className="bg-brand-black rounded-lg p-6">
                  <div className="h-48 bg-gradient-to-br from-brand-black to-brand-gold/20 rounded-lg flex items-center justify-center">
                    <p className="text-brand-gray-light text-sm">Portfolio Website Preview</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
              See It In Action
            </h2>
            <p className="text-brand-gray-light mb-8">
              Watch how our AI portfolio systems work in under 2 minutes
            </p>
            <div className="aspect-video bg-brand-gray-dark rounded-xl border border-brand-gray-dark flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-brand-gray-light">Video Demo Coming Soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-4">
                AI Portfolio Builder vs Traditional Builders
              </h2>
              <p className="text-brand-gray-light max-w-2xl mx-auto">
                Why static templates can't compete with AI-powered systems
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-brand-black rounded-xl border border-brand-gray-dark">
                <thead>
                  <tr className="border-b border-brand-gray-dark">
                    <th className="text-left p-4 text-brand-white font-semibold">Feature</th>
                    <th className="text-center p-4 text-brand-gold font-semibold">AI Portfolio Builder</th>
                    <th className="text-center p-4 text-brand-gray-light font-semibold">Wix</th>
                    <th className="text-center p-4 text-brand-gray-light font-semibold">Framer</th>
                    <th className="text-center p-4 text-brand-gray-light font-semibold">Adobe Portfolio</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? 'bg-brand-gray-dark/30' : ''}>
                      <td className="p-4 text-brand-white font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.ai ? (
                          <CheckCircle className="w-6 h-6 text-brand-gold mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-brand-gray-muted mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.wix ? (
                          <CheckCircle className="w-6 h-6 text-brand-gray-light mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-brand-gray-muted mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.framer ? (
                          <CheckCircle className="w-6 h-6 text-brand-gray-light mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-brand-gray-muted mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.adobe ? (
                          <CheckCircle className="w-6 h-6 text-brand-gray-light mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-brand-gray-muted mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-brand-gray-light mb-6">
                Traditional builders give you templates. We give you intelligent systems.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Start Your AI Portfolio Build
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
              Ready to Build Your AI Portfolio?
            </h2>
            <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
              Get a custom portfolio website that works while you sleep. Book your 48-hour build today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Book Your Build
              </button>
              <a href="/" className="btn-outline">
                ← Back to Home
              </a>
            </div>
          </div>
        </section>

        <Footer />
        
        <ContactFormModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </main>
    </>
  )
}


