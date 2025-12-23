import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Systems, Not Just Screens | Complex Interface Design | Lopez Productions',
  description:
    'How we design complex systems: decision-critical interfaces, governed interfaces, and reference implementations. Methodology and evidence for technical and enterprise-aware readers.',
  keywords: 'interface design systems, complex systems design, reference implementation, governed interfaces, decision-critical interfaces',
  alternates: {
    canonical: 'https://lopezproductions.ai/systems',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/systems',
    title: 'Systems, Not Just Screens | Complex Interface Design | Lopez Productions',
    description:
      'How we design complex systems: decision-critical interfaces, governed interfaces, and reference implementations.',
    images: ['/lp-og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systems, Not Just Screens | Complex Interface Design | Lopez Productions',
    description:
      'How we design complex systems: decision-critical interfaces, governed interfaces, and reference implementations.',
    images: ['/lp-og.png'],
  },
}

export default function SystemsPage() {
  return (
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

        {/* Page Header */}
        <section className="pt-20 pb-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
              Systems, Not Just Screens
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
              Some software requires governed interfaces, not just marketing polish. This page explains how we approach complex systems where clarity, correctness, and governance matter more than conversion optimization.
            </p>
          </div>
        </section>

        {/* What We Mean by "Systems" */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
              What We Mean by "Systems"
            </h2>
            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                Decision-critical interfaces are different from marketing websites. These are the control panels, admin dashboards, and internal tools where users make choices that have real consequences.
              </p>
              <p>
                In these environments, clarity isn't optional. Correctness isn't negotiable. Governance—ensuring consistent patterns, predictable behavior, and maintainable architecture—is essential.
              </p>
              <p>
                These systems prioritize:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Clear information hierarchy that reduces cognitive load</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Consistent interaction patterns that build user confidence</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Governed design systems that scale without breaking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Architecture that supports iteration without technical debt</span>
                </li>
              </ul>
              <p className="mt-4">
                This is fundamentally different from marketing websites, where the goal is conversion and the timeline is launch. Systems require ongoing maintenance, user training, and architectural decisions that compound over time.
              </p>
            </div>
          </div>
        </section>

        {/* Reference System — Phenom */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
              Reference System — Phenom
            </h2>
            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                Phenom is a front-end design system and reference UI that demonstrates how we approach complex interface architecture. It serves as a reference implementation of interface patterns, component systems, and design governance principles.
              </p>
              <p>
                This reference implementation shows how decision-critical interfaces can be structured: clear navigation, consistent component usage, predictable layouts, and maintainable code architecture.
              </p>
              <p className="font-semibold text-text-primary">
                Important: This is NOT a production application. It is a design system demonstration and reference implementation, built to illustrate interface standards and design thinking.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Embed */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-text-muted mb-3 text-center">
              Interactive Reference Interface (Design System Demo)
            </p>
            <div className="w-full rounded-xl overflow-hidden border border-border bg-surface p-4">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://phenom-ui.netlify.app/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="fullscreen"
                  loading="lazy"
                  title="Phenom Design System Reference Implementation"
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://phenom-ui.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:underline text-sm"
              >
                Open in new tab →
              </a>
            </div>
          </div>
        </section>

        {/* Scope & Limitations */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
              Scope & Limitations
            </h2>
            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                This demo shows interface standards only. It demonstrates design thinking, component architecture, and visual patterns—not production functionality.
              </p>
              <p>
                There is no backend, authentication, or security logic. No data persistence, no API integrations, no user management. This is a front-end reference implementation designed to illustrate how complex interfaces can be structured and governed.
              </p>
              <p>
                The value is in the architecture: how components are organized, how patterns are applied consistently, and how the system scales as complexity grows. This is methodology and evidence, not a functional application.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Context */}
        <section className="py-12 px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
              Closing Context
            </h2>
            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                These same principles inform how we approach complex SaaS and B2B websites. The clarity, governance, and architectural thinking that make systems work are the same principles that make marketing sites effective for technical buyers.
              </p>
              <p>
                When you're selling to teams that evaluate deeply, the interface needs to demonstrate competence, not just conversion. The system needs to scale, not just launch. The architecture needs to support iteration, not just initial delivery.
              </p>
              <p>
                This is how we think about systems: as governed interfaces that serve decision-makers, built with architecture that supports long-term maintenance and evolution.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

