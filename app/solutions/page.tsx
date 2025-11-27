import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'AI Brand Systems & Creative Workflows | Solutions | Lopez Productions',
  description:
    'Build a modern digital identity with AI-powered systems, templates, workflows, and content engines. Designed for creators, founders, and small businesses.',
}

export default function SolutionsPage() {
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

  const services = [
    {
      id: 'ai-systems',
      title: 'AI Systems & Workflows',
      description:
        'AI Systems & Workflows are automations that eliminate manual admin, save 10+ hours a week, and keep your business operating on autopilot. Instead of drowning in onboarding tasks, scattered content planning, or repetitive client updates, your systems handle everything quietly in the background — powered by Make.com, Notion, and context-aware AI. Stop being the bottleneck in your own business. Make overwhelm obsolete. Scale the work that actually pays you.',
      bulletTitle: 'What gets automated',
      bullets: [
        'Client onboarding',
        'Lead capture & intake',
        'Content planning',
        'Task creation & updates',
        'Weekly client summaries',
        'Reporting',
        'Posting workflows',
        'Research collection',
        'And more',
      ],
      cta: {
        label: 'Install My AI System →',
        href: '/contact?service=ai-systems',
      },
    },
    {
      id: 'content-engines',
      title: 'Content Engines',
      description:
        'Content Engines turn one idea into 30+ pieces of content automatically. You drop your notes into your Notion database → AI drafts your captions → Make.com schedules them across LinkedIn, Instagram, X, and YouTube. No more blank-page anxiety. No more spending 3 hours writing one post. Create 30 days of content in 90 minutes — in your voice.',
      bulletTitle: 'What it includes',
      bullets: [
        'A unified Notion content calendar',
        'Auto-drafting from notes, voice memos, or ideas',
        'Multi-platform scheduling',
        'Context-aware voice training',
        'Templates for every platform',
        'Daily posting consistency without the burnout',
      ],
      cta: {
        label: 'Build My Content Engine →',
        href: '/contact?service=content-engine',
      },
    },
    {
      id: 'website-templates',
      title: 'Website & Portfolio Templates',
      description:
        'Portfolio Templates are premium, pre-built Vite or Next.js sites that let you launch a $10k-quality website this weekend. Skip the dev timelines, skip Webflow headaches, skip the waiting. Your digital identity can be live — fast, SEO-ready, and built to convert. Your portfolio is losing you clients because it doesn’t exist yet. Fix that today.',
      bulletTitle: 'What you get',
      bullets: [
        'One fully-designed template',
        'Custom colors + typography',
        'Fast load, mobile-first design',
        'SEO-ready structure',
        'Blog-ready routing',
        'Contact form + intake integration',
        'Analytics setup',
        'Deployment to Netlify or Vercel',
      ],
      cta: {
        label: 'Launch Your Portfolio in 48 Hours →',
        href: '/pricing',
      },
    },
  ]

  const benefits = [
    {
      title: 'Save 10–20 hours every week',
      body:
        'Your time should go toward the high-value work — not the admin buried underneath it.',
    },
    {
      title: 'Operate like a real brand',
      body: 'Systems make you look — and feel — like a mature, credible business.',
    },
    {
      title: 'Consistent content without the mental load',
      body: 'Never stare at a blank page again.',
    },
    {
      title: 'Launch faster than your competitors',
      body: 'A polished website in 48 hours is a competitive advantage.',
    },
    {
      title: 'Scale without hiring',
      body: 'Automation is your first employee.',
    },
  ]

  const workflowSteps = [
    'Add your idea to the Notion content calendar',
    'Make.com triggers AI writing',
    'Captions are generated for LinkedIn, Instagram, X, and YouTube',
    'Posts are automatically scheduled',
    'You get a full month of content — instantly',
  ]

  const faqs = [
    {
      question: 'How fast can I launch my website?',
      answer:
        '48 hours. Faster if you already have your copy and branding ready.',
    },
    {
      question: 'Do I need to know Make.com or Notion?',
      answer: 'No — everything is set up for you. You log in and use it immediately.',
    },
    {
      question: 'Will the content sound like me?',
      answer: 'Yes. Your engine learns your voice from your real writing samples.',
    },
    {
      question: 'Are these templates only for creators?',
      answer:
        'No — they work for consultants, coaches, agencies, and small businesses too.',
    },
    {
      question: 'Do you offer custom builds?',
      answer: 'Yes. If you want something fully custom, we can scope that out.',
    },
  ]

  return (
    <>
      <Script id="solutions-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <main className="min-h-screen bg-brand-black relative overflow-hidden">
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
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl" />
        </div>
        
        {/* Minimal gold glow overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent" />
        
        <div className="relative z-10">
          <Navigation />
          
          <div className="px-6 md:px-12 py-20">
            <div className="max-w-6xl mx-auto space-y-24">
              {/* Hero Section */}
              <section className="text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-3">
                  Lopez Productions • Solutions
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6 max-w-4xl mx-auto md:mx-0">
                  Build a Business That Runs Itself.
                </h1>
                <p className="text-2xl text-brand-gray-light font-serif mb-8">
                  Automate Your Work. Launch Faster. Create More.
                </p>
                <p className="text-lg text-brand-gray-light mb-10 max-w-3xl leading-relaxed mx-auto md:mx-0">
                  Lopez Productions helps creators, consultants, and small teams automate their operations, scale their content output, and launch premium digital identities — without burnout or bottlenecks.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full px-10 py-4 text-brand-black font-semibold bg-brand-gold hover:bg-brand-gold/90 transition text-lg"
                  >
                    Launch Your Portfolio in 48 Hours →
                  </Link>
                  <Link
                    href="/contact?service=ai-systems"
                    className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10 transition"
                  >
                    Install Your AI System →
                  </Link>
                </div>
              </section>

              {/* Problem Section */}
              <section className="space-y-6 text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">
                  The Real Problem
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold max-w-3xl mx-auto md:mx-0">
                  You&apos;re not overwhelmed because the work is hard. You&apos;re overwhelmed because the process is broken.
                </h2>
                <div className="space-y-4 text-brand-gray-light text-lg leading-relaxed max-w-3xl mx-auto md:mx-0 text-left">
                  <p>Every growing creator or solopreneur hits the same wall:</p>
                  <ul className="space-y-2">
                    {[
                      'Too much admin',
                      'Too many apps',
                      'Too many ideas scattered everywhere',
                      'Too little time to build the digital presence that actually gets clients',
                    ].map((problem) => (
                      <li key={problem} className="flex gap-2">
                        <span className="text-brand-gold">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                  <p>You don’t need more motivation. You don’t need another productivity tool.</p>
                  <p>
                    You need systems that run themselves, content that schedules itself, and a portfolio that builds authority instantly. This is what we build for you.
                  </p>
                </div>
              </section>

              {/* Solutions Intro */}
              <section className="space-y-4 text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">
                  The Solution
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold max-w-4xl mx-auto md:mx-0">
                  Here are the three systems that give you your time back, increase your revenue, and let you operate like a real digital business — not a burnout machine.
                </h2>
              </section>

              {/* Services */}
              <section className="space-y-16">
                {services.map((service) => (
                  <div key={service.id} id={service.id} className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm space-y-8">
                    <div className="space-y-4 text-center md:text-left">
                      <h3 className="text-3xl font-serif font-bold text-brand-gold">{service.title}</h3>
                      <p className="text-lg text-brand-gray-light leading-relaxed mx-auto md:mx-0">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-brand-gold font-semibold mb-4 uppercase tracking-wide">{service.bulletTitle}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.bullets.map((bullet) => (
                          <div key={bullet} className="flex gap-3 text-brand-gray-light">
                            <span className="text-brand-gold">•</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={service.cta.href}
                      className="inline-flex items-center justify-center rounded-full px-8 py-3 text-brand-black font-semibold bg-brand-gold hover:bg-brand-gold/90 transition w-full md:w-auto"
                    >
                      {service.cta.label}
                    </Link>
                  </div>
                ))}
              </section>

              {/* Benefits */}
              <section className="space-y-10 text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">
                  Why These Systems Work
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold">Benefits</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="p-6 rounded-2xl border border-white/5 bg-white/5">
                      <p className="text-xl font-serif text-brand-gold mb-3">{benefit.title}</p>
                      <p className="text-brand-gray-light">{benefit.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sample Workflow */}
              <section className="space-y-6 text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">
                  Sample Workflow
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold">
                  “Idea → Multi-Platform Content in 30 Seconds”
                </h2>
                <div className="space-y-3 text-brand-gray-light text-left">
                  {workflowSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <span className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-gold/60 text-brand-gold font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-lg">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="text-brand-gray-light max-w-3xl mx-auto md:mx-0 text-left">
                  This is the automation that saves you the most time and sells the fastest.
                </p>
              </section>

              {/* FAQ */}
              <section className="space-y-10 text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">
                  FAQ
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold">Answers to your biggest questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="border border-white/5 rounded-2xl p-6 bg-white/5">
                      <p className="text-brand-gold text-xl font-serif mb-2">{faq.question}</p>
                      <p className="text-brand-gray-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <section className="text-center p-10 rounded-3xl border border-white/5 bg-brand-gold/10 space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">
                  Final Call
                </p>
                <h3 className="text-3xl font-serif font-bold text-brand-gold">
                  Ready to Build a Digital Business That Runs Itself?
                </h3>
                <p className="text-brand-gray-light max-w-2xl mx-auto">
                  Launch your portfolio, install your systems, and scale the work that actually pays you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full px-10 py-4 text-brand-black font-semibold bg-brand-gold hover:bg-brand-gold/90 transition text-lg"
                  >
                    Launch Your Portfolio in 48 Hours →
                  </Link>
                  <Link
                    href="/contact?service=ai-systems"
                    className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10 transition"
                  >
                    Install My AI System →
                  </Link>
                </div>
              </section>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </>
  )
}
