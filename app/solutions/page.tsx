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
    name: 'AI Business Systems for Modern Teams',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      url: 'https://lopezproductions.ai',
    },
    description:
      'Interfaces, discoverability, and automation — engineered for AI-native products. Production-ready systems that help products ship faster, stay coherent, and be understood correctly by users and AI engines.',
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
      body: 'Marketing, docs, UI, and flows align into one coherent system.',
    },
    {
      title: 'Better Discoverability',
      body: 'AI engines understand your product context — not just your keywords.',
    },
    {
      title: 'Operational Clarity',
      body: 'Automation removes busywork without creating chaos.',
    },
    {
      title: 'Designed for Builders',
      body: 'No fluff. No bloat. No drag-and-drop mess. Just systems engineered for speed.',
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
              AI Business Systems for Modern Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto"
            >
              Interfaces, discoverability, and automation — engineered for AI-native products
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              Modern AI products don&apos;t fail because of a lack of tools.
              They fail because their systems don&apos;t hold together as they scale.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto leading-relaxed"
            >
              Lopez Productions designs <strong className="text-text-primary">AI business systems</strong> — the interface architecture, discoverability structure, and operational automations that help products ship faster, stay coherent, and be understood correctly by users <em>and</em> AI engines.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto leading-relaxed italic"
            >
              This is not an agency.
              It&apos;s a builder&apos;s studio focused on production-ready systems.
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
          {/* THE SYSTEM STACK */}
          {/* ===================================================================== */}
          <section className="py-12 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-text-primary mb-4"
              >
                The System Stack
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary max-w-3xl mx-auto"
              >
                AI business systems are composed of three interconnected layers.
                Each one supports the next.
              </motion.p>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 1 — AI-GENERATED DESIGN SYSTEMS */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3"
              >
                <Code className="w-8 h-8 text-brand-gold" />
                1. AI-Generated Design Systems
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-serif font-bold text-text-primary text-center mb-4"
              >
                Production-ready interface systems — from prompt to product
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                AI can generate layouts, components, and variations in seconds.
                What it can&apos;t do on its own is decide what survives production.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
              >
                Lopez Productions designs <strong className="text-text-primary">AI-generated design systems</strong> that translate rapid generation into durable, maintainable interface architecture. AI accelerates creation and iteration — while human-led system design governs structure, consistency, accessibility, and scale.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto italic"
              >
                This is how teams move fast <strong className="text-text-primary">without design drift</strong>.
              </motion.p>

              {/* What This System Solves */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                  What This System Solves
                </h3>
                <p className="text-text-secondary mb-4">
                  Most teams don&apos;t struggle to generate UI — they struggle to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Keep interfaces consistent as features grow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Prevent AI-generated components from breaking conventions</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Align product UI, marketing pages, and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Maintain a clean relationship between design and production code</span>
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary mt-4 italic">
                  AI-generated design systems establish <strong className="text-text-primary">rules, structure, and boundaries</strong> that both humans <em>and</em> AI agents follow.
                </p>
              </motion.div>

              {/* Best For */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                  Best For
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Founders shipping an MVP who expect to scale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>AI products using copilots or prompt-driven UI generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>SaaS teams tired of visual inconsistency and rework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Indie builders who want speed without sacrificing credibility</span>
                  </li>
                </ul>
              </motion.div>

              {/* What You Get */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-6 text-center">
                  What You Get
                </h3>

                {/* System Architecture */}
                <div className="bg-surface p-8 rounded-xl border border-border mb-6">
                  <h4 className="text-xl font-serif font-bold text-text-primary mb-4">
                    System Architecture
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Design tokens (color, typography, spacing, motion)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Component taxonomy and naming conventions</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Variant strategy to prevent component sprawl</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Accessibility and state-handling patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* AI-Accelerated Generation */}
                <div className="bg-surface p-8 rounded-xl border border-border mb-6">
                  <h4 className="text-xl font-serif font-bold text-text-primary mb-4">
                    AI-Accelerated Generation (Governed)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>AI-assisted layout and component generation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Clear rules for what AI can generate vs what it cannot</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Prompt patterns aligned to your system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Guardrails that prevent &quot;almost-correct&quot; UI</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Production Alignment */}
                <div className="bg-surface p-8 rounded-xl border border-border mb-6">
                  <h4 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Production Alignment
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Component structure mapped cleanly to code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Tailwind-based or utility-driven styling systems</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>shadcn-style or custom component registries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Clean React / Next.js architecture</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* System Documentation */}
                <div className="bg-surface p-8 rounded-xl border border-border">
                  <h4 className="text-xl font-serif font-bold text-text-primary mb-4">
                    System Documentation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Usage guidelines for humans and AI agents</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Component intent and constraints</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Design → code handoff clarity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Documentation that scales with the product</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-6 text-center">
                  Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Faster iteration without visual chaos
                    </h4>
                  </div>
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Consistent UI across pages, features, and flows
                    </h4>
                  </div>
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Cleaner design-engineering handoff
                    </h4>
                  </div>
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Interfaces that feel intentional — not generated
                    </h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  View Design Systems →
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
                Designed for AI Understanding — Not Just Rankings
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-6 max-w-3xl mx-auto"
              >
                Your product doesn&apos;t get discovered because it has pages.
                It gets discovered when <strong className="text-text-primary">AI systems understand what it is, who it&apos;s for, and how it fits into a category</strong>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Lopez Productions designs <strong className="text-text-primary">search and discoverability systems</strong> that help AI engines correctly interpret your product across Google, ChatGPT, and emerging AI-native discovery surfaces.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto italic"
              >
                This is not traditional SEO. This is <strong className="text-text-primary">structural clarity for AI</strong>.
              </motion.p>

              {/* What Is AI Discoverability? */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-12 max-w-4xl mx-auto"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                  What Is AI Discoverability?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  AI discoverability is the practice of designing websites, content, and interface systems so artificial intelligence engines can correctly understand, categorize, and surface a product as an answer — not just index it as a page. Unlike traditional SEO, which focuses on rankings and traffic, AI discoverability prioritizes structural clarity: clear category signals, consistent terminology, entity relationships, and answer-ready content that allows AI systems to summarize a product accurately without hallucination.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center mb-16"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  Explore Pricing →
                </Link>
                <Link
                  href="https://calendly.com/reuben-lopezproductions/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-10 py-3 text-lg"
                >
                  Schedule a Technical Call →
                </Link>
              </motion.div>

              {/* What "Search" Means in the AI Era */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-3xl font-serif font-bold text-text-primary mb-6 text-center">
                  What &quot;Search&quot; Means in the AI Era
                </h3>
                <p className="text-text-secondary text-center mb-6 max-w-3xl mx-auto">
                  Search is no longer just keywords and backlinks.
                </p>
                <p className="text-text-secondary mb-4 max-w-3xl mx-auto">
                  Modern discovery depends on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clear category signals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Entity relationships</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Structured interfaces and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Answer-ready content systems</span>
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary text-center max-w-3xl mx-auto italic">
                  If AI can&apos;t summarize your product accurately, you won&apos;t surface — regardless of traffic.
                </p>
              </motion.div>

              {/* AI Discoverability Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-16"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  AI Discoverability Architecture
                </h3>
                <p className="text-text-secondary mb-4">
                  These systems focus on <strong className="text-text-primary">how external AI engines reason about your product</strong> — not how users search inside it.
                </p>
                <p className="text-text-secondary mb-4">
                  We structure your site so AI systems can:
                </p>
                <ul className="space-y-2 text-text-secondary mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Understand what your product <em>is</em></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Place it in the right category</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Surface it as an answer — not just a link</span>
                  </li>
                </ul>
                <p className="text-text-secondary italic">
                  This layer sits <strong className="text-text-primary">above tools</strong> and <strong className="text-text-primary">below platforms</strong>.
                </p>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-3xl font-serif font-bold text-text-primary mb-8 text-center">
                  What&apos;s Included
                </h3>

                {/* Structural Foundations */}
                <div className="bg-surface p-8 rounded-xl border border-border mb-6">
                  <h4 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Structural Foundations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Technical SEO baseline (crawlability, performance, indexing)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Clean URL and page hierarchy</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Canonical and duplication cleanup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Search Console setup and correction</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* AI-Oriented Structure */}
                <div className="bg-surface p-8 rounded-xl border border-border mb-6">
                  <h4 className="text-xl font-serif font-bold text-text-primary mb-4">
                    AI-Oriented Structure (GEO)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Entity definition and alignment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Page-to-page semantic relationships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Category signaling and topical authority</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Answer-surface optimization for AI summaries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Prompt-compatible content framing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Content That Pulls Its Weight */}
                <div className="bg-surface p-8 rounded-xl border border-border">
                  <h4 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Content That Pulls Its Weight
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Documentation-as-marketing (when appropriate)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Feature explanations designed for AI parsing</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Clear problem → solution → category mapping</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Consistent terminology across site, docs, and UI</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* What This Is Not */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-16"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  What This Is <em>Not</em>
                </h3>
                <p className="text-text-secondary mb-4">
                  This is not:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Keyword stuffing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Rank-chasing blog spam</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Score-based SEO theater</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Platform-specific tricks</span>
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary italic">
                  Those tactics break as soon as the algorithm shifts. We design <strong className="text-text-primary">durable systems</strong>.
                </p>
              </motion.div>

              {/* Who This Is For */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-3xl font-serif font-bold text-text-primary mb-6 text-center">
                  Who This Is For
                </h3>
                <div className="bg-surface p-8 rounded-xl border border-border">
                  <p className="text-text-secondary mb-4 font-semibold">
                    <strong className="text-text-primary">Best fit if you are:</strong>
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>An AI startup preparing for launch or scale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>A SaaS product that AI misrepresents or misunderstands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>A technical founder who wants long-term discoverability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>A team seeing traffic but not <em>qualified</em> understanding</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Outcomes You Can Expect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-3xl font-serif font-bold text-text-primary mb-8 text-center">
                  Outcomes You Can Expect
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Clear AI Summaries
                    </h4>
                    <p className="text-text-secondary text-sm">
                      AI engines describe your product correctly — without hallucination.
                    </p>
                  </div>
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Stronger Category Association
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Your product shows up in the <em>right</em> comparisons and recommendations.
                    </p>
                  </div>
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Fewer Pages, More Leverage
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Clean structure beats content volume.
                    </p>
                  </div>
                  <div className="bg-surface p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Platform Independence
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Your discoverability survives tool and algorithm shifts.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* How This Connects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-16"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  How This Connects to the Rest of Your System
                </h3>
                <p className="text-text-secondary mb-4">
                  Search & discoverability does not live in isolation.
                </p>
                <p className="text-text-secondary mb-4">
                  It works because it connects to:
                </p>
                <ul className="space-y-2 text-text-secondary mb-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Interface systems</strong> that communicate intent clearly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Documentation systems</strong> that reinforce understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong className="text-text-primary">Automation</strong> that keeps everything consistent over time</span>
                  </li>
                </ul>
                <p className="text-text-secondary italic">
                  This is why we design <strong className="text-text-primary">AI Business Systems</strong>, not isolated services.
                </p>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-3xl font-serif font-bold text-text-primary mb-8 text-center">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      question: 'Is this just SEO with new language?',
                      answer: 'No. SEO optimizes for ranking. This optimizes for AI understanding.',
                    },
                    {
                      question: 'Do you work with early-stage products?',
                      answer: 'Yes — this system is most valuable before scale introduces noise.',
                    },
                    {
                      question: 'Is this tied to a specific platform (Webflow, Next, etc.)?',
                      answer: 'No. The architecture is platform-agnostic.',
                    },
                    {
                      question: 'Can this integrate with our existing site and docs?',
                      answer: 'Yes. We adapt structure without forcing rebuilds unless necessary.',
                    },
                    {
                      question: 'Do you provide ongoing SEO services?',
                      answer: 'No retainers. Systems are designed to hold up without constant tuning.',
                    },
                  ].map((faq, i) => (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-surface border border-border rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center p-5 text-left"
                        onClick={() => {
                          const newIndex = openFAQIndex === i + 100 ? null : i + 100
                          setOpenFAQIndex(newIndex)
                        }}
                      >
                        <span className="text-lg text-text-primary font-medium">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: openFAQIndex === i + 100 ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown className="w-5 h-5 text-accent" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {openFAQIndex === i + 100 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
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
              </motion.div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/pricing"
                    className="btn-primary px-10 py-3 text-lg"
                  >
                    View Search Systems →
                  </Link>
                  <Link
                    href="https://calendly.com/reuben-lopezproductions/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-10 py-3 text-lg"
                  >
                    Schedule a Technical Call →
                  </Link>
                </div>
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
                3. Website-Adjacent Automation Systems
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-serif font-bold text-text-primary text-center mb-4"
              >
                Operational support — without replacing your engineering team
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Automation should reduce friction, not introduce fragile dependencies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Lopez Productions designs <strong className="text-text-primary">website-adjacent automation systems</strong> that support your product, marketing, and onboarding workflows — without touching core business logic or creating long-term maintenance risk.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto italic"
              >
                These systems act as <strong className="text-text-primary">support infrastructure</strong>, not shadow engineering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                  What We Automate
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Forms → Notion / CRM pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Lead capture, enrichment, and routing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Content publishing and update workflows</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Stripe → onboarding and access flows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Weekly summaries, reporting, and alerts</span>
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary text-center mt-6 text-sm italic">
                  Automation is scoped to <strong className="text-text-primary">support your website and growth systems</strong>, not replace judgment or product logic.
                </p>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-6 text-center">
                  Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Less manual work
                    </h4>
                  </div>
                  <div className="bg-background p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Fewer dropped handoffs
                    </h4>
                  </div>
                  <div className="bg-background p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Cleaner ops without engineering drag
                    </h4>
                  </div>
                  <div className="bg-background p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-serif font-bold text-text-primary mb-2">
                      ✅ Systems that stay aligned as the product evolves
                    </h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
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
          {/* OPTIONAL: TOOLS & ACCELERATORS */}
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
                Optional: Tools & Accelerators
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-4 max-w-3xl mx-auto"
              >
                For teams that want to move faster or self-serve.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto text-sm italic"
              >
                Templates, audits, and accelerators designed to reinforce the same system logic — not bypass it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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
                Ready to Build Your AI Business System?
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
                Automate operations without fragility.
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
