'use client'

import React, { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { CheckCircle, Mail } from 'lucide-react'

function TemplateIntakeContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const templateSlug = searchParams.get('template')
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedPages, setSelectedPages] = useState<string[]>([])
  const [selectedSections, setSelectedSections] = useState<string[]>([])
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [extraPagesCount, setExtraPagesCount] = useState(0)
  const [needsPlaceholderText, setNeedsPlaceholderText] = useState('')

  const handlePageToggle = (page: string) => {
    setSelectedPages(prev => 
      prev.includes(page) 
        ? prev.filter(p => p !== page)
        : [...prev, page]
    )
  }

  const handleSectionToggle = (section: string) => {
    setSelectedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleAddonToggle = (addon: string) => {
    setSelectedAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add selected pages, sections, and addons to form data
    formData.append('selected_pages', selectedPages.join(', '))
    formData.append('selected_sections', selectedSections.join(', '))
    formData.append('selected_addons', selectedAddons.join(', '))
    if (selectedAddons.includes('extra_page') && extraPagesCount > 0) {
      formData.append('extra_pages_count', extraPagesCount.toString())
    }
    
    // Submit to Formspree
    fetch('https://formspree.io/f/movgwpon', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true)
          form.reset()
        } else {
          alert('There was an error submitting the form. Please try again or email support@lopezproductions.ai')
        }
      })
      .catch(error => {
        console.error('Error:', error)
        alert('There was an error submitting the form. Please try again or email support@lopezproductions.ai')
      })
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        <section className="py-20 px-6 md:px-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="container mx-auto max-w-[600px] text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-gold/20 rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-brand-gold" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-white mb-4">
                You&apos;re All Set!
              </h1>
              
              <p className="text-xl text-brand-gray-light mb-8">
                Thanks for submitting your project details.
              </p>
              
              <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark mb-8 text-left">
                <p className="text-brand-gray-light mb-4 leading-relaxed">
                  I&apos;ll begin preparing your build and reach out within 24 hours with your preview link and next steps.
                </p>
                <p className="text-brand-gray-light leading-relaxed">
                  If you need to send additional files or updates, email:
                </p>
                <p className="mt-2">
                  <a
                    href="mailto:support@lopezproductions.ai"
                    className="text-brand-gold hover:text-brand-gold-dark transition-colors underline text-lg"
                  >
                    📧 support@lopezproductions.ai
                  </a>
                </p>
                <p className="text-sm text-brand-gray-light mt-4">
                  Reply time: Within 24 hours (usually much faster).
                </p>
              </div>
            </motion.div>
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
              Website Template Customization — Client Intake Form
            </h1>
            <p className="text-brand-gray-light text-lg">
              Help us customize your template by completing this form.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-gray-dark rounded-xl p-6 md:p-8 border border-brand-gray-dark"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields */}
              {sessionId && <input type="hidden" name="session_id" value={sessionId} />}
              {templateSlug && <input type="hidden" name="template_slug" value={templateSlug} />}

              {/* Section 1: Client Info */}
              <div>
                <h2 className="text-xl font-serif font-bold text-brand-white mb-4">
                  Client Info
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Name *</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Email (must match purchase email) *</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Business / Project Name</span>
                    <input
                      type="text"
                      name="business_name"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Brief description of what you do *</span>
                    <textarea
                      name="description"
                      rows={3}
                      required
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </label>
                </div>
              </div>

              {/* Section 2: Branding */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Branding
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Upload your logo (URL or Drive link)</span>
                    <input
                      type="url"
                      name="logo_url"
                      placeholder="https://..."
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Primary brand color (hex or reference)</span>
                    <input
                      type="text"
                      name="primary_color"
                      placeholder="#C5A059 or 'gold'"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Secondary brand color</span>
                    <input
                      type="text"
                      name="secondary_color"
                      placeholder="#9A7A3F or 'dark gold'"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Font preference (Google Fonts preferred)</span>
                    <input
                      type="text"
                      name="font_preference"
                      placeholder="e.g., Inter, Playfair Display, Roboto"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Upload any brand inspiration or reference images (URL)</span>
                    <input
                      type="url"
                      name="brand_inspiration_url"
                      placeholder="https://..."
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>
                </div>
              </div>

              {/* Section 3: Website Structure */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Website Structure
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-brand-gray-light mb-2 block">What are the 3 pages you want customized? *</span>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio', 'Pricing', 'FAQ'].map((page) => (
                        <label key={page} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedPages.includes(page)}
                            onChange={() => handlePageToggle(page)}
                            className="w-5 h-5 rounded border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                          />
                          <span className="text-brand-gray-light">{page}</span>
                        </label>
                      ))}
                    </div>
                    <input type="hidden" name="selected_pages" value={selectedPages.join(', ')} />
                  </div>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">What is the goal of your website? *</span>
                    <select
                      name="website_goal"
                      required
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      <option value="">Select a goal...</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="lead_generation">Lead generation</option>
                      <option value="resume">Resume</option>
                      <option value="sales">Sales</option>
                      <option value="blog">Blog</option>
                      <option value="business">Business showcase</option>
                      <option value="other">Other</option>
                    </select>
                  </label>

                  <div>
                    <span className="text-brand-gray-light mb-2 block">Do you want any custom sections?</span>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {['Hero', 'Pricing block', 'Testimonials', 'FAQ', 'Team', 'Gallery', 'Features', 'CTA'].map((section) => (
                        <label key={section} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedSections.includes(section)}
                            onChange={() => handleSectionToggle(section)}
                            className="w-5 h-5 rounded border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                          />
                          <span className="text-brand-gray-light">{section}</span>
                        </label>
                      ))}
                    </div>
                    <input type="hidden" name="selected_sections" value={selectedSections.join(', ')} />
                  </div>
                </div>
              </div>

              {/* Section 4: Content Upload */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Content Upload
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Upload your text/content files (PDF, .docx, or Google Doc link)</span>
                    <input
                      type="url"
                      name="content_files_url"
                      placeholder="https://..."
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Upload your images (PNG/JPG - URL or multiple URLs separated by commas)</span>
                    <textarea
                      name="images_url"
                      rows={3}
                      placeholder="https://image1.jpg, https://image2.png, ..."
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </label>

                  <div>
                    <span className="text-brand-gray-light mb-2 block">Do you need me to fill in placeholder text? *</span>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needs_placeholder_text"
                          value="yes"
                          checked={needsPlaceholderText === 'yes'}
                          onChange={(e) => setNeedsPlaceholderText(e.target.value)}
                          required
                          className="w-5 h-5 border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                        />
                        <span className="text-brand-gray-light">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needs_placeholder_text"
                          value="no"
                          checked={needsPlaceholderText === 'no'}
                          onChange={(e) => setNeedsPlaceholderText(e.target.value)}
                          required
                          className="w-5 h-5 border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                        />
                        <span className="text-brand-gray-light">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Additional Options */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Additional Options
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-brand-gray-light mb-2 block">Add-on selection:</span>
                    <div className="space-y-3 mt-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAddons.includes('custom_image_pack')}
                          onChange={() => handleAddonToggle('custom_image_pack')}
                          className="w-5 h-5 rounded border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                        />
                        <span className="text-brand-gray-light">Custom Image Pack (+$25)</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAddons.includes('mobile_optimization')}
                          onChange={() => handleAddonToggle('mobile_optimization')}
                          className="w-5 h-5 rounded border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                        />
                        <span className="text-brand-gray-light">Mobile Optimization (+$50)</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAddons.includes('extra_page')}
                          onChange={() => handleAddonToggle('extra_page')}
                          className="w-5 h-5 rounded border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                        />
                        <span className="text-brand-gray-light">Extra page build (+$60/page)</span>
                      </label>
                      {selectedAddons.includes('extra_page') && (
                        <div className="ml-7">
                          <label className="block">
                            <span className="text-brand-gray-light mb-2 block text-sm">How many extra pages?</span>
                            <input
                              type="number"
                              min="1"
                              value={extraPagesCount}
                              onChange={(e) => setExtraPagesCount(parseInt(e.target.value) || 0)}
                              className="w-24 p-2 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                            />
                          </label>
                        </div>
                      )}
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAddons.length === 0}
                          onChange={() => setSelectedAddons([])}
                          className="w-5 h-5 rounded border-brand-gray-dark bg-brand-black text-brand-gold focus:ring-brand-gold focus:ring-2"
                        />
                        <span className="text-brand-gray-light">None for now</span>
                      </label>
                    </div>
                    <input type="hidden" name="selected_addons" value={selectedAddons.join(', ')} />
                  </div>
                </div>
              </div>

              {/* Optional Fields */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">
                  Optional Information
                </h2>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Social media links</span>
                    <textarea
                      name="social_links"
                      rows={2}
                      placeholder="@instagram, @x, LinkedIn profile, etc."
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Domain name (if you want me to set it up)</span>
                    <input
                      type="text"
                      name="domain_name"
                      placeholder="yourdomain.com"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white placeholder-brand-gray-muted focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-brand-gray-light mb-2 block">Hosting preference</span>
                    <select
                      name="hosting_preference"
                      className="w-full p-3 rounded-lg bg-brand-black border border-brand-gray-dark text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      <option value="">Select hosting preference...</option>
                      <option value="netlify">Netlify</option>
                      <option value="vercel">Vercel</option>
                      <option value="not_sure">Not sure</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-brand-gray-dark">
                <button
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black px-6 py-3 rounded-lg font-semibold mt-6 transition-colors"
                >
                  Submit & Start Build
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function TemplateIntakePage() {
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
      <TemplateIntakeContent />
    </Suspense>
  )
}




