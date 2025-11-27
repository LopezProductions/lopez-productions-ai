'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const templates = [
  {
    slug: 'polaris-blue',
    url: 'https://polaris-blue.netlify.app/',
    title: 'Polaris Blue',
    category: 'Web Template',
    description: 'A modern, professional website template with a clean blue aesthetic.',
  },
  {
    slug: 'polaris-light',
    url: 'https://polaris-light.netlify.app/',
    title: 'Polaris Light',
    category: 'Web Template',
    description: 'A light, airy website template perfect for modern brands.',
  },
  {
    slug: 'law-crest',
    url: 'https://law-crest.netlify.app/',
    title: 'Law Crest',
    category: 'Web Template',
    description: 'A professional legal services website template with elegant design.',
  },
  {
    slug: 'roamline',
    url: 'https://roamline.netlify.app/',
    title: 'Roamline',
    category: 'Web Template',
    description: 'A travel and adventure-focused website template.',
  },
  {
    slug: 'shieldcare',
    url: 'https://shieldcare.netlify.app/',
    title: 'Shieldcare',
    category: 'Web Template',
    description: 'A healthcare and medical services website template.',
  },
  {
    slug: 'revive-pt',
    url: 'https://revive-pt.netlify.app/',
    title: 'Revive PT',
    category: 'Web Template',
    description: 'A physical therapy and wellness website template.',
  },
]

export default function TemplatesPage() {
  const [loadedFrames, setLoadedFrames] = useState<Set<string>>(new Set())
  const [errorFrames, setErrorFrames] = useState<Set<string>>(new Set())

  const handleIframeLoad = (url: string) => {
    setLoadedFrames((prev) => new Set(prev).add(url))
  }

  const handleIframeError = (url: string) => {
    setErrorFrames((prev) => new Set(prev).add(url))
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Lopez Productions Template Library',
    itemListElement: templates.map((t, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://lopezproductions.ai/templates/${t.slug}`,
    })),
  }

  return (
    <>
      <Script id="templates-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <main className="min-h-screen bg-brand-black relative overflow-hidden">
        {/* Background with logo - very dark silhouette */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/transparent_logo_lp.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        {/* Dark overlay to create silhouette effect */}
        <div className="fixed inset-0 bg-gradient-to-br from-brand-black/85 via-brand-gray-dark/80 to-brand-black/85" />
        
        {/* Subtle gold halo effect around the logo */}
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl" />
        </div>
        
        {/* Minimal gold glow overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent" />
        
        <div className="relative z-10">
          <Navigation />
          
          <section className="pt-20 pb-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                Template Library
              </h1>
              <p className="text-2xl font-serif text-brand-gray-light mb-4 max-w-3xl">
                Your Website Is Costing You Clients. Fix That This Weekend.
              </p>
              <p className="text-lg text-brand-gray-light mb-4 max-w-3xl leading-relaxed">
                These high-performance Vite &amp; Next.js templates give you a $1k-quality website without waiting months on a designer.
              </p>
              <p className="text-lg text-brand-gray-light mb-12 max-w-3xl leading-relaxed">
                Clean design, fast loads, and simple editing—so you go live in hours, not weeks.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => {
                  const hasError = errorFrames.has(template.url)
                  const isLoading = !loadedFrames.has(template.url) && !hasError

                  return (
                    <Link
                      key={template.slug}
                      href={`/templates/${template.slug}`}
                      className="group rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent overflow-hidden card-hover relative"
                    >
                      {/* Preview iframe */}
                      <div className="aspect-square relative bg-brand-black">
                        {!hasError ? (
                          <>
                            {isLoading && (
                              <div className="absolute inset-0 flex items-center justify-center bg-brand-gray-dark/50 z-10">
                                <div className="text-center">
                                  <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                  <p className="text-brand-gray-light text-sm">Loading preview...</p>
                                </div>
                              </div>
                            )}
                            <iframe
                              src={template.url}
                              title={`${template.title} preview`}
                              className="w-full h-full border-0 pointer-events-none"
                              loading="lazy"
                              onLoad={() => handleIframeLoad(template.url)}
                              onError={() => handleIframeError(template.url)}
                              sandbox="allow-same-origin allow-scripts"
                            />
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-gray-dark to-brand-black">
                            <div className="text-center p-6">
                              <p className="text-brand-gray-light text-sm mb-4">
                                Preview unavailable
                              </p>
                              <span className="text-brand-gold text-sm">
                                View Template →
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Overlay with title and link */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-2">
                            {template.category}
                          </p>
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-white mb-2">
                            {template.title}
                          </h3>
                          <span className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark text-sm font-medium">
                            <span className="mr-2">View Template</span>
                            <span>→</span>
                          </span>
                        </div>
                      </div>

                      {/* Always visible title at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-black/60 to-transparent pointer-events-none">
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-1">
                          {template.category}
                        </p>
                        <h3 className="text-lg font-serif font-bold text-brand-white">
                          {template.title}
                        </h3>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </main>
    </>
  )
}
