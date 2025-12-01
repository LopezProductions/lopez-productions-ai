'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import PackageRequestForm from '../../components/PackageRequestForm'
import PricingFAQ from '../../components/PricingFAQ'

export default function PricingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [packageData, setPackageData] = useState(null)
  const [selectedBuilderItems, setSelectedBuilderItems] = useState<Set<string>>(new Set())

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Offer', 'Product', 'Service'],
    name: 'Lopez Productions Pricing',
    description: 'Pricing for AI-powered websites, templates, automations, and digital products.',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  // Package Builder items that require intake forms
  const builderItems = [
    // Done-for-you websites
    { id: 'grad-portfolio', name: 'Grad Portfolio Website', price: 150, category: 'Websites', description: '1-Page website for internships and job apps — About, Resume, Contact.' },
    { id: 'travel-portfolio', name: 'Travel Portfolio Website', price: 150, category: 'Websites', description: '1-Page travel résumé + gallery + contact.' },
    { id: 'creator-site', name: 'Creator Site', price: 250, category: 'Websites', description: '3-Page website for creators, coaches, tutors, and freelancers.' },
    
    // Packages
    { id: 'academic-creator', name: 'Academic Creator Package', price: 500, category: 'Packages', description: 'Website + newsletter setup + 1 month content plan for teachers.' },
    { id: 'travel-creator', name: 'Travel Creator Package', price: 500, category: 'Packages', description: 'Website + affiliate setup + 1 month travel content plan.' },
    { id: 'creator-ultra', name: 'Creator Ultra', price: 1500, category: 'Packages', description: 'Full brand system + website + automation + content strategy.' },
    
    // Professional services
    { id: 'client-onboarding', name: 'Client Onboarding Engine', price: 750, category: 'Automation', description: 'Automated intake → contract → invoice → client portal.' },
    { id: 'firm-authority', name: 'Firm Authority Package', price: 2500, category: 'Professional', description: '5-Page website + SEO + blog plan for dominating local search.' },
    
    // Add-ons
    { id: 'school-spirit', name: 'School Spirit Add-On', price: 10, category: 'Add-Ons', description: 'Add your school logo & colors to any dashboard. (Requires school info — added during checkout)' },
    { id: 'domain-setup', name: 'Domain Setup', price: 25, category: 'Add-Ons', description: 'Custom domain setup and configuration.' },
    { id: 'reel-edit', name: 'Reel Edit (1 Minute)', price: 25, category: 'Add-Ons', description: 'Quick edit + transistions.' },
    { id: 'concept-art', name: 'Concept Art Pack', price: 50, category: 'Add-Ons', description: '5 custom AI-generated Nano Banana images designed specifically for your website, branding, or content needs.' },
    { id: 'social-audit', name: 'Social Strategy Audit', price: 100, category: 'Add-Ons', description: 'A personalized evaluation of your social media presence with clear recommendations, a profile upgrade, and a 30-day tactical posting plan.' },
    { id: 'brand-sheet', name: 'Professional Brand Sheet', price: 135, category: 'Add-Ons', description: 'Receive a clean, modern brand sheet that defines your visual identity in one place — colors, fonts, logo variations, spacing rules, and brand tone. Ideal for creators launching a website, businesses formalizing their look, and anyone who wants a consistent, professional appearance online.' },
    { id: 'market-research', name: 'Market Research Add-On', price: 350, category: 'Add-Ons', description: 'A deep-dive analysis into your niche, audience, competitors, keywords, and industry trends. Perfect for creators, businesses, or professionals who want strategic clarity before launching or scaling.' },
  ]

  const toggleBuilderItem = (itemId: string) => {
    setSelectedBuilderItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const builderTotal = builderItems
    .filter(item => selectedBuilderItems.has(item.id))
    .reduce((sum, item) => sum + item.price, 0)

  const handleBuilderCheckout = async () => {
    if (selectedBuilderItems.size === 0) {
      alert('Please select at least one item to checkout.')
      return
    }

    const selectedIds = Array.from(selectedBuilderItems)
    const selectedProducts = builderItems.filter(item => selectedIds.includes(item.id))
    const productNames = selectedProducts.map(p => p.name).join(', ')
    const hasSchoolSpirit = selectedIds.includes('school-spirit')
    const customNotes = `Package Builder: ${productNames}${hasSchoolSpirit ? ' | School Spirit Add-On: true' : ''}`

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServiceIds: selectedIds,
          bundleIds: [],
          total: builderTotal,
          customNotes: customNotes,
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
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err) {
      console.error('Error creating checkout session:', err)
      alert(err instanceof Error ? err.message : 'Something went wrong. Please try again or contact support.')
    }
  }

  // Group builder items by category
  const groupedBuilderItems = builderItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof builderItems>)

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
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-text-primary">
            Build Your System. Own Your Niche.
          </h1>
          <p className="text-xl text-text-secondary mt-6 max-w-3xl mx-auto">
            Whether you&apos;re studying, teaching, creating, traveling, or running a law firm —
            these tools help you organize, present, and automate your work with ease.
          </p>
        </section>

        {/* ===================================================================== */}
        {/* SECTION 1 — DIGITAL SHOP (Instant Downloads) */}
        {/* ===================================================================== */}
        <section className="py-16 px-6 md:px-12 bg-surface">
          <h2 className="text-4xl font-serif text-text-primary text-center mb-4">
            Digital Shop — Instant Downloads
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Templates and tools you can start using today. No wait times. One-click checkout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Prompt Library */}
            <DigitalShopCard
              title="100+ Prompt Library (PDF)"
              price="$9"
              description="Universal AI prompt library for students, creators, teachers, and travelers."
              serviceId="prompt-library"
            />

            {/* Student Dashboard */}
            <DigitalShopCard
              title="Student Dashboard"
              price="$19"
              description="Semester OS — assignments, study prompts, grade calculator."
              serviceId="student-dashboard"
            />

            {/* Travel Planner */}
            <DigitalShopCard
              title="Travel Planner OS"
              price="$19"
              description="AI-ready itinerary builder for Gemini/ChatGPT travel suggestions."
              serviceId="travel-planner"
            />

            {/* Classroom OS */}
            <DigitalShopCard
              title="Classroom OS"
              price="$29"
              description="Lesson planner, gradebook, and curriculum visualizer for educators."
              serviceId="classroom-os"
            />

            {/* Case Tracker */}
            <DigitalShopCard
              title="Solo-Firm Case Tracker"
              price="$49"
              description="Simple, professional Notion system for solo attorneys tracking clients."
              serviceId="case-tracker"
            />
          </div>
        </section>

        {/* ===================================================================== */}
        {/* SECTION 2 — PACKAGE BUILDER (Services & Add-Ons) */}
        {/* ===================================================================== */}
        <section className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-text-primary text-center mb-4">
              Package Builder — Services & Add-Ons
            </h2>
            <p className="text-text-secondary text-center mb-12 max-w-3xl mx-auto">
              Build your custom package. All services include intake form and project kickoff.
            </p>

            {/* Builder Items by Category */}
            <div className="space-y-12">
              {Object.entries(groupedBuilderItems).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-2xl font-serif text-text-primary mb-6">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <BuilderItemCard
                        key={item.id}
                        item={item}
                        isSelected={selectedBuilderItems.has(item.id)}
                        onToggle={() => toggleBuilderItem(item.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Summary */}
            {selectedBuilderItems.size > 0 && (
              <div className="mt-12 bg-surface rounded-xl p-8 border border-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-text-secondary mb-2">
                      Selected: {selectedBuilderItems.size} item{selectedBuilderItems.size > 1 ? 's' : ''}
                    </p>
                    <p className="text-accent text-3xl font-bold">
                      Total: ${builderTotal.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={handleBuilderCheckout}
                    className="btn-primary px-8 py-4 text-lg whitespace-nowrap"
                  >
                    Proceed to Checkout →
                  </button>
                </div>
              </div>
            )}
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

/* ===================================================================== */
/* COMPONENTS */
/* ===================================================================== */

interface DigitalShopCardProps {
  title: string
  price: string
  description: string
  serviceId: string
}

function DigitalShopCard({ title, price, description, serviceId }: DigitalShopCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const numericPrice = parseInt(price.replace(/[^0-9]/g, ''))

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServiceIds: [serviceId],
          bundleIds: [],
          total: numericPrice,
          customNotes: `Digital Shop: ${title}`,
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
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-background p-6 rounded-xl border border-border flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-serif text-text-primary">{title}</h3>
        <p className="text-accent font-bold mt-2">{price}</p>
        <p className="text-text-secondary mt-3">{description}</p>
      </div>
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className="mt-6 bg-brand-gold text-brand-black py-3 px-4 rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : 'Buy Now'}
      </button>
    </div>
  )
}

interface BuilderItemCardProps {
  item: {
    id: string
    name: string
    price: number
    category: string
    description: string
  }
  isSelected: boolean
  onToggle: () => void
}

function BuilderItemCard({ item, isSelected, onToggle }: BuilderItemCardProps) {
  return (
    <div
      className={`bg-surface p-6 rounded-xl border cursor-pointer transition-all ${
        isSelected ? 'border-accent' : 'border-border hover:border-brand-gray-light'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-serif text-text-primary flex-1">{item.name}</h3>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          onClick={(e) => e.stopPropagation()}
          className="w-5 h-5 rounded border-brand-gray-light text-accent focus:ring-brand-gold focus:ring-2 cursor-pointer ml-4 flex-shrink-0"
        />
      </div>
      <p className="text-accent font-bold text-lg mb-3">${item.price.toLocaleString()}</p>
      <p className="text-text-secondary text-sm">{item.description}</p>
    </div>
  )
}
