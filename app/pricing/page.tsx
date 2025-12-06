'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import PackageRequestForm from '../../components/PackageRequestForm'
import PricingFAQ from '../../components/PricingFAQ'
import { motion } from 'framer-motion'
import { Globe, Link as LinkIcon, Rocket, TrendingUp, Star, Crown } from 'lucide-react'

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
    name: 'Lopez Productions Pricing',
    description: 'Pricing for custom websites, templates, packages, and digital services.',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  // Custom Websites (Built From Scratch)
  const customWebsites = [
    {
      id: 'starter-site',
      name: 'Starter Site',
      price: 1000,
      priceDisplay: '$1,000',
      perfectFor: 'Perfect for creators & personal brands who need a clean, modern digital presence.',
      includes: [
        '1-page responsive website',
        'Hero, About, Services, Contact',
        'Modern visual hierarchy',
        'Mobile-first optimization',
        'SEO basics (metadata, headers, structure)',
        'Performance-tuned layout',
        'Domain + hosting setup',
        'Delivered in 3–5 days',
      ],
      optimizationLayer: {
        title: 'Optimization Layer: SEO',
        description: 'Visibility foundations. Not built for funnels or automation — perfect for simple, polished presence.',
      },
    },
    {
      id: 'business-rebuild',
      name: 'Business Rebuild',
      price: 2500,
      priceDisplay: '$2,500',
      perfectFor: 'Perfect for local businesses, freelancers & service providers wanting credibility + conversions.',
      includes: [
        '3 custom pages (Home, About, Services/Contact)',
        'Simple lead capture (email or booking)',
        'Upgraded brand layout & UI',
        'Clear, conversion-focused structure',
        'Performance + SEO optimization',
        '2 revision cycles',
        'Delivered in 5–10 days',
      ],
      optimizationLayer: {
        title: 'Optimization Layer: SEO+ (Lead Capture)',
        description: 'Your site now generates leads — not just views.',
      },
    },
    {
      id: 'premium-site',
      name: 'Premium Site',
      price: 4400,
      priceDisplay: '$4,400',
      perfectFor: 'Perfect for creators, consultants & small teams who want automation + real digital systems.',
      includes: [
        'Up to 5 fully designed pages',
        'Custom animations (Framer Motion optional)',
        'Automation setup (email sequences, CRM handoff, funnels)',
        'CMS or simple blog setup',
        'Newsletter capture + optimized opt-in',
        'Conversion-aligned UX',
        'GEO-optimized content structure',
        '2–3 revision cycles',
        'Delivered in 7–14 days',
      ],
      optimizationLayer: {
        title: 'Optimization Layer: GEO (Generative Engine Optimization)',
        description: 'Optimized for discoverability inside ChatGPT, Perplexity, Gemini, Grok, Claude, and AI-powered search.',
      },
      showcaseLink: 'https://launchstack.xyz',
    },
    {
      id: 'full-business-suite',
      name: 'Full Business Suite',
      price: 7200,
      priceDisplay: '$7,200',
      perfectFor: 'Perfect for serious businesses, agencies & Web3 teams who want a future-proof digital system.',
      includes: [
        '6–10 custom pages',
        'Full brand system (components, tokens, reusable UI)',
        'CMS or Supabase integration',
        'Blog system + tagging architecture',
        'Lead funnels + advanced automation',
        'SEO + GEO + AEO optimization stack',
        'OG cards, metadata, schema system',
        'Analytics + heatmap setup',
        '30-day support window',
        'Delivered in 2–4 weeks',
      ],
      optimizationLayer: {
        title: 'Optimization Layer: AEO (Answer Engine Optimization)',
        description: 'Built for modern discovery — where AI search engines and chatbots pull your site as the "best possible answer."',
      },
      showcaseLink: 'https://launchstack.xyz',
    },
  ]

  // Website Templates (DIY or Done-For-You)
  const templates = [
    {
      id: 'diy-template',
      name: 'DIY Template',
      price: 50,
      priceDisplay: '$50',
      description: 'Instant download',
      includes: [
        'Choose from any theme in the Template Library',
        'Customize in your own time',
      ],
      serviceId: 'diy-template',
    },
    {
      id: 'template-installation',
      name: 'Template + Installation',
      price: 150,
      priceDisplay: '$150',
      description: 'Everything in DIY',
      includes: [
        'I install it on your domain',
        'Basic colors + text applied',
        'Ready to publish',
      ],
      serviceId: 'template-installation',
    },
    {
      id: 'template-full-customization',
      name: 'Template + Full Customization',
      price: 450,
      priceDisplay: '$450',
      description: 'Full done-for-you build using any template',
      includes: [
        'Colors, fonts, layout, imagery tailored to your brand',
        'Domain + SEO setup included',
        'Delivered in 3–5 days',
      ],
      serviceId: 'template-full-customization',
    },
  ]

  // Creator & Business Packages
  const packages = [
    {
      id: 'academic-creator',
      name: 'Academic Creator Package',
      price: 500,
      priceDisplay: '$500',
      description: '1-page creator website + Newsletter setup + 1-month content plan',
      perfectFor: 'Perfect for teachers & edu-creators',
    },
    {
      id: 'travel-creator',
      name: 'Travel Creator Package',
      price: 500,
      priceDisplay: '$500',
      description: 'Travel website + gallery + Affiliate setup + 1-month content plan',
      perfectFor: 'Perfect for travel creators',
    },
    {
      id: 'creator-ultra',
      name: 'Creator Ultra',
      price: 1500,
      priceDisplay: '$1,500',
      description: 'Complete brand system + Custom website (3–5 pages) + Automation setup + Strategic content roadmap',
      perfectFor: 'For serious creators ready to scale',
    },
    {
      id: 'firm-authority',
      name: 'Firm Authority Package',
      price: 2500,
      priceDisplay: '$2,500',
      description: '5-page professional website + SEO optimization + Blog system + plan',
      perfectFor: 'Designed to dominate local search',
    },
  ]

  // Add-Ons
  const addOns = [
    {
      id: 'school-spirit',
      name: 'School Spirit Add-On',
      price: 10,
      description: 'School colors + logo added to dashboards',
    },
    {
      id: 'domain-setup',
      name: 'Domain Setup',
      price: 25,
      description: 'Connect and configure a domain',
    },
    {
      id: 'reel-edit',
      name: 'Reel Edit (1 minute)',
      price: 25,
      description: 'Quick edit + transitions',
    },
    {
      id: 'concept-art',
      name: 'Concept Art Pack',
      price: 50,
      description: '5 custom Nano Banana images',
    },
    {
      id: 'social-audit',
      name: 'Social Strategy Audit',
      price: 100,
      description: 'Profile upgrade + 30-day plan',
    },
    {
      id: 'brand-sheet',
      name: 'Professional Brand Sheet',
      price: 135,
      description: 'Colors, fonts, logo rules, brand tone',
    },
    {
      id: 'market-research',
      name: 'Market Research Add-On',
      price: 350,
      description: 'Competitor, audience, keyword research',
    },
    {
      id: 'client-onboarding',
      name: 'Client Onboarding Engine',
      price: 750,
      description: 'Automated intake → contract → invoice → portal',
    },
  ]

  // Handle custom website or package selection (opens intake form)
  const handleCustomServiceClick = (service: typeof customWebsites[0] | typeof packages[0]) => {
    const selectedAddOnIds = Array.from(selectedAddOns)
    const selectedAddOnProducts = addOns.filter(item => selectedAddOnIds.includes(item.id))
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

  // Handle template checkout (direct Stripe)
  const handleTemplateCheckout = async (template: typeof templates[0]) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServiceIds: [template.serviceId],
          bundleIds: [],
          total: template.price,
          customNotes: `Template: ${template.name}`,
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

  const addOnTotal = addOns
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
                title="Pricing" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary"
            >
              Pricing & Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto"
            >
              Modern websites built for SEO, GEO, and AEO — the full discoverability stack.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              Whether you&apos;re a creator, business owner, student, or teacher, choose from:
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-3xl mx-auto space-y-2 text-text-secondary"
            >
              <p><strong className="text-text-primary">• Custom Websites</strong> — Built from scratch with the full optimization stack</p>
              <p><strong className="text-text-primary">• Templates & Digital Tools</strong> — Launch fast and upgrade anytime</p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base text-text-secondary mt-6"
            >
              Scroll to explore the option that fits your timeline and goals.
            </motion.p>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 1 — CUSTOM WEBSITES (Built From Scratch) */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3">
                <Globe className="w-8 h-8 text-brand-gold" />
                Custom Websites (Built From Scratch)
              </h2>
              <p className="text-text-secondary text-center mb-4 max-w-3xl mx-auto">
                High-performance design for the modern internet.
              </p>
              <p className="text-text-secondary text-center mb-12 max-w-3xl mx-auto text-sm">
                Clean code, strong hierarchy, SEO foundations, and full support for AI-driven discovery.<br />
                These are <strong>true custom builds</strong> — no page builders, no bloated plugins, no legacy cleanups.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {customWebsites.map((website, index) => (
                  <motion.div
                    key={website.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-8 rounded-xl border border-border card-hover"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2 flex items-center gap-2">
                      {website.id === 'starter-site' ? (
                        <Rocket className="w-6 h-6 text-brand-gold" />
                      ) : website.id === 'business-rebuild' ? (
                        <TrendingUp className="w-6 h-6 text-brand-gold" />
                      ) : website.id === 'premium-site' ? (
                        <Star className="w-6 h-6 text-brand-gold" />
                      ) : (
                        <Crown className="w-6 h-6 text-brand-gold" />
                      )}
                      {website.name}
                    </h3>
                    <p className="text-4xl font-serif font-bold text-accent mb-4">
                      {website.priceDisplay}
                    </p>
                    <p className="text-text-secondary text-sm mb-6 italic">
                      {website.perfectFor}
                    </p>
                    <div className="mb-6">
                      <p className="text-text-primary font-semibold mb-3">Includes:</p>
                      <ul className="space-y-2 text-text-secondary text-sm">
                        {website.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {website.optimizationLayer && (
                      <div className="mb-6 p-4 bg-brand-gray-dark/50 rounded-lg border border-border">
                        <p className="text-text-primary font-semibold mb-2 text-sm">
                          {website.optimizationLayer.title}
                        </p>
                        <p className="text-text-secondary text-sm">
                          {website.optimizationLayer.description}
                        </p>
                      </div>
                    )}
                    {website.showcaseLink && (
                      <a
                        href={website.showcaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center text-accent hover:text-accent-dark text-sm font-medium mb-3 underline"
                      >
                        {website.id === 'premium-site' 
                          ? 'See an example Premium build → LaunchStack.xyz'
                          : 'Explore our most advanced builds → LaunchStack.xyz'}
                      </a>
                    )}
                    <button
                      onClick={() => handleCustomServiceClick(website)}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      {website.id === 'starter-site' 
                        ? 'Start My Starter Site →'
                        : website.id === 'business-rebuild'
                        ? 'Request Business Quote →'
                        : website.id === 'premium-site'
                        ? 'Request Premium Quote →'
                        : 'Request Full Suite Quote →'}
                    </button>
                    <a
                      href="https://calendly.com/reuben-lopezproductions/intro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full py-3 text-lg mt-3 text-center block"
                    >
                      Not sure? Schedule a 15-min call →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* EXPERIENCE OUR SYSTEMS SECTION */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4 flex items-center justify-center gap-3">
                <LinkIcon className="w-8 h-8 text-brand-gold" />
                Experience Our Systems Before You Choose A Package
              </h2>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  Experience Our Craft
                </h3>
                <p className="text-text-secondary max-w-3xl mx-auto mb-6">
                  Before choosing a package, explore how we design, optimize, and scale modern websites:
                </p>
                <a
                  href="https://launchstack.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-accent hover:text-accent-dark transition-colors mb-4"
                >
                  <LinkIcon className="w-5 h-5" />
                  LaunchStack.xyz – Premium Build Showcase
                </a>
                <p className="text-text-secondary max-w-3xl mx-auto text-sm">
                  A curated gallery of our most advanced client builds, including websites optimized with SEO, GEO, and AEO.
                  <br />
                  This gives prospects proof of the quality behind the Premium and Full Suite tiers.
                </p>
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 2 — WEBSITE TEMPLATES (DIY or Done-For-You) */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4">
                Website Templates (DIY or Done-For-You)
              </h2>
              <p className="text-text-secondary text-center mb-4 max-w-3xl mx-auto">
                Lower-cost options for fast launches.
              </p>
              <p className="text-text-secondary text-center mb-12 max-w-3xl mx-auto text-sm">
                These are not custom sites — these are structured templates with optional add-on support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {templates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-xl border border-border card-hover flex flex-col"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                      {template.name}
                    </h3>
                    <p className="text-4xl font-serif font-bold text-accent mb-4">
                      {template.priceDisplay}
                    </p>
                    <p className="text-text-secondary text-sm mb-2 font-semibold">
                      {template.description}
                    </p>
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-2 text-text-secondary text-sm">
                        {template.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => handleTemplateCheckout(template)}
                      className="bg-brand-gold text-brand-black py-3 px-4 rounded-lg font-semibold hover:bg-brand-gold-dark transition mt-auto"
                    >
                      Buy Template →
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 3 — CREATOR & BUSINESS PACKAGES */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4">
                Creator & Business Packages
              </h2>
              <p className="text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                Bundles combining websites with strategy or automation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-8 rounded-xl border border-border card-hover"
                  >
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-4xl font-serif font-bold text-accent mb-4">
                      {pkg.priceDisplay}
                    </p>
                    <p className="text-text-secondary text-sm mb-2">
                      {pkg.description}
                    </p>
                    <p className="text-text-secondary text-sm mb-6 italic">
                      {pkg.perfectFor}
                    </p>
                    <button
                      onClick={() => handleCustomServiceClick(pkg)}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      Start Project →
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 4 — ADD-ONS */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-text-primary text-center mb-4">
                Add-Ons
              </h2>
              <p className="text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                Enhance any template or service.
              </p>

              <div className="bg-surface rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-brand-gray-dark border-b border-border">
                      <tr>
                        <th className="px-6 py-4 text-left text-text-primary font-semibold">Add-On</th>
                        <th className="px-6 py-4 text-left text-text-primary font-semibold">Price</th>
                        <th className="px-6 py-4 text-left text-text-primary font-semibold">Description</th>
                        <th className="px-6 py-4 text-center text-text-primary font-semibold">Select</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addOns.map((addOn, index) => (
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
                        Add-ons will be included when you select a service above.
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
