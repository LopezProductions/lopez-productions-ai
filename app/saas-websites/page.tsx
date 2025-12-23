'use client'

import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function SaaSWebsitesPage() {
  const [activeTab, setActiveTab] = useState('examples')

  useEffect(() => {
    // Check hash on mount and scroll changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'examples' || hash === 'b2b' || hash === 'ai') {
        setActiveTab(hash)
        // Scroll to section with offset for fixed nav
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleTabClick = (tab: string, e: React.MouseEvent) => {
    e.preventDefault()
    setActiveTab(tab)
    const element = document.getElementById(tab)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      // Update URL without triggering scroll
      window.history.pushState(null, '', `#${tab}`)
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SaaS Websites',
    description: 'Production-ready SaaS websites: system examples, B2B SaaS patterns, and AI company websites. Real patterns, structures, and decisions that work.',
    publisher: {
      '@type': 'Organization',
      name: 'Lopez Productions',
    },
  }

  return (
    <>
      <Script id="saas-websites-schema" type="application/ld+json">
        {JSON.stringify(schema)}
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
            <div className="max-w-6xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
              >
                SaaS Websites
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto leading-relaxed"
              >
                Production-ready websites for SaaS products
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-text-secondary max-w-3xl mx-auto mt-6 leading-relaxed"
              >
                SaaS websites are no longer just marketing surfaces. They are <strong className="text-text-primary">interface layers</strong> that explain complex products, establish category context, and signal credibility — to both human buyers and AI systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg text-text-secondary max-w-3xl mx-auto mt-4 leading-relaxed"
              >
                We design SaaS websites as systems: structured, legible, and built to scale with the product itself.
              </motion.p>
            </div>
          </section>

          {/* Sub-Nav */}
          <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <nav className="flex gap-8 overflow-x-auto">
                <button
                  onClick={(e) => handleTabClick('examples', e)}
                  className={`px-4 py-4 text-sm font-medium transition-colors duration-200 whitespace-nowrap border-b-2 ${
                    activeTab === 'examples'
                      ? 'text-accent border-accent'
                      : 'text-text-secondary border-transparent hover:text-accent'
                  }`}
                >
                  System Examples
                </button>
                <button
                  onClick={(e) => handleTabClick('b2b', e)}
                  className={`px-4 py-4 text-sm font-medium transition-colors duration-200 whitespace-nowrap border-b-2 ${
                    activeTab === 'b2b'
                      ? 'text-accent border-accent'
                      : 'text-text-secondary border-transparent hover:text-accent'
                  }`}
                >
                  B2B SaaS
                </button>
                <button
                  onClick={(e) => handleTabClick('ai', e)}
                  className={`px-4 py-4 text-sm font-medium transition-colors duration-200 whitespace-nowrap border-b-2 ${
                    activeTab === 'ai'
                      ? 'text-accent border-accent'
                      : 'text-text-secondary border-transparent hover:text-accent'
                  }`}
                >
                  AI Companies
                </button>
              </nav>
            </div>
          </section>

          {/* System Examples Section */}
          <section id="examples" className="py-16 px-6 md:px-12 bg-background scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-4"
              >
                System Examples
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed font-semibold"
              >
                Reference implementations, not mockups
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed"
              >
                This section documents real patterns and decisions found in effective SaaS websites — not surface-level aesthetics or trend-driven layouts.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed"
              >
                High-performing SaaS websites consistently do four things well:
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-2 text-text-secondary mb-6 max-w-3xl list-none"
              >
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Explain the product clearly without jargon or over-engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Establish category context early so users <em>and AI engines</em> understand where the product fits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Align UI, copy, and structure instead of treating design and content separately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Support discoverability across search engines, AI summaries, and recommendation systems</span>
                </li>
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-12 max-w-3xl leading-relaxed"
              >
                A visually polished website that fails at any of these still underperforms.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                    Reference Implementation: Phenom
                  </h3>
                  <p className="text-text-secondary mb-2 font-semibold">
                    Governed interface architecture
                  </p>
                  <p className="text-text-secondary mb-4">
                    Phenom is a front-end design system and reference UI that demonstrates how we approach complex interface architecture. It serves as a concrete example of component systems, design governance, and long-term scalability.
                  </p>
                  <Link
                    href="/systems"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    View Phenom reference system →
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* B2B SaaS Section */}
          <section id="b2b" className="py-16 px-6 md:px-12 bg-surface scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-4"
              >
                B2B SaaS Websites
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed font-semibold"
              >
                Designed for evaluation, not hype
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed"
              >
                B2B SaaS websites aren&apos;t built to impress casual visitors. They&apos;re built to help serious buyers evaluate risk, understand value, and trust the organization behind the product.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                    Why B2B SaaS websites are different
                  </h3>
                  <p className="text-text-secondary mb-4">
                    B2B buyers are evaluating — not browsing. Before scheduling a demo, they need clarity, proof, and confidence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-primary font-semibold mb-2">B2C / Consumer SaaS</p>
                      <ul className="space-y-1 text-text-secondary">
                        <li>• Emotion-led</li>
                        <li>• Fast conversion</li>
                        <li>• Feature-forward</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold mb-2">B2B SaaS</p>
                      <ul className="space-y-1 text-text-secondary">
                        <li>• Risk-led</li>
                        <li>• Proof-driven</li>
                        <li>• Clarity-first</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                    What high-performing B2B SaaS websites have in common
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clear positioning in the first screen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Simple explanation of the problem solved</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Proof early (metrics, use cases, credibility signals)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Pages designed for evaluation rather than persuasion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Content structured for search and AI summaries</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* AI Companies Section */}
          <section id="ai" className="py-16 px-6 md:px-12 bg-background scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-4"
              >
                AI Company Websites
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed font-semibold"
              >
                Explaining systems, not just features
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed"
              >
                AI products are harder to explain, harder to trust, and easier to misunderstand than traditional software. Their websites must explain <em>capability, behavior, and intent</em> — not just features.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                    Why AI company websites are different
                  </h3>
                  <p className="text-text-secondary mb-4">
                    AI products:
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Operate probabilistically rather than deterministically</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Change rapidly as models and prompts evolve</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Blur the line between product, system, and workflow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Are frequently misrepresented by AI search engines</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-surface p-8 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                    The system approach to AI company websites
                  </h3>
                  <p className="text-text-secondary mb-4">
                    AI company websites require <strong className="text-text-primary">AI business systems</strong>, not isolated design or SEO work.
                  </p>
                  <p className="text-text-secondary mb-4">
                    We design AI websites as a connected system with three layers:
                  </p>
                  <ol className="space-y-3 text-text-secondary list-decimal list-inside">
                    <li>
                      <strong className="text-text-primary">AI-Generated Design Systems</strong>
                      <br />
                      <span className="text-text-secondary">AI accelerates layout and component generation, while human-led system design governs structure, consistency, accessibility, and scale.</span>
                    </li>
                    <li>
                      <strong className="text-text-primary">Search & Discoverability Systems</strong>
                      <br />
                      <span className="text-text-secondary">Content, entities, and category signals are structured so external AI engines can correctly understand and summarize the product.</span>
                    </li>
                    <li>
                      <strong className="text-text-primary">Website-Adjacent Automation Systems</strong>
                      <br />
                      <span className="text-text-secondary">Automation supports onboarding, content updates, reporting, and internal workflows without touching core product logic.</span>
                    </li>
                  </ol>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Reference Sites Section */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-8"
              >
                Reference Sites
              </motion.h2>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-xl border border-border"
                >
                  <p className="text-text-primary font-semibold mb-2">
                    <strong>Evercrest</strong> — Fintech SaaS example
                  </p>
                  <a
                    href="https://evercrestfi.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    https://evercrestfi.netlify.app/
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-xl border border-border"
                >
                  <p className="text-text-primary font-semibold mb-2">
                    <strong>EM-Dash</strong> — Operations / CRM SaaS example
                  </p>
                  <a
                    href="https://em-dashcrm.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    https://em-dashcrm.netlify.app/
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-primary mb-8"
              >
                Ready to build your SaaS website?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                If you&apos;re building or refining a SaaS product and want a website that explains your product clearly, looks credible from day one, scales with your roadmap, and surfaces correctly in modern search:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  href="/saas-website-design"
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Explore SaaS Website Design →
                </Link>
                <Link
                  href="/pricing"
                  className="btn-outline px-10 py-4 text-lg"
                >
                  View Pricing →
                </Link>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}

