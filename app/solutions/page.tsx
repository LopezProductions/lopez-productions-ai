'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ContactFormModal from '../../components/ContactFormModal'

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
    {children}
  </span>
)

export default function SolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Script
        id="solutions-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AI Systems & Automation Solutions",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "AI Workflow Systems",
                "serviceType": "AI Workflow Automation",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Content Automation Engine",
                "serviceType": "Content Automation",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Brand Automation Systems",
                "serviceType": "Brand Automation",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "AI Design Systems",
                "serviceType": "AI Design Tools",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Market Research Systems",
                "serviceType": "AI Market Research",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              }
            ]
          })
        }}
      />
      <main className="min-h-screen bg-brand-black relative overflow-hidden">
        {/* Background with office image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lopez-office.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        ></div>
        {/* Dark overlay to create silhouette effect */}
        <div className="fixed inset-0 bg-gradient-to-br from-brand-black/85 via-brand-gray-dark/80 to-brand-black/85"></div>
        
        {/* Subtle gold halo effect */}
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
        </div>
        
        {/* Minimal gold glow overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
        
        <div className="relative z-10">
          <Navigation />
          
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6"
            >
              Smarter Systems That Work While You Sleep
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Explore our five core AI systems — built to connect, create, and scale your business.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Book a Free System Audit
              </button>
              <a href="#lead-magnet" className="btn-outline">
                Download the Free Content Kit
              </a>
            </motion.div>
            </div>
          </section>

          {/* AI Workflow Systems Section */}
          <section id="workflow" className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                AI Workflow Systems
              </h2>
              <p className="text-sm text-brand-gray-light mb-4">
                <strong className="text-brand-white">Purpose:</strong> The central nervous system of your business
              </p>
              <p className="text-sm text-brand-gray-light mb-6">
                <strong className="text-brand-white">Keywords:</strong> AI workflow automation, AI business systems
              </p>
              <p className="text-brand-gray-light text-lg mb-6">
                Automate your operations from the inside out. We connect your favorite tools — Notion, Zapier, Make, and more — into seamless flows that handle admin, scheduling, and follow-ups while you focus on growth.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  <strong>We build:</strong>
                </h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Task and content routing automations</li>
                  <li>• Notion → CRM → Email integrations</li>
                  <li>• Conditional workflows with human checkpoints</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  ✨ Outcomes:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Pill>→ 10+ hours saved weekly</Pill>
                  <Pill>→ Unified operations</Pill>
                  <Pill>→ Fewer manual errors</Pill>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/playbook" className="btn-primary">
                  Learn More →
                </Link>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-outline"
                >
                  Book a System Audit
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Content Automation Engine Section */}
          <section id="content" className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                Content Automation Engine
              </h2>
              <p className="text-sm text-brand-gray-light mb-4">
                <strong className="text-brand-white">Purpose:</strong> Automate how you plan, publish, and distribute content
              </p>
              <p className="text-sm text-brand-gray-light mb-6">
                <strong className="text-brand-white">Keywords:</strong> content automation, AI content engine
              </p>
              <p className="text-brand-gray-light text-lg mb-6">
                Turn your ideas into posts automatically. We design AI content engines that draft, format, and schedule your content — so you can post daily without burnout.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  <strong>We build:</strong>
                </h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Notion → Scheduler → Social pipelines</li>
                  <li>• AI caption + blog generators</li>
                  <li>• Automated topic + trend discovery</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  ✨ Outcomes:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Pill>→ Consistency across platforms</Pill>
                  <Pill>→ Higher engagement</Pill>
                  <Pill>→ More time for creativity</Pill>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/playbook" className="btn-primary">
                  See Example →
                </Link>
                <a href="#lead-magnet" className="btn-outline">
                  Get Free Content Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Brand Automation Systems Section */}
          <section id="brand" className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                Brand Automation Systems
              </h2>
              <p className="text-sm text-brand-gray-light mb-4">
                <strong className="text-brand-white">Purpose:</strong> Keep your identity consistent everywhere
              </p>
              <p className="text-sm text-brand-gray-light mb-6">
                <strong className="text-brand-white">Keywords:</strong> AI branding, brand automation
              </p>
              <p className="text-brand-gray-light text-lg mb-6">
                Your brand, on autopilot. From visuals to tone, we systemize your brand identity so every post, email, and campaign aligns — without micromanaging freelancers or assets.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  <strong>We build:</strong>
                </h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Brand kit + asset libraries</li>
                  <li>• Automated design templates</li>
                  <li>• Centralized color + tone controls</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  ✨ Outcomes:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Pill>→ Unified brand image</Pill>
                  <Pill>→ Faster creative execution</Pill>
                  <Pill>→ Zero mismatched visuals</Pill>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/playbook" className="btn-primary">
                  Learn More →
                </Link>
                <Link href="/solutions#design" className="btn-outline">
                  See Brand Kits
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

          {/* AI Design Systems Section */}
          <section id="design" className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                AI Design Systems
              </h2>
              <p className="text-sm text-brand-gray-light mb-4">
                <strong className="text-brand-white">Purpose:</strong> Visual creation through automation
              </p>
              <p className="text-sm text-brand-gray-light mb-6">
                <strong className="text-brand-white">Keywords:</strong> AI design tools, AI image generation
              </p>
              <p className="text-brand-gray-light text-lg mb-6">
                Design visuals in minutes — not hours. We integrate AI design tools into your workflow so you can generate branded visuals, thumbnails, and layouts instantly.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  <strong>We build:</strong>
                </h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• AI-powered asset generators</li>
                  <li>• Brand-specific prompt templates</li>
                  <li>• Integration with Canva, Figma, and Uizard</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  ✨ Outcomes:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Pill>→ Faster content turnaround</Pill>
                  <Pill>→ Professional visuals</Pill>
                  <Pill>→ Repeatable creative systems</Pill>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/systems-in-action" className="btn-primary">
                  View Gallery →
                </Link>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-outline"
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Market Research Systems Section */}
          <section id="research" className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                Market Research Systems
              </h2>
              <p className="text-sm text-brand-gray-light mb-4">
                <strong className="text-brand-white">Purpose:</strong> Strategic layer that informs every build
              </p>
              <p className="text-sm text-brand-gray-light mb-6">
                <strong className="text-brand-white">Keywords:</strong> AI market research, competitive analysis, consumer psychology
              </p>
              <p className="text-brand-gray-light text-lg mb-6">
                Decisions powered by data. We combine traditional market research with AI analysis to help you understand where your opportunities actually are — before building a system.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  <strong>We deliver:</strong>
                </h4>
                <ul className="space-y-2 text-brand-gray-light">
                  <li>• Competitive landscape mapping</li>
                  <li>• Audience psychology & behavioral data</li>
                  <li>• Keyword & trend analysis dashboards</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-white mb-3">
                  ✨ Outcomes:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Pill>→ Clearer positioning</Pill>
                  <Pill>→ Smarter strategy</Pill>
                  <Pill>→ Higher ROI on automation</Pill>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/case-studies/nvidia-competitive-edge" className="btn-primary">
                  See Market Insights →
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-outline"
                >
                  Book Strategy Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Our Build Process Section */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient"
            >
              Our Build Process
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: "1️⃣", title: "Discover", desc: "30-min audit to map bottlenecks" },
                { step: "2️⃣", title: "Design", desc: "Pages, dashboards, and automation blueprints" },
                { step: "3️⃣", title: "Deploy", desc: "Integration, QA, and training" },
                { step: "4️⃣", title: "Optimize", desc: "Iterate based on data feedback" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-brand-black font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">{item.title}</h3>
                  <p className="text-brand-gray-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

          {/* Results Section */}
          <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-gradient"
            >
              Results That Compound Over Time
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-brand-gray-light text-center mb-12 max-w-2xl mx-auto"
            >
              Automation isn't a project — it's an upgrade that scales with you.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: "⏱", value: "15+", label: "Hours saved weekly", desc: "Average time reduction per client" },
                { icon: "📈", value: "40%", label: "Conversion lift", desc: "Typical improvement in trial starts" },
                { icon: "🔗", value: "8+", label: "Tools unified", desc: "Average integrations per system" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-brand-gray-dark text-center card-hover"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">{stat.value}</div>
                  <div className="text-brand-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-brand-gray-light">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient"
            >
              Questions You Should Be Asking
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  q: "How can AI automation improve SaaS conversions?",
                  a: "We connect demo/trial pages to CRM and lifecycle emails, then iterate based on usage and segment data to optimize conversion funnels."
                },
                {
                  q: "Can you connect my Notion, Zapier, and social tools?",
                  a: "Yes — we build integrated workflows that connect Notion or Airtable content to schedulers, cross-platform posting, and asset templates for seamless automation."
                },
                {
                  q: "What does an automated reporting system look like?",
                  a: "We pull KPIs into dashboards and send scheduled recaps with links, visuals, and next-step prompts — keeping clients informed without manual updates."
                },
                {
                  q: "How long does it take to launch an AI workflow MVP?",
                  a: "Most focused builds ship in 2–3 weeks with a clear playbook and training documentation for immediate use."
                },
                {
                  q: "Do I need technical experience to start?",
                  a: "No technical experience required. We deliver documentation, video walkthroughs, and a rollback plan — no jargon, just results."
                }
              ].map((item, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-brand-gray-dark p-6 open:bg-white/5 transition-all duration-300"
                >
                  <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-brand-gray-light leading-relaxed">{item.a}</p>
                </motion.details>
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
                Download the Free Content Kit
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
        </div>
      </main>
    </>
  )
}

