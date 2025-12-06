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
  alternates: {
    canonical: 'https://lopezproductions.ai/about',
  },
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
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-primary/20 via-brand-gold/5 to-transparent blur-3xl" />
        </div>
        
        {/* Minimal gold glow overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-primary/8 via-brand-gold/2 to-transparent" />
        
        <div className="relative z-10">
          <Navigation />
          
          <div className="px-6 md:px-12 py-20">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                About
              </p>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                The Studio Behind the Systems
              </h1>

              <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-3xl">
                Lopez Productions is led by Reuben Lopez — a creator, marketing strategist, and AI systems designer who builds clean, professional digital identities for creators, founders, and small businesses.
              </p>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-3xl">
                This is not a corporate agency. It's a creator-driven studio focused on clarity, speed, and execution — without the complexity or overhead.
              </p>
              
              <p className="text-base text-text-secondary mb-12 max-w-3xl">
                Business inquiries:{' '}
                <a
                  href="mailto:contact@lopezproductions.ai"
                  className="text-accent hover:underline"
                >
                  contact@lopezproductions.ai
                </a>
              </p>

              {/* Section: The Mission */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-accent mb-4">
                  The Mission
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  The mission is simple: help people build a professional digital identity, stay organized with clean workflows, and create more content with less effort.
                </p>
                <div className="mt-6 space-y-3 text-lg text-text-secondary">
                  <p>Modern branding is no longer just visuals. It&apos;s:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span> Systems that remove friction
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span> Workflows that support consistency
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span> Content processes that scale your output
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span> A portfolio that looks credible from day one
                    </li>
                  </ul>
                  <p>You don&apos;t need more apps. You need systems that make overwhelm obsolete.</p>
                </div>
              </section>

              {/* Section: What Lopez Productions Actually Builds */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-accent mb-4">
                  What Lopez Productions Builds
                </h2>

                <div className="space-y-8 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-accent mb-2">
                      AI Systems & Workflows
                    </h3>
                    <p className="text-text-secondary">
                      AI Systems &amp; Workflows are operational structures built in Notion and powered by automation. These systems draft content, organize tasks, support onboarding, and eliminate repetitive admin so you can stay focused on the work that matters.
                    </p>
                    <p className="text-text-secondary mt-3">
                      Designed for creators who want less chaos and more momentum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-accent mb-2">
                      Website & Portfolio Templates
                    </h3>
                    <p className="text-text-secondary">
                      Premium Vite and Next.js templates that load fast, look professional, and are simple to customize. Perfect for creators and small brands who need a credible digital presence without the agency price tag or development backlog.
                    </p>
                    <p className="text-text-secondary mt-3">
                      Launch your site in 48 hours — not 3 months.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-accent mb-2">
                      Content Engines
                    </h3>
                    <p className="text-text-secondary">
                      Repeatable content systems that blend AI, structure, and scheduling automation. Turn one idea into 30+ posts across X, Instagram, TikTok, YouTube, and LinkedIn — without the blank-page stress or hours of writing.
                    </p>
                    <p className="text-text-secondary mt-3">
                      Consistency becomes effortless.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Philosophy */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-accent mb-4">
                  A Different Kind of Studio
                </h2>

                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Lopez Productions isn’t built around retainers, bloated frameworks, or over-engineered automation chains. It’s built around the creator mindset:
                </p>

                <ul className="space-y-3 text-lg text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Simple, modern workflows instead of complicated tech stacks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Professional design without agency overhead
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Practical systems that stay usable — not forgotten
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Templates you build once and use forever
                  </li>
                </ul>
              </section>

              {/* Section: Behind the Studio */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-accent mb-4">
                  Behind the Studio
                </h2>

                <h3 className="text-xl font-serif font-bold text-accent mb-4">
                  Behind the Studio — Meet Reuben Lopez
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Lopez Productions is founded and run by Reuben Lopez, an independent creator who merges design, automation, and strategy into one unified process.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Reuben&apos;s background blends:
                </p>
                <ul className="space-y-2 text-lg text-text-secondary mb-6">
                  <li className="flex gap-2"><span className="text-accent">•</span> Content creation</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Design systems</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Marketing strategy</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> AI workflows</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> UX thinking</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Process automation</li>
                </ul>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Every template, workflow, and system offered through Lopez Productions began as a solution built internally — tested, refined, and proven before being used by clients.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  The goal isn&apos;t to look big. The goal is to build things that work — things creators can actually use, things that remove friction, and things that help you show up consistently and professionally.
                </p>
              </section>

              {/* Final CTA */}
              <div className="text-center mt-24">
                <h3 className="text-3xl font-serif font-bold text-accent mb-4">
                  Ready to Start Building?
                </h3>
                <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                  Explore the systems, templates, and workflows designed to help you
                  launch faster and create consistently.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-full px-10 py-4 text-brand-black font-semibold bg-primary hover:bg-primary/90 transition text-lg"
                  >
                    View Solutions →
                  </Link>

                  <Link
                    href="/templates"
                    className="inline-flex items-center justify-center rounded-full px-10 py-4 text-accent border border-brand-gold hover:bg-primary/10 transition text-lg"
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


