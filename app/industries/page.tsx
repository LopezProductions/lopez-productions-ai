'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ContactFormModal from '../../components/ContactFormModal'

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
    {children}
  </span>
)

export default function IndustriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Industries We Serve",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Market Research & Strategic Analysis",
                "serviceType": "Market Research",
                "provider": { "@type": "Organization", "name": "Lopez Productions.ai" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Creator Content Engines & Brand Kits",
                "serviceType": "Creators",
                "provider": { "@type": "Organization", "name": "Lopez Productions.ai" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Agency Workflow Automation & Reporting",
                "serviceType": "Agencies",
                "provider": { "@type": "Organization", "name": "Lopez Productions.ai" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              Smarter systems for Market Research, Creators, and Agencies
            </h1>
            <p className="text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed">
              We design AI-ready landing pages, automated workflows, and strategic market analysis tailored to how you operate — results without the overwhelm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Book a Free System Audit
              </button>
              <a href="#lead-magnet" className="btn-outline">
                Get the Free Content Kit
              </a>
            </div>
          </div>
        </section>

        {/* Who we help overview */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient">
              Who is this for?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-brand-gray-dark card-hover">
                <h3 className="text-xl font-semibold text-brand-gold mb-3">Market Research</h3>
                <p className="text-brand-gray-light">
                  Strategic analysis, competitive intelligence, consumer psychology insights
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-brand-gray-dark card-hover">
                <h3 className="text-xl font-semibold text-brand-gold mb-3">Creators</h3>
                <p className="text-brand-gray-light">
                  Content engines, template libraries, auto-publishing flows → hours saved weekly
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-brand-gray-dark card-hover">
                <h3 className="text-xl font-semibold text-brand-gold mb-3">Agencies</h3>
                <p className="text-brand-gray-light">
                  Intake → production → reporting, client portals, and scheduled updates
                </p>
              </div>
            </div>
            <p className="text-sm text-brand-gray-muted text-center">
              83% of businesses list AI automation as a top priority in 2025.
            </p>
          </div>
        </section>

        {/* Industry blocks */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Market Research */}
            <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                Market Research: Strategic insights that drive decisions
              </h3>
              <p className="text-brand-gray-light text-lg mb-6">
                Complex markets, unclear positioning, missed opportunities. We analyze competitive landscapes, consumer psychology, and emerging trends to reveal actionable insights.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">What we analyze:</h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Competitive positioning & market dominance strategies</li>
                  <li>• Consumer psychology & behavioral patterns</li>
                  <li>• Emerging trends & future market opportunities</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Pill>Clear positioning</Pill>
                <Pill>Market insights</Pill>
                <Pill>Strategic advantage</Pill>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/case-studies/nvidia-competitive-edge" className="btn-primary">
                  See Market Research Examples
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-outline"
                >
                  Book a call
                </button>
              </div>
              
              {/* Link to related insights */}
              <div className="mt-4 pt-4 border-t border-brand-gray-dark">
                <p className="text-sm text-brand-gray-light mb-2">
                  <strong className="text-brand-gold">Related insights:</strong>
                </p>
                <Link href="/insights/ai-workflows-save-time" className="text-brand-gold hover:text-brand-gold-dark text-sm transition-colors">
                  How AI Workflows Save SaaS Teams 10 Hours a Week →
                </Link>
              </div>
            </div>

            {/* Creators */}
            <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                Creators: Content engines that post while you sleep
              </h3>
              <p className="text-brand-gray-light text-lg mb-6">
                Inconsistent posting and admin work kill momentum. We build brand kits, templates, and auto-publishing.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">What we build:</h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Notion → Scheduler flows (X, IG, YouTube)</li>
                  <li>• Brand kit systems & reusable visual templates</li>
                  <li>• Opt-in pages, newsletter automations, simple shops</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Pill>+Consistency</Pill>
                <Pill>+Time saved</Pill>
                <Pill>+Revenue per post</Pill>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-magnet" className="btn-primary">
                  Get the free content kit
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-outline"
                >
                  Book a system audit
                </button>
              </div>
              
              {/* Link to related insights */}
              <div className="mt-4 pt-4 border-t border-brand-gray-dark">
                <p className="text-sm text-brand-gray-light mb-2">
                  <strong className="text-brand-gold">Related insights:</strong>
                </p>
                <Link href="/insights/creator-automation-systems" className="text-brand-gold hover:text-brand-gold-dark text-sm transition-colors">
                  3 Systems Every Creator Should Automate in 2025 →
                </Link>
              </div>
            </div>

            {/* Agencies */}
            <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                Agencies: From intake to reporting — automated
              </h3>
              <p className="text-brand-gray-light text-lg mb-6">
                Clients, briefs, proofs, revisions, reports — too manual. We connect it all.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">What we build:</h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Client intake → scope → asset collection workflows</li>
                  <li>• Production boards with approvals + versioning</li>
                  <li>• Automated weekly/monthly client reports & portals</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Pill>Fewer emails</Pill>
                <Pill>Happier clients</Pill>
                <Pill>Higher margins</Pill>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/solutions/ai-workflow-setup" className="btn-primary">
                  See workflow setup
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-outline"
                >
                  Book a call
                </button>
              </div>
              
              {/* Link to related insights */}
              <div className="mt-4 pt-4 border-t border-brand-gray-dark">
                <p className="text-sm text-brand-gray-light mb-2">
                  <strong className="text-brand-gold">Related insights:</strong>
                </p>
                <Link href="/insights/notion-make-automation-guide" className="text-brand-gold hover:text-brand-gold-dark text-sm transition-colors">
                  Notion + Make.com: The Ultimate Automation Stack →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient">
              How it works
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: "1", title: "Discover", desc: "30-min audit, map the bottlenecks" },
                { step: "2", title: "Design", desc: "pages, dashboards, and automations" },
                { step: "3", title: "Deploy", desc: "connect tools, QA, and training" },
                { step: "4", title: "Optimize", desc: "iterate on what the data shows" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-brand-black font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">{item.title}</h3>
                  <p className="text-brand-gray-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof & micro-case */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient">
              Results that matter
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-brand-gray-dark text-center card-hover">
                <div className="text-3xl font-bold text-brand-gold mb-2">15+</div>
                <div className="text-brand-white font-semibold mb-1">Hours saved weekly</div>
                <div className="text-sm text-brand-gray-light">Average time reduction per client</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-brand-gray-dark text-center card-hover">
                <div className="text-3xl font-bold text-brand-gold mb-2">40%</div>
                <div className="text-brand-white font-semibold mb-1">Conversion lift</div>
                <div className="text-sm text-brand-gray-light">Typical improvement in trial starts</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-brand-gray-dark text-center card-hover">
                <div className="text-3xl font-bold text-brand-gold mb-2">8+</div>
                <div className="text-brand-white font-semibold mb-1">Tools unified</div>
                <div className="text-sm text-brand-gray-light">Average integrations per system</div>
              </div>
            </div>
            {/* TODO: Replace with real case study screenshots when available */}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient">
              Questions, answered
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How can automation help my SaaS trial conversion?",
                  a: "We connect demo/trial pages to CRM and lifecycle emails, then iterate based on usage and segment data."
                },
                {
                  q: "Can you connect my creator tools (Notion, Zapier, Make) to social scheduling?",
                  a: "Yes — Notion or Airtable content → scheduler → cross-platform posting with asset templates."
                },
                {
                  q: "What does an agency reporting automation look like in practice?",
                  a: "We pull KPIs into dashboards and send scheduled recaps with links, visuals, and next-step prompts."
                },
                {
                  q: "How fast can we launch an MVP system?",
                  a: "Most focused builds ship in 2–3 weeks with a clear playbook and training."
                },
                {
                  q: "What if I don't have technical experience?",
                  a: "We deliver docs, loom walkthroughs, and a rollback plan — no jargon."
                }
              ].map((item, index) => (
                <details key={index} className="rounded-xl border border-brand-gray-dark p-6 open:bg-white/5 transition-all duration-300">
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-brand-gray-light leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section id="lead-magnet" className="py-20 px-6 md:px-12">
          <div className="bg-brand-gray-dark px-8 py-12 rounded-xl text-center max-w-2xl mx-auto border border-brand-gray-dark shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-brand-white mb-4">
              🎁 Free Content Planning Kit
            </h2>
            <p className="text-brand-gray-light mb-2 text-lg">
              <strong className="text-brand-gold">Plan a Month of Content in 30 Minutes</strong>
            </p>
            <p className="text-sm text-brand-gray-light mb-6">
              A free Notion + CSV template to help you stop overthinking and start posting consistently.
            </p>
            <div className="bg-brand-black rounded-lg p-4 mb-6 text-left">
              <p className="text-sm text-brand-gray-light mb-2">
                <strong className="text-brand-gold">Includes:</strong>
              </p>
              <ul className="text-sm text-brand-gray-light space-y-1">
                <li>• Beginner instructions for Notion newbies</li>
                <li>• Weekly content planner template</li>
                <li>• Brainstorm table for idea generation</li>
                <li>• Goal tracker to measure progress</li>
              </ul>
              <p className="text-xs text-brand-gray-light mt-2">
                Perfect for freelancers, creators, and small biz owners. No Notion experience needed.
              </p>
            </div>
            <form
              action="https://formspree.io/f/xldpoywb"
              method="POST"
              className="flex flex-col gap-3"
            >
              <input type="hidden" name="_next" value="https://lopezproductions.ai/thank-you" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-md text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 rounded-md text-black"
              />
              <button
                type="submit"
                className="btn-primary"
              >
                📥 Get the Free Planner
              </button>
            </form>
            <p className="text-xs mt-4 text-brand-gray-light opacity-70">
              You'll get instant access to both a Notion version and a downloadable CSV + setup guide.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient">
              Ready to remove the busywork?
            </h2>
            <p className="text-lg text-brand-gray-light mb-8 max-w-2xl mx-auto">
              Let's build systems that work while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Book a Free System Audit
              </button>
              <a href="#lead-magnet" className="btn-outline">
                Get the Free Content Kit
              </a>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Contact Form Modal */}
        <ContactFormModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </main>
    </>
  )
}
