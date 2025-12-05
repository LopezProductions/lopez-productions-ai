import React from 'react'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HomePageClient from '../components/HomePageClient'
import HeroSection from '../components/HeroSection'
import PillarsSection from '../components/PillarsSection'
import TemplatesPreviewSection from '../components/TemplatesPreviewSection'
import WhyChooseSection from '../components/WhyChooseSection'
import FinalCTASection from '../components/FinalCTASection'
import LatestPosts from '../components/LatestPosts'

export const metadata: Metadata = {
  title: 'AI Brand Systems for Creators & Small Businesses | Lopez Productions',
  description: 'Build a modern brand system using AI. Simple workflows, clean design, and creator-friendly tools to grow your content and identity.',
  alternates: {
    canonical: 'https://lopezproductions.ai',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai',
    siteName: 'Lopez Productions',
    title: 'AI Brand Systems for Creators & Small Businesses | Lopez Productions',
    description: 'Build a modern brand system using AI. Simple workflows, clean design, and creator-friendly tools to grow your content and identity.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lopez Productions – AI Brand Systems',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Brand Systems for Creators & Small Businesses | Lopez Productions',
    description: 'Build a modern brand system using AI. Simple workflows, clean design, and creator-friendly tools to grow your content and identity.',
    images: ['/og-image.jpg'],
  },
}

// Lazy load below-the-fold sections
const AboutSection = dynamic(() => import('../components/AboutSection'), {
  loading: () => null,
})

const HowItWorksSection = dynamic(() => import('../components/HowItWorksSection'), {
  loading: () => null,
})

const FAQSection = dynamic(() => import('../components/FAQSection'), {
  loading: () => null,
})

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['WebSite', 'WebPage'],
    name: 'Lopez Productions',
    url: 'https://lopezproductions.ai',
    description: 'AI-powered systems, templates, and workflows for creators, founders, and small businesses.',
  }

  return (
    <HomePageClient>
      <main className="min-h-screen bg-background relative overflow-x-hidden">
        <Script id="lp-home-schema" type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>

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
          <HeroSection />

          {/* What I Build (3 Pillars) */}
          <PillarsSection />

          {/* Templates Preview Section */}
          <TemplatesPreviewSection />

          {/* Latest Posts Section */}
          <LatestPosts />

          {/* Why Choose Section */}
          <WhyChooseSection />

          {/* About Section - Lazy Loaded */}
          <AboutSection />

          {/* How It Works Section - Lazy Loaded */}
          <HowItWorksSection />

          {/* FAQ Section - Lazy Loaded */}
          <FAQSection />

          {/* Final CTA Section */}
          <FinalCTASection />

          <Footer />
        </div>
      </main>
    </HomePageClient>
  )
}
