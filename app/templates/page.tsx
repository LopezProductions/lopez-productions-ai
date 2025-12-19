'use client'

import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { motion } from 'framer-motion'
import { templates } from '../data/templates'

export default function ToolsAndAcceleratorsPage() {
  // Filter to only show the 2 specified templates
  const featuredTools = templates.filter(
    t => t.id === 'pricing-page-architecture' || t.id === 'og-image-generator'
  )

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tools & Accelerators',
    description: 'Optional tools that support website launches and search visibility for AI-native companies.',
    itemListOrder: 'http://schema.org/ItemListOrderAscending',
    numberOfItems: featuredTools.length,
    itemListElement: featuredTools.map((t, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: t.title,
      url: `https://lopezproductions.ai/templates/${t.slug}`,
    })),
  }

  return (
    <>
      <Script id="tools-accelerators-schema" type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </Script>
      <main className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Background with logo - very dark silhouette */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/transparent_logo_lp.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        ></div>
        {/* Light overlay to maintain charcoal color */}
        <div className="fixed inset-0 bg-gradient-to-br from-brand-black/60 via-brand-gray-dark/40 to-brand-black/60"></div>
        
        {/* Subtle gold halo effect around the logo */}
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
        </div>
        
        {/* Minimal gold glow overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
        
        <div className="relative z-10">
          <Navigation />

          {/* Hero Section */}
          <section className="py-20 px-6 md:px-12 text-center">
            <div className="max-w-6xl mx-auto mb-8">
              <Breadcrumbs 
                title="Tools & Accelerators" 
                type="simple"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              Tools & Accelerators
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-6 leading-relaxed"
            >
              Optional tools that support website launches and search visibility for AI-native companies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-4 text-text-secondary"
            >
              <p>
                These tools are not required to work with me.
              </p>
              <p>
                They&apos;re accelerators I&apos;ve built while designing websites and search systems for AI startups.
              </p>
              <p className="font-semibold text-text-primary">
                If you want hands-on help, start with <Link href="/pricing" className="text-accent hover:text-accent-dark underline">Services</Link>.
              </p>
              <p className="font-semibold text-text-primary">
                If you prefer to move faster or DIY, explore the tools below.
              </p>
            </motion.div>
          </section>

          {/* Website Launch Accelerators Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-text-primary text-center mb-12">
                Website Launch Accelerators
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {featuredTools.map((tool, index) => {
                  const isPricing = tool.id === 'pricing-page-architecture'
                  
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-background p-8 rounded-xl border border-border card-hover"
                    >
                      <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                        {tool.title}
                      </h3>
                      <p className="text-text-secondary mb-6">
                        {isPricing 
                          ? 'Modular pricing layouts designed around SaaS psychology and conversion patterns.'
                          : 'A simple system for planning and generating consistent, branded OG images.'}
                      </p>
                      
                      <div className="mb-6 space-y-2">
                        {isPricing ? (
                          <>
                            <p className="text-text-secondary text-sm">• Clear tier communication</p>
                            <p className="text-text-secondary text-sm">• Flexible layout components</p>
                            <p className="text-text-secondary text-sm">• Designed for AI and software products</p>
                          </>
                        ) : (
                          <>
                            <p className="text-text-secondary text-sm">• Improves share previews and click-through rates</p>
                            <p className="text-text-secondary text-sm">• Supports SEO, social, and AI summaries</p>
                            <p className="text-text-secondary text-sm">• No design guesswork</p>
                          </>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-4xl font-serif font-bold text-accent">
                          ${tool.price}
                        </span>
                      </div>
                      
                      <Link
                        href={`/templates/${tool.slug}`}
                        className="btn-primary w-full py-3 text-center block"
                      >
                        View Template →
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Everything Else Section */}
          <section className="py-12 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-text-secondary text-sm italic">
                <small>
                  Additional internal systems, templates, and experiments exist, but they&apos;re not publicly listed. 
                  They&apos;re shared selectively or reintroduced only if they clearly support website or search outcomes.
                </small>
              </p>
            </div>
          </section>

          {/* Unsure Where to Start? Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-text-primary text-center mb-8">
                Unsure Where to Start?
              </h2>
              <div className="bg-background rounded-xl border border-border p-8 space-y-6">
                <p className="text-text-secondary text-center">
                  If you&apos;re deciding between tools and services:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-text-primary font-semibold mb-2">Choose Services if:</p>
                    <p className="text-text-secondary text-sm">
                      You want strategy, execution, and clarity
                    </p>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold mb-2">Choose Tools if:</p>
                    <p className="text-text-secondary text-sm">
                      You&apos;re confident building on your own
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-center font-semibold">
                  Most teams start with a service engagement and use tools only when helpful.
                </p>
                <div className="text-center">
                  <Link
                    href="/pricing"
                    className="btn-primary inline-block"
                  >
                    View Services & Pricing →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Works Section */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-text-primary text-center mb-8">
                Why This Works
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p className="text-center italic">
                  (Short, Honest)
                </p>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>You look focused</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>You stop over-promising</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Tools feel intentional, not experimental</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Your brand returns to websites + search</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="font-semibold text-text-primary">Most importantly:</span>
                  </li>
                  <li className="flex items-start pl-6">
                    <span className="text-text-secondary">
                      You&apos;ve reduced cognitive load — for visitors and for yourself.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
