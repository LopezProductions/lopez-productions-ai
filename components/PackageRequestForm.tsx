'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface PackageRequestFormProps {
  isOpen: boolean
  onClose: () => void
  packageData: {
    selectedServiceIds: string[]
    bundleIds: string[]
    total: number
    customNotes: string
    packageSelection: string
  } | null
}

const PackageRequestForm: React.FC<PackageRequestFormProps> = ({ isOpen, onClose, packageData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Custom website form state
  const [service, setService] = useState('')
  const [websiteTypes, setWebsiteTypes] = useState<string[]>([])
  const [pageCount, setPageCount] = useState('')
  const [pagesNeeded, setPagesNeeded] = useState<string[]>([])
  const [otherWebsiteType, setOtherWebsiteType] = useState('')
  const [otherPage, setOtherPage] = useState('')
  const [brandingStatus, setBrandingStatus] = useState('')
  const [contentReadiness, setContentReadiness] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset form when opened
      setIsSubmitted(false)
      // Pre-select service if it's a custom website
      if (packageData && isCustomWebsite(packageData.selectedServiceIds)) {
        const serviceId = packageData.selectedServiceIds.find(id => 
          ['starter-site', 'business-rebuild', 'premium-site', 'full-business-suite'].includes(id)
        )
        if (serviceId) {
          setService(serviceId)
        }
      }
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, packageData])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const isCustomWebsite = (serviceIds: string[]): boolean => {
    const customWebsiteIds = ['starter-site', 'business-rebuild', 'premium-site', 'full-business-suite']
    return serviceIds.some(id => customWebsiteIds.includes(id))
  }

  const handleWebsiteTypeToggle = (type: string) => {
    setWebsiteTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const handlePageToggle = (page: string) => {
    setPagesNeeded(prev => 
      prev.includes(page) 
        ? prev.filter(p => p !== page)
        : [...prev, page]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    // Add custom website specific fields
    if (packageData && isCustomWebsite(packageData.selectedServiceIds)) {
      formData.append('service', service)
      formData.append('website_types', websiteTypes.join(', '))
      formData.append('page_count', pageCount)
      formData.append('pages_needed', pagesNeeded.join(', '))
      formData.append('branding_status', brandingStatus)
      formData.append('content_readiness', contentReadiness)
      if (otherWebsiteType) formData.append('other_website_type', otherWebsiteType)
      if (otherPage) formData.append('other_page', otherPage)
    }

    try {
      const response = await fetch('https://formspree.io/f/xldpoywb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        alert('There was an error submitting the form. Please try again or email support@lopezproductions.ai')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error submitting the form. Please try again or email support@lopezproductions.ai')
    }
  }

  if (!packageData) return null

  const hasReelBundle = packageData.bundleIds.includes('reel_bundle')
  const isCustomWebsiteService = isCustomWebsite(packageData.selectedServiceIds)

  // Success message
  if (isSubmitted) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-brand-gray-dark rounded-xl border border-brand-gray-dark shadow-2xl max-w-2xl w-full p-8"
            >
              <div className="text-center">
                <h2 className="text-2xl font-serif font-bold text-brand-white mb-4">
                  Thank You!
                </h2>
                <p className="text-brand-gray-light leading-relaxed mb-6">
                  Thanks! I&apos;ll review your form and email you within 24 hours with next steps, timeline, and a clear quote based on your project.
                </p>
                <p className="text-brand-gray-light leading-relaxed mb-6">
                  No payment is required until we confirm scope and start your build.
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary px-8 py-3"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brand-gray-dark rounded-xl border border-brand-gray-dark shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-gray-dark sticky top-0 bg-brand-gray-dark z-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-brand-white">
                  {isCustomWebsiteService ? 'Custom Website Intake Form' : 'Request Your Package'}
                </h2>
                <p className="text-brand-gray-light text-sm mt-1">
                  {isCustomWebsiteService 
                    ? 'Complete the form below and we\'ll send you a custom quote within 24 hours.'
                    : 'Complete the form below and we\'ll send you a custom quote within 24 hours.'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-brand-gray-light hover:text-brand-gold transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Package Summary */}
            <div className="p-6 bg-brand-black border-b border-brand-gray-dark">
              <h3 className="text-lg font-semibold text-brand-white mb-3">Package Summary</h3>
              <div className="space-y-2 text-sm text-brand-gray-light mb-4 whitespace-pre-line">
                {packageData.packageSelection || 'Custom package'}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-brand-gray-dark">
                <span className="text-brand-gray-light font-medium">Estimated Total:</span>
                <span className="text-2xl font-serif font-bold text-brand-gold">
                  ${packageData.total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Form */}
            <form 
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="p-6 space-y-8"
            >
              <input type="hidden" name="_next" value="https://lopezproductions.ai/thank-you" />
              
              {/* Hidden fields for Formspree personalization */}
              <input type="hidden" name="package_selection" value={packageData.packageSelection} />
              <input type="hidden" name="total_price" value={packageData.total.toString()} />
              <input type="hidden" name="bundle_type" value={hasReelBundle ? '5-Reel Special' : ''} />
              <input type="hidden" name="selected_services" value={JSON.stringify(packageData.selectedServiceIds)} />
              <input type="hidden" name="bundle_ids" value={JSON.stringify(packageData.bundleIds)} />

              {isCustomWebsiteService ? (
                <>
                  {/* SECTION 1: Contact Information */}
                  <div className="space-y-4 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">1. Contact Information</h3>
                    
                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">
                        Business or Project Name (optional)
                      </label>
                      <input
                        type="text"
                        name="business_name"
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                        placeholder="Your business or project name"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">
                        Website URL (if you have one)
                      </label>
                      <input
                        type="url"
                        name="website_url"
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>

                  {/* SECTION 2: Service Selection */}
                  <div className="space-y-3 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">2. Which service are you interested in? *</h3>
                    
                    {[
                      { id: 'starter-site', label: 'Starter Site — 1 Page ($500)' },
                      { id: 'business-rebuild', label: 'Business Rebuild — 3 Pages ($1,000)' },
                      { id: 'premium-site', label: 'Premium Website — 4–6 Pages ($1,500+)' },
                      { id: 'full-business-suite', label: 'Full Business Suite — 6–10 Pages ($2,500+)' },
                      { id: 'not-sure', label: 'Not sure — help me choose' },
                    ].map((option) => (
                      <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="service"
                          value={option.id}
                          checked={service === option.id}
                          onChange={(e) => setService(e.target.value)}
                          required
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* SECTION 3: Website Type */}
                  <div className="space-y-3 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">3. What type of website do you need? (check all that apply)</h3>
                    
                    {[
                      'Personal brand / portfolio',
                      'Small business site',
                      'Creator / influencer site',
                      'Coaching or consulting site',
                      'E-commerce (lite)',
                      'Web3 or crypto project',
                      'Professional services (legal, medical, real estate, etc.)',
                    ].map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={websiteTypes.includes(type)}
                          onChange={() => handleWebsiteTypeToggle(type)}
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark rounded focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          {type}
                        </span>
                      </label>
                    ))}
                    
                    <div className="mt-3">
                      <label className="flex items-center gap-3 cursor-pointer group mb-2">
                        <input
                          type="checkbox"
                          checked={websiteTypes.includes('Other')}
                          onChange={() => handleWebsiteTypeToggle('Other')}
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark rounded focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          Other
                        </span>
                      </label>
                      {websiteTypes.includes('Other') && (
                        <input
                          type="text"
                          value={otherWebsiteType}
                          onChange={(e) => setOtherWebsiteType(e.target.value)}
                          className="w-full px-4 py-2 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200 mt-2"
                          placeholder="Please specify"
                        />
                      )}
                    </div>
                  </div>

                  {/* SECTION 4: Number of Pages */}
                  <div className="space-y-3 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">4. How many pages do you expect? *</h3>
                    
                    {['1', '2–3', '4–6', '6–10', 'More than 10 (requires custom quote)'].map((count) => (
                      <label key={count} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="page_count"
                          value={count}
                          checked={pageCount === count}
                          onChange={(e) => setPageCount(e.target.value)}
                          required
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          {count}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* SECTION 5: Which Pages Needed */}
                  <div className="space-y-3 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">5. Which pages do you need? (check all that apply)</h3>
                    
                    {['Home', 'About', 'Services', 'Portfolio / Case Studies', 'Contact', 'Blog', 'FAQ', 'Pricing'].map((page) => (
                      <label key={page} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={pagesNeeded.includes(page)}
                          onChange={() => handlePageToggle(page)}
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark rounded focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          {page}
                        </span>
                      </label>
                    ))}
                    
                    <div className="mt-3">
                      <label className="flex items-center gap-3 cursor-pointer group mb-2">
                        <input
                          type="checkbox"
                          checked={pagesNeeded.includes('Other')}
                          onChange={() => handlePageToggle('Other')}
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark rounded focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          Other
                        </span>
                      </label>
                      {pagesNeeded.includes('Other') && (
                        <input
                          type="text"
                          value={otherPage}
                          onChange={(e) => setOtherPage(e.target.value)}
                          className="w-full px-4 py-2 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200 mt-2"
                          placeholder="Please specify"
                        />
                      )}
                    </div>
                  </div>

                  {/* SECTION 6: Primary Goal */}
                  <div className="border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">6. What is the primary goal of your website? *</h3>
                    <input
                      type="text"
                      name="primary_goal"
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                      placeholder="e.g., Get more clients, Improve credibility, Showcase work, Sell offerings, Build an online presence, Launch a brand"
                    />
                  </div>

                  {/* SECTION 7: Branding Status */}
                  <div className="space-y-3 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">7. Do you already have branding? *</h3>
                    
                    {[
                      'Yes — I have a logo + colors + typography',
                      'Some — I have a logo but need help with colors/feel',
                      'No — I need help developing a basic brand style',
                      'Not sure',
                    ].map((status) => (
                      <label key={status} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="branding_status"
                          value={status}
                          checked={brandingStatus === status}
                          onChange={(e) => setBrandingStatus(e.target.value)}
                          required
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          {status}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* SECTION 8: Content Readiness */}
                  <div className="space-y-3 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">8. Do you already have your content ready? *</h3>
                    
                    {[
                      'Yes — all copy is ready',
                      'Mostly — I need help polishing it',
                      'Not yet — I need copywriting support',
                      'I want you to write everything for me (add-on)',
                    ].map((readiness) => (
                      <label key={readiness} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="content_readiness"
                          value={readiness}
                          checked={contentReadiness === readiness}
                          onChange={(e) => setContentReadiness(e.target.value)}
                          required
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          {readiness}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* SECTION 9: Asset Upload */}
                  <div className="border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">9. Upload any assets you&apos;d like included (optional)</h3>
                    <input
                      type="file"
                      name="assets"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-gold file:text-brand-black hover:file:bg-brand-gold-dark file:cursor-pointer focus:border-brand-gold focus:outline-none transition-colors duration-200"
                    />
                    <p className="text-xs text-brand-gray-light mt-2">
                      Logos, brand colors, screenshots, examples, PDFs, etc.
                    </p>
                  </div>

                  {/* SECTION 10: Timeline */}
                  <div className="space-y-3 border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">10. What is your ideal timeline? *</h3>
                    
                    {['ASAP (1 week)', '2 weeks', '3–4 weeks', 'Flexible'].map((timeline) => (
                      <label key={timeline} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline}
                          required
                          className="w-5 h-5 text-brand-gold border-brand-gray-dark focus:ring-brand-gold focus:ring-2 cursor-pointer"
                        />
                        <span className="text-brand-gray-light group-hover:text-brand-white transition-colors">
                          {timeline}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* SECTION 11: Additional Information */}
                  <div className="border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">11. Tell me anything else that would be helpful</h3>
                    <textarea
                      name="additional_info"
                      rows={6}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="This is where serious buyers write paragraphs..."
                    />
                  </div>

                  {/* SECTION 12: Budget Range */}
                  <div className="border-b border-brand-gray-dark pb-6">
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">12. Budget Range (optional but helpful)</h3>
                    <select
                      name="budget_range"
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Choose one (optional)</option>
                      <option value="$500–$1,000">$500–$1,000</option>
                      <option value="$1,000–$2,000">$1,000–$2,000</option>
                      <option value="$2,000–$4,000">$2,000–$4,000</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  {/* SECTION 13: Referral Source */}
                  <div>
                    <h3 className="text-lg font-serif font-bold text-brand-white mb-4">13. How did you hear about Lopez Productions?</h3>
                    <select
                      name="referral_source"
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Choose one</option>
                      <option value="X (Twitter)">X (Twitter)</option>
                      <option value="TikTok">TikTok</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Google">Google</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  {/* Simple form for non-custom-website packages */}
                  <div>
                    <label className="block text-brand-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-white text-sm font-medium mb-2">
                      Additional Notes or Custom Requests
                    </label>
                    <textarea
                      name="custom_request"
                      rows={4}
                      defaultValue={packageData.customNotes}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Any additional details about your project..."
                    />
                  </div>

                  <div>
                    <label className="block text-brand-white text-sm font-medium mb-2">
                      Budget Range (optional)
                    </label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Choose one (optional)</option>
                      <option value="$100–$300">$100–$300</option>
                      <option value="$300–$750">$300–$750</option>
                      <option value="$750–$1,500">$750–$1,500</option>
                      <option value="Over $1,500">Over $1,500</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg font-medium"
                >
                  {isCustomWebsiteService ? 'Submit Intake Form' : 'Submit Package Request'}
                </button>
                <p className="text-xs text-brand-gray-light text-center mt-3">
                  {isCustomWebsiteService 
                    ? 'You\'ll receive a confirmation email immediately. I\'ll review your form and email you within 24 hours with next steps.'
                    : 'You\'ll receive a confirmation email immediately with next steps.'}
                </p>
                <div className="mt-4 pt-4 border-t border-brand-gray-dark">
                  <a
                    href="https://calendly.com/reuben-lopezproductions/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full py-3 text-lg text-center block"
                  >
                    Prefer to talk through your project? Schedule a call instead →
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PackageRequestForm
