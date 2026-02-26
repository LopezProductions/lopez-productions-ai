'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background with logo - very dark silhouette */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/transparent_logo_lp.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />
      {/* Light overlay to maintain charcoal color */}
      <div className="fixed inset-0 bg-gradient-to-br from-brand-black/60 via-brand-gray-dark/40 to-brand-black/60" />
      
      {/* Subtle gold halo effect around the logo */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl" />
      </div>
      
      {/* Minimal gold glow overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent" />
      
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 md:px-12 min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-text-primary mb-6 leading-tight"
            >
              Engineered Systems, Not Just Screens.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Decision-critical interfaces require more than marketing polish. We build governed Next.js control panels, admin dashboards, and internal tools where clarity, correctness, and architecture are non-negotiable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center"
            >
              <Link
                href="#phenom-demo"
                className="btn-primary px-8 py-4 text-lg"
              >
                View the Phenom Reference System
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Architecture for High-Stakes Environments */}
        <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-text-primary mb-4"
            >
              Architecture for High-Stakes Environments.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed"
            >
              Marketing sites optimize for quick conversions. Systems optimize for governance and long-term scaling. In environments where users make choices with real consequences, the interface must prioritize:
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-text-secondary max-w-3xl list-none"
            >
              <li className="flex items-start">
                <span className="text-accent mr-2 font-semibold">Cognitive Clarity:</span>
                <span>A strict information hierarchy that reduces user load.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 font-semibold">Predictable Interactions:</span>
                <span>Consistent patterns that build user confidence over time.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 font-semibold">Governed React Systems:</span>
                <span>Component libraries that scale across teams without breaking.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 font-semibold">Maintainable Architecture:</span>
                <span>Code structures designed for iteration, completely free of technical debt.</span>
              </li>
            </motion.ul>
          </div>
        </section>

        {/* The Phenom Reference Architecture */}
        <section id="phenom-demo" className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-text-primary mb-4"
            >
              The Phenom Reference Architecture.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-text-secondary mb-6 max-w-3xl leading-relaxed"
            >
              Phenom is our interactive front-end design system demo. Built using patterns from our Zero-G Dashboard Kit, it serves as a concrete implementation of our interface standards and design governance principles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-surface p-8 rounded-xl border border-border mb-8"
            >
              <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                Pure Front-End Governance
              </h3>
              <p className="text-text-secondary leading-relaxed">
                This is a demonstration of methodology and visual architecture. It is strictly a front-end reference implementation—free from backend data persistence or API logic—designed specifically to illustrate how complex interface components are organized, how patterns are applied consistently, and how a Next.js system scales as complexity grows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full rounded-xl overflow-hidden border border-border bg-surface p-4"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://phenom-ui.netlify.app/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="fullscreen"
                  loading="lazy"
                  title="Phenom Design System Reference Implementation"
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 flex justify-center"
            >
              <a
                href="https://phenom-ui.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg inline-block"
              >
                Open Interactive Demo →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-text-primary"
            >
              The Same Rigor, Applied to Your SaaS Website.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto"
            >
              The clarity, governance, and architectural thinking that make complex internal systems work are the exact same principles that make B2B marketing sites effective.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
            >
              When you are selling to technical teams that evaluate deeply, your interface needs to demonstrate extreme competence, not just conversion tactics. Your architecture needs to support iteration, not just an initial launch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 text-lg"
              >
                Discuss Your System Architecture
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
