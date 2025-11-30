'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { predefinedPackages } from '../data/packages'
import { formatPurchasedServices, getServiceName, allServices, anyRequiresIntake } from '../data/service-mapping'

interface SessionData {
  id: string
  customer_email: string | null
  metadata: {
    selectedServiceIds?: string
    bundleIds?: string
    total?: string
    customNotes?: string
  }
  amount_total: number | null
  currency: string | null
  payment_status: string
}

function IntakePageContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [sessionData, setSessionData] = useState<SessionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const [showTooltip, setShowTooltip] = useState(false)
  const [siteGoal, setSiteGoal] = useState<string>('')

  // Function to map session metadata to package name
  const getPackageFromMetadata = (metadata: SessionData['metadata']): string => {
    try {
      const bundleIds = metadata.bundleIds ? JSON.parse(metadata.bundleIds) as string[] : []
      const selectedServiceIds = metadata.selectedServiceIds ? JSON.parse(metadata.selectedServiceIds) as string[] : []

      // First, try to match by bundle IDs in predefined packages
      for (const pkg of predefinedPackages) {
        const pkgBundleIds = pkg.bundleServiceIds || []
        const pkgServiceIds = pkg.serviceIds || []

        // Check if bundle IDs match
        if (pkgBundleIds.length > 0) {
          const bundleMatch = 
            pkgBundleIds.length === bundleIds.length &&
            pkgBundleIds.every((id: string) => bundleIds.includes(id)) &&
            bundleIds.every((id: string) => pkgBundleIds.includes(id))

          if (bundleMatch) {
            return pkg.name
          }
        }

        // Check if service IDs match
        if (pkgServiceIds.length > 0) {
          const serviceMatch =
            pkgServiceIds.length === selectedServiceIds.length &&
            pkgServiceIds.every((id: string) => selectedServiceIds.includes(id)) &&
            selectedServiceIds.every((id: string) => pkgServiceIds.includes(id))

          if (serviceMatch) {
            return pkg.name
          }
        }
      }

      // If no exact match, check if there's a bundle ID
      if (bundleIds.length > 0) {
        // Try to find package by bundle ID
        const pkg = predefinedPackages.find(p => 
          p.bundleServiceIds?.includes(bundleIds[0])
        )
        if (pkg) return pkg.name
      }

      // Use the new service mapping to format purchased services
      return formatPurchasedServices(selectedServiceIds, bundleIds)
    } catch (err) {
      console.error('Error parsing metadata:', err)
      return 'Custom Package'
    }
  }

  // Get all purchased service IDs for display
  const getPurchasedServiceIds = (): string[] => {
    if (!sessionData) return []
    try {
      const bundleIds = sessionData.metadata.bundleIds ? JSON.parse(sessionData.metadata.bundleIds) as string[] : []
      const selectedServiceIds = sessionData.metadata.selectedServiceIds ? JSON.parse(sessionData.metadata.selectedServiceIds) as string[] : []
      return [...selectedServiceIds, ...bundleIds]
    } catch (err) {
      console.error('Error parsing service IDs:', err)
      return []
    }
  }

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided')
      setIsLoading(false)
      return
    }

    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/get-session?session_id=${sessionId}`)
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to fetch session data')
        }

        const data: SessionData = await response.json()
        setSessionData(data)
        
        // Check if intake form is needed
        const bundleIds = data.metadata.bundleIds ? JSON.parse(data.metadata.bundleIds) as string[] : []
        const selectedServiceIds = data.metadata.selectedServiceIds ? JSON.parse(data.metadata.selectedServiceIds) as string[] : []
        const allServiceIds = [...selectedServiceIds, ...bundleIds]
        
        // If no services require intake, redirect to success page
        if (!anyRequiresIntake(allServiceIds)) {
          window.location.href = `/success?session_id=${sessionId}`
          return
        }
        
        // Determine package from metadata
        const packageName = getPackageFromMetadata(data.metadata)
        setSelectedPackage(packageName)
      } catch (err) {
        console.error('Error fetching session:', err)
        setError(err instanceof Error ? err.message : 'Failed to load session data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSession()
  }, [sessionId])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-brand-gold text-xl">Loading...</div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !sessionData) {
    return (
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-serif font-bold text-brand-white mb-4">
              Error Loading Form
            </h1>
            <p className="text-brand-gray-light mb-8">
              {error || 'Unable to load session data. Please contact support.'}
            </p>
            <a
              href="/pricing"
              className="btn-primary px-8 py-3 inline-block"
            >
              Return to Pricing
            </a>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-white mb-4">
              Client Intake Form
            </h1>
            <p className="text-brand-gray-light text-lg">
              Help us get started on your project by completing this form.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-gray-dark rounded-xl p-6 md:p-8 border border-brand-gray-dark"
          >
            <form
              action="https://formspree.io/f/xkgpddez"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden field for package */}
              <input type="hidden" name="package" value={selectedPackage} />
              {/* Redirect to home page after successful submission */}
              <input 
                type="hidden" 
                name="_next" 
                value={typeof window !== 'undefined' 
                  ? `${window.location.origin}/` 
                  : 'https://lopezproductions.ai/'} 
              />

              {/* Section 1 – Basic Info */}
              <div>
                <h2 className="text-xl font-serif font-bold text-brand-white mb-4">
                  Basic Information
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Full Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Email (same as checkout)</span>
                    <input
                      type="email"
                      name="email"
                      required
                      defaultValue={sessionData.customer_email || ''}
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Package Purchased</span>
                    <select
                      name="package_selected"
                      required
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      {/* Show the auto-detected package first */}
                      <option value={selectedPackage}>{selectedPackage}</option>
                      
                      {/* Show all predefined packages */}
                      {predefinedPackages
                        .filter(pkg => pkg.name !== selectedPackage)
                        .map((pkg) => (
                          <option key={pkg.id} value={pkg.name}>
                            {pkg.name}
                          </option>
                        ))}
                      
                      {/* Show all services that require intake */}
                      {allServices
                        .filter(s => s.requiresIntake && s.name !== selectedPackage)
                        .filter(s => !predefinedPackages.some(pkg => pkg.name === s.name))
                        .map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      
                      {/* Custom package option */}
                      {selectedPackage !== 'Custom Package' && (
                        <option value="Custom Package">Custom Package</option>
                      )}
                    </select>
                    {/* Display purchased services for reference */}
                    {sessionData && getPurchasedServiceIds().length > 0 && (
                      <p className="text-sm text-brand-gray-muted mt-2">
                        Purchased: {getPurchasedServiceIds().map(id => getServiceName(id)).join(', ')}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              {/* Project Goal */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <label className="block mt-6">
                  <span className="text-brand-white font-medium">What's the main goal for your website?</span>
                  <select
                    name="site_goal"
                    required
                    value={siteGoal}
                    onChange={(e) => setSiteGoal(e.target.value)}
                    className="w-full mt-2 p-2 rounded bg-brand-gray-dark border border-brand-gold/20 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                  >
                    <option value="portfolio">🖼️ Portfolio / Personal Brand</option>
                    <option value="sell">🛒 Sell Products or Services</option>
                    <option value="grow">🧠 Grow My Audience</option>
                    <option value="share">💬 Share Information or Content</option>
                    <option value="other">⚙️ Something Else</option>
                  </select>
                  <p className="text-sm text-brand-gray-muted mt-2">
                    Choose what best describes your goal — this helps tailor your layout and strategy.
                  </p>
                </label>

                {/* Optional text field if "Something Else" is selected */}
                {siteGoal === 'other' && (
                  <textarea
                    name="site_goal_other"
                    placeholder="Briefly describe what you have in mind..."
                    className="w-full mt-2 p-2 rounded bg-brand-gray-dark border border-brand-gold/20 text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                )}
              </div>

              {/* About You */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <label className="block mt-6">
                  <span className="text-brand-white font-medium">Tell me about yourself</span>
                  <textarea
                    name="about_you"
                    rows={4}
                    placeholder="What do you want visitors to know about you or your story?"
                    className="w-full mt-2 p-2 rounded bg-brand-gray-dark border border-brand-gold/20 text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                  <p className="text-sm text-brand-gray-muted mt-2">
                    This helps shape your "About" section or intro paragraph so your site sounds like <i>you</i>.
                  </p>
                </label>
              </div>

              {/* Section 2 – Brand Assets */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Brand Assets
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Upload Logo (URL or Drive link)</span>
                    <input
                      type="url"
                      name="logo_url"
                      placeholder="https://..."
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Do you have a color palette or brand reference?</span>
                    <textarea
                      name="color_palette"
                      rows={2}
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Social media links</span>
                    <textarea
                      name="social_links"
                      rows={2}
                      placeholder="@instagram, @x, etc."
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </label>
                </div>
              </div>

              {/* Section 3 – Content */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Website Copy
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Paste your About, Services, or Contact text here</span>
                    <textarea
                      name="site_copy"
                      rows={4}
                      placeholder="Paste your About, Services, or Contact text here"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </label>

                  <label className="block mt-3">
                    <span className="text-brand-white font-medium mb-2 block">Do you already own a domain?</span>
                    <select
                      name="domain_status"
                      required
                      className="w-full mt-1 p-2 rounded bg-brand-gray-dark border border-brand-gold/20 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      <option value="own">✅ Yes, I already own one (I'll provide access)</option>
                      <option value="setup_paid">💳 No, please set one up for me (+$25 setup fee)</option>
                      <option value="free_temp">🌐 No, I'll take a free temporary domain (yourname.netlify.app)</option>
                    </select>
                    <p className="text-sm text-brand-gray-muted mt-2 leading-relaxed">
                      ⚠️ <b>Note:</b> The{' '}
                      <span className="inline-flex items-center relative group">
                        <b>$25 setup fee</b>
                        <button
                          type="button"
                          className="ml-1.5 inline-flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
                          onMouseEnter={() => setShowTooltip(true)}
                          onMouseLeave={() => setShowTooltip(false)}
                          onFocus={() => setShowTooltip(true)}
                          onBlur={() => setShowTooltip(false)}
                          aria-label="Domain setup fee information"
                        >
                          <Info className="w-4 h-4" />
                        </button>
                        {showTooltip && (
                          <span className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-brand-gray-dark border border-brand-gold text-brand-white text-xs rounded-lg shadow-lg z-50 pointer-events-none">
                            Domain purchase handled separately via registrar (Namecheap, Google Domains, etc.)
                            <span className="absolute left-4 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-gold"></span>
                          </span>
                        )}
                      </span>{' '}
                      covers technical configuration, DNS connection, and SSL setup only.
                      It <b>does not include</b> the cost of purchasing your actual domain name.
                      Typical domain prices range from <b>$10–$30 per year</b> depending on registrar and name availability.
                      You'll retain full ownership and can connect or transfer your domain anytime.
                    </p>
                  </label>
                </div>
              </div>

              {/* Section 4 – Strategy */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Strategy (For Plus / Ultra)
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Do you know your target audience or keywords?</span>
                    <textarea
                      name="audience_keywords"
                      rows={2}
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Would you like a Market Research Report? (+$250)</span>
                    <select
                      name="market_research_opt_in"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      <option>No</option>
                      <option>Yes, please add it to my invoice</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Section 5 – Approval */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Project Kickoff
                </h2>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="assets_confirmed"
                    required
                    className="mt-1 w-5 h-5 rounded border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                  />
                  <span className="text-brand-gray-light">
                    I confirm all assets are ready and understand missing items may delay delivery.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black px-6 py-3 rounded-lg font-semibold mt-6 transition-colors"
              >
                Submit Intake Form
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function IntakePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-brand-gold text-xl">Loading...</div>
        </div>
        <Footer />
      </main>
    }>
      <IntakePageContent />
    </Suspense>
  )
}

