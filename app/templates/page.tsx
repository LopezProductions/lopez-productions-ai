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
      <main className="min-h-screen bg-background relative overflow-hidden">
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
          
          {/* 1. Hero Section */}
          <section className="pt-20 pb-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                Template Library
              </h1>
              <p className="text-2xl font-serif text-text-secondary mb-4 max-w-3xl">
                Your Website Is Costing You Clients. Fix That This Weekend.
              </p>
              <p className="text-lg text-text-secondary mb-12 max-w-3xl leading-relaxed">
                Clean, fast, and modern Vite &amp; Next.js templates built to launch your site in hours—not weeks. No coding overwhelm. No design bottlenecks. Just a high-performance website that looks like you paid $1,000+.
              </p>
            </div>
          </section>

          {/* 2. Quick Benefit Bar */}
          <section className="py-12 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="text-sm text-brand-gray-light">Lightning-fast performance</p>
                  <p className="text-xs text-brand-gray-muted mt-1">Vite / Next.js</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <p className="text-sm text-brand-gray-light">Clean, modern designs</p>
                  <p className="text-xs text-brand-gray-muted mt-1">React + Tailwind</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-sm text-brand-gray-light">Responsive out of the box</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <p className="text-sm text-brand-gray-light">Easy to customize</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <p className="text-sm text-brand-gray-light">Lifetime updates</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="text-sm text-brand-gray-light">24-hour support</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Template Gallery */}
          <section id="templates" className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => {
                  const hasError = errorFrames.has(template.url)
                  const isLoading = !loadedFrames.has(template.url) && !hasError

                  return (
                    <Link
                      key={template.slug}
                      href={`/templates/${template.slug}`}
                      className="group rounded-2xl border border-border bg-gradient-to-b from-white/5 to-transparent overflow-hidden card-hover relative"
                    >
                      {/* Preview iframe */}
                      <div className="aspect-square relative bg-background">
                        {!hasError ? (
                          <>
                            {isLoading && (
                              <div className="absolute inset-0 flex items-center justify-center bg-surface/50 z-10">
                                <div className="text-center">
                                  <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                  <p className="text-text-secondary text-sm">Loading preview...</p>
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
                              <p className="text-text-secondary text-sm mb-4">
                                Preview unavailable
                              </p>
                              <span className="text-accent text-sm">
                                View Template →
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Overlay with title and link */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                            {template.category}
                          </p>
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-text-primary mb-2">
                            {template.title}
                          </h3>
                          <span className="inline-flex items-center text-accent hover:text-accent-dark text-sm font-medium">
                            <span className="mr-2">View Template</span>
                            <span>→</span>
                          </span>
                        </div>
                      </div>

                      {/* Always visible title at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-black/80 to-transparent pointer-events-none">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs uppercase tracking-[0.2em] text-accent">
                            {template.category}
                          </span>
                          <span className="text-xs bg-brand-gold text-brand-black px-2 py-1 rounded font-semibold">
                            Starting at $50
                          </span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-text-primary mb-1">
                          {template.title}
                        </h3>
                        <p className="text-xs text-brand-gray-light mb-2">
                          {template.description}
                        </p>
                        <span className="inline-flex items-center text-accent text-sm font-medium">
                          View Template →
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          {/* 4. What You Get */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                What&apos;s Included
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
                  <ul className="space-y-3 text-brand-gray-light">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>Full React/Next.js + Tailwind codebase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>3–5 page layouts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>Responsive base styling</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
                  <ul className="space-y-3 text-brand-gray-light">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>Setup instructions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>Lifetime updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Pricing Breakdown */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                Simple Pricing
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">
                    Starter Template — $50
                  </h3>
                  <p className="text-brand-gray-light mb-4">
                    DIY version with everything included. Install, edit, deploy.
                  </p>
                </div>
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">
                    Done-For-You Website — $250
                  </h3>
                  <p className="text-brand-gray-light mb-4">
                    I customize the template for you (up to 3 pages).
                  </p>
                </div>
              </div>
              <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark mb-6">
                <h4 className="text-xl font-serif font-bold text-brand-white mb-4">
                  Optional Add-Ons
                </h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Custom Image Pack (+$25)</li>
                  <li>• Mobile Optimization (+$50)</li>
                  <li>• Extra Page Build (+$60/page)</li>
                </ul>
              </div>
              <div className="text-center">
                <Link
                  href="/template-intake"
                  className="inline-block bg-brand-gold hover:bg-brand-gold-dark text-brand-black px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started with Intake Form →
                </Link>
              </div>
            </div>
          </section>

          {/* 6. How It Works */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-12">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-gold">1</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-white mb-2">
                    Choose a template
                  </h3>
                  <p className="text-brand-gray-light">
                    Pick the design you like best.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-gold">2</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-white mb-2">
                    Choose DIY or Done-For-You
                  </h3>
                  <p className="text-brand-gray-light">
                    Either edit it yourself or I set everything up.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-gold">3</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-white mb-2">
                    Launch your new website
                  </h3>
                  <p className="text-brand-gray-light">
                    Deploy on Netlify/Vercel and go live this weekend.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Trust Section */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                Why These Templates Work
              </h2>
              <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark">
                <ul className="space-y-4 text-brand-gray-light">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">Built for speed</strong> (no bloated page builders)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">Tailwind-coded</strong> for consistent UI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">Designed with modern UX patterns</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">SEO-friendly structure</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">Actually easy to edit</strong> (clear class names, clean layout)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 8. Testimonials */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-12">
                What People Are Saying
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
                  <p className="text-brand-gray-light italic mb-4">
                    &quot;I launched my site in a weekend using Polaris Blue. Clean, fast, and simple.&quot;
                  </p>
                  <p className="text-brand-gold font-semibold">— Template User</p>
                </div>
                <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
                  <p className="text-brand-gray-light italic mb-4">
                    &quot;The Done-For-You option saved me weeks of work. Professional results in days.&quot;
                  </p>
                  <p className="text-brand-gold font-semibold">— Template User</p>
                </div>
              </div>
            </div>
          </section>

          {/* 9. FAQ */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    Do I need coding experience?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    Not necessarily. Beginners can use the templates with minimal editing, and developers can customize them deeply. If you&apos;d rather not touch code, the $250 Done-For-You package handles everything for you.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    Is the template mobile-friendly?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    Yes. All templates include baseline responsive styling out of the box. The Mobile Optimization add-on provides extra refinement for perfect spacing and typography scaling.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    What&apos;s the difference between $50 and $250?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    $50 Template — DIY: You receive the full codebase and customize it yourself. $250 Done-For-You — Assisted Build: I customize up to 3 pages for you, apply your branding, help shape your layout, and handle deployment.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    How long does Done-For-You take?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    Most builds are completed within 24–72 hours, depending on complexity and the number of customizations requested. You&apos;ll receive an intake form immediately after purchase so we can start quickly.
                  </p>
                </details>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/templates/polaris-blue#faq"
                  className="text-brand-gold hover:text-brand-gold-dark transition-colors underline"
                >
                  View full FAQ on template pages →
                </Link>
              </div>
            </div>
          </section>

          {/* 10. Final CTA */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-4">
                Ready to launch your new website?
              </h2>
              <p className="text-xl text-brand-gray-light mb-8">
                Pick a template and get started today.
              </p>
              <a
                href="#templates"
                className="inline-block bg-brand-gold hover:bg-brand-gold-dark text-brand-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Browse Templates
              </a>
            </div>
          </section>
          
          <Footer />
        </div>
      </main>
    </>
  )
}
