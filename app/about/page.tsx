import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About | The Studio Behind the Interface Layer | Lopez Productions',
  description:
    'Lopez Productions is led by Reuben Lopez — a systems-minded designer and technical strategist who builds clean, high-performance frontends and operational workflows for AI startups, founders, and engineering-driven teams.',
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
      'Lopez Productions is led by Reuben Lopez — a systems-minded designer and technical strategist who builds clean, high-performance frontends and operational workflows for AI startups, founders, and engineering-driven teams.',
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
              <Breadcrumbs 
                title="About" 
                type="simple"
              />
              
              {/* Header */}
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                About
              </p>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                The Studio Behind the Interface Layer
              </h1>

              <p className="text-lg text-text-secondary mb-6 leading-relaxed max-w-3xl">
                Lopez Productions is led by Reuben Lopez — a systems-minded designer and technical strategist who builds clean, high-performance frontends and operational workflows for AI startups, founders, and engineering-driven teams.
              </p>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-3xl">
                This is not a corporate agency. This is a builder&apos;s studio — fast, technical, opinionated, and execution-first.
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
                  Mission
                </h2>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  Build the systems early-stage teams need to ship faster.
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Modern products require more than clean UI — they require:
                </p>
                <ul className="space-y-2 mb-6 text-lg text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Frontend architectures that are fast and maintainable
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Documentation that onboard users (or engineers) instantly
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> AI-assisted workflows that reduce time-to-ship
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Automation frameworks that eliminate repetitive tasks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> A unified product story across marketing, docs, and UI
                  </li>
                </ul>
                <p className="text-lg text-text-secondary leading-relaxed">
                  The mission is simple: Help founders move with velocity — without complexity. No bloated tools. No over-engineering. No hand-holding frameworks that break as you grow. Just technical clarity, speed, and clean execution.
                </p>
              </section>

              {/* Section: What Lopez Productions Actually Builds */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-accent mb-8">
                  What Lopez Productions Builds
                </h2>

                <div className="space-y-10 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                      1. Frontend Systems & Interface Architecture
                    </h3>
                    <p className="text-text-secondary mb-3">
                      High-performance React/Next.js systems for AI dashboards, SaaS products, and modern landing environments.
                    </p>
                    <p className="text-text-secondary mb-3 font-semibold">
                      Focused on:
                    </p>
                    <ul className="space-y-2 text-text-secondary mb-3">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> UI component systems
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Dashboard layouts
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Pricing/marketing pages
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> AEO/GEO-informed content structure
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Clean Tailwind architectures
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Framer Motion interactions
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      Built for founders who want to ship faster — without hiring a full dev team.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                      2. Documentation & Developer Experience Systems
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Technical docs are part of your product.
                    </p>
                    <p className="text-text-secondary mb-3 font-semibold">
                      Systems include:
                    </p>
                    <ul className="space-y-2 text-text-secondary mb-3">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Docusaurus / Starlight frameworks
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> API planning + schema structuring
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Knowledge graph architecture
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Internal engineering playbooks
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Onboarding documentation
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Internal SOP systems
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      Designed for teams that need clarity, consistency, and onboarding that scales.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                      3. AI Workflows for Product Teams
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Notion-based and automation-powered systems that eliminate friction across:
                    </p>
                    <ul className="space-y-2 text-text-secondary mb-3">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Feature planning
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Product research
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> AI-assisted writing & ideation
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Model evaluation processes
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Release cycle coordination
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Changelogs & internal updates
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      Built to reduce engineering drag and accelerate iteration.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                      4. Automation & Operational Engineering
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Lightweight but powerful automation chains that integrate with:
                    </p>
                    <ul className="space-y-2 text-text-secondary mb-3">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Supabase
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Firebase
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Stripe
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> GitHub
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Notion
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Discord
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Email/CRM
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> PostHog
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      Automation becomes the silent engineer that keeps your product moving.
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
                  Lopez Productions isn&apos;t built around retainers, bloated frameworks, or &quot;agency thinking.&quot; It&apos;s built around startup velocity:
                </p>

                <ul className="space-y-3 text-lg text-text-secondary mb-6">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Minimal surface area, maximal output
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Clean architectures instead of complex stacks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Practical systems that teams actually use
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Templates built for iteration, not perfection
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Automations that save engineering hours — not create maintenance
                  </li>
                </ul>

                <p className="text-lg text-text-secondary leading-relaxed italic">
                  No fluff. No lifestyle productivity frameworks. Just systems for shipping.
                </p>
              </section>

              {/* Section: Behind the Studio */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-accent mb-4">
                  Behind the Studio — Meet Reuben
                </h2>

                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Founder Reuben Lopez blends:
                </p>
                <ul className="space-y-2 text-lg text-text-secondary mb-6">
                  <li className="flex gap-2"><span className="text-accent">•</span> Frontend architecture</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Design systems</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> AI workflows</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> UX principles</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Operational engineering</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Documentation systems</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Marketing clarity</li>
                </ul>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Every template, kit, workflow, and system offered here was originally developed internally, tested in real production contexts, and later released because it solved a real startup problem.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  The goal isn&apos;t to look big. The goal is to build things that work.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-2">
                  Things that reduce friction.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-2">
                  Things that help teams ship faster.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Things that make early products feel polished from day one.
                </p>
              </section>

              {/* Final CTA */}
              <div className="text-center mt-24">
                <h3 className="text-3xl font-serif font-bold text-accent mb-4">
                  Ready to Build Your Interface Layer?
                </h3>
                <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                  Explore the systems, kits, and architectures designed for founders and teams shipping the next generation of AI products.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link
                    href="/solutions"
                    className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg"
                  >
                    View Solutions →
                  </Link>

                  <Link
                    href="/templates"
                    className="btn-outline inline-flex items-center justify-center px-10 py-4 text-lg"
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


