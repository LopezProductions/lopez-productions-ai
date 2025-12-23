'use client'

import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { motion } from 'framer-motion'
import { Search, CheckCircle, XCircle, DollarSign, Target, AlertCircle } from 'lucide-react'

export default function B2BSaaSWebsitePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'B2B SaaS Website Design: What Actually Works (and What Doesn\'t)',
    description: 'B2B SaaS websites aren\'t about flash or hype. They\'re about clarity, credibility, and making it easy for the right buyer to say yes.',
    author: {
      '@type': 'Person',
      name: 'Reuben Lopez',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  const b2bDifferences = [
    'Longer buying cycles',
    'Multiple stakeholders (founder, ops, legal, IT)',
    'Higher trust threshold',
    'Fewer impulse decisions',
  ]

  const b2cCharacteristics = [
    'Emotion-led',
    'Fast conversion',
    'Feature-forward',
  ]

  const b2bCharacteristics = [
    'Risk-led',
    'Proof-driven',
    'Clarity-first',
  ]

  const commonMistakes = [
    'Talking to investors instead of buyers',
    'Overusing AI jargon without explaining value',
    'No clear "who this is for"',
    'Feature lists without outcomes',
    'Weak or missing proof',
    'Ignoring search visibility entirely',
  ]

  const bestPractices = [
    'Clear positioning in the first screen',
    'Simple explanation of the problem solved',
    'Proof early (logos, metrics, use cases)',
    'Pages designed for evaluation, not hype',
    'Content structured for search and AI summaries',
  ]

  const costRanges = [
    {
      category: 'Templates / DIY',
      range: 'Low hundreds',
      description: 'Off-the-shelf templates with basic customization',
    },
    {
      category: 'Freelancer builds',
      range: 'Low–mid thousands',
      description: 'Custom design and development from individual designers',
    },
    {
      category: 'Studio / custom builds',
      range: 'Mid–high thousands+',
      description: 'Full custom architecture with search optimization and ongoing support',
    },
  ]

  const costDrivers = [
    'Number of decision-maker pages',
    'Depth of content & proof',
    'Search & analytics setup',
    'Custom vs off-the-shelf structure',
  ]

  const searchFailures = [
    'Pages written for humans but unreadable by AI',
    'Poor page hierarchy',
    'No entity clarity',
    'Ignoring Search Console signals',
    'Assuming "SEO comes later"',
  ]

  const whenToInvest = [
    'You\'re selling to teams, not individuals',
    'You need to explain a complex product',
    'Your sales cycle depends on trust',
    'Your site needs to show up in search',
  ]

  return (
    <>
      <Script id="b2b-saas-website-schema" type="application/ld+json">
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
                title="B2B SaaS Website Design" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              B2B SaaS Website Design: What Actually Works (and What Doesn&apos;t)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              B2B SaaS websites aren&apos;t about flash or hype.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-accent max-w-3xl mx-auto leading-relaxed"
            >
              They&apos;re about clarity, credibility, and making it easy for the <em>right</em> buyer to say yes.
            </motion.p>
          </section>

          {/* What Makes B2B SaaS Different Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-12"
              >
                Why B2B SaaS Websites Are a Different Category
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                    B2C / Consumer SaaS
                  </h3>
                  <ul className="space-y-3">
                    {b2cCharacteristics.map((item, index) => (
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
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                    B2B SaaS
                  </h3>
                  <ul className="space-y-3">
                    {b2bCharacteristics.map((item, index) => (
                      <li key={index} className="flex items-start text-text-secondary">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border max-w-3xl mx-auto"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6 text-center">
                  Key Differences:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {b2bDifferences.map((item, index) => (
                    <div key={index} className="flex items-start text-text-secondary">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8 flex items-center justify-center gap-3"
              >
                <AlertCircle className="w-8 h-8 text-brand-gold" />
                Where Most B2B SaaS Websites Go Wrong
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {commonMistakes.map((mistake, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-surface p-6 rounded-xl border border-border"
                  >
                    <XCircle className="w-5 h-5 text-text-muted mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-text-secondary">{mistake}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* What Best B2B SaaS Websites Get Right Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                What High-Performing B2B SaaS Websites Have in Common
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                {bestPractices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-6 rounded-xl border border-border"
                  >
                    <CheckCircle className="w-6 h-6 text-accent mb-3" />
                    <p className="text-text-primary font-semibold">{practice}</p>
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
                  Why clarity beats cleverness in B2B
                </h3>
                <p className="text-text-secondary text-center">
                  B2B buyers are evaluating, not browsing. They need to understand your product, see proof, and trust your team — all before they&apos;ll schedule a demo. Clever copy that confuses or entertains works against that goal.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Cost Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8 flex items-center justify-center gap-3"
              >
                <DollarSign className="w-8 h-8 text-brand-gold" />
                How Much a B2B SaaS Website Actually Costs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
              >
                Honest cost ranges based on approach and scope:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                {costRanges.map((range, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-xl border border-border text-center"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                      {range.category}
                    </h3>
                    <p className="text-xl font-serif font-bold text-accent mb-4">
                      {range.range}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {range.description}
                    </p>
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
                  What drives cost:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {costDrivers.map((driver, index) => (
                    <div key={index} className="flex items-start text-text-secondary">
                      <span className="text-accent mr-2">•</span>
                      <span>{driver}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* B2B SaaS Websites & Search Section */}
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
                Why B2B SaaS Websites Fail in Search (and AI Search)
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Most B2B SaaS websites are built for humans but invisible to the systems that actually discover them:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-background p-6 rounded-xl border border-border text-center">
                  <p className="text-text-primary font-semibold">Google</p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border text-center">
                  <p className="text-text-primary font-semibold">AI summaries</p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border text-center">
                  <p className="text-text-primary font-semibold">Chat-based discovery</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                {searchFailures.map((failure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-background p-6 rounded-xl border border-border"
                  >
                    <XCircle className="w-5 h-5 text-text-muted mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-text-secondary">{failure}</p>
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
                Pages need to be structured so both humans and AI systems understand what you do, who it&apos;s for, and why it matters. This isn&apos;t about keyword stuffing — it&apos;s about clear entity relationships and page hierarchy.
              </motion.p>
            </div>
          </section>

          {/* Examples Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8"
              >
                Examples of Effective B2B SaaS Website Structure
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                Effective B2B SaaS websites follow clear patterns:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Page Flow
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Homepage → Problem → Solution → Proof → Pricing → Next Step
                  </p>
                  <p className="text-text-secondary text-sm">
                    Each page serves a specific decision-maker at a specific stage. No dead ends, no confusion.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Messaging Hierarchy
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Headline → Subhead → Proof → Features → Outcomes
                  </p>
                  <p className="text-text-secondary text-sm">
                    Information flows from most important to least. Buyers can scan and understand quickly.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Proof Placement
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Logos above the fold, metrics in context, case studies accessible but not overwhelming
                  </p>
                  <p className="text-text-secondary text-sm">
                    Trust signals appear where they matter most — early and often, but never intrusive.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Search Structure
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Clear entity relationships, explicit page hierarchy, content scannable by both humans and AI
                  </p>
                  <p className="text-text-secondary text-sm">
                    Pages are built to be understood by search engines and AI systems, not just optimized for keywords.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* When to Invest Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary text-center mb-8 flex items-center justify-center gap-3"
              >
                <Target className="w-8 h-8 text-brand-gold" />
                When a Custom B2B SaaS Website Is Worth It
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-8 max-w-3xl mx-auto"
              >
                A custom B2B SaaS website makes sense if:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {whenToInvest.map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-background p-6 rounded-xl border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-text-secondary">{scenario}</p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mt-8 text-sm italic max-w-3xl mx-auto"
              >
                This helps founders self-qualify and prevents bad-fit inquiries.
              </motion.p>
            </div>
          </section>

          {/* Soft CTA Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-8"
              >
                If You&apos;re Building a B2B SaaS Product
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                If you want a B2B SaaS website that prioritizes clarity, credibility, and modern search visibility, this is how I approach it.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  href="/saas-website-design"
                  className="btn-primary px-10 py-4 text-lg"
                >
                  View SaaS Website Design
                </Link>
                <Link
                  href="/saas-website-examples"
                  className="btn-outline px-10 py-4 text-lg"
                >
                  View SaaS Website Examples
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 text-center"
              >
                <Link
                  href="/systems"
                  className="text-accent hover:underline text-lg"
                >
                  See Our Systems Approach →
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
