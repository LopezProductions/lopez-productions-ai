'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function SolutionsPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Brand Systems & Creative Workflows',
    provider: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      url: 'https://lopezproductions.ai',
    },
    description:
      'AI systems, website templates, content engines, and brand workflows designed for creators, founders, and small businesses.',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: 'Varies',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  const toggleFAQ = (i: number) => {
    setOpenFAQIndex(openFAQIndex === i ? null : i)
  }

  const benefits = [
    {
      title: 'Less Busywork, More Output',
      body: 'Save 10–20 hours a week and focus on the work that actually pays you.',
    },
    {
      title: "A Website You're Proud to Share",
      body: 'No more embarrassment. No more half-finished pages. Just a site that sells for you.',
    },
    {
      title: 'Operate Like a Real Brand',
      body: 'Your digital presence becomes professional, cohesive, and authority-building.',
    },
    {
      title: 'Launch Faster Than Your Competitors',
      body: 'A polished portfolio is a real competitive advantage.',
    },
    {
      title: 'Scale Without Hiring',
      body: 'Automation becomes your first employee — silent, reliable, efficient.',
    },
  ]

  const faqs = [
    {
      question: 'How fast can I launch my website?',
      answer: 'Starter sites in 3–5 days. Larger sites in 5–10 days. Templates can go live in 48 hours.',
    },
    {
      question: 'Do I need to know any tech?',
      answer: 'No — everything is handled for you. You log in and use it.',
    },
    {
      question: 'Can you help me choose a package?',
      answer: "Yes — book a call and I'll walk you through the best fit.",
    },
    {
      question: 'Do these systems work for non-creators?',
      answer: 'Absolutely. Consultants, freelancers, coaches, agencies, and small businesses use them every day.',
    },
    {
      question: 'Do you offer fully custom builds?',
      answer: 'Yes. If you need something beyond the listed packages, we can scope it out during your intro call.',
    },
  ]

  return (
    <>
      <Script id="solutions-schema" type="application/ld+json">
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

          {/* ----------------------------- */}
          {/* HERO SECTION */}
          {/* ----------------------------- */}
          <section className="py-20 px-6 md:px-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
            >
              Build Your Website. Automate Your Workflow. Scale Your Business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-accent mt-6 max-w-3xl mx-auto"
            >
              Your digital identity should work for you — not slow you down.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              Lopez Productions helps creators, consultants, and small teams launch premium websites, streamline operations, and build systems that save 10+ hours a week.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/pricing"
                className="btn-primary px-10 py-4 text-lg"
              >
                Explore Website Packages →
              </Link>
              <Link
                href="https://calendly.com/reuben-lopezproductions/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-10 py-4 text-lg"
              >
                Schedule a 15-min Call →
              </Link>
            </motion.div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 1 — WEBSITE & PORTFOLIO BUILDS */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4"
              >
                Custom Websites That Make You Look Like a $10k Brand
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-4 max-w-3xl mx-auto"
              >
                Whether you're a creator, consultant, freelancer, or small business, you need a website that builds authority, earns trust, and helps you close clients faster.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto text-sm"
              >
                No bloated builders.<br />
                No agency timelines.<br />
                Just clean, fast, modern designs built on Next.js — delivered with clarity and zero overwhelm.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Perfect for:
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Personal brands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Freelancers & coaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Creative professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Small businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Digital entrepreneurs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Consultants & agencies</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl border border-border"
                >
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    What You Get:
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Custom responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>1–10 pages depending on package</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>SEO-ready structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Contact forms + intake integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Tailored brand colors & typography</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Deployment to Netlify or Vercel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Fast delivery, minimal revisions</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  View Website Packages →
                </Link>
                <Link
                  href="https://calendly.com/reuben-lopezproductions/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-10 py-3 text-lg"
                >
                  Schedule a Call →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 2 — AI SYSTEMS & WORKFLOW AUTOMATION */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4"
              >
                Systems That Run the Business While You Run the Vision
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-4 max-w-3xl mx-auto"
              >
                It's not enough to have a website — you need operations that keep your business moving without you manually pushing every button.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto text-sm"
              >
                AI + automation eliminates repetitive tasks, reduces admin by 80%, and creates a seamless client experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                  What Gets Automated:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Client onboarding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Lead capture & follow-up</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Content planning & tasking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Weekly summaries & status updates</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Research collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Content scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>CRM updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Reporting</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl font-serif font-bold text-accent text-center mb-8"
              >
                Stop being the bottleneck.<br />
                Start scaling with ease.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href="/contact?service=ai-systems"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  Install My AI System →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 3 — CONTENT ENGINES */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4"
              >
                Turn One Idea Into 30 Days of Content
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
              >
                You drop your ideas or voice notes into Notion → AI drafts captions → Make.com schedules them everywhere.<br /><br />
                You stay consistent without spending hours writing or editing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                  What's Included:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Unified Notion content calendar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>AI-assisted drafting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Platform-specific templates</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Automatic scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Your unique voice trained into the system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Keeps you posting even on low-energy days</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href="/contact?service=content-engine"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  Build My Content Engine →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 4 — WEBSITE TEMPLATES */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-4"
              >
                Launch A Premium Website This Weekend
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
              >
                Want to go faster? Choose a portfolio-ready Vite or Next.js template, customize your colors, update your content, and deploy in hours — not weeks.<br /><br />
                Perfect for creators, students, new brands, or anyone who needs a clean, modern site live now.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-xl border border-border mb-8"
              >
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6">
                  You Get:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>A fully designed template</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Modern, mobile-first UI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>SEO-ready structure</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clean Tailwind components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Easy customization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Lifetime updates</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href="/templates"
                  className="btn-primary px-10 py-3 text-lg"
                >
                  Browse Templates →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* WHY THESE SYSTEMS WORK */}
          {/* ===================================================================== */}
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-12"
              >
                Why These Systems Work
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-8 rounded-xl border border-border card-hover"
                  >
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {benefit.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* FAQ SECTION */}
          {/* ===================================================================== */}
          <section className="py-20 px-6 md:px-12 bg-background border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary text-center mb-12"
              >
                FAQ — Answers You Actually Care About
              </motion.h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-5 text-left"
                      onClick={() => toggleFAQ(i)}
                    >
                      <span className="text-lg text-text-primary font-medium">
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{ rotate: openFAQIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown className="w-5 h-5 text-accent" />
                      </motion.div>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {openFAQIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-5 pb-5"
                        >
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* FINAL CTA */}
          {/* ===================================================================== */}
          <section className="py-20 px-6 md:px-12 bg-surface">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-text-primary mb-6"
              >
                Ready to Build a Business That Runs Itself?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                Launch your website, install your systems, and scale the work that actually pays you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Explore Website Packages →
                </Link>
                <Link
                  href="https://calendly.com/reuben-lopezproductions/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-10 py-4 text-lg"
                >
                  Schedule a 15-min Call →
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
