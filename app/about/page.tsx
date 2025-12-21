import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About | The Studio Behind AI Business Systems | Lopez Productions',
  description:
    'Lopez Productions builds AI business systems for modern teams — the websites, workflows, and operational architecture that allow products to ship faster, scale cleanly, and show up correctly across Google, ChatGPT, and AI-native discovery.',
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
      'Lopez Productions builds AI business systems for modern teams — the websites, workflows, and operational architecture that allow products to ship faster, scale cleanly, and show up correctly across Google, ChatGPT, and AI-native discovery.',
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
                The Studio Behind AI Business Systems
              </h1>

              <p className="text-lg text-text-secondary mb-6 leading-relaxed max-w-3xl">
                Lopez Productions builds AI business systems for modern teams — the websites, workflows, and operational architecture that allow products to ship faster, scale cleanly, and show up correctly across Google, ChatGPT, and AI-native discovery.
              </p>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-3xl">
                Founded and led by Reuben Lopez, Lopez Productions operates as a builder&apos;s studio: technical, opinionated, and execution-first. This is not a corporate agency. It&apos;s a focused system shop designed for founders and teams who value clarity, speed, and leverage over process theater.
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
                  Build the systems early-stage teams need to move fast — without creating future drag.
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Modern products require more than clean UI. They require systems:
                </p>
                <ul className="space-y-2 mb-6 text-lg text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Frontend architectures that stay fast as products evolve
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Documentation that onboards users and engineers instantly
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> AI-assisted workflows that reduce time-to-ship
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Automation that removes repetitive operational work
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> A unified product narrative across marketing, docs, and interfaces
                  </li>
                </ul>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  The mission is simple:
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-4 font-semibold">
                  Help teams operate with velocity without complexity.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-2">
                  No bloated tools.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-2">
                  No over-engineered frameworks.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  No hand-holding systems that collapse as you scale.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Just technical clarity, clean execution, and systems that hold up under real use.
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
                      1. AI Business Interfaces & Frontend Systems
                    </h3>
                    <p className="text-text-secondary mb-3">
                      High-performance React and Next.js systems for AI products, dashboards, and modern marketing environments.
                    </p>
                    <p className="text-text-secondary mb-3 font-semibold">
                      Focused on:
                    </p>
                    <ul className="space-y-2 text-text-secondary mb-3">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Interface and component systems
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Dashboard and product layouts
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Pricing and go-to-market pages
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> AEO / GEO-informed content structure
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Clean Tailwind architectures
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Purposeful Framer Motion interactions
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      Built for teams that want to ship fast without maintaining a full internal frontend team.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                      2. Documentation & Developer Experience Systems
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Documentation is part of the product — not an afterthought.
                    </p>
                    <p className="text-text-secondary mb-3 font-semibold">
                      Systems include:
                    </p>
                    <ul className="space-y-2 text-text-secondary mb-3">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Docusaurus and Starlight documentation frameworks
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> API planning and schema structuring
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Knowledge graph and information architecture
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Engineering playbooks and internal SOPs
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Scalable onboarding systems
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      Designed to reduce confusion, improve handoff, and make products easier to adopt and maintain.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                      3. AI Workflows for Product Teams
                    </h3>
                    <p className="text-text-secondary mb-3">
                      AI-assisted workflows that reduce friction across:
                    </p>
                    <ul className="space-y-2 text-text-secondary mb-3">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Feature planning and research
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Writing, ideation, and synthesis
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Model evaluation and experimentation
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Release coordination and changelogs
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Internal updates and documentation
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      These systems are designed to accelerate iteration, not replace judgment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                      4. Automation & Operational Engineering
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Lightweight automation systems that act as a silent engineer across tools like:
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
                        <span className="text-accent">•</span> Email and CRM platforms
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> PostHog
                      </li>
                    </ul>
                    <p className="text-text-secondary italic">
                      Automation isn&apos;t added for novelty — only where it removes real operational overhead.
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
                  Lopez Productions isn&apos;t built around retainers, bloated frameworks, or agency theater.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  It&apos;s built around startup velocity:
                </p>

                <ul className="space-y-3 text-lg text-text-secondary mb-6">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Minimal surface area, maximal output
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Clean architectures instead of fragile stacks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Practical systems teams actually use
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Templates designed for iteration, not perfection
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Automation that saves engineering hours — not creates maintenance
                  </li>
                </ul>

                <p className="text-lg text-text-secondary leading-relaxed mb-2">
                  No fluff.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-2">
                  No productivity cosplay.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Just systems for shipping.
                </p>
              </section>

              {/* Section: Behind the Studio */}
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-accent mb-4">
                  Behind the Studio
                </h2>

                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Reuben Lopez brings together:
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
                  Every system, template, and workflow offered through Lopez Productions was built internally first — tested in real production environments — and released only after it proved useful.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  The goal isn&apos;t to look big.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  The goal is to build things that work.
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
                  Ready to Build Your AI Business Systems?
                </h3>
                <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                  Explore the systems, kits, and architectures designed for teams shipping the next generation of AI products.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link
                    href="/solutions"
                    className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg"
                  >
                    View Systems →
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


