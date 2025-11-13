'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ContactFormModal from '../components/ContactFormModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-brand-black relative overflow-hidden">
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
          <section className="pt-20 pb-16 px-6 md:px-12 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-gradient mb-6 leading-tight"
              >
                Build a Brand That Actually Looks Professional
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-brand-gray-light max-w-4xl mx-auto mb-4 leading-relaxed"
              >
                AI-Powered Portfolios, Content Systems & Digital Identity — designed for creators, founders, and small businesses.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-brand-gold font-semibold mb-12"
              >
                Launch sharper. Create faster. Stand out everywhere.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.a
                  href="/get-started"
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Packages
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* Value Props Section */}
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gradient"
              >
                What Makes Us Different
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI + Creativity — Not Corporate Automation",
                    description: "I help you build your digital presence using AI in a way that feels simple, modern, and authentic. No jargon. No tech headaches."
                  },
                  {
                    title: "Portfolio-First Approach",
                    description: "Your website, brand kit, and online identity are the core. Everything else — content, visuals, systems — builds from that foundation."
                  },
                  {
                    title: "Content That Never Runs Dry",
                    description: "Custom AI templates + brand voice + repeatable workflows = your new content engine."
                  },
                  {
                    title: "Light Automations Included (When They Actually Help)",
                    description: "Nothing crazy. Just simple workflows that remove friction and save time."
                  }
                ].map((prop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
                  >
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-gold mb-4">
                      {prop.title}
                    </h3>
                    <p className="text-brand-gray-light text-lg leading-relaxed">
                      {prop.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* What I Do / Packages Section */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gradient"
              >
                AI Creative Systems & Digital Brand Building
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-brand-gray-light text-center mb-12 max-w-3xl mx-auto"
              >
                Choose the package that fits your goals and timeline.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Starter Portfolio",
                    features: [
                      "A clean, professional 3-page website (Home, About, Contact)",
                      "Lead capture",
                      "Brand foundations",
                      "Simple blog setup"
                    ],
                    perfectFor: "creators, consultants, small businesses"
                  },
                  {
                    title: "Content Engine + Brand Kit",
                    features: [
                      "Brand voice generation",
                      "Templates for posts, reels, captions",
                      "AI-ready design assets",
                      "Content calendar starter kit",
                      "SEO-optimized blog framework"
                    ],
                    perfectFor: "creators wanting consistency"
                  },
                  {
                    title: "Creator Site (4-Page Build)",
                    features: [
                      "Everything in Starter Portfolio plus:",
                      "Services Page",
                      "Optimized pages for search",
                      "Brand kit included",
                      "Optional light automations (newsletter, post scheduling, lead capture workflows)"
                    ],
                    perfectFor: "creators ready to scale"
                  },
                  {
                    title: "Full Brand System",
                    features: [
                      "Full portfolio website",
                      "Brand system + visual identity",
                      "AI content engine",
                      "Starter automations",
                      "SEO blog setup",
                      "Your first 3 SEO-ready articles drafted for you"
                    ],
                    perfectFor: "creators and businesses ready to hit the ground running"
                  }
                ].map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
                  >
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                      {pkg.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-brand-gray-light flex items-start">
                          <span className="text-brand-gold mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-brand-gray-dark">
                      <p className="text-sm text-brand-gray-light">
                        <span className="text-brand-gold font-semibold">Perfect for:</span> {pkg.perfectFor}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gradient"
              >
                Why Choose Lopez Productions?
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Aesthetic + Strategy",
                    description: "You get content, visuals, systems, and structure that feel premium — not cookie-cutter."
                  },
                  {
                    title: "Built With You, Not At You",
                    description: "I collaborate. I guide. I teach you the system so you're not dependent on anyone to maintain it."
                  },
                  {
                    title: "Beginner Friendly",
                    description: "Even if you're brand new to AI or Web3, everything is explained in simple breakdowns."
                  },
                  {
                    title: "Fast Turnaround",
                    description: "Most systems ship in 48–72 hours depending on scope."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 card-hover text-center"
                  >
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-brand-gray-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Work Section */}
          <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gradient"
              >
                Recent Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-brand-gray-light text-center mb-12 max-w-3xl mx-auto"
              >
                A preview of recent brand systems, visuals, and portfolio builds.
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: item * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent aspect-square flex items-center justify-center card-hover"
                  >
                    <p className="text-brand-gray-muted text-sm">Coming Soon</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gradient"
              >
                How It Works
              </motion.h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Pick a Package",
                    description: "Starter? Brand kit? Full system? Choose what fits your goals."
                  },
                  {
                    step: "2",
                    title: "Kickoff Call / Form",
                    description: "We gather your brand info, inspo, and goals."
                  },
                  {
                    step: "3",
                    title: "Build Phase (48–72 hours)",
                    description: "Your site + brand assets + content engine get created."
                  },
                  {
                    step: "4",
                    title: "Delivery + Walkthrough",
                    description: "You get everything explained with simple steps to continue."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 card-hover text-center">
                      <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-brand-gray-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-gold text-2xl">
                        →
                      </div>
                    )}
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
                FAQ
              </motion.h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What's included in each brand system?",
                    a: "Every brand system includes a clean website foundation, a visual identity, and the content or workflows you need to present yourself professionally online. The details vary by package, but you'll always receive a complete, ready-to-use setup designed around your goals."
                  },
                  {
                    q: "Do I need to know AI to work with you?",
                    a: "No — you don't need any AI experience at all. Everything is designed to be beginner-friendly. I build the systems, walk you through how to use them, and give you simple frameworks so you can keep things running without feeling overwhelmed."
                  },
                  {
                    q: "Can you manage my content?",
                    a: "Yep — if you want ongoing support, I offer a retainer option. The price depends on the scope of your setup, how often you want content produced, and how hands-off you want to be."
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

          {/* Final CTA Section */}
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient"
              >
                Ready to Launch Your Brand System?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-brand-gray-light mb-8 max-w-2xl mx-auto"
              >
                Let's build your portfolio, content engine, and digital identity — together.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Build
                </motion.button>
                <motion.a
                  href="/get-started"
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Packages
                </motion.a>
              </motion.div>
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
