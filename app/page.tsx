import React from 'react'
import dynamic from 'next/dynamic'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HomePageClient from '../components/HomePageClient'
import HeroSection from '../components/HeroSection'
import ValuePropsSection from '../components/ValuePropsSection'
import PackagesSection from '../components/PackagesSection'
import WhyChooseSection from '../components/WhyChooseSection'
import FinalCTASection from '../components/FinalCTASection'

// Lazy load below-the-fold sections
const RecentWorkSection = dynamic(() => import('../components/RecentWorkSection'), {
  ssr: false,
  loading: () => null,
})

const HowItWorksSection = dynamic(() => import('../components/HowItWorksSection'), {
  ssr: false,
  loading: () => null,
})

const FAQSection = dynamic(() => import('../components/FAQSection'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  return (
    <HomePageClient>
      <main className="min-h-screen bg-brand-black relative overflow-x-hidden">
        {/* Background with logo - very dark silhouette */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/transparent_logo_lp.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        ></div>
        {/* Dark overlay to create silhouette effect */}
        <div className="fixed inset-0 bg-gradient-to-br from-brand-black/85 via-brand-gray-dark/80 to-brand-black/85"></div>
        
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

          {/* Value Props Section */}
          <ValuePropsSection />

          {/* What I Do / Packages Section */}
          <PackagesSection />

          {/* Why Choose Section */}
          <WhyChooseSection />

          {/* Recent Work Section - Lazy Loaded */}
          <RecentWorkSection />

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
