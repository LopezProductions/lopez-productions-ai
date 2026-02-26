'use client'

import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function SaaSWebsitesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SaaS Websites',
    description: 'Production-ready Next.js websites engineered for software companies. Reference architectures for B2B SaaS and AI companies—not trend-driven mockups.',
    publisher: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  return (
    <>
      <Script id="saas-websites-schema" type="application/ld+json">
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

          {/* Hero Section */}
          <section className="pt-20 pb-16 px-6 md:px-12 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-text-primary mb-6 leading-tight"
              >
                The Interface Layer for Modern SaaS.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                Production-ready Next.js websites engineered for software companies. We design structured, legible systems that explain complex products, establish category context, and signal credibility to both human buyers and AI search engines.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex justify-center"
              >
                <Link
                  href="#reference-implementations"
                  className="btn-primary px-8 py-4 text-lg"
                >
                  View Reference Systems
                </Link>
              </motion.div>
            </div>
          </section>

          {/* The Standard Section */}
          <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-4"
              >
                Beyond Surface-Level Aesthetics.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed"
              >
                A visually polished website that fails at clarity still underperforms. High-performing SaaS websites are built for evaluation, not hype. They consistently execute on four pillars:
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 text-text-secondary max-w-3xl list-none"
              >
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-semibold">Clear Product Translation:</span>
                  <span>Explaining complex software clearly without jargon or over-engineering.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-semibold">Instant Category Context:</span>
                  <span>Establishing exactly where the product fits so users—and AI engines—understand it immediately.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-semibold">Cohesive Architecture:</span>
                  <span>Aligning Next.js UI components, copy, and data structure, instead of treating design and content separately.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-semibold">Modern Discoverability:</span>
                  <span>Structuring entities to surface correctly across traditional search, AI summaries, and recommendation systems.</span>
                </li>
              </motion.ul>
            </div>
          </section>

          {/* The Approach: B2B vs. AI Section */}
          <section id="approach" className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-4"
              >
                Designed for the Buyer&apos;s Mindset.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-12 max-w-3xl leading-relaxed"
              >
                We architect your site based on exactly what your buyers are trying to validate.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                    B2B SaaS: Designed for Risk Evaluation
                  </h3>
                  <p className="text-text-secondary mb-4">
                    B2B buyers are evaluating—not browsing. Before they schedule a demo, they need clarity, proof, and confidence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-text-primary font-semibold mb-2">B2C SaaS is emotion-led and feature-forward.</p>
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold mb-2">B2B SaaS is risk-led, proof-driven, and clarity-first.</p>
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    Your site must position you clearly in the first screen, simplify the problem solved, and provide credibility signals immediately.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                    AI Companies: Explaining Systems
                  </h3>
                  <p className="text-text-secondary mb-4">
                    AI products are harder to explain and easier to misunderstand than traditional software because they operate probabilistically.
                  </p>
                  <p className="text-text-secondary mb-4">
                    Your website must explain capability, behavior, and intent—not just isolated features.
                  </p>
                  <p className="text-text-secondary">
                    We build AI websites as connected systems: human-led design governance, structured content for AI search engines, and self-hosted automation to support your workflows securely.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Reference Implementations Section */}
          <section id="reference-implementations" className="py-16 px-6 md:px-12 border-t border-border bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-4"
              >
                Reference Implementations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-12 max-w-3xl leading-relaxed"
              >
                This section documents real Next.js patterns and architectural decisions found in effective SaaS websites—not trend-driven layouts.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                    Phenom
                  </h3>
                  <p className="text-text-secondary mb-2 font-semibold italic">
                    Scalable Component Systems.
                  </p>
                  <p className="text-text-secondary mb-4">
                    A front-end reference UI demonstrating how we approach complex interface architecture, component governance, and long-term scalability.
                  </p>
                  <Link
                    href="/systems"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    View Phenom Reference System →
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                    Evercrest
                  </h3>
                  <p className="text-text-secondary mb-4 font-semibold italic">
                    Fintech SaaS Architecture.
                  </p>
                  <a
                    href="https://evercrestfi.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    View Live Build →
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                    EM-Dash
                  </h3>
                  <p className="text-text-secondary mb-4 font-semibold italic">
                    Operations / CRM SaaS Architecture.
                  </p>
                  <a
                    href="https://em-dashcrm.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    View Live Build →
                  </a>
                </motion.div>
              </div>
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
                Ready to Architect Your Interface?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                If you are building or refining a SaaS product and want a website that explains your software clearly, looks credible from day one, and surfaces correctly in modern search, let&apos;s map out your system.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-8 py-4 text-lg"
                >
                  Explore Pricing & Systems
                </Link>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
