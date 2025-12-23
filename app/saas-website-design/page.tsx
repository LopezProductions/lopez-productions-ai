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
    name: 'SaaS Website Design for Modern Products',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      url: 'https://lopezproductions.ai',
    },
    description: 'I design SaaS websites that convert, build trust, and stay visible as search becomes increasingly AI-driven.',
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
    'Building or scaling a SaaS product',
    'Selling to businesses, teams, or professionals',
    'Tired of a site that looks good but doesn\'t explain value',
    'Planning a launch, relaunch, or positioning reset',
  ]

  const isNotFitFor = [
    'You want a $49 template flipped into a brand',
    'You\'re looking for ongoing product development',
    'You want heavy backend or infrastructure work',
  ]

  const goodSaaSPoints = [
    {
      number: '1',
      title: 'Explains the product in under 10 seconds',
      description: 'Clear problem → clear outcome → clear next step.',
    },
    {
      number: '2',
      title: 'Builds trust before asking for action',
      description: 'Proof, structure, and clarity matter more than clever copy.',
    },
    {
      number: '3',
      title: 'Shows up correctly in search',
      description: 'Pages are structured so Google and AI systems understand what you do, who it\'s for, and why it matters.',
    },
  ]

  const whatIDesign = [
    'Marketing websites',
    'Product landing pages',
    'Pricing pages',
    'Feature or solution pages',
    'Lightweight dashboards or UI shells',
  ]

  const includedInEveryBuild = [
    'Custom page structure & layout',
    'Mobile-first, performance-optimized UI',
    'Clear messaging hierarchy',
    'Technical SEO baseline',
    'GEO / AEO-aware page structure',
    'Google Search Console setup or cleanup',
    'Clean handoff (no lock-in)',
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
      name: 'Growth Wrapper',
      price: '$2,800',
      description: 'Conversion-focused SaaS marketing site',
    },
    {
      name: 'GEO Architecture',
      price: '$4,800',
      description: 'Search-ready structure for AI-era discovery',
    },
    {
      name: 'AEO Ecosystem',
      price: '$7,800+',
      description: 'For teams prioritizing long-term visibility',
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
              SaaS Website Design for Modern Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto mb-4"
            >
              I design SaaS websites that convert, build trust, and stay visible as search becomes increasingly AI-driven.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Built for founders who want a site that explains their product clearly — to users and search engines.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <button
                onClick={handleRequestBuildSlot}
                className="btn-primary px-10 py-4 text-lg"
              >
                Request a Build Slot
              </button>
              <Link
                href="/saas-websites#examples"
                className="btn-outline px-10 py-4 text-lg"
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
                Who This Is For
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                This service is a fit if you&apos;re:
              </motion.p>
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
                      This service is a fit if:
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
                      And it&apos;s not a fit if:
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
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mt-8 text-sm italic max-w-3xl mx-auto"
              >
                This prevents bad leads early.
              </motion.p>
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
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                What a High-Performing SaaS Website Gets Right
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
              >
                A strong SaaS website does three things well:
              </motion.p>
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
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mt-8 text-sm italic max-w-3xl mx-auto"
              >
                This sets up your SEO/GEO value without jargon.
              </motion.p>
            </div>
          </section>

          {/* What I Design Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                What I Design
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Depending on your stage, this may include:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                {whatIDesign.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-6 rounded-xl border border-border text-center"
                  >
                    <p className="text-text-primary font-semibold">{item}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border max-w-3xl mx-auto"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-4 text-center">
                  All built with:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <Code className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <p className="text-text-secondary text-sm">Modern frontend stacks (React / Next.js when needed)</p>
                  </div>
                  <div>
                    <Rocket className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <p className="text-text-secondary text-sm">Performance-first layouts</p>
                  </div>
                  <div>
                    <Code className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <p className="text-text-secondary text-sm">Clean, maintainable structure</p>
                  </div>
                </div>
                <p className="text-text-secondary text-center mt-6 text-sm italic">
                  No CMS hype. No fluff.
                </p>
              </motion.div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                What&apos;s Included
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Every SaaS website build includes:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                {includedInEveryBuild.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-surface p-4 rounded-lg border border-border"
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
                className="bg-surface p-8 rounded-xl border border-border max-w-3xl mx-auto"
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
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mt-8 text-sm italic max-w-3xl mx-auto"
              >
                You don&apos;t call this GEO/AEO — you demonstrate it.
              </motion.p>
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
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                Pricing & Engagements
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
              >
                Most SaaS website projects fall into these ranges:
              </motion.p>
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
                    <p className="text-xl font-serif font-bold text-accent mb-4">
                      {tier.name}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {tier.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center max-w-3xl mx-auto"
              >
                Exact scope depends on:
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 max-w-3xl mx-auto">
                <span className="text-text-secondary text-sm">Page depth</span>
                <span className="text-text-muted">•</span>
                <span className="text-text-secondary text-sm">Content complexity</span>
                <span className="text-text-muted">•</span>
                <span className="text-text-secondary text-sm">Search requirements</span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mt-8 text-sm italic max-w-3xl mx-auto"
              >
                You don&apos;t oversell. You clarify.
              </motion.p>
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
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8 flex items-center justify-center gap-3"
              >
                <Clock className="w-8 h-8 text-brand-gold" />
                Process & Timeline
              </motion.h2>
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
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-text-secondary text-center mb-4"
                >
                  Most projects ship in <strong className="text-text-primary">2–4 weeks</strong>, depending on scope.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-text-secondary text-center text-sm italic"
                >
                  No &quot;48-hour&quot; nonsense. Calm confidence.
                </motion.p>
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
                  href="/saas-websites#examples"
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
                Ready to Build a SaaS Website That Actually Works?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto"
              >
                If you want a SaaS website that:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-background p-6 rounded-xl border border-border">
                  <p className="text-text-primary font-semibold">Explains your product clearly</p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border">
                  <p className="text-text-primary font-semibold">Builds trust with the right buyers</p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border">
                  <p className="text-text-primary font-semibold">Shows up in modern search</p>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary mb-8 max-w-3xl mx-auto font-semibold"
              >
                You&apos;re in the right place.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <button
                  onClick={handleRequestBuildSlot}
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Request a Build Slot
                </button>
                <Link
                  href="/saas-website-examples"
                  className="btn-outline px-10 py-4 text-lg"
                >
                  View SaaS Website Examples
                </Link>
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
