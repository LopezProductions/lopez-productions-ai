'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import PackageRequestForm from '../../components/PackageRequestForm'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Search, Code, Zap, Clock, Rocket } from 'lucide-react'

interface PackageData {
  selectedServiceIds: string[]
  bundleIds: string[]
  total: number
  customNotes: string
  packageSelection: string
}

export default function SaaSWebsiteDesignPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [packageData, setPackageData] = useState<PackageData | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Engineered SaaS Websites. Built for AI-Era Discovery.',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      url: 'https://lopezproductions.ai',
    },
    description: 'We design and develop Next.js marketing sites that explain your product clearly, build trust with buyers, and structure your data so AI search engines actually understand what you do.',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: '2800-7800',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  const handleRequestBuildSlot = () => {
    setPackageData({
      selectedServiceIds: ['growth-wrapper'],
      bundleIds: [],
      total: 2800,
      customNotes: 'SaaS Website Design - Request Build Slot',
      packageSelection: 'SaaS Website Design',
    })
    setIsFormOpen(true)
  }

  const isFitFor = [
    'You are building or scaling a B2B SaaS product.',
    'You are tired of a site that looks good but fails to explain your actual value.',
    'You need a clean positioning reset for a launch or major update.',
  ]

  const isNotFitFor = [
    'You want a $49 theme flipped into a brand.',
    'You are looking for heavy backend product development.',
    'You want a stitched-together, bloated CMS stack.',
  ]

  const goodSaaSPoints = [
    {
      number: '1',
      title: 'Instant Clarity',
      description: 'Your site must explain the problem, the outcome, and the exact next step in under 10 seconds.',
    },
    {
      number: '2',
      title: 'Engineered Trust',
      description: 'Proof, clean Next.js UI structure, and deterministic data matter more than clever copywriting. We build interfaces that feel like real products.',
    },
    {
      number: '3',
      title: 'Modern Search Visibility',
      description: 'Search is no longer just about keywords. We structure your pages so Google, ChatGPT, and AI summaries understand exactly what you do, who it\'s for, and why it matters—eliminating AI hallucinations about your brand.',
    },
  ]

  const includedInEveryBuild = [
    'Custom page structure & layout',
    'Mobile-first, performance-optimized UI',
    'Clear messaging hierarchy',
    'GEO / AEO-aware page architecture',
    'Technical SEO baseline & Google Search Console setup',
    'Clean handoff with zero vendor lock-in',
  ]

  const optionalAddOns = [
    'Pricing page systems',
    'OG image planning',
    'Website-adjacent automations (forms, lead routing, publishing)',
  ]

  const processSteps = [
    'Discovery & positioning alignment',
    'Page structure & layout design',
    'Build & optimization',
    'Search setup & QA',
    'Launch + clean handoff',
  ]

  const pricingTiers = [
    {
      name: 'Launch Infrastructure',
      price: '$2,800',
      subheadline: null,
      description: 'Conversion-focused Next.js marketing site.',
    },
    {
      name: 'Search Visibility System',
      price: '$4,800',
      subheadline: null,
      description: 'Search-ready structure optimized for AI-era discovery.',
    },
    {
      name: 'AEO Ecosystem',
      price: '$7,800+',
      subheadline: 'Total Market Presence',
      description: 'For teams prioritizing long-term visibility across generative engines.',
    },
  ]

  return (
    <>
      <Script id="saas-website-design-schema" type="application/ld+json">
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
                title="SaaS Website Design" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              Engineered SaaS Websites. Built for AI-Era Discovery.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8"
            >
              We design and develop Next.js marketing sites that explain your product clearly, build trust with buyers, and structure your data so AI search engines actually understand what you do.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 flex justify-center"
            >
              <Link
                href="/saas-websites#reference-implementations"
                className="btn-primary px-10 py-4 text-lg"
              >
                View System Examples
              </Link>
            </motion.div>
          </section>

          {/* Who This Is For Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-12"
              >
                Built for Product Teams, Not Template Flippers.
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-serif font-bold text-text-primary">
                      This is for you if:
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {isFitFor.map((item, index) => (
                      <li key={index} className="flex items-start text-text-secondary">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-6 h-6 text-text-muted" />
                    <h3 className="text-xl font-serif font-bold text-text-primary">
                      This is not a fit if:
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {isNotFitFor.map((item, index) => (
                      <li key={index} className="flex items-start text-text-secondary">
                        <span className="text-text-muted mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* What Makes a Good SaaS Website Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-12"
              >
                The Architecture of a High-Performing SaaS Site
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {goodSaaSPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-xl border border-border"
                  >
                    <div className="text-4xl font-serif font-bold text-accent mb-4">
                      {point.number}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                      {point.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {point.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* The Old Way vs The Lopez Way Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                The Old Way vs The Lopez Way
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="overflow-x-auto rounded-xl border border-border bg-background max-w-4xl mx-auto"
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 text-text-primary font-semibold">
                        The Old Way (Standard Design)
                      </th>
                      <th className="text-left p-6 text-text-primary font-semibold">
                        The Lopez Way (System Architecture)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-6 text-text-secondary text-sm">Focuses on &quot;Pixel Perfection&quot;</td>
                      <td className="p-6 text-text-secondary text-sm">Focuses on &quot;Information Density&quot;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6 text-text-secondary text-sm">Optimized for Keywords (SEO)</td>
                      <td className="p-6 text-text-secondary text-sm">Optimized for Answers (AEO)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6 text-text-secondary text-sm">&quot;Here is a brochure&quot;</td>
                      <td className="p-6 text-text-secondary text-sm">&quot;Here is a logic map for AI&quot;</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-text-secondary text-sm">Requires constant updating</td>
                      <td className="p-6 text-text-secondary text-sm">Built on resilient frameworks</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>

          {/* What We Ship Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                No CMS Hype. No Fluff.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                We build marketing websites, pricing systems, and product landing pages using strictly modern frontend stacks (React / Next.js).
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-xl font-serif font-bold text-text-primary text-center mb-6"
              >
                Every SaaS build includes:
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {includedInEveryBuild.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-background p-4 rounded-lg border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border max-w-3xl mx-auto mt-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6 text-center">
                  Optional add-ons:
                </h3>
                <div className="space-y-3">
                  {optionalAddOns.map((item, index) => (
                    <div key={index} className="flex items-start text-text-secondary">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* SaaS Websites & AI Search Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8 flex items-center justify-center gap-3"
              >
                <Search className="w-8 h-8 text-brand-gold" />
                Designed for Modern Search (Not Just Keywords)
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-serif font-bold text-text-primary text-center mb-6"
              >
                Search is changing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                SaaS websites now need to be understood by:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-background p-6 rounded-xl border border-border text-center">
                  <p className="text-text-primary font-semibold">Google</p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border text-center">
                  <p className="text-text-primary font-semibold">AI summaries</p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border text-center">
                  <p className="text-text-primary font-semibold">Chat-based search tools</p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border max-w-4xl mx-auto mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6 text-center">
                  I structure pages so:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-text-secondary text-sm">Core concepts are explicit</p>
                  </div>
                  <div className="text-center">
                    <p className="text-text-secondary text-sm">Entities are clear</p>
                  </div>
                  <div className="text-center">
                    <p className="text-text-secondary text-sm">Content is scannable by both humans and AI</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border max-w-4xl mx-auto"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6 text-center">
                  This helps your site:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-text-secondary text-sm">Rank more consistently</p>
                  </div>
                  <div className="text-center">
                    <p className="text-text-secondary text-sm">Appear in AI answers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-text-secondary text-sm">Avoid common indexing issues</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-12"
              >
                Scoped for Your Growth Stage
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-xl border border-border text-center"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                      {tier.price}
                    </h3>
                    <p className="text-xl font-serif font-bold text-accent mb-1">
                      {tier.name}
                    </p>
                    {tier.subheadline && (
                      <p className="text-text-muted text-sm mb-3">
                        {tier.subheadline}
                      </p>
                    )}
                    <p className="text-text-secondary text-sm">
                      {tier.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center mt-8"
              >
                <Link
                  href="/pricing"
                  className="btn-outline px-10 py-3 text-lg"
                >
                  View Full Pricing Details →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Process & Timeline Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-4 flex items-center justify-center gap-3"
              >
                <Clock className="w-8 h-8 text-brand-gold" />
                Our Process: Calm Confidence.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Insight and clean architecture take precedence over speed. We do not offer &quot;48-hour&quot; rushed fixes. Most projects ship in 2–4 weeks through a deliberate process:
              </motion.p>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6 mb-8">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 bg-background p-6 rounded-xl border border-border"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-text-primary font-semibold">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-8"
              >
                Examples & References
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto"
              >
                See how SaaS websites are structured for conversion, trust, and search visibility.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/saas-websites#reference-implementations"
                  className="btn-outline px-10 py-3 text-lg"
                >
                  View System Examples →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-8"
              >
                Ready to Build Your Interface Layer?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto"
              >
                If you want a SaaS website that explains your product flawlessly and shows up in modern search, let&apos;s map out your architecture.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <button
                  onClick={handleRequestBuildSlot}
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Request a Build Slot
                </button>
              </motion.div>
            </div>
          </section>

          <Footer />

          {/* Modal */}
          <PackageRequestForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            packageData={packageData}
          />
        </div>
      </main>
    </>
  )
}
