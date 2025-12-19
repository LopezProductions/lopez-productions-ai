'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import PackageRequestForm from '../../components/PackageRequestForm'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, Zap, LayoutGrid, FastForward, Layers, TrendingUp, Target, Rocket, Search } from 'lucide-react'

interface PackageData {
  selectedServiceIds: string[]
  bundleIds: string[]
  total: number
  customNotes: string
  packageSelection: string
}

export default function SolutionsPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [packageData, setPackageData] = useState<PackageData | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Websites, Search, and Automations for AI Products',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      url: 'https://lopezproductions.ai',
    },
    description:
      'Your product deserves a frontend that feels fast, clean, and engineered with intention — paired with systems that reduce friction across your operations.',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: 'Varies',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  const toggleFAQ = (i: number) => {
    setOpenFAQIndex(openFAQIndex === i ? null : i)
  }

  const handleRequestBuildSlot = () => {
    setPackageData({
      selectedServiceIds: ['growth-wrapper'],
      bundleIds: [],
      total: 2800,
      customNotes: 'Request Build Slot - Growth Wrapper',
      packageSelection: 'Growth Wrapper — Marketing Site',
    })
    setIsFormOpen(true)
  }

  const benefits = [
    {
      title: 'Faster Iteration',
      body: 'Clean architecture reduces engineering bottlenecks.',
    },
    {
      title: 'Stronger Product Story',
      body: 'Your marketing site, docs, UI, and flows all align into one cohesive system.',
    },
    {
      title: 'Better Discoverability',
      body: 'GEO + AEO-informed structures help AI engines understand your product context.',
    },
    {
      title: 'Operational Clarity',
      body: 'Automation removes busywork so teams can focus on building.',
    },
    {
      title: 'Designed for Builders',
      body: 'No fluff, no bloat, no drag-and-drop mess. Just systems engineered for speed.',
    },
  ]

  const faqs = [
    {
      question: 'How fast can we ship a frontend?',
      answer: 'Most builds ship in 1–3 weeks depending on scope.',
    },
    {
      question: 'Do you work with very early-stage teams?',
      answer: 'Yes — most clients come pre-seed or bootstrapped.',
    },
    {
      question: 'Do you handle backend logic?',
      answer: 'We build the interface layer. You (or your engineer) connect the backend.',
    },
    {
      question: 'Can systems integrate with our existing stack?',
      answer: 'Yes — we support Supabase, Firebase, Stripe, GitHub, Notion, PostHog, Discord, etc.',
    },
    {
      question: 'Do you offer fully custom architectures?',
      answer: 'Yes — see the GEO Build and AEO Ecosystem tiers.',
    },
  ]

  return (
    <>
      <Script id="solutions-schema" type="application/ld+json">
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
                title="Solutions" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              Websites, Search, and Automations for AI Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto"
            >
              Your product deserves a frontend that feels fast, clean, and engineered with intention — paired with systems that reduce friction across your operations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              Lopez Productions helps AI startups and solo builders ship better interfaces, streamline workflows, and operate with real startup velocity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/pricing"
                className="btn-primary px-10 py-4 text-lg"
              >
                Explore Pricing →
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
          </section>

          {/* ===================================================================== */}
          {/* SECTION 1 — INTERFACE SYSTEMS (FRONTEND) */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3"
              >
                <Code className="w-8 h-8 text-brand-gold" />
                1. Interface Systems (Frontend)
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-serif font-bold text-text-primary text-center mb-4"
              >
                Clean, Fast, Modern Frontends for AI Tools and SaaS
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
              >
                We design and build the interface layer: dashboards, landing pages, pricing pages, and UI systems optimized for speed, clarity, and iteration.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Best For:
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Founders shipping an MVP</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>SaaS products needing a conversion-focused landing page</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Tools that need visual structure or improved UX</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Indie hackers who want a polished, credible product</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    What You Get:
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Custom React or Next.js architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>High-performance, mobile-first UI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Tailwind component library</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Framer Motion micro-interactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>AEO/GEO-informed content structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Deployment to Vercel or Netlify</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Technical SEO baseline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clean engineering handoff</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  View Frontend Systems →
                </Link>
                <button
                  onClick={handleRequestBuildSlot}
                  className="btn-outline px-10 py-3 text-lg"
                >
                  Request Build Slot →
                </button>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 2 — SEARCH & DISCOVERABILITY SYSTEMS */}
          {/* ===================================================================== */}
          <section id="search" className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3"
              >
                <Search className="w-8 h-8 text-brand-gold" />
                2. Search & Discoverability Systems
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-serif font-bold text-text-primary text-center mb-4"
              >
                Your website is only effective if it&apos;s understood — by users and AI engines.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                We structure sites and content so they surface correctly across Google, ChatGPT, and modern AI search experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                  Includes:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Technical SEO foundations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>GEO / AEO content structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Entity and page hierarchy</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Documentation-as-marketing (when needed)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Search Console setup & cleanup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Answer-surface optimization</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  View Search Systems →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 3 — WEBSITE-ADJACENT AUTOMATIONS */}
          {/* ===================================================================== */}
          <section id="automations" className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3"
              >
                <Zap className="w-8 h-8 text-brand-gold" />
                3. Website-Adjacent Automations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-serif font-bold text-text-primary text-center mb-4"
              >
                Automation that supports your website, content, and onboarding — without replacing your engineering team.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                We build operational systems that eliminate manual, repetitive tasks across your product and internal workflow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                  What We Automate:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Forms → Notion / CRM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Lead capture and routing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Content publishing workflows</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Stripe → onboarding flows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Weekly summaries and reporting</span>
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary text-center mt-6 text-sm italic">
                  <small>Automation is scoped to support your website and growth systems.</small>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  View Automation Options →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 4 — TOOLS & ACCELERATORS */}
          {/* ===================================================================== */}
          <section className="py-12 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3"
              >
                <LayoutGrid className="w-6 h-6 text-brand-gold" />
                4. Tools & Accelerators
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto text-sm italic"
              >
                Optional tools for teams that want to move faster or self-serve.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href="/templates"
                  className="btn-outline px-10 py-3 text-lg"
                >
                  Browse Tools & Accelerators →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* WHY THESE SYSTEMS WORK */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-12"
              >
                Why These Systems Work
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-xl border border-border card-hover"
                  >
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {benefit.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* FAQ SECTION */}
          {/* ===================================================================== */}
          <section className="py-20 px-6 md:px-12 bg-surface border-t border-border">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-12"
              >
                FAQ — For Founders & Technical Teams
              </motion.h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-5 text-left"
                      onClick={() => toggleFAQ(i)}
                    >
                      <span className="text-lg text-text-primary font-medium">
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{ rotate: openFAQIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown className="w-5 h-5 text-accent" />
                      </motion.div>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {openFAQIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-5 pb-5"
                        >
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* FINAL CTA */}
          {/* ===================================================================== */}
          <section className="py-20 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-6"
              >
                Ready to Build Your Interface Layer?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                Ship a better frontend. Structure your documentation. Automate your operations. Move with real startup velocity.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Explore Pricing →
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

        {/* Package Request Form Modal */}
        {isFormOpen && packageData && (
          <PackageRequestForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            packageData={packageData}
          />
        )}
      </main>
    </>
  )
}
