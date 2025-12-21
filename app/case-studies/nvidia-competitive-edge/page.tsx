'use client'

import React, { useState } from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import ContactFormModal from '../../../components/ContactFormModal'

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
    {children}
  </span>
)

export default function NvidiaCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "NVIDIA's Competitive Edge: Powering the Future of AI & Gaming",
            "description": "Strategic analysis of NVIDIA's dominance in AI and gaming markets by Lopez Productions.ai",
            "thumbnailUrl": "https://img.youtube.com/vi/1ZHYh6j7lDU/maxresdefault.jpg",
            "uploadDate": "2025-01-01",
            "duration": "PT8M",
            "publisher": {
              "@type": "Organization",
              "name": "Lopez Productions.ai",
              "logo": { "@type": "ImageObject", "url": "https://lopezproductions.ai/transparent_logo_lp.png" }
            },
            "contentUrl": "https://youtu.be/1ZHYh6j7lDU?si=rYOtzGlr4nSJ5UOn",
            "embedUrl": "https://www.youtube.com/embed/1ZHYh6j7lDU"
          })
        }}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              NVIDIA's Competitive Edge: Powering the Future of AI & Gaming 🚀
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed">
              A strategic analysis of how NVIDIA sustains over 80% GPU market dominance — exploring CUDA, Blackwell architecture, and the competitive landscape shaping the next decade of computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://youtu.be/1ZHYh6j7lDU?si=rYOtzGlr4nSJ5UOn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Watch the Full Analysis
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-outline"
              >
                Book a Research Collaboration
              </button>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">Overview</h2>
            <p className="text-lg text-brand-gray-light mb-8 leading-relaxed">
              Lopez Productions.ai dissects NVIDIA's dual-market advantage — its cultural grip on gamers and technological monopoly in AI infrastructure. This breakdown connects business strategy with consumer psychology, revealing why NVIDIA remains indispensable in the era of AI acceleration.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur border border-brand-gray-dark card-hover">
                <p className="text-3xl font-bold text-brand-gold mb-2">80%</p>
                <p className="text-sm text-brand-gray-light">GPU Market Share</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur border border-brand-gray-dark card-hover">
                <p className="text-3xl font-bold text-brand-gold mb-2">3M+</p>
                <p className="text-sm text-brand-gray-light">CUDA Developers</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur border border-brand-gray-dark card-hover">
                <p className="text-3xl font-bold text-brand-gold mb-2">30% CAGR</p>
                <p className="text-sm text-brand-gray-light">AI Data Center Growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-gradient">Key Takeaways</h2>
            
            <div className="space-y-10">
              <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover">
                <h3 className="text-xl md:text-2xl font-semibold text-brand-gold mb-4">
                  Strategic Advantage
                </h3>
                <p className="text-brand-gray-light mb-4 leading-relaxed">
                  NVIDIA's moat is built on <strong className="text-brand-white">software lock-in</strong> (CUDA), <strong className="text-brand-white">hardware leadership</strong> (Blackwell GPUs), and <strong className="text-brand-white">platform psychology</strong> — turning customers into loyal developers.
                </p>
                <blockquote className="border-l-4 border-brand-gold pl-4 italic text-brand-gray-light">
                  "CUDA is not just code — it's community leverage." — Ruben Lopez
                </blockquote>
              </div>

              <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover">
                <h3 className="text-xl md:text-2xl font-semibold text-brand-gold mb-4">
                  Customer Segmentation
                </h3>
                <p className="text-brand-gray-light leading-relaxed">
                  <strong className="text-brand-white">Gamers:</strong> status-driven, performance-obsessed, community-influenced.<br />
                  <strong className="text-brand-white">AI Enterprises:</strong> mission-critical, uptime-focused, risk-averse.<br />
                  Together, they form a feedback loop of aspiration and infrastructure.
                </p>
              </div>

              <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover">
                <h3 className="text-xl md:text-2xl font-semibold text-brand-gold mb-4">
                  Emerging Threats
                </h3>
                <ul className="list-disc pl-6 text-brand-gray-light space-y-2">
                  <li>
                    <strong className="text-brand-white">AMD:</strong> Closing the hardware gap with open ecosystems.
                  </li>
                  <li>
                    <strong className="text-brand-white">Tesla:</strong> Integrating hardware + AI inference end-to-end through Dojo & Optimus.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover">
                <h3 className="text-xl md:text-2xl font-semibold text-brand-gold mb-4">
                  Future Roadmap
                </h3>
                <ul className="list-disc pl-6 text-brand-gray-light space-y-2">
                  <li>Blackwell Architecture (B200 → 2028+)</li>
                  <li>AI Integration across product lines</li>
                  <li>Edge Compute & Automotive AI Expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Embed */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-2xl border border-brand-gray-dark shadow-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/1ZHYh6j7lDU"
                title="NVIDIA Competitive Edge: Powering the Future of AI & Gaming"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="mt-8 text-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Get a Free Market or System Audit
              </button>
            </div>
          </div>
        </section>

        {/* Research Breakdown */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-gradient">Research Breakdown</h2>
            <div className="space-y-4">
              {[
                "Introduction to NVIDIA's Competitive Strategy",
                "Centrality & Distinctiveness: Competitive Positioning",
                "Customer Segments: Gamers vs. AI Enterprises",
                "The Elements of Value Framework",
                "Key Customer Experience Friction Points",
                "NVIDIA's Future Roadmap (2025–2028)",
                "Emerging Threats: AMD and the Tesla AI Ecosystem"
              ].map((chapter) => (
                <details
                  key={chapter}
                  className="rounded-xl border border-brand-gray-dark p-6 open:bg-white/5 transition-all duration-300"
                >
                  <summary className="cursor-pointer font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors">
                    {chapter}
                  </summary>
                  <p className="mt-3 text-brand-gray-light leading-relaxed">
                    Summary of insights and implications for tech strategists and investors.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">Why It Matters</h2>
            <p className="text-lg text-brand-gray-light mb-8 max-w-4xl mx-auto leading-relaxed">
              This analysis highlights the intersection of market psychology and product innovation. Understanding NVIDIA's dominance offers actionable lessons for brand strategy, innovation management, and vertical ecosystem design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/solutions/market-research" className="btn-primary">
                Explore Market Research Services
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-outline"
              >
                Book a Free Strategy Audit
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient">
              Questions, answered
            </h2>
            <div className="space-y-4">
              {[
                [
                  "Why is NVIDIA's CUDA ecosystem such a competitive moat?",
                  "Because CUDA embeds developers into NVIDIA's proprietary workflow, making switching costs extremely high."
                ],
                [
                  "How does Tesla threaten NVIDIA's AI dominance?",
                  "Tesla's vertically integrated Dojo network could bypass GPU dependency for specific AI inference workloads."
                ],
                [
                  "What can startups learn from NVIDIA's strategy?",
                  "Build proprietary ecosystems early, but ensure they deliver genuine developer value and emotional buy-in."
                ],
                [
                  "How can Lopez Productions.ai help analyze emerging tech markets?",
                  "We combine qualitative consumer analysis with AI-driven data mapping to surface trends and competitive signals."
                ]
              ].map(([q, a]) => (
                <details
                  key={q}
                  className="rounded-xl border border-brand-gray-dark p-6 open:bg-white/5 transition-all duration-300"
                >
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    {q}
                  </summary>
                  <p className="mt-3 text-brand-gray-light leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient">
              Ready to analyze your own market advantage?
            </h2>
            <p className="text-lg text-brand-gray-light mb-8 max-w-2xl mx-auto">
              Turn insight into execution — start with a free 20-minute audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Book My Free Audit
              </button>
              <a href="/solutions" className="btn-outline">
                View Solutions
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
