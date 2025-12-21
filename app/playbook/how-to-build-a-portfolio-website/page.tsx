import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import Link from 'next/link'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Build a Portfolio Website That Actually Gets You Clients (2025 Guide) | Lopez Productions',
  description: 'Learn how to plan, design, and launch a high-converting portfolio website — plus how AI can automate updates and analytics.',
  keywords: 'how to build a portfolio website, build a portfolio website, best website builder for portfolio, portfolio building websites',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/how-to-build-a-portfolio-website',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/how-to-build-a-portfolio-website',
    title: 'How to Build a Portfolio Website That Actually Gets You Clients (2025 Guide) | Lopez Productions',
    description: 'Learn how to plan, design, and launch a high-converting portfolio website — plus how AI can automate updates and analytics.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build a Portfolio Website That Actually Gets You Clients (2025 Guide) | Lopez Productions',
    description: 'Learn how to plan, design, and launch a high-converting portfolio website — plus how AI can automate updates and analytics.',
    images: ['/og-image.jpg'],
  },
}

export default function HowToBuildPortfolio() {
  const post = allInsights.find(p => p.slug === 'how-to-build-a-portfolio-website')
  const steps = [
    {
      number: 1,
      title: 'Define Your Goals & Audience',
      content: 'Before building, ask yourself: Who are you trying to impress? What action should visitors take? Define clear goals—whether it\'s getting more clients, showcasing work, or landing a job. Your portfolio should speak directly to your target audience\'s needs.'
    },
    {
      number: 2,
      title: 'Curate Your Best Work',
      content: 'Less is more. Choose 6-10 of your strongest projects that demonstrate your range and expertise. Include case studies that show your process, not just final results. Each piece should tell a story about how you solve problems.'
    },
    {
      number: 3,
      title: 'Plan Your Site Structure',
      content: 'Keep navigation simple: Home, Work, About, Contact. Add a blog or resources section if you create content regularly. Plan how content will be organized—by project type, industry, or chronology. Think about what visitors need to see to take action.'
    },
    {
      number: 4,
      title: 'Write Compelling Copy',
      content: 'Your About page should tell your story and explain your unique value. Project descriptions should answer: What was the challenge? How did you solve it? What were the results? Use clear, confident language that shows expertise without being boastful.'
    },
    {
      number: 5,
      title: 'Choose Your Platform Wisely',
      content: 'Static templates (Wix, Squarespace) work if you\'re okay with manual updates. AI-powered portfolio systems (like what we build) update automatically from your Notion, Airtable, or other tools—saving hours of maintenance. Consider your long-term needs.'
    },
    {
      number: 6,
      title: 'Design for Conversion',
      content: 'Every element should guide visitors toward your goal. Use clear CTAs (Contact, Book a Call, View Work). Make contact forms easy to find. Use whitespace effectively. Ensure fast load times—slow sites lose visitors in seconds.'
    },
    {
      number: 7,
      title: 'Optimize for Search & Analytics',
      content: 'Add proper meta descriptions, alt text for images, and structured data. Set up Google Analytics to track what\'s working. Monitor which projects get the most views, where traffic comes from, and which pages convert best.'
    },
    {
      number: 8,
      title: 'Launch & Iterate',
      content: 'Ship it. Don\'t wait for perfection. Launch with your best 6-10 projects, then add more as you complete work. Use analytics to identify what to improve. Update regularly—stale portfolios look unprofessional.'
    }
  ]

  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'how-to-build-a-portfolio-website'}
        publishedDate={post?.publishedDate || '2025-01-28'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'how-to-build-a-portfolio-website'}`}
        faqs={post?.faqs}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Build a Portfolio Website That Actually Gets You Clients",
            "description": "Step-by-step guide to building a high-converting portfolio website",
            "step": steps.map(step => ({
              "@type": "HowToStep",
              "position": step.number,
              "name": step.title,
              "text": step.content
            })),
            "author": {
              "@type": "Person",
              "name": "Reuben Lopez",
              "url": "https://lopezproductions.ai"
            }
          })
        }}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs 
              title="How to Build a Portfolio Website That Actually Gets You Clients (2025 Guide)" 
              slug="how-to-build-a-portfolio-website" 
            />
            
            <div className="mb-6">
              <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
                ← Back to Playbook
              </Link>
            </div>
            
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                Portfolio Guide
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              How to Build a Portfolio Website That Actually Gets You Clients (2025 Guide)
            </h1>
            
            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              Learn how to plan, design, and launch a high-converting portfolio website — plus how AI can automate updates and analytics.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>January 28, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="border-l-4 border-brand-gold pl-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                      <span className="text-brand-black font-bold text-lg">{step.number}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-white">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-brand-gray-light leading-relaxed text-lg">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-black rounded-2xl p-12 border border-brand-gray-dark">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                Need Help Building Your Portfolio?
              </h2>
              <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
                We build AI-powered portfolio websites that update automatically and convert visitors into clients. 
                Get your site live in 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-portfolio-builder" className="btn-primary">
                  Learn About Our AI Portfolio Builder →
                </Link>
                <Link href="/#lead-magnet" className="btn-outline">
                  Get Free Template
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}








