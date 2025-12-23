'use client'

import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { motion } from 'framer-motion'

export default function SaaSWebsiteExamplesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SaaS Website Examples',
    description: 'Real patterns, structures, and decisions found in effective SaaS websites — not surface-level aesthetics or trendy layouts.',
    publisher: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  return (
    <>
      <Script id="saas-website-examples-schema" type="application/ld+json">
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
          <section className="py-20 px-6 md:px-12 text-center">
            <div className="max-w-6xl mx-auto mb-8">
              <Breadcrumbs 
                title="SaaS Website Examples" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              SaaS Website Examples
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              What High-Performing SaaS Websites Get Right
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto mt-6 leading-relaxed"
            >
              SaaS websites are no longer just marketing surfaces.
              They are <strong className="text-text-primary">interface layers</strong> that explain complex products, signal credibility, and help both humans <em>and</em> AI systems understand what a product does.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto mt-4 leading-relaxed"
            >
              This page documents <strong className="text-text-primary">real patterns, structures, and decisions</strong> found in effective SaaS websites — not surface-level aesthetics or trendy layouts.
            </motion.p>
          </section>

          {/* What Makes a SaaS Website Effective */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                What Makes a SaaS Website &ldquo;Effective&rdquo; in 2025
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto text-center"
              >
                High-performing SaaS websites consistently do four things well:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-6 max-w-3xl mx-auto"
              >
                <ol className="space-y-4 text-text-secondary list-decimal list-inside">
                  <li>
                    <strong className="text-text-primary">Explain the product clearly</strong> — without jargon or over-engineering
                  </li>
                  <li>
                    <strong className="text-text-primary">Establish category context early</strong> — so users and AI engines understand where the product fits
                  </li>
                  <li>
                    <strong className="text-text-primary">Align UI, copy, and structure</strong> — instead of treating design and content separately
                  </li>
                  <li>
                    <strong className="text-text-primary">Support discoverability</strong> — across Google, AI summaries, and recommendation systems
                  </li>
                </ol>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto text-center"
              >
                A beautiful website that fails at any of these still underperforms.
              </motion.p>
            </div>
          </section>

          {/* SaaS Website Patterns */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                SaaS Website Patterns That Actually Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-12 max-w-3xl mx-auto text-center"
              >
                Rather than listing random examples, we evaluate SaaS websites based on <strong className="text-text-primary">systems</strong>.
              </motion.p>

              {/* Clear Category Signaling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12 max-w-4xl mx-auto"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  1. Clear Category Signaling
                </h3>
                <p className="text-text-secondary mb-4">
                  Effective SaaS sites answer one question immediately:
                </p>
                <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-text-secondary text-lg">
                  <em>&ldquo;What kind of product is this?&rdquo;</em>
                </blockquote>
                <p className="text-text-secondary mb-4">
                  This shows up through:
                </p>
                <ul className="space-y-2 text-text-secondary mb-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>explicit category language in the hero</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>consistent terminology across pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>clean page hierarchy (product, pricing, docs, comparisons)</span>
                  </li>
                </ul>
                <p className="text-text-secondary">
                  If AI can&apos;t summarize your product in one sentence, users won&apos;t either.
                </p>
              </motion.div>

              {/* Interface-First Storytelling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12 max-w-4xl mx-auto"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  2. Interface-First Storytelling
                </h3>
                <p className="text-text-secondary mb-4">
                  The best SaaS websites don&apos;t just <em>describe</em> the product — they <strong className="text-text-primary">show the interface logic</strong>.
                </p>
                <p className="text-text-secondary mb-4">
                  Common patterns:
                </p>
                <ul className="space-y-2 text-text-secondary mb-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>dashboard previews that match real functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>feature sections mapped to actual UI components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>screenshots that explain workflows, not aesthetics</span>
                  </li>
                </ul>
                <p className="text-text-secondary">
                  This builds trust before a demo ever happens.
                </p>
              </motion.div>

              {/* Credibility Without Noise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12 max-w-4xl mx-auto"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  3. Credibility Without Noise
                </h3>
                <p className="text-text-secondary mb-4">
                  High-performing SaaS sites avoid &ldquo;marketing theater.&rdquo;
                </p>
                <p className="text-text-secondary mb-4">
                  Instead, they rely on:
                </p>
                <ul className="space-y-2 text-text-secondary mb-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>clear architecture and spacing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>restrained motion (used intentionally)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>technical signals (performance, security, integrations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>straightforward pricing logic</span>
                  </li>
                </ul>
                <p className="text-text-secondary">
                  Credibility comes from clarity, not buzzwords.
                </p>
              </motion.div>

              {/* Search & AI Discoverability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 max-w-4xl mx-auto"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  4. Search & AI Discoverability Built In
                </h3>
                <p className="text-text-secondary mb-4">
                  Modern SaaS websites are structured for <strong className="text-text-primary">understanding</strong>, not just ranking.
                </p>
                <p className="text-text-secondary mb-4">
                  That includes:
                </p>
                <ul className="space-y-2 text-text-secondary mb-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>entity-aware content structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>answer-ready sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>consistent product definitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>documentation that reinforces marketing claims</span>
                  </li>
                </ul>
                <p className="text-text-secondary">
                  This is how SaaS products surface correctly in Google, ChatGPT, and AI search results.
                </p>
              </motion.div>
            </div>
          </section>

          {/* How We Evaluate */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                How We Evaluate SaaS Website Examples
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto text-center"
              >
                Every example featured on this page will be evaluated using the same framework:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-6 max-w-3xl mx-auto"
              >
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Category clarity</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Interface communication</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Content structure</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Discoverability readiness</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Technical execution</strong></span>
                  </li>
                </ul>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto text-center"
              >
                This keeps the page useful as a reference — not a mood board.
              </motion.p>
            </div>
          </section>

          {/* Why We're Building This Slowly */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                Why We&apos;re Building This Page Slowly (On Purpose)
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto text-center"
              >
                Most &ldquo;SaaS website inspiration&rdquo; pages optimize for volume.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto text-center"
              >
                This one is optimized for <strong className="text-text-primary">accuracy</strong>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-4 max-w-3xl mx-auto"
              >
                As this page evolves, we&apos;ll add:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-6 max-w-3xl mx-auto"
              >
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>annotated breakdowns of real SaaS websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>interface pattern callouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>structural wins (and mistakes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>examples tied directly to AI discoverability and governance</span>
                  </li>
                </ul>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto text-center"
              >
                Each example will earn its place.
              </motion.p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                Want to Apply These Patterns to Your SaaS Website?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto text-center"
              >
                If you&apos;re building or refining a SaaS product and want a website that:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-8 max-w-3xl mx-auto"
              >
                <ul className="space-y-2 text-text-secondary mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>explains your product clearly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>looks credible from day one</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>scales with your roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>surfaces correctly in modern search</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-center">
                  You don&apos;t need inspiration — you need <strong className="text-text-primary">systems</strong>.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-6">
                  Next Steps
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/saas-website-design"
                    className="btn-primary px-10 py-4 text-lg"
                  >
                    Explore SaaS Website Design →
                  </Link>
                  <Link
                    href="/b2b-saas-website"
                    className="btn-outline px-10 py-4 text-lg"
                  >
                    Learn About B2B SaaS Websites →
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/systems"
                    className="text-accent hover:underline text-lg"
                  >
                    See Our Systems Approach →
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
