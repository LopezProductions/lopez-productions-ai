'use client'

import React from 'react'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Lopez Productions',
    url: 'https://lopezproductions.ai/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@lopezproductions.ai',
        url: 'https://lopezproductions.ai/contact',
      },
    },
  }

  return (
    <>
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <main className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Background with logo - very dark silhouette */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/transparent_logo_lp.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        ></div>
        {/* Light overlay to maintain charcoal color */}
        <div className="fixed inset-0 bg-gradient-to-br from-brand-black/60 via-brand-gray-dark/40 to-brand-black/60"></div>
        
        {/* Subtle gold halo effect around the logo */}
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
        </div>
        
        {/* Minimal gold glow overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
        
        <div className="relative z-10">
          <Navigation />

          {/* ----------------------------- */}
          {/* HERO SECTION */}
          {/* ----------------------------- */}
          <section className="py-20 px-6 md:px-12 text-center">
            <div className="max-w-6xl mx-auto mb-8">
              <Breadcrumbs 
                title="Contact" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              Let&apos;s Build Your Interface Layer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Whether you&apos;re shipping an MVP, scaling your AI product, or architecting your next release: this is the best way to get in touch.
            </motion.p>
          </section>

          {/* ----------------------------- */}
          {/* TECHNICAL INTAKE FORM */}
          {/* ----------------------------- */}
          <section id="contact-form" className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4"
              >
                Technical Intake Form
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 leading-relaxed max-w-3xl"
              >
                Tell me about what you&apos;re building. You don&apos;t need a polished pitch — just enough detail to point us in the right direction.
              </motion.p>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glow effects */}
                <div className="absolute -left-16 top-0 bottom-0 w-48 bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent blur-3xl pointer-events-none"></div>
                <div className="absolute -right-16 top-0 bottom-0 w-48 bg-gradient-to-l from-brand-gold/30 via-brand-gold/10 to-transparent blur-3xl pointer-events-none"></div>
                
                <form
                  action="https://formspree.io/f/xldpoywb"
                  method="POST"
                  className="space-y-6 relative bg-surface rounded-xl p-8 border border-border z-10"
                >
                  <input
                    type="hidden"
                    name="_next"
                    value="https://lopezproductions.ai/thank-you"
                  />

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Role
                    </label>
                    <select
                      name="role"
                      defaultValue=""
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="" disabled>Choose one</option>
                      <option value="Founder">Founder</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Product Lead">Product Lead</option>
                      <option value="Solo Builder">Solo Builder</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* What are you trying to build? */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      What are you trying to build?
                    </label>
                    <select
                      name="project_type"
                      defaultValue=""
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="" disabled>Choose one</option>
                      <option value="SaaS marketing site">SaaS marketing site</option>
                      <option value="Dashboard / interface">Dashboard / interface</option>
                      <option value="Documentation system">Documentation system</option>
                      <option value="Workflow automation">Workflow automation</option>
                      <option value="UI/UX system">UI/UX system</option>
                      <option value="Something custom">Something custom</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* Describe your product or technical goals */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Describe your product or technical goals
                    </label>
                    <textarea
                      name="description"
                      rows={6}
                      placeholder="Tell me about your architecture, challenges, or what you want to improve."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-brand-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Current Stack */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Current Stack <span className="text-text-secondary font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="current_stack"
                      placeholder="Examples: React, Next.js, Vite, Supabase, Firebase, Python, Node, Go…"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      defaultValue=""
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="" disabled>Choose one</option>
                      <option value="ASAP (1–2 weeks)">ASAP (1–2 weeks)</option>
                      <option value="This month">This month</option>
                      <option value="This quarter">This quarter</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      defaultValue=""
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="" disabled>Choose one</option>
                      <option value="$1,000–$2,500">$1,000–$2,500</option>
                      <option value="$2,500–$5,000">$2,500–$5,000</option>
                      <option value="$5,000–$10,000">$5,000–$10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 text-lg font-medium"
                    >
                      Submit Technical Request
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
