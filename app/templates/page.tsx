'use client'

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { Zap, Palette, Smartphone, Wrench, RefreshCw, Shield } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

// Helper function to map slug to image filename
function getTemplateImage(slug: string): string {
  const imageMap: Record<string, string> = {
    'polaris-blue': 'polarisblue-preview.png',
    'polaris-light': 'polarislight-preview.png',
    'law-crest': 'lawcrest-preview.png',
    'roamline': 'roamline-preview.png',
    'shieldcare': 'shieldcare-preview.png',
    'revive-pt': 'revivept-preview.png',
  }
  return imageMap[slug] || `${slug}-preview.png`
}

const templates = [
  {
    slug: 'polaris-blue',
    url: 'https://polaris-blue.netlify.app/',
    title: 'Polaris Blue',
    category: 'Web Template',
    description: 'Modern, professional blue aesthetic for tech companies, agencies, and creators.',
  },
  {
    slug: 'polaris-light',
    url: 'https://polaris-light.netlify.app/',
    title: 'Polaris Light',
    category: 'Web Template',
    description: 'Clean, airy layout built for modern brands and service businesses.',
  },
  {
    slug: 'law-crest',
    url: 'https://law-crest.netlify.app/',
    title: 'Law Crest',
    category: 'Web Template',
    description: 'Elegant, professional design for law firms, legal services, and consultants.',
  },
  {
    slug: 'roamline',
    url: 'https://roamline.netlify.app/',
    title: 'Roamline',
    category: 'Web Template',
    description: 'Travel and adventure focus; gallery support and smooth layouts.',
  },
  {
    slug: 'shieldcare',
    url: 'https://shieldcare.netlify.app/',
    title: 'Shieldcare',
    category: 'Web Template',
    description: 'Polished medical or wellness layout for clinics and healthcare providers.',
  },
  {
    slug: 'revive-pt',
    url: 'https://revive-pt.netlify.app/',
    title: 'Revive PT',
    category: 'Web Template',
    description: 'Performance-driven template for physical therapists, trainers, and wellness brands.',
  },
]

export default function TemplatesPage() {
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
                Launch a modern, high-performance website this weekend — without paying for a full custom build.
              </p>
              <p className="text-lg text-text-secondary mb-4 max-w-3xl leading-relaxed">
                Clean, fast React &amp; Next.js templates that look and perform like a $1,000+ site, but start at just $50.
              </p>
              <p className="text-base text-text-secondary mb-12 max-w-3xl leading-relaxed">
                No code overwhelm. No design bottlenecks. Just pick, customize, and publish.
              </p>
            </div>
          </section>

          {/* 2. Why These Templates Work */}
          <section className="py-12 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                Why these templates work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-serif font-bold text-brand-white">Lightning-fast performance</h3>
                  </div>
                  <p className="text-brand-gray-light text-sm">Built on Vite or Next.js</p>
                </div>
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <Palette className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-serif font-bold text-brand-white">Clean, modern UI</h3>
                  </div>
                  <p className="text-brand-gray-light text-sm">React + Tailwind</p>
                </div>
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-serif font-bold text-brand-white">Fully responsive</h3>
                  </div>
                  <p className="text-brand-gray-light text-sm">Out of the box</p>
                </div>
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <Wrench className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-serif font-bold text-brand-white">Easy to customize</h3>
                  </div>
                  <p className="text-brand-gray-light text-sm">And extend</p>
                </div>
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <RefreshCw className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-serif font-bold text-brand-white">Lifetime updates</h3>
                  </div>
                  <p className="text-brand-gray-light text-sm">And support</p>
                </div>
                <div className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-serif font-bold text-brand-white">SEO-friendly structure</h3>
                  </div>
                  <p className="text-brand-gray-light text-sm">Not bloated page builders</p>
                </div>
              </div>
              <p className="text-center text-brand-gray-light mt-8 max-w-3xl mx-auto">
                Each template ships with 3–5 page layouts, a complete codebase, and clear setup instructions — so you can launch quickly or upgrade later.
              </p>
            </div>
          </section>

          {/* 3. Browse Templates */}
          <section id="templates" className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-12">
                Browse templates
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => {
                  const imageFilename = getTemplateImage(template.slug)

                  return (
                    <Link
                      key={template.slug}
                      href={`/templates/${template.slug}`}
                      className="group rounded-2xl border border-border bg-gradient-to-b from-white/5 to-transparent overflow-hidden card-hover relative"
                    >
                      {/* Preview image */}
                      <div className="aspect-square relative bg-background overflow-hidden">
                        <Image
                          src={`/${imageFilename}`}
                          alt={`${template.title} preview`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Overlay with title and link (hover state) */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-5">
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
                      </div>

                      {/* Always visible title at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 pointer-events-none">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 md:p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs uppercase tracking-[0.2em] text-accent">
                              {template.category}
                            </span>
                            <span className="text-xs bg-brand-gold text-brand-black px-2 py-1 rounded font-semibold">
                              Starting at $50
                            </span>
                          </div>
                          <h3 className="text-lg font-serif font-bold text-text-primary mb-1">
                            {template.title} — Web Template
                          </h3>
                          <p className="text-xs text-brand-gray-light mb-2 line-clamp-2">
                            {template.description}
                          </p>
                          <span className="inline-flex items-center text-accent text-sm font-medium">
                            View Template →
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          {/* 4. What's Included */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                What&apos;s included
              </h2>
              <p className="text-brand-gray-light text-center mb-8 max-w-2xl mx-auto">
                Every template includes:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-black rounded-xl p-6 border border-brand-gray-dark">
                  <ul className="space-y-3 text-brand-gray-light">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>Full React/Next.js + Tailwind codebase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>3–5 prebuilt page layouts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">✓</span>
                      <span>Mobile-first responsive design</span>
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
              <p className="text-center text-brand-gray-light mt-8 max-w-2xl mx-auto">
                That&apos;s everything you need to launch a professional, modern website quickly.
              </p>
            </div>
          </section>

          {/* 5. Simple Pricing — Three Launch Paths */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-4">
                Simple pricing — three launch paths
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {/* Starter Template — $50 */}
                <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark">
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-brand-gold mb-2 block">1) Starter Template</span>
                    <h3 className="text-3xl font-serif font-bold text-brand-gold mb-4">$50</h3>
                    <p className="text-brand-gray-light text-sm mb-4">
                      DIY option for the budget-minded or hands-on user.
                    </p>
                  </div>
                  <ul className="space-y-3 text-brand-gray-light text-sm mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Download, install, and customize yourself</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Full codebase + 3–5 page layouts + instructions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Lifetime updates</span>
                    </li>
                  </ul>
                  <p className="text-brand-gray-light text-sm italic">
                    Perfect if you want total control and minimal spend.
                  </p>
                </div>

                {/* Template + Installation — $150 */}
                <div className="bg-brand-gray-dark rounded-xl p-8 border-2 border-brand-gold">
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-brand-gold mb-2 block">2) Template + Installation</span>
                    <h3 className="text-3xl font-serif font-bold text-brand-gold mb-4">$150</h3>
                    <p className="text-brand-gray-light text-sm mb-4">
                      Fast launch, minimal effort.
                    </p>
                  </div>
                  <ul className="space-y-3 text-brand-gray-light text-sm mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Everything in Starter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Template installed on your domain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Basic colors and text applied</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Ready to publish</span>
                    </li>
                  </ul>
                  <p className="text-brand-gray-light text-sm italic">
                    Great when you want a live site quickly, without doing any setup.
                  </p>
                </div>

                {/* Full Customization — $450 */}
                <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark">
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-brand-gold mb-2 block">3) Full Customization</span>
                    <h3 className="text-3xl font-serif font-bold text-brand-gold mb-4">$450</h3>
                    <p className="text-brand-gray-light text-sm mb-4">
                      Highest polish without paying for a full custom site.
                    </p>
                  </div>
                  <ul className="space-y-3 text-brand-gray-light text-sm mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Everything in Installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Up to 5 fully customized pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Brand colors, fonts, imagery, layout tweaks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Content placement and UI polish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold mt-1">•</span>
                      <span>Final deployment handled for you</span>
                    </li>
                  </ul>
                  <p className="text-brand-gray-light text-sm italic">
                    A complete, premium look + performance — still far below typical $1,000+ custom builds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Optional Add-Ons */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-4">
                Optional add-ons
              </h2>
              <p className="text-brand-gray-light text-center mb-8 max-w-2xl mx-auto">
                Add extra polish if needed:
              </p>
              <div className="bg-brand-black rounded-xl p-8 border border-brand-gray-dark">
                <ul className="space-y-4 text-brand-gray-light">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <div>
                      <strong className="text-brand-white">Custom Image Pack +$25</strong> — 5 branded hero or banner images
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <div>
                      <strong className="text-brand-white">Mobile Optimization +$50</strong> — extra fine-tuning for small screens
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <div>
                      <strong className="text-brand-white">Extra Page Build +$60/page</strong> — add more pages at launch
                    </div>
                  </li>
                </ul>
                <p className="text-brand-gray-light text-sm mt-6 italic">
                  These are optional upgrades, not required. You choose how much polish you want.
                </p>
              </div>
            </div>
          </section>

          {/* 7. How It Works */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-12">
                How it works
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
                    Pick the design that matches your brand style and content needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-gold">2</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-white mb-2">
                    Pick your launch path
                  </h3>
                  <p className="text-brand-gray-light">
                    DIY, install, or full customization — whatever fits your timeline and budget.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-gold">3</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-white mb-2">
                    Launch your site
                  </h3>
                  <p className="text-brand-gray-light">
                    Deploy on Netlify or Vercel and go live this weekend.
                  </p>
                </div>
              </div>
              <p className="text-center text-brand-gray-light mt-8">
                Simple, fast, and professional.
              </p>
            </div>
          </section>

          {/* 8. Why These Templates Beat Typical Page Builders */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                Why these templates beat typical page builders
              </h2>
              <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark">
                <ul className="space-y-4 text-brand-gray-light">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">No bloated plugins or slow load times</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">Truly modern UX patterns</strong> and clean Tailwind components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">SEO-friendly heading structure</strong> and metadata</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">Code developers actually want to work with</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">•</span>
                    <span><strong className="text-brand-white">Easy to scale later</strong> into a full custom build or larger site</span>
                  </li>
                </ul>
                <p className="text-brand-gray-light mt-6">
                  You get speed, flexibility, and long-term value, not just a quick one-off page.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Testimonials */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-12">
                Testimonials
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
              <p className="text-center text-brand-gray-light text-sm mt-6">
                Social proof like this adds credibility and shows the template path actually works.
              </p>
            </div>
          </section>

          {/* 10. FAQ */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white text-center mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    Do I need coding experience?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    No. The Starter option includes everything you need, and the higher tiers handle setup or full customization for you.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    Are the templates mobile-friendly?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    Yes — they&apos;re built responsive out of the box. Optional Mobile Optimization adds extra refinement.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    What&apos;s the difference between the pricing tiers?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    $50 = DIY template download<br />
                    $150 = installation + basic setup<br />
                    $450 = full customization up to 5 pages, final deployment
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    How long does Done-For-You take?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    Most builds are completed in 24–72 hours depending on customizations and pages.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    Can you build a full custom website instead?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    Yes — fully custom builds start at $1,000+ on the pricing page. Templates are the low-ticket entry; custom builds are the premium upgrade.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    Do you offer refunds?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    Digital templates are non-refundable after delivery, but support is provided to help you launch successfully.
                  </p>
                </details>
                <details className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    What happens after purchase?
                  </summary>
                  <p className="mt-3 text-brand-gray-light">
                    You get instant download access and, if applicable, an intake form for customization. Support is available for any launch questions.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* 11. Final CTA */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-4">
                Ready to launch your new website?
              </h2>
              <p className="text-xl text-brand-gray-light mb-8">
                Choose a template and start today.
              </p>
              <a
                href="#templates"
                className="inline-block bg-brand-gold hover:bg-brand-gold-dark text-brand-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Browse Templates →
              </a>
            </div>
          </section>
          
          <Footer />
        </div>
      </main>
    </>
  )
}
