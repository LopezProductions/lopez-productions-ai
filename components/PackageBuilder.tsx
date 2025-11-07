'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { serviceCategories, predefinedPackages, calculateTotal, formatPackageSelection, getServiceById } from '../app/data/packages'

interface PackageBuilderProps {
  onRequestPackage?: (data: {
    selectedServiceIds: string[]
    bundleIds: string[]
    total: number
    customNotes: string
    packageSelection: string
  }) => void
}

const PackageBuilder: React.FC<PackageBuilderProps> = ({ onRequestPackage }) => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([])
  const [bundleIds, setBundleIds] = useState<string[]>([])
  const [customNotes, setCustomNotes] = useState('')
  const [total, setTotal] = useState(0)
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null)
  const [savings, setSavings] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Check if current selection matches a preset package exactly
  const checkPackageMatch = useCallback((serviceIds: string[], bundleIdsArray: string[]) => {
    for (const pkg of predefinedPackages) {
      const pkgServiceIds = pkg.serviceIds || []
      const pkgBundleIds = pkg.bundleServiceIds || []
      
      // Check if selections match exactly (order doesn't matter)
      const serviceMatch = 
        pkgServiceIds.length === serviceIds.length &&
        pkgServiceIds.every(id => serviceIds.includes(id)) &&
        serviceIds.every(id => pkgServiceIds.includes(id))
      
      const bundleMatch =
        pkgBundleIds.length === bundleIdsArray.length &&
        pkgBundleIds.every(id => bundleIdsArray.includes(id)) &&
        bundleIdsArray.every(id => pkgBundleIds.includes(id))
      
      if (serviceMatch && bundleMatch) {
        return pkg
      }
    }
    return null
  }, [])

  // Calculate total whenever selections change
  useEffect(() => {
    const matchedPackage = checkPackageMatch(selectedServiceIds, bundleIds)
    
    if (matchedPackage) {
      // Use package price
      setTotal(matchedPackage.price)
      setSelectedPackageId(matchedPackage.id)
      
      // Calculate savings
      const individualTotal = calculateTotal(selectedServiceIds, bundleIds)
      const savingsAmount = individualTotal - matchedPackage.price
      setSavings(savingsAmount > 0 ? savingsAmount : null)
    } else {
      // Use individual service pricing
      const newTotal = calculateTotal(selectedServiceIds, bundleIds)
      setTotal(newTotal)
      setSelectedPackageId(null)
      setSavings(null)
    }
  }, [selectedServiceIds, bundleIds, checkPackageMatch])

  // Handle bundle logic: if 5-Reel Special is selected, remove individual reel selections
  useEffect(() => {
    if (bundleIds.includes('reel_bundle')) {
      setSelectedServiceIds(prev => prev.filter(id => id !== 'reel'))
    }
  }, [bundleIds])

  const handlePresetPackage = useCallback((packageId: string) => {
    const pkg = predefinedPackages.find(p => p.id === packageId)
    if (!pkg) return

    // Clear current selections
    setSelectedServiceIds([])
    setBundleIds([])

    // Apply package selections
    if (pkg.bundleServiceIds) {
      setBundleIds(pkg.bundleServiceIds)
    }
    if (pkg.serviceIds.length > 0) {
      setSelectedServiceIds(pkg.serviceIds)
    }
    
    // Set the selected package ID
    setSelectedPackageId(packageId)
  }, [])

  // Listen for preset package selection from PricingGrid
  useEffect(() => {
    const handlePackageSelect = (event: CustomEvent<{ packageId: string }>) => {
      handlePresetPackage(event.detail.packageId)
    }

    window.addEventListener('selectPackage', handlePackageSelect as EventListener)
    return () => {
      window.removeEventListener('selectPackage', handlePackageSelect as EventListener)
    }
  }, [handlePresetPackage])

  const handleServiceToggle = (serviceId: string) => {
    const service = getServiceById(serviceId)
    if (!service) return

    // Clear package selection when user manually toggles services
    if (selectedPackageId) {
      setSelectedPackageId(null)
    }

    if (service.isBundle) {
      // Toggle bundle
      setBundleIds(prev => 
        prev.includes(serviceId) 
          ? prev.filter(id => id !== serviceId)
          : [...prev, serviceId]
      )
    } else {
      // Don't allow individual reel selection if bundle is selected
      if (serviceId === 'reel' && bundleIds.includes('reel_bundle')) {
        return
      }
      
      setSelectedServiceIds(prev =>
        prev.includes(serviceId)
          ? prev.filter(id => id !== serviceId)
          : [...prev, serviceId]
      )
    }
  }

  const handleRequestPackage = async () => {
    // Validate that we have at least one service or custom notes
    if (total === 0 && !customNotes.trim()) {
      setError('Please select at least one service or add custom notes.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServiceIds,
          bundleIds,
          total,
          customNotes: customNotes.trim() || undefined,
        }),
      })

      // Check if response is actually JSON
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
      setError(
        err instanceof Error 
          ? err.message 
          : 'Something went wrong. Please try again or contact support.'
      )
      setIsLoading(false)
    }
  }

  const isServiceSelected = (serviceId: string) => {
    const service = getServiceById(serviceId)
    if (service?.isBundle) {
      return bundleIds.includes(serviceId)
    }
    return selectedServiceIds.includes(serviceId)
  }

  const hasReelBundle = bundleIds.includes('reel_bundle')

  return (
    <div className="w-full">
      {/* Progress Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base text-brand-gray-light">
          <span className="text-brand-gold font-semibold">Step 1: Build Your Package</span>
          <span>→</span>
          <span>Step 2: Secure Checkout</span>
          <span>→</span>
          <span>Step 3: Confirmation</span>
        </div>
      </div>

      {/* Quick-Add Preset Buttons */}
      <div className="mb-8">
        <p className="text-brand-gray-light text-sm mb-4 text-center">Or start with a preset package:</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {predefinedPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handlePresetPackage(pkg.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                pkg.id === 'reel_special'
                  ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-dark'
                  : 'bg-brand-gray-dark text-brand-white border border-brand-gray-dark hover:border-brand-gold'
              }`}
            >
              {pkg.name} ${pkg.price}{pkg.id === 'full_launch' ? '+' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="space-y-8">
        {serviceCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark"
          >
            <h3 className="text-2xl font-serif font-bold text-brand-white mb-4 flex items-center gap-2">
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </h3>
            <div className="space-y-3">
              {category.services.map((service) => {
                const isSelected = isServiceSelected(service.id)
                const isDisabled = service.id === 'reel' && hasReelBundle

                return (
                  <label
                    key={service.id}
                    className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-brand-gold/10 border-2 border-brand-gold'
                        : 'bg-brand-black border-2 border-brand-gray-dark hover:border-brand-gold/50'
                    } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleServiceToggle(service.id)}
                      disabled={isDisabled}
                      className="mt-1 w-5 h-5 text-brand-gold bg-brand-black border-brand-gray-dark rounded focus:ring-brand-gold focus:ring-2"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-white">
                          {service.name}
                          {service.isBundle && (
                            <span className="ml-2 text-xs bg-brand-gold text-brand-black px-2 py-1 rounded">
                              🔥 Bundle
                            </span>
                          )}
                        </span>
                        <span className="text-brand-gold font-bold">${service.price}</span>
                      </div>
                      {service.description && (
                        <p className="text-sm text-brand-gray-light mt-1">{service.description}</p>
                      )}
                      {service.id === 'reel_bundle' && isSelected && (
                        <p className="text-xs text-brand-gold mt-2 font-medium">
                          💡 Get 1 free when you buy 5 reels
                        </p>
                      )}
                      {service.id === 'launch_page_48h' && isSelected && (
                        <p className="text-xs text-brand-gold mt-2 font-medium">
                          💡 Ready to grow? Upgrade to Basic for email capture and domain setup.
                        </p>
                      )}
                      {service.id === 'creator_website_basic' && isSelected && (
                        <p className="text-xs text-brand-gold mt-2 font-medium">
                          💡 Ready to grow? Upgrade to Plus for more visibility.
                        </p>
                      )}
                      {service.id === 'creator_site_package' && isSelected && (
                        <p className="text-xs text-brand-gold mt-2 font-medium">
                          💡 Add strategy now so your brand ranks before launch. (Market Research Report recommended)
                        </p>
                      )}
                      {service.id === 'full_brand_system' && isSelected && (
                        <p className="text-xs text-brand-gold mt-2 font-medium">
                          🎯 Launch ready, automated, and brand-perfect. Includes free Brand Sheet & Reel bonus.
                        </p>
                      )}
                      {isDisabled && (
                        <p className="text-xs text-brand-gray-light mt-1 italic">
                          Included in 5-Reel Special bundle
                        </p>
                      )}
                    </div>
                  </label>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Notes */}
      <div className="mt-8">
        <label className="block text-brand-white text-sm font-medium mb-2">
          Need something not listed? Describe it below.
        </label>
        <textarea
          value={customNotes}
          onChange={(e) => setCustomNotes(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200 resize-none"
          placeholder="Tell us about any custom requirements..."
        />
      </div>

      {/* Live Total Calculator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 bg-gradient-to-r from-brand-gold/10 to-brand-gold-dark/10 rounded-xl p-6 border-2 border-brand-gold"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            {selectedPackageId && (
              <div className="mb-2">
                <span className="inline-block bg-brand-gold text-brand-black px-3 py-1 rounded-full text-xs font-bold mb-2">
                  {predefinedPackages.find(p => p.id === selectedPackageId)?.name}
                </span>
                {savings !== null && savings > 0 && (
                  <p className="text-sm text-brand-gold font-medium">
                    💰 You're saving ${savings} vs. individual pricing!
                  </p>
                )}
              </div>
            )}
            <p className="text-brand-gray-light text-sm">Estimated Total</p>
            <motion.p
              key={total}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-4xl font-serif font-bold text-brand-gold mt-1"
            >
              ${total}
            </motion.p>
            {selectedPackageId && (
              <p className="text-xs text-brand-gray-light mt-1">
                Package pricing applied
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-2">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
            <button
              onClick={handleRequestPackage}
              disabled={(total === 0 && !customNotes.trim()) || isLoading}
              className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Processing...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PackageBuilder

