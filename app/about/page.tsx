import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'About | Lopez Productions',
  description:
    'The story behind Lopez Productions — a modern AI-first studio helping creators and small businesses build clean systems, professional brands, and consistent content.',
}

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Lopez Productions',
    description:
      'Lopez Productions is an AI-first studio helping creators and small businesses build systems, templates, and workflows for modern branding.',
    url: 'https://lopezproductions.ai/about',
    publisher: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  return (
    <>
      <Script id="about-schema" type="application/ld+json">
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
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-3">
                About
              </p>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                The Studio Behind the Systems
              </h1>

              <p className="text-lg text-brand-gray-light mb-12 leading-relaxed max-w-3xl">
                Lopez Productions is a modern AI-driven studio built for creators,
                founders, and small businesses who don&apos;t want complexity — just clean
                systems, sharp design, and consistent output. This isn&apos;t a corporate
                agency. It&apos;s a creator-led operation focused on clarity, speed, and
                execution.
              </p>

              {/* Section: The Mission */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-brand-gold mb-4">
                  The Mission
                </h2>
                <p className="text-lg text-brand-gray-light leading-relaxed">
                  The goal is simple: help people build a professional digital identity,
                  stay organized with clean workflows, and create more content with less
                  effort. Modern branding isn&apos;t just visuals — it&apos;s systems,
                  storytelling, consistency, and the ability to execute daily without
                  burning out.
                </p>
              </section>

              {/* Section: What Lopez Productions Actually Builds */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-brand-gold mb-4">
                  What Lopez Productions Builds
                </h2>

                <div className="space-y-8 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-2">
                      AI Systems & Workflows
                    </h3>
                    <p className="text-brand-gray-light">
                      Structure, clarity, and simplicity — operational systems built in
                      Notion, supported by AI workflows for drafting, publishing, and
                      planning. Designed for creators who want less chaos and more
                      momentum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-2">
                      Website & Portfolio Templates
                    </h3>
                    <p className="text-brand-gray-light">
                      Modern, minimal, fast-loading website templates built on Next.js +
                      Tailwind. Perfect for creators and small brands needing a clean,
                      professional presence without the agency price tag.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-2">
                      Content Engines
                    </h3>
                    <p className="text-brand-gray-light">
                      Repeatable content workflows that blend AI and structure. These
                      systems help creators avoid blank-page syndrome and stay
                      consistent across X, Instagram, TikTok, YouTube, and long-form
                      content.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Philosophy */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-brand-gold mb-4">
                  A Different Kind of Studio
                </h2>

                <p className="text-lg text-brand-gray-light leading-relaxed mb-6">
                  This studio isn&apos;t built around billable hours, fluff retainers, or
                  over-engineered corporate frameworks. Everything is built around the
                  creator perspective — fast iteration, clean output, and solutions that
                  make sense in the real world, not in a boardroom diagram.
                </p>

                <ul className="space-y-3 text-lg text-brand-gray-light">
                  <li className="flex gap-2">
                    <span className="text-brand-gold">•</span> Simple, modern workflows
                    over complicated automation chains
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-gold">•</span> Professional design
                    without agency overhead
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-gold">•</span> Practical systems that
                    stay usable — not forgotten
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-gold">•</span> Build once, use forever
                    templates
                  </li>
                </ul>
              </section>

              {/* Section: Behind the Studio */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-brand-gold mb-4">
                  Behind the Studio
                </h2>

                <p className="text-lg text-brand-gray-light leading-relaxed mb-6">
                  Lopez Productions is run by an independent creator who merges design,
                  AI systems, automation, and brand strategy into a single unified
                  process. Every template, workflow, and system is tested in-house
                  before it&apos;s ever offered to clients.
                </p>

                <p className="text-lg text-brand-gray-light leading-relaxed">
                  The goal isn&apos;t to look big — it&apos;s to build things that work. Things
                  that creators can actually use. Things that remove friction and give
                  people the confidence to look professional, stay organized, and show
                  up online consistently.
                </p>
              </section>

              {/* Final CTA */}
              <div className="text-center mt-24">
                <h3 className="text-3xl font-serif font-bold text-brand-gold mb-4">
                  Ready to Start Building?
                </h3>
                <p className="text-brand-gray-light mb-6 max-w-xl mx-auto">
                  Explore the systems, templates, and workflows designed to help you
                  launch faster and create consistently.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-full px-10 py-4 text-brand-black font-semibold bg-brand-gold hover:bg-brand-gold/90 transition text-lg"
                  >
                    View Solutions →
                  </Link>

                  <Link
                    href="/templates"
                    className="inline-flex items-center justify-center rounded-full px-10 py-4 text-brand-gold border border-brand-gold hover:bg-brand-gold/10 transition text-lg"
                  >
                    Browse Templates →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </>
  )
}

