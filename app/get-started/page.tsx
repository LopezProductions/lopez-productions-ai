'use client'

import React, { useState } from 'react'
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
            Custom AI Systems, Built for How You Work.
          </h1>
          <p className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-4">
            Start with a package that fits your goals — from automation setups to full AI workflows.
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
              Select the services you need. Your total updates in real-time.
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
                Each package includes all listed services, plus 1 free revision cycle. Turnaround times vary by package complexity, from 48 hours for Starter to 7-10 days for Full Launch.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                How do payments work?
              </h3>
              <p className="text-brand-gray-light">
                When you click "Proceed to Checkout", you'll be redirected to our secure Stripe payment page. We accept all major credit cards, Apple Pay, Google Pay, and more. Payment is processed securely and you'll receive a confirmation email immediately after.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                What if I need something custom?
              </h3>
              <p className="text-brand-gray-light">
                Use the "Need something not listed?" field in the builder to describe your custom requirements. We'll review it and include it in your quote.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                Can I mix and match services?
              </h3>
              <p className="text-brand-gray-light">
                Absolutely! That's the whole point. Pick exactly what you need from each category. The total updates live as you select options.
              </p>
            </div>
            
            <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                What happens after I complete payment?
              </h3>
              <p className="text-brand-gray-light">
                After successful payment, you'll be redirected to a confirmation page and receive an email with your order details. Within 24 hours, we'll reach out to schedule a kickoff call or request any assets we need to get started on your package.
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

