import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import Link from 'next/link'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Portfolio vs Portfolio Website: What\'s the Difference? | Lopez Productions',
  description: 'Learn the difference between a digital portfolio and a portfolio website — and why modern creators need both.',
  keywords: 'digital portfolio, online portfolio, my digital portfolio, digital agency portfolio',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/digital-portfolio-vs-portfolio-website',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/digital-portfolio-vs-portfolio-website',
    title: 'Digital Portfolio vs Portfolio Website: What\'s the Difference? | Lopez Productions',
    description: 'Learn the difference between a digital portfolio and a portfolio website — and why modern creators need both.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Portfolio vs Portfolio Website: What\'s the Difference? | Lopez Productions',
    description: 'Learn the difference between a digital portfolio and a portfolio website — and why modern creators need both.',
    images: ['/og-image.jpg'],
  },
}

export default function DigitalPortfolioVsWebsite() {
  const post = allInsights.find(p => p.slug === 'digital-portfolio-vs-portfolio-website')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'digital-portfolio-vs-portfolio-website'}
        publishedDate={post?.publishedDate || '2025-01-28'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'digital-portfolio-vs-portfolio-website'}`}
        faqs={post?.faqs}
      />
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs 
              title="Digital Portfolio vs Portfolio Website: What's the Difference?" 
              slug="digital-portfolio-vs-portfolio-website" 
            />
            
            <div className="mb-6">
              <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
                ← Back to Playbook
              </Link>
            </div>
            
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                Education
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              Digital Portfolio vs Portfolio Website: What's the Difference?
            </h1>
            
            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              Learn the difference between a digital portfolio and a portfolio website — and why modern creators need both.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>January 28, 2025</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-white mb-6">
                What is a Digital Portfolio?
              </h2>
              <p className="text-brand-gray-light leading-relaxed text-lg mb-4">
                A <strong className="text-brand-white">digital portfolio</strong> is a collection of your work stored digitally—think PDF files, 
                Behance profiles, Dribbble accounts, or folders of project files. It's the raw collection of your creative work.
              </p>
              <p className="text-brand-gray-light leading-relaxed text-lg">
                Digital portfolios are often:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brand-gray-light mt-4">
                <li>Stored in cloud services (Google Drive, Dropbox, Notion)</li>
                <li>Shared via links or file downloads</li>
                <li>Platform-specific (Behance, ArtStation, etc.)</li>
                <li>Updated manually by you</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-white mb-6">
                What is a Portfolio Website?
              </h2>
              <p className="text-brand-gray-light leading-relaxed text-lg mb-4">
                A <strong className="text-brand-white">portfolio website</strong> is a dedicated website that showcases your work to potential clients, 
                employers, or collaborators. It's your professional presence on the web.
              </p>
              <p className="text-brand-gray-light leading-relaxed text-lg">
                Portfolio websites are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brand-gray-light mt-4">
                <li>Customizable and branded to your identity</li>
                <li>Accessible via a unique domain name</li>
                <li>Optimized for search engines (SEO)</li>
                <li>Designed to convert visitors into clients</li>
              </ul>
            </div>

            <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark">
              <h2 className="text-2xl font-serif font-bold text-brand-white mb-6">
                Key Differences
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">Purpose</h3>
                  <p className="text-brand-gray-light">
                    <strong className="text-brand-white">Digital Portfolio:</strong> Archive of your work<br/>
                    <strong className="text-brand-white">Portfolio Website:</strong> Marketing tool that converts visitors
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">Accessibility</h3>
                  <p className="text-brand-gray-light">
                    <strong className="text-brand-white">Digital Portfolio:</strong> Shared when you send it<br/>
                    <strong className="text-brand-white">Portfolio Website:</strong> Discoverable through search and social
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">Branding</h3>
                  <p className="text-brand-gray-light">
                    <strong className="text-brand-white">Digital Portfolio:</strong> Platform's design<br/>
                    <strong className="text-brand-white">Portfolio Website:</strong> Your unique brand identity
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-white mb-6">
                Why You Need Both
              </h2>
              <p className="text-brand-gray-light leading-relaxed text-lg mb-4">
                Modern creators benefit from having both:
              </p>
              <div className="space-y-4">
                <div className="bg-brand-black rounded-lg p-6 border border-brand-gray-dark">
                  <h3 className="text-xl font-semibold text-brand-white mb-3">
                    Use Your Digital Portfolio For:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-brand-gray-light">
                    <li>Archiving completed projects</li>
                    <li>Quick sharing in proposals</li>
                    <li>Collaboration with team members</li>
                    <li>Backup of your creative assets</li>
                  </ul>
                </div>
                <div className="bg-brand-black rounded-lg p-6 border border-brand-gray-dark">
                  <h3 className="text-xl font-semibold text-brand-white mb-3">
                    Use Your Portfolio Website For:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-brand-gray-light">
                    <li>Discoverability through SEO</li>
                    <li>Professional first impression</li>
                    <li>Converting visitors into clients</li>
                    <li>Building your personal brand</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-white mb-6">
                The Best Approach: Connect Them
              </h2>
              <p className="text-brand-gray-light leading-relaxed text-lg">
                Instead of manually updating both, use AI-powered systems that sync your digital portfolio (Notion, Airtable, 
                Google Drive) to your portfolio website automatically. Update once, and both stay current—saving hours monthly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-black rounded-2xl p-12 border border-brand-gray-dark">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                Build Your Portfolio Website Today
              </h2>
              <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
                Get an AI-powered portfolio website that syncs with your digital portfolio automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-portfolio-builder" className="btn-primary">
                  Start Your Build →
                </Link>
                <Link href="/free-portfolio-template" className="btn-outline">
                  Try Free Template
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








