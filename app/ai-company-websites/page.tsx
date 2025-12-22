'use client'

import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { motion } from 'framer-motion'

export default function AICompanyWebsitesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Company Websites',
    description: 'Production-ready websites for AI-native products — from prompt to production. System-level architecture that explains complex technology clearly and remains legible as products evolve.',
    publisher: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  return (
    <>
      <Script id="ai-company-websites-schema" type="application/ld+json">
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
                title="AI Company Websites" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              AI Company Websites
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              Production-ready websites for AI-native products — from prompt to production
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto mt-6 leading-relaxed"
            >
              AI products are harder to explain, harder to trust, and easier to misunderstand than traditional software. That makes their websites fundamentally different.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto mt-4 leading-relaxed"
            >
              An AI company website is not just a marketing surface. It is a <strong className="text-text-primary">translation layer</strong> — between complex technology, real user problems, and the AI systems that now decide how products are discovered, summarized, and recommended.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto mt-4 leading-relaxed"
            >
              Lopez Productions designs <strong className="text-text-primary">production-ready AI company websites</strong> using system-level architecture, not one-off pages or generative shortcuts.
            </motion.p>
          </section>

          {/* Why AI Company Websites Are Different */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                Why AI Company Websites Are Different
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto"
              >
                Traditional SaaS websites explain features.
                AI company websites must explain <strong className="text-text-primary">capability, behavior, and intent</strong>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-4 max-w-3xl mx-auto"
              >
                AI products:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-6 max-w-3xl mx-auto"
              >
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Operate probabilistically rather than deterministically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Change rapidly as models and prompts evolve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Blur the line between product, system, and workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Are frequently misrepresented by AI search engines</span>
                  </li>
                </ul>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto"
              >
                Without structure, AI products get misunderstood — by users <em>and</em> by the AI systems indexing them.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-4 max-w-3xl mx-auto"
              >
                A modern AI company website must:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-6 max-w-3xl mx-auto"
              >
                <ol className="space-y-2 text-text-secondary list-decimal list-inside">
                  <li>Clearly define what the product <em>is</em></li>
                  <li>Communicate trust, limits, and constraints</li>
                  <li>Remain legible as the product evolves</li>
                </ol>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto italic"
              >
                This requires <strong className="text-text-primary">systems — not templates</strong>.
              </motion.p>
            </div>
          </section>

          {/* Common Failure Patterns */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                Common Failure Patterns in AI Product Websites
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto text-center"
              >
                Most AI company websites fail in predictable ways:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
                {[
                  {
                    title: 'Over-Generated Interfaces',
                    description: 'Layouts and components are generated quickly, but without a governing system. Visual consistency collapses as features expand.',
                  },
                  {
                    title: 'Messaging Drift',
                    description: 'Marketing pages, product UI, and documentation describe the same product differently — confusing users and AI engines alike.',
                  },
                  {
                    title: 'Category Confusion',
                    description: 'The website never clearly states *what kind of product this is*, making comparison and summarization unreliable.',
                  },
                  {
                    title: 'Demo-First Thinking',
                    description: 'Sites are optimized to impress in demos, not to hold up in production.',
                  },
                  {
                    title: 'AI That Can\'t Explain Itself',
                    description: 'The product relies on AI, but the website provides no clarity around behavior, boundaries, or use cases — eroding trust.',
                  },
                ].map((pattern, index) => (
                  <motion.div
                    key={pattern.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-6 rounded-xl border border-border"
                  >
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                      {pattern.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {pattern.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto text-center italic"
              >
                These are not design problems.
                They are <strong className="text-text-primary">system design problems</strong>.
              </motion.p>
            </div>
          </section>

          {/* The Real Downsides */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                The Real Downsides of AI-Generated Design Systems
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto"
              >
                AI-generated design systems offer speed — but without governance, that speed creates predictable risks.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
                {[
                  {
                    title: 'Visual Homogenization',
                    description: 'AI favors familiar patterns. Without system rules, interfaces converge toward generic, interchangeable designs.',
                  },
                  {
                    title: 'Non-Production-Ready Output',
                    description: 'Generated UI often lacks scalability, consistent state handling, and maintainable structure.',
                  },
                  {
                    title: 'Accessibility Gaps',
                    description: 'Unchecked generation frequently misses keyboard navigation, semantic structure, and contrast requirements — signals AI engines rely on for trust.',
                  },
                  {
                    title: 'Loss of Context and Brand Meaning',
                    description: 'AI cannot understand cultural nuance or long-term brand intent without human guidance.',
                  },
                  {
                    title: 'Technical Debt and "Vibe Coding"',
                    description: 'Accepting AI output without architectural accountability creates fragile systems teams are afraid to modify later.',
                  },
                ].map((downside, index) => (
                  <motion.div
                    key={downside.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-6 rounded-xl border border-border"
                  >
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                      {downside.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {downside.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto text-center italic"
              >
                The problem is not AI-generated design systems.
                The problem is <strong className="text-text-primary">AI-generated design systems without production governance</strong>.
              </motion.p>
            </div>
          </section>

          {/* The System Approach */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                The System Approach to AI Company Websites
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto"
              >
                AI company websites require <strong className="text-text-primary">AI Business Systems</strong>, not isolated design or SEO work.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto"
              >
                We design AI websites as a connected system with three layers:
              </motion.p>
              <div className="space-y-6 max-w-4xl mx-auto mb-8">
                {[
                  {
                    number: '1',
                    title: 'AI-Generated Design Systems',
                    description: 'AI accelerates layout and component generation — while human-led system design governs structure, consistency, accessibility, and scale. This prevents design drift without slowing iteration.',
                  },
                  {
                    number: '2',
                    title: 'Search & Discoverability Systems',
                    description: 'Content, entities, and category signals are structured so external AI engines (Google, ChatGPT, AI Overviews) can correctly understand and summarize the product. This is structural clarity for AI — not traditional SEO.',
                  },
                  {
                    number: '3',
                    title: 'Website-Adjacent Automation Systems',
                    description: 'Automation supports onboarding, content updates, reporting, and internal workflows — without touching core product logic or replacing engineering judgment.',
                  },
                ].map((layer, index) => (
                  <motion.div
                    key={layer.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-xl border border-border"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                      {layer.number}. {layer.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {layer.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto text-center italic"
              >
                Together, these systems ensure the website holds up as the product evolves.
              </motion.p>
            </div>
          </section>

          {/* What a Production-Ready AI Website Includes */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                What a Production-Ready AI Website Includes
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto"
              >
                A production-ready AI company website is defined by <strong className="text-text-primary">structure</strong>, not aesthetics.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-6 max-w-3xl mx-auto"
              >
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Governed design systems with clear tokens and component rules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Explicit category definition and problem → solution mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Documentation designed for humans <em>and</em> AI systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Answer-ready content that survives algorithm and model changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Operational automation that prevents drift without creating fragility</span>
                  </li>
                </ul>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto"
              >
                The result is a website that explains the product clearly, scales cleanly, and remains trustworthy over time.
              </motion.p>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                Who This Is For
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    This approach is designed for:
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>AI startups moving from demo to production</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>AI SaaS teams scaling features and contributors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Solo builders shipping serious AI products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Technical founders who value clarity and durability</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    It is not designed for:
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>One-page experiments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Prompt-only website builders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Short-term marketing stunts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Teams optimizing for aesthetics over systems</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* How This Connects */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                How This Connects to Our Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-6 max-w-3xl mx-auto"
              >
                AI company websites work because they are built on:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-6 max-w-3xl mx-auto"
              >
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">AI-Generated Design Systems</strong> (interface foundation)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Search & Discoverability Systems</strong> (AI understanding)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Website-Adjacent Automation Systems</strong> (operational consistency)</span>
                  </li>
                </ul>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary max-w-3xl mx-auto text-center italic"
              >
                Together, these form an <strong className="text-text-primary">AI Business System</strong> — not just a website.
              </motion.p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-6"
              >
                Ready to Build a Production-Ready AI Company Website?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                Design interfaces that hold up.
                Structure content AI can understand.
                Ship faster without sacrificing clarity.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/solutions"
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Explore AI Business Systems →
                </Link>
                <Link
                  href="https://calendly.com/reuben-lopezproductions/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-10 py-4 text-lg"
                >
                  Schedule a Technical Call →
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
