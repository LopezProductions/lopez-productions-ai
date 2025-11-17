'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import PackageBuilder from '../../components/PackageBuilder'
import PricingGrid from '../../components/PricingGrid'
import PackageRequestForm from '../../components/PackageRequestForm'
import BlackFridayPopup from '../../components/BlackFridayPopup'

export default function GetStartedPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [packageData, setPackageData] = useState<{
    selectedServiceIds: string[]
    bundleIds: string[]
    total: number
    customNotes: string
    packageSelection: string
  } | null>(null)

  const handleRequestPackage = (data: {
    selectedServiceIds: string[]
    bundleIds: string[]
    total: number
    customNotes: string
    packageSelection: string
  }) => {
    setPackageData(data)
    setIsFormOpen(true)
  }

  const handleSelectPresetPackage = (packageId: string) => {
    // Scroll to builder section
    const builderSection = document.getElementById('package-builder')
    if (builderSection) {
      builderSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
      // Trigger preset selection in builder (this will be handled by the PackageBuilder component's state)
      setTimeout(() => {
        const event = new CustomEvent('selectPackage', { detail: { packageId } })
        window.dispatchEvent(event)
      }, 100)
    }
  }

  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-white mb-6">
            Custom Brand Systems, Built Around How You Create.
          </h1>
          <p className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-4">
            Start with a package that fits your goals — from AI-powered websites to full brand systems, content engines, and optional light automations.
          </p>
          <p className="text-lg text-brand-gray-light mt-6">
            Want to learn more about our approach? <Link href="/solutions" className="text-brand-gold hover:text-brand-gold-dark underline font-semibold">Visit our Solutions page</Link>.
          </p>
        </div>
      </section>

      {/* Package Builder Section */}
      <section id="package-builder" className="py-16 px-6 md:px-12 bg-brand-gray-dark">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-white mb-4">
              Build Your Package
            </h2>
            <p className="text-brand-gray-light text-lg max-w-2xl mx-auto">
              Choose the services you need. Your total updates in real time.
            </p>
          </div>
          
          <PackageBuilder onRequestPackage={handleRequestPackage} />
        </div>
      </section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent my-16" />

      {/* Pricing Grid Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-white mb-4">
              Simple pricing. Zero hidden fees.
            </h2>
            <p className="text-brand-gray-light text-lg max-w-2xl mx-auto">
              Choose a preset package or build your own above.
            </p>
          </div>
          
          <PricingGrid onSelectPackage={handleSelectPresetPackage} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-brand-gray-dark">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-white mb-12 text-center">
            Common Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                What's included in each package?
              </h3>
              <p className="text-brand-gray-light">
                Each package includes the services listed in the builder, plus one free revision cycle. Turnaround ranges from 48 hours to 21 days depending on complexity.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                Do I need to know AI to work with you?
              </h3>
              <p className="text-brand-gray-light">
                No — everything is beginner-friendly. I build the system and walk you through it step-by-step.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                Can you manage my content?
              </h3>
              <p className="text-brand-gray-light">
                Yes. Ongoing content management is available as an optional retainer. Pricing depends on your posting cadence and support level.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                What if I need something custom?
              </h3>
              <p className="text-brand-gray-light">
                Use the 'Need something not listed?' field and I'll include it in your quote.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                Can I mix and match services?
              </h3>
              <p className="text-brand-gray-light">
                Absolutely — the builder is designed for that. Your total updates live.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                What happens after payment?
              </h3>
              <p className="text-brand-gray-light">
                You'll receive a confirmation email and within 24 hours I'll reach out with next steps or your kickoff form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Request Form Modal */}
      <PackageRequestForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageData={packageData}
      />

      {/* Black Friday Promotional Popup */}
      <BlackFridayPopup />

      <Footer />
    </main>
  )
}

