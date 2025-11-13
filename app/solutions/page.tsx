'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ContactFormModal from '../../components/ContactFormModal'

export default function SolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Script
        id="solutions-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AI-Powered Brand Systems for Creators & Small Businesses",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Starter Portfolio",
                "serviceType": "Portfolio Website",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Content Engine + Brand Kit",
                "serviceType": "Brand System",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Creator Site",
                "serviceType": "Portfolio Website",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Full Brand System",
                "serviceType": "Brand System",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              }
            ]
          })
        }}
      />
      <main className="min-h-screen bg-brand-black relative overflow-hidden">
        {/* Background with office image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lopez-office.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        ></div>
        {/* Dark overlay to create silhouette effect */}
        <div className="fixed inset-0 bg-gradient-to-br from-brand-black/85 via-brand-gray-dark/80 to-brand-black/85"></div>
        
        {/* Subtle gold halo effect */}
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
        </div>
        
        {/* Minimal gold glow overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
        
        <div className="relative z-10">
          <Navigation />
          
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-gradient mb-6"
              >
                AI-Powered Brand Systems for Creators & Small Businesses
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Build a professional digital identity, launch your portfolio, and simplify your content — with light automations where they actually help.
              </motion.p>
            </div>
          </section>

          {/* Section 1 - Intro */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-gradient"
              >
                No Cookie-Cutter Packages. Only What You Actually Need.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-brand-gray-light text-center mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Most "automation agencies" throw 20 software tools at you and walk away.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-brand-gray-light text-center mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                That's not what we do here.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
              >
                <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-gold mb-6 text-center">
                  I build aesthetic, modern, AI-first brand systems that help you:
                </h3>
                <ul className="space-y-4 max-w-3xl mx-auto">
                  {[
                    "look professional",
                    "attract clients or opportunities",
                    "create consistent content",
                    "stop reinventing the wheel",
                    "scale your brand without hassle"
                  ].map((item, index) => (
                    <li key={index} className="text-brand-gray-light text-lg flex items-start">
                      <span className="text-brand-gold mr-3 text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-gray-light text-center mt-8 max-w-3xl mx-auto">
                  Everything is customized around <span className="text-brand-gold font-semibold">your goals, your style, and your level of experience</span>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 2 - Core Offerings */}
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gradient"
              >
                Core Offerings
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    number: "1️⃣",
                    title: "Starter Portfolio",
                    subtitle: "Your online identity, done right.",
                    description: "A clean, professional 3-page website designed to show people who you are and what you do.",
                    includes: [
                      "Home / About / Contact",
                      "Lead capture",
                      "Mobile-friendly design",
                      "SEO-ready framework",
                      "Basic brand foundations",
                      "Blog structure set up for future posts"
                    ],
                    bestFor: "Creators, consultants, freelancers, beginners, small businesses."
                  },
                  {
                    number: "2️⃣",
                    title: "Content Engine + Brand Kit",
                    subtitle: "Never run out of content again.",
                    description: "This system gives you the foundations to publish consistent, on-brand content — powered by AI, but shaped by your style.",
                    includes: [
                      "Full brand kit (colors, fonts, voice, style guide)",
                      "AI brand voice generation",
                      "Caption templates",
                      "Post/reel templates",
                      "Content calendar starter",
                      "SEO blog draft structure",
                      "Easy workflows to speed up creativity (no tech headaches)"
                    ],
                    bestFor: "Creators who want to post consistently and look professional."
                  },
                  {
                    number: "3️⃣",
                    title: "Creator Site (4-Page Build)",
                    subtitle: "A polished digital presence with more room to grow.",
                    description: "Everything in the Starter Portfolio, PLUS a services page and better SEO structure.",
                    includes: [
                      "Home / About / Services / Contact",
                      "Brand kit included",
                      "SEO optimization on all pages",
                      "Lead capture system",
                      "Optional light automations (newsletter send, post scheduling, form → email CRM)"
                    ],
                    bestFor: "Creators & small businesses who want to launch a real digital footprint."
                  },
                  {
                    number: "4️⃣",
                    title: "Full Brand System",
                    subtitle: "Everything you need to launch at the highest level.",
                    description: "A complete creative + AI-powered operating system for your brand.",
                    includes: [
                      "Full portfolio website",
                      "Brand system + visual identity",
                      "Content engine + templates",
                      "Starter automations (light, optional)",
                      "SEO setup",
                      "Your first 3 SEO blog posts drafted for you",
                      "Walkthrough tutorial of the entire system"
                    ],
                    bestFor: "Founders, creators, or businesses wanting a premium, fully built digital presence."
                  }
                ].map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
                  >
                    <div className="text-3xl mb-2">{pkg.number}</div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-lg text-brand-gold/90 mb-4 font-semibold">
                      {pkg.subtitle}
                    </p>
                    <p className="text-brand-gray-light mb-6 leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-brand-gold font-semibold mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="text-brand-gray-light flex items-start">
                            <span className="text-brand-gold mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-brand-gray-dark">
                      <p className="text-sm text-brand-gray-light">
                        <span className="text-brand-gold font-semibold">Best for:</span> {pkg.bestFor}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 - Add-Ons */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gradient"
              >
                Add-Ons You Can Add to Any Package
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-brand-gray-light text-center mb-12 max-w-3xl mx-auto"
              >
                Keep these clean, high-value, and optional.
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🔍",
                    title: "Market Research Mini-Report",
                    description: "Audience, competitors, keywords, positioning."
                  },
                  {
                    icon: "🎨",
                    title: "Visual Brand Refresh",
                    description: "Colors, typography, moodboard, style upgrade."
                  },
                  {
                    icon: "📝",
                    title: "SEO Blog Package (3–10 posts)",
                    description: "Keyword-sourced, written in your voice."
                  },
                  {
                    icon: "🎬",
                    title: "1-Min Brand Intro Video",
                    description: "For website or social — AI-assisted + edited."
                  },
                  {
                    icon: "⚡",
                    title: "Light Automation Setup",
                    description: "Only where it helps: newsletter sync, lead capture, post scheduling, etc."
                  }
                ].map((addon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 card-hover"
                  >
                    <div className="text-3xl mb-3">{addon.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                      {addon.title}
                    </h3>
                    <p className="text-brand-gray-light leading-relaxed">
                      {addon.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-brand-gray-light mt-8 italic"
              >
                These make your systems stronger without turning you into a tech agency.
              </motion.p>
            </div>
          </section>

          {/* Section 4 - How It Works */}
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gradient"
              >
                How It Works
              </motion.h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Pick your package",
                    description: "Choose the system that matches your goals and current level."
                  },
                  {
                    step: "2",
                    title: "Kickoff call / creative brief",
                    description: "We define style, vibe, goals, and brand identity."
                  },
                  {
                    step: "3",
                    title: "Build phase (48–72 hours)",
                    description: "Your system is built — portfolio, brand kit, content engine, everything."
                  },
                  {
                    step: "4",
                    title: "Delivery + walkthrough",
                    description: "You get easy instructions, tutorials, and full ownership."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 card-hover text-center">
                      <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-brand-gray-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-gold text-2xl">
                        →
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5 - Final CTA */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient"
              >
                Ready to Build Your Brand System?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-brand-gray-light mb-8 max-w-2xl mx-auto"
              >
                Let's create a clean, modern digital identity that helps you stand out — without drowning in tech.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Build
                </motion.button>
                <motion.a
                  href="/get-started"
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Packages
                </motion.a>
              </motion.div>
            </div>
          </section>

          <Footer />
          
          {/* Contact Form Modal */}
          <ContactFormModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
      </main>
    </>
  )
}
