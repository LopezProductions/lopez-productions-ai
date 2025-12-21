import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HomePageClient from '../components/HomePageClient'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import FrontendSystems from '../components/FrontendSystems'
import Services from '../components/Services'
import TemplateShowcase from '../components/TemplateShowcase'
import FounderReasons from '../components/FounderReasons'
import BlogPreview from '../components/BlogPreview'
import FinalCTASection from '../components/FinalCTASection'

export const metadata: Metadata = {
  title: 'The Interface Layer for AI Startups | Lopez Productions',
  description: 'Modern frontends, clean architectures, and technical systems for founders building the next generation of AI tools.',
  alternates: {
    canonical: 'https://lopezproductions.ai',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai',
    siteName: 'Lopez Productions',
    title: 'The Interface Layer for AI Startups | Lopez Productions',
    description: 'Modern frontends, clean architectures, and technical systems for founders building the next generation of AI tools.',
    images: [
      {
        url: '/lp-og.png',
        width: 1200,
        height: 630,
        alt: 'Lopez Productions – The Interface Layer for AI Startups',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Interface Layer for AI Startups | Lopez Productions',
    description: 'Modern frontends, clean architectures, and technical systems for founders building the next generation of AI tools.',
    images: ['/lp-og.png'],
  },
}

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['WebSite', 'WebPage'],
    name: 'Lopez Productions',
    alternateName: 'The Interface Layer for AI Startups',
    url: 'https://lopezproductions.ai',
    description: 'Modern frontends, clean architectures, and technical systems for founders building the next generation of AI tools.',
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
          <Hero />

          {/* Why Founders Come Here */}
          <ValueProps />

          {/* Frontend Systems */}
          <FrontendSystems />

          {/* Services for Growing Startups */}
          <Services />

          {/* Templates & Systems */}
          <TemplateShowcase />

          {/* Why AI Founders Trust Us */}
          <FounderReasons />

          {/* Featured Articles */}
          <BlogPreview />

          {/* Final CTA */}
          <FinalCTASection />

          <Footer />
        </div>
      </main>
    </HomePageClient>
  )
}
