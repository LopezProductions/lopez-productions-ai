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
                "name": "Lead Conversion Automation",
                "serviceType": "Lead Automation",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Marketing Workflow Automation",
                "serviceType": "Marketing Automation",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Client & Project Management Automation",
                "serviceType": "Project Management Automation",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Content Scaling Systems",
                "serviceType": "Content Automation",
                "provider": { "@type": "Organization", "name": "Lopez Productions" },
                "areaServed": "Global",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
              },
              {
                "@type": "Service",
                "name": "Analytics & Performance Tracking",
                "serviceType": "Business Analytics",
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
              ⚙️ AI Systems That Grow With You
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              You don't need more tools — you need better systems. At Lopez Productions, we design AI-powered workflows that automate your most repetitive tasks, help you stay consistent, and give you back the time to focus on what actually moves the needle.
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
                Book a free consult
              </button>
              <a href="#lead-magnet" className="btn-outline">
                Download the Free Content Kit
              </a>
            </motion.div>
            </div>
          </section>

          {/* Convert More Leads Automatically Section */}
          <section id="leads" className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                💬 Convert More Leads Automatically
              </h2>
              <p className="text-brand-gray-light text-lg mb-6">
                We build simple follow-up systems that reach out to new leads automatically — through email, chat, or text — so no one slips through the cracks. Every message is personalized based on how people interact with your brand, turning curiosity into conversions without extra manual work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                >
                  Book a free consult
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Streamline Your Marketing Workflows Section */}
          <section id="marketing" className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                📈 Streamline Your Marketing Workflows
              </h2>
              <p className="text-brand-gray-light text-lg mb-6">
                Forget juggling five different tools. We connect your website, content calendar, and CRM into one smart flow that publishes, tracks, and learns what's working — so your marketing runs itself while you stay creative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                >
                  Book a free consult
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Automate Your Client & Project Management Section */}
          <section id="management" className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                🧠 Automate Your Client & Project Management
              </h2>
              <p className="text-brand-gray-light text-lg mb-6">
                Stop digging through DMs and spreadsheets. We create AI dashboards that track deliverables, client feedback, and deadlines automatically. You'll know exactly where every project stands, without endless check-ins or reminders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                >
                  Book a free consult
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Scale Content Without Burning Out Section */}
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
                ✍️ Scale Content Without Burning Out
              </h2>
              <p className="text-brand-gray-light text-lg mb-6">
                From social posts to blog drafts, our AI systems help you plan, write, and schedule content that sounds like you. Less staring at blank pages — more time building your brand and connecting with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                >
                  Book a free consult
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Measure, Learn, and Improve Section */}
          <section id="analytics" className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                ⚡ Measure, Learn, and Improve
              </h2>
              <p className="text-brand-gray-light text-lg mb-6">
                We don't just automate — we help you understand why something works. Every system we design includes analytics that track time saved, engagement rates, and performance metrics, so you can keep optimizing confidently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                >
                  Book a free consult
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Ready to Design Your Workflow Section */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                💼 Ready to Design Your Workflow?
              </h2>
              <p className="text-brand-gray-light text-lg mb-6 max-w-3xl mx-auto">
                AI shouldn't feel complicated — it should feel like momentum. Let's build a system around how you work, not the other way around.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                >
                  👉 Book a free consult
                </button>
              </div>
              <p className="text-brand-gray-light text-sm mt-4">
                and we'll map your first automation together.
              </p>
            </motion.div>
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
              Automation isn't a one-off task — it's your new operating system.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: "⏱", value: "15+ hrs/week", label: "Saved through workflow automation" },
                { icon: "📊", value: "Consistent growth", label: "From better focus and fewer manual tasks" },
                { icon: "🔗", value: "8+ tools", label: "Unified into one streamlined system" }
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
                  <div className="text-brand-white font-semibold">{stat.label}</div>
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
                  a: "We build simple follow-up systems that reach out to new leads automatically — through email, chat, or text — so no one slips through the cracks. Every message is personalized based on how people interact with your brand, turning curiosity into conversions without extra manual work."
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

