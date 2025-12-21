'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import PackageRequestForm from '../../components/PackageRequestForm'
import PricingFAQ from '../../components/PricingFAQ'
import { motion } from 'framer-motion'
import { Code, Rocket, TrendingUp, Crown, Settings, Search } from 'lucide-react'

interface PackageData {
  selectedServiceIds: string[]
  bundleIds: string[]
  total: number
  customNotes: string
  packageSelection: string
}

export default function PricingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [packageData, setPackageData] = useState<PackageData | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set())

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Offer', 'Product', 'Service'],
    name: 'Lopez Productions Pricing & Systems',
    description: 'The Interface Layer for AI Startups — Fast, modern frontends. Clean architecture. Zero bloat.',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  // Frontend Systems (Products)
  const frontendSystems = [
    {
      id: 'antigravity-kit-source',
      name: 'Google Antigravity Kit — Source Code',
      price: 149,
      priceDisplay: '$149',
      description: 'A high-performance React + Tailwind UI system built for AI dashboards, tools, and landing pages.',
      builtFor: 'indie hackers, solo founders, dev teams shipping fast.',
      includes: [
        'Full GitHub repo (React 18 + Vite)',
        '40+ "Zero-G" components (inputs, cards, layouts)',
        'Mission Control dashboard template',
        'Airlock Auth flow (login, register, API keys)',
        'Figma file for easy brand updates',
        'Clean architecture + 100/100 Lighthouse performance',
      ],
      cta: 'Download Source Code',
    },
    {
      id: 'concierge-deployment',
      name: 'Concierge Deployment — Launch Assist',
      price: 495,
      priceDisplay: '$495',
      description: 'We configure the entire kit so you can focus on your backend.',
      builtFor: 'founders who want it done right, fast.',
      includes: [
        'Everything in the Source Code License',
        'Repo setup (GitHub/Vercel/Netlify)',
        'Brand injection into tailwind.config',
        'Logo + asset implementation',
        'Supabase/Firebase auth stub',
        'Production-ready deployment',
      ],
      cta: 'Start Deployment',
    },
  ]

  // Custom Architectures (Services)
  const customArchitectures = [
    {
      id: 'growth-wrapper',
      name: 'The Growth Wrapper — Marketing Site',
      price: 2800,
      priceDisplay: '$2,800',
      timeline: '2-week sprint',
      description: 'A conversion-focused marketing site for SaaS, dev tools, or AI apps.',
      bestFor: 'Seed-stage teams that need instant credibility.',
      includes: [
        '3 custom pages (Home, Pricing, Use Cases)',
        'Clean, developer-friendly UI (optional R3F or subtle motion)',
        'Lead capture + waitlist integrations',
        'Performance tuning (<100ms TTFB)',
        'Technical SEO foundation',
      ],
      cta: 'Request Build Slot',
    },
    {
      id: 'geo-architecture',
      name: 'The GEO Architecture — Premium Build',
      price: 4800,
      priceDisplay: '$4,800',
      timeline: '3-week sprint',
      description: 'Optimized for generative engines (ChatGPT, Perplexity). We structure your content so AI models understand it.',
      bestFor: 'startups relying on organic discovery.',
      includes: [
        '5 custom pages + CMS blog structure',
        'GEO optimization (structured data, embeddings-ready content)',
        'Framer Motion micro-interactions',
        'Newsletter → CRM automation',
        'Plausible / PostHog analytics setup',
      ],
      cta: 'View GEO Case Study',
      showcaseLink: 'https://launchstack.xyz',
    },
    {
      id: 'aeo-ecosystem',
      name: 'The AEO Ecosystem — Full Suite',
      price: 7800,
      priceDisplay: '$7,800',
      timeline: '4-week sprint',
      description: 'A full-stack content system designed to make your brand the answer in AI search results.',
      bestFor: 'funded teams, Web3 protocols, or fast-scaling AI products.',
      includes: [
        'Full brand system (design tokens + UI component library)',
        'AEO stack (Answer Engine Optimization)',
        'Knowledge Graph architecture (JSON-LD network)',
        'Programmatic SEO (auto-generated high-intent pages)',
        '30-day post-launch support + heatmap analysis',
      ],
      cta: 'Request Full Suite Quote',
    },
  ]

  // Technical Add-Ons
  const technicalAddOns = [
    {
      id: 'opengraph-design',
      name: 'OpenGraph Design System',
      price: 300,
      description: 'Clean social cards for Twitter/iMessage previews.',
    },
    {
      id: 'docs-architecture',
      name: 'Docs Architecture',
      price: 550,
      description: 'Docusaurus / Starlight system for API or onboarding docs.',
    },
    {
      id: 'concept-art-pack',
      name: 'Concept Art Pack',
      price: 250,
      description: '10 custom AI art assets matching your brand palette.',
    },
    {
      id: 'onboarding-engine',
      name: 'Onboarding Engine',
      price: 950,
      description: 'Stripe → CRM → Discord automation loop.',
    },
    {
      id: 'competitor-aeo-audit',
      name: 'Competitor AEO Audit',
      price: 450,
      description: 'How your competitors rank inside AI engines.',
    },
  ]

  // Handle Frontend Systems checkout (Direct Stripe)
  const handleFrontendSystemCheckout = async (product: typeof frontendSystems[0]) => {
    // Direct Stripe checkout for Antigravity Kit
    if (product.id === 'antigravity-kit-source') {
      window.location.href = 'https://buy.stripe.com/9B628s83c51y0y4avvcs807'
      return
    }

    // API checkout for other products
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServiceIds: [product.id],
          bundleIds: [],
          total: product.price,
          customNotes: `Frontend System: ${product.name}`,
        }),
      })

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Non-JSON response received:', text.substring(0, 200))
        throw new Error('Server returned an error. Please check the console for details.')
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err) {
      console.error('Error creating checkout session:', err)
      alert(err instanceof Error ? err.message : 'Something went wrong. Please try again or contact support.')
    }
  }

  // Handle Custom Architecture selection (Opens form)
  const handleCustomArchitectureClick = (service: typeof customArchitectures[0]) => {
    const selectedAddOnIds = Array.from(selectedAddOns)
    const selectedAddOnProducts = technicalAddOns.filter(item => selectedAddOnIds.includes(item.id))
    const addOnNames = selectedAddOnProducts.map(p => p.name).join(', ')
    const addOnTotal = selectedAddOnProducts.reduce((sum, item) => sum + item.price, 0)
    const totalPrice = service.price + addOnTotal

    const packageSelection = `${service.name}${addOnNames ? ` + ${addOnNames}` : ''}`
    const customNotes = `Service: ${service.name}${addOnNames ? ` | Add-Ons: ${addOnNames}` : ''}`

    setPackageData({
      selectedServiceIds: [service.id, ...selectedAddOnIds],
      bundleIds: [],
      total: totalPrice,
      customNotes: customNotes,
      packageSelection: packageSelection,
    })
    setIsFormOpen(true)
  }

  // Toggle add-on selection
  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => {
      const newSet = new Set(prev)
      if (newSet.has(addOnId)) {
        newSet.delete(addOnId)
      } else {
        newSet.add(addOnId)
      }
      return newSet
    })
  }

  const addOnTotal = technicalAddOns
    .filter(item => selectedAddOns.has(item.id))
    .reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <Script id="pricing-schema" type="application/ld+json">
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
                title="Pricing & Systems" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-4"
            >
              Lopez Productions — Pricing & Systems
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6"
            >
              The Interface Layer for AI Startups
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-secondary mt-6 max-w-3xl mx-auto mb-4"
            >
              Fast, modern frontends. Clean architecture. Zero bloat.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Ship your product faster — without hiring a full agency.
            </motion.p>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 1 — FRONTEND SYSTEMS (PRODUCTS) */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3">
                <Code className="w-8 h-8 text-brand-gold" />
                1. Frontend Systems (Products)
              </h2>
              <p className="text-text-secondary text-center mb-4 max-w-3xl mx-auto">
                For founders and developers who want a beautiful UI without losing a week of build time.
              </p>
              <p className="text-text-secondary text-center mb-8 max-w-3xl mx-auto text-sm">
                Looking for Notion Systems & Planning Docs?{' '}
                <a href="/templates" className="text-accent hover:text-accent-dark underline transition-colors">
                  Browse the Template Library →
                </a>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {frontendSystems.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-8 rounded-xl border border-border card-hover"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2 flex items-center gap-2">
                      {product.id === 'antigravity-kit-source' ? (
                        <Code className="w-6 h-6 text-brand-gold" />
                      ) : (
                        <Rocket className="w-6 h-6 text-brand-gold" />
                      )}
                      {product.name}
                    </h3>
                    <p className="text-4xl font-serif font-bold text-accent mb-4">
                      {product.priceDisplay}
                      {product.id === 'antigravity-kit-source' && (
                        <span className="text-lg text-text-secondary font-normal ml-2">— One-time license</span>
                      )}
                      {product.id === 'concierge-deployment' && (
                        <span className="text-lg text-text-secondary font-normal ml-2">— Done-for-you setup (48 hours)</span>
                      )}
                    </p>
                    <p className="text-text-secondary text-sm mb-6">
                      {product.description}
                    </p>
                    <p className="text-text-secondary text-xs mb-6 italic">
                      Built for: {product.builtFor}
                    </p>
                    <div className="mb-6">
                      <p className="text-text-primary font-semibold mb-3 text-sm">Includes:</p>
                      <ul className="space-y-2 text-text-secondary text-sm">
                        {product.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {product.id === 'antigravity-kit-source' && (
                      <a
                        href="https://googleantigravity.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline w-full py-3 text-lg mb-3 text-center block"
                      >
                        View Live Preview →
                      </a>
                    )}
                    <button
                      onClick={() => handleFrontendSystemCheckout(product)}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      {product.cta} →
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 2 — CUSTOM ARCHITECTURES (SERVICES) */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3">
                <Rocket className="w-8 h-8 text-brand-gold" />
                2. Custom Architectures (Services)
              </h2>
              <p className="text-text-secondary text-center mb-4 max-w-3xl mx-auto">
                Bespoke builds for startups who need more than a template.
              </p>
              <p className="text-text-secondary text-center mb-12 max-w-3xl mx-auto text-sm">
                Clear, fast, optimized. No WordPress. No drag-and-drop. No bloat.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {customArchitectures.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-xl border border-border card-hover flex flex-col"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2 flex items-center gap-2">
                      {service.id === 'growth-wrapper' ? (
                        <TrendingUp className="w-6 h-6 text-brand-gold" />
                      ) : service.id === 'geo-architecture' ? (
                        <Search className="w-6 h-6 text-brand-gold" />
                      ) : (
                        <Crown className="w-6 h-6 text-brand-gold" />
                      )}
                      {service.name}
                    </h3>
                    <p className="text-4xl font-serif font-bold text-accent mb-2">
                      {service.priceDisplay}
                    </p>
                    <p className="text-text-secondary text-xs mb-4">
                      — {service.timeline}
                    </p>
                    <p className="text-text-secondary text-sm mb-4">
                      {service.description}
                    </p>
                    <p className="text-text-secondary text-xs mb-6 italic">
                      Best for: {service.bestFor}
                    </p>
                    <div className="mb-6 flex-grow">
                      <p className="text-text-primary font-semibold mb-3 text-sm">Includes:</p>
                      <ul className="space-y-2 text-text-secondary text-sm">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.showcaseLink && (
                      <a
                        href={service.showcaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center text-accent hover:text-accent-dark text-sm font-medium mb-3 underline"
                      >
                        View GEO Case Study →
                      </a>
                    )}
                    <button
                      onClick={() => handleCustomArchitectureClick(service)}
                      className="btn-primary w-full py-3 text-lg mt-auto"
                    >
                      {service.cta} →
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 3 — TECHNICAL ADD-ONS */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3">
                <Settings className="w-8 h-8 text-brand-gold" />
                3. Technical Add-Ons
              </h2>
              <p className="text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                Modular upgrades you can bolt onto any package.
              </p>

              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-brand-gray-dark border-b border-border">
                      <tr>
                        <th className="px-6 py-4 text-left text-text-primary font-semibold">Upgrade</th>
                        <th className="px-6 py-4 text-left text-text-primary font-semibold">Price</th>
                        <th className="px-6 py-4 text-left text-text-primary font-semibold">Description</th>
                        <th className="px-6 py-4 text-center text-text-primary font-semibold">Select</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicalAddOns.map((addOn, index) => (
                        <tr
                          key={addOn.id}
                          className={`border-b border-border hover:bg-brand-gray-dark/50 transition-colors ${
                            selectedAddOns.has(addOn.id) ? 'bg-brand-gray-dark/30' : ''
                          }`}
                        >
                          <td className="px-6 py-4 text-text-primary font-medium">
                            {addOn.name}
                          </td>
                          <td className="px-6 py-4 text-accent font-bold">
                            ${addOn.price.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-text-secondary">
                            {addOn.description}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <input
                              type="checkbox"
                              checked={selectedAddOns.has(addOn.id)}
                              onChange={() => toggleAddOn(addOn.id)}
                              className="w-5 h-5 rounded border-brand-gray-light text-accent focus:ring-brand-gold focus:ring-2 cursor-pointer"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {selectedAddOns.size > 0 && (
                  <div className="p-6 bg-brand-gray-dark border-t border-border">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-text-secondary mb-1">
                          Selected: {selectedAddOns.size} add-on{selectedAddOns.size > 1 ? 's' : ''}
                        </p>
                        <p className="text-accent text-2xl font-bold">
                          Total: ${addOnTotal.toLocaleString()}
                        </p>
                      </div>
                      <p className="text-text-secondary text-sm text-center md:text-left">
                        Add-ons will be included when you select a custom architecture above.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <PricingFAQ />

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
