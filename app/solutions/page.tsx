import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'AI Brand Systems & Creative Workflows | Solutions | Lopez Productions',
  description:
    'Build a modern digital identity with AI-powered systems, templates, workflows, and content engines. Designed for creators, founders, and small businesses.',
}

export default function SolutionsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Brand Systems & Creative Workflows',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      url: 'https://lopezproductions.ai',
    },
    description:
      'AI systems, website templates, content engines, and brand workflows designed for creators, founders, and small businesses.',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: 'Varies',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  const serviceCategories = [
    {
      id: 'ai-systems',
      title: 'AI Systems & Workflows',
      description:
        'Operational structure for your brand. Reduce decision fatigue, build workflow clarity, and eliminate chaos with simple, creator-friendly systems.',
      features: [
        'Notion dashboard (Brand OS)',
        'AI automations for drafting, scheduling & planning',
        'Workflow mapping & clarity systems',
        'Simple automations (Zapier, Make) when helpful',
        'Brand voice creation',
        'AI-assisted idea generation pipelines',
      ],
      idealFor: [
        'Creators juggling multiple platforms',
        'Founders who need clean systems',
        'Agencies handling multiple clients',
        'Small businesses with unclear workflows',
      ],
      link: '/pricing',
    },
    {
      id: 'templates',
      title: 'Website & Portfolio Templates',
      description:
        'Modern, clean, conversion-ready templates built for creators and solo businesses. Fast, lightweight, and easy to customize.',
      features: [
        'Professional, minimal landing pages',
        'Next.js + Tailwind templates included',
        'Responsive design with clean UI',
        'SEO-friendly structure',
        'AI-ready image + copy blocks',
        'Portfolio, services, and bio sections built-in',
      ],
      idealFor: [
        'Creators who want a live site this week',
        'Freelancers needing a clean portfolio',
        'Small businesses needing a professional first impression',
        'Anyone who wants high-end design without complexity',
      ],
      link: '/templates',
    },
    {
      id: 'content-engine',
      title: 'Content Engines',
      description:
        'A repeatable content creation system using AI + structure. Never run out of topics. Never lose consistency again.',
      features: [
        'AI content drafting flows',
        'Daily content prompt generators',
        'Brand voice integrated into every template',
        'Publishing planner (X, IG, TikTok, YouTube)',
        'Repurposing frameworks',
        'Research systems & idea libraries',
      ],
      idealFor: [
        'Creators posting daily',
        'Founders who need consistent writing',
        'Solopreneurs wanting to scale content output',
        'People tired of blank-page syndrome',
      ],
      link: '/pricing',
    },
  ]

  return (
    <>
      <Script id="solutions-schema" type="application/ld+json">
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
          
          <div className="px-6 md:px-12 py-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-3">
                Lopez Productions • Solutions
              </p>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                Systems, Templates & Content Workflows
              </h1>

              <p className="text-lg text-brand-gray-light mb-16 max-w-3xl leading-relaxed">
                Everything you need to build a modern digital identity — without the
                overwhelm. Clean structure, fast templates, and repeatable content
                systems designed for creators, founders, and small businesses.
              </p>

              {/* Service Sections */}
              <div className="space-y-24">
                {serviceCategories.map((service) => (
                  <section key={service.id} id={service.id}>
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-brand-gray-light text-lg max-w-2xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((f) => (
                            <li key={f} className="flex gap-2 text-lg text-brand-gray-light">
                              <span className="text-brand-gold">•</span> <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
                          Ideal For
                        </h3>
                        <ul className="space-y-2">
                          {service.idealFor.map((i) => (
                            <li key={i} className="flex gap-2 text-lg text-brand-gray-light">
                              <span className="text-brand-gold">•</span> <span>{i}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        href={service.link}
                        className="inline-flex items-center justify-center rounded-full px-8 py-3 text-brand-black font-semibold bg-brand-gold hover:bg-brand-gold/90 transition"
                      >
                        Explore →
                      </Link>
                    </div>
                  </section>
                ))}
              </div>

              {/* Final CTA */}
              <div className="mt-24 text-center">
                <h3 className="text-3xl font-serif font-bold text-brand-gold mb-4">
                  Ready to Start Building?
                </h3>
                <p className="text-brand-gray-light mb-6 max-w-xl mx-auto">
                  Choose the system you need, or combine all three for a full brand
                  overhaul.
                </p>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full px-10 py-4 text-brand-black font-semibold bg-brand-gold hover:bg-brand-gold/90 transition text-lg"
                >
                  View Pricing →
                </Link>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </>
  )
}
