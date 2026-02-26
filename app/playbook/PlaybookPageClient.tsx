'use client'

import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Interface Architecture',
    subtitle: 'Human ↔ System',
    description:
      'Frontend systems, Next.js patterns, and UI frameworks. This pillar focuses on how humans see, understand, and control AI—ensuring clarity and intentional friction where judgment matters.',
    tag: 'Interface Architecture',
    href: '/playbook/interface-architecture',
  },
  {
    title: 'Automation & Ops',
    subtitle: 'Execution & Scale',
    description:
      'Self-hosted workflow automations that eliminate repetitive tasks while preserving oversight. Pipelines and agentic systems designed to scale execution after intent is established.',
    tag: 'Automation & Ops',
    href: '/playbook/automation-systems',
  },
  {
    title: 'AI Workflows',
    subtitle: 'Reasoning & Synthesis',
    description:
      'Systems that help founders and engineers research, test, and plan. These workflows emphasize evaluation, iteration, and keeping humans in the loop as complexity increases.',
    tag: 'AI Workflows',
    href: '/playbook/ai-workflows',
  },
]

const requiredReading = [
  {
    slug: 'self-hosted-llm-limitations-n8n',
    title: 'The Hard Truth About Self-Hosting: Why My "ChatGPT Killer" Failed',
    excerpt: 'I tried to replace ChatGPT with a self-hosted local LLM and n8n. Here is the reality of local AI privacy and the technical limits of self-hosting.',
    tag: 'Automation & Ops',
    coverImage: '/self-hosted-llm-issues.png',
  },
  {
    slug: 'google-antigravity-ui',
    title: 'Zero-G Dashboard: The UI I Built After Gemini 3 Kept Showing a 1965 Space Launch',
    excerpt: 'When AI search results fail to deliver, you have to build the interface yourself. A look into our physics-based React UI system.',
    tag: 'Interface Architecture',
    coverImage: '/1200-google-antigravity.png',
  },
  {
    slug: 'why-im-moving-away-from-chatgpt-in-2026',
    title: "Why I'm Moving Away from ChatGPT in 2026",
    excerpt: 'Eroding trust and intrusive rev-share models. Here is why alternatives make more sense for secure infrastructure now.',
    tag: 'AI Workflows',
    coverImage: '/chatgpt-5-2-hype.png',
  },
  {
    slug: 'n8n-ai-content-repurposing-system',
    title: 'I Fired Myself as a Social Media Manager',
    excerpt: 'How I used n8n and AI agents to automate content distribution without losing control or brand voice.',
    tag: 'Automation & Ops',
    coverImage: '/n8n-content-repurposing.png',
  },
]

const archiveByCategory: Record<string, { title: string; slug: string }[]> = {
  'Interface Architecture': [
    { title: '2026 Design Trends: Why Branding Finally Feels Alive Again', slug: '2026-design-trends-branding-feels-alive-again' },
    { title: "AI-Generated Design Systems Aren't the Problem — Ungoverned Ones Are", slug: 'ai-generated-design-systems-governance' },
    { title: "Google AI Mode: What It Is, Why It's Annoying, and How to Avoid It", slug: 'google-ai-mode' },
  ],
  'Automation & Ops Engineering': [
    { title: 'The Ultimate Guide to Zapier Integrations (And Why Serious Agents Belong on n8n)', slug: 'ultimate-guide-zapier-gpt-integrations' },
    { title: 'How To Build a Simple Automation System for Your Business', slug: 'build-simple-business-automation-system' },
    { title: 'Notion + Make.com: The Ultimate Automation Stack for Freelancers', slug: 'notion-make-automation-guide' },
    { title: 'How I Use AI to Organize My Week Inside Notion', slug: 'ai-notion-weekly-organization' },
    { title: '3 Systems Every Creator Should Automate in 2025', slug: 'creator-automation-systems' },
    { title: "Why Your First Priority Isn't Automation — It's Your Brand System", slug: 'why-your-first-priority-isnt-automation-its-your-brand-system' },
    { title: 'How AI Workflows Save SaaS Teams 10 Hours a Week', slug: 'ai-workflows-save-time' },
    { title: 'Notion for Creators — The Simple Dashboard That Runs Your Entire Brand System', slug: 'notion-creator-dashboard' },
  ],
  'AI Workflows & Synthesis': [
    { title: 'Why Image Accuracy Matters More Than Style: ChatGPT vs Gemini 3 Pro', slug: 'chatgpt-5-2-vs-gemini-3-image-accuracy' },
    { title: "Gemini 3's Image Issues Aren't About Style — They're About Context", slug: 'gemini-3-image-issues-context' },
    { title: 'Is ChatGPT 5.2 All the Hype? A Practical Workflow Review', slug: 'is-chatgpt-5-2-all-the-hype' },
    { title: 'Why I Switched to Adobe Firefly Mobile', slug: 'firefly-mobile-nano-banana' },
    { title: 'GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?', slug: 'gpt-5-1-vs-gemini-3-creative-workflows' },
    { title: 'The Worst Thing About Gemini 3 Pro (That No One Talks About)', slug: 'the-worst-thing-about-gemini-3-pro' },
    { title: 'Gemini 3 Pro vs. Claude 4.5: The Ultimate Workflow for Research', slug: 'gemini-3-vs-claude-4-5-research-workflow' },
    { title: "Zapier's NPM Account Hacked — Should You Be Worried?", slug: 'zapiers-npm-account-hacked' },
    { title: 'Why LLMs Perform Better in Italian, French, and Polish Than in English', slug: 'why-llms-perform-better-in-italian-french-and-polish-than-in-english' },
    { title: 'Nano Banana Pro vs GPT-5.1: Which AI Image Model Wins in 2025?', slug: 'nano-banana-pro-vs-gpt-5-1' },
    { title: "AI Isn't Making People Less Intelligent — It's Exposing Who Never Had an Edge", slug: 'ai-isnt-making-people-less-intelligent' },
  ],
  'Foundations & Guides': [
    { title: 'AI Technical Jargon Explained — A Beginner-Friendly Glossary', slug: 'ai-technical-jargon-glossary' },
    { title: 'Design Technical Jargon Explained', slug: 'design-technical-jargon-explained' },
    { title: 'AI Prompting Essentials', slug: 'ai-prompting-essentials' },
    { title: 'How to Generate Clean, Brand-Ready Website Images', slug: 'brand-ready-website-images-chatgpt' },
    { title: 'How Students Can Use AI to Study More Efficiently', slug: 'how-students-can-use-ai-to-study-more-efficiently' },
    { title: 'How to Use Nano Banana for Teachers: Visualizing the Curriculum', slug: 'nano-banana-for-teachers-visualizing-curriculum' },
    { title: 'Stop Chasing Every New AI Tool — Here\'s What\'s Actually Worth Learning', slug: 'stop-chasing-ai-tools' },
    { title: 'AI Tools You Need to Start Your Content Engine (2025 Edition)', slug: 'content-engine-starter-kit' },
  ],
}

export default function PlaybookPageClient() {
  return (
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

      {/* Hero */}
      <section className="pt-20 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6"
          >
            The Systems Playbook.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Field notes, architecture breakdowns, and self-hosted automation workflows. We don&apos;t write theoretical thought leadership; we document the systems we actually build.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mt-6"
          >
            AI should accelerate work without removing human judgment. This playbook defines how humans stay in the loop—where intent, oversight, and reflection govern how we design interfaces and scale operations.
          </motion.p>
        </div>
      </section>

      {/* The Three Layers of AI Infrastructure */}
      <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-text-primary mb-4 text-center"
          >
            The Three Layers of AI Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
          >
            Most production-ready systems require a combination of all three layers.
          </motion.p>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={pillar.href} className="block group">
                  <article className="p-8 rounded-xl border border-border bg-background card-hover h-full">
                    <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold bg-brand-gold/5 mb-4">
                      {pillar.tag}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-text-primary group-hover:text-brand-gold mb-2 transition-colors">
                      {pillar.title}
                    </h3>
                    {pillar.subtitle && (
                      <p className="text-text-muted text-sm mb-3 font-medium">
                        {pillar.subtitle}
                      </p>
                    )}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                    <p className="text-text-muted mt-4 text-sm group-hover:text-text-secondary transition-colors">
                      View patterns →
                    </p>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Architectural Breakdowns */}
      <section className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-text-primary mb-4"
          >
            Core Architectural Breakdowns
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary mb-12 max-w-3xl"
          >
            Start here to understand our approach to infrastructure, self-hosting, and UI design.
          </motion.p>
          <div className="grid gap-8 md:grid-cols-2">
            {requiredReading.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/playbook/${article.slug}`} className="group block">
                  <article className="rounded-xl border border-border bg-surface p-6 card-hover h-full">
                    <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold bg-brand-gold/5 mb-4">
                      {article.tag}
                    </span>
                    <div className="mb-4 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-brand-gold/20 to-brand-gray-dark">
                      {article.coverImage ? (
                        <img
                          src={article.coverImage}
                          className="w-full h-full object-cover"
                          alt={article.title}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl">📚</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-2 group-hover:text-brand-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="text-brand-gold group-hover:text-brand-gold-dark transition-colors font-medium mt-4 inline-block">
                      Read →
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Complete Field Notes */}
      <section className="py-16 px-6 md:px-12 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-text-primary mb-12"
          >
            The Complete Field Notes
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-2">
            {Object.entries(archiveByCategory).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-serif font-bold text-text-primary mb-4">
                  {category}
                </h3>
                <ul className="space-y-2 list-none">
                  {items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/playbook/${item.slug}`}
                        className="text-text-secondary hover:text-accent hover:underline transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 md:px-12 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold mb-6 text-text-primary"
          >
            Ready to Stop Reading and Start Building?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            If your team needs governed interface architecture or secure, self-hosted automation, let&apos;s look at your current stack.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 text-lg"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </main>
  )
}
