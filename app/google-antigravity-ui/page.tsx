import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import FAQSchema from '../../components/FAQSchema'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Zero Gravity UI Template — The Interface for Modern Dashboards | Lopez Productions',
  description:
    'Download the Zero Gravity UI template — a modern, futuristic interface concept built with React, Vite, TailwindCSS, and Framer Motion. The UI system that defines what modern dashboards should be.',
  keywords:
    'Zero Gravity, Dashboard UI, AI Interface, UI Design, Interface Layer, React template, Vite template, UI template',
  alternates: {
    canonical: 'https://www.lopezproductions.ai/google-antigravity-ui',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.lopezproductions.ai/google-antigravity-ui',
    title: 'Zero Gravity UI Template — The Interface for Modern Dashboards',
    description:
      'Download the Zero Gravity UI template — a modern, futuristic interface concept built with React, Vite, TailwindCSS, and Framer Motion.',
    images: ['/1200-google-antigravity.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Gravity UI Template — The Interface for Modern Dashboards',
    description:
      'Download the Zero Gravity UI template — a modern, futuristic interface concept built with React, Vite, TailwindCSS, and Framer Motion.',
    images: ['/1200-google-antigravity.png'],
  },
}

const faqs = [
  {
    question: "What's included in the Zero Gravity UI template?",
    answer:
      'The template includes the complete React + Vite codebase, all source files, TailwindCSS configuration, Framer Motion animations, custom Zero Gravity color palette, setup instructions, and documentation. You get everything needed to customize and deploy the interface.',
  },
  {
    question: 'Do I need coding experience to use this template?',
    answer:
      'Basic knowledge of React and JavaScript is recommended for customization. However, the template is well-documented and includes setup instructions. If you understand HTML/CSS basics, you can customize colors, text, and styling easily.',
  },
  {
    question: 'What technologies does this template use?',
    answer:
      'The template is built with React, Vite (for fast development), TailwindCSS (for styling), and Framer Motion (for animations). All dependencies are included and documented in the package.json file.',
  },
  {
    question: 'Can I use this for commercial projects?',
    answer:
      'Yes, once you purchase the template, you can use it for personal or commercial projects. The license allows you to modify and use the template as needed for your projects.',
  },
  {
    question: 'Is the template mobile-responsive?',
    answer:
      'Yes, the template is built with mobile-first responsive design using TailwindCSS. It works seamlessly across desktop, tablet, and mobile devices.',
  },
  {
    question: 'How do I get support if I have questions?',
    answer:
      'The template includes comprehensive documentation and setup instructions. For additional support, you can reach out through the contact information provided with your purchase.',
  },
]

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Zero Gravity UI Template',
  description:
    'A modern, futuristic UI template built with React, Vite, TailwindCSS, and Framer Motion. Features floating search elements, microgravity-style motion, and a custom Zero Gravity color palette.',
  image: 'https://www.lopezproductions.ai/1200-google-antigravity.png',
  brand: {
    '@type': 'Brand',
    name: 'Lopez Productions',
  },
  category: 'UI Template',
  sku: 'google-antigravity-ui',
  url: 'https://www.lopezproductions.ai/google-antigravity-ui',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '0',
    availability: 'https://schema.org/InStock',
    url: 'https://www.lopezproductions.ai/google-antigravity-ui',
  },
}

export default function GoogleAntigravityUILanding() {
  const stripeCheckoutUrl = 'https://buy.stripe.com/9B628s83c51y0y4avvcs807'

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <main className="min-h-screen bg-background relative overflow-hidden">
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

          {/* Hero Section */}
          <section className="pt-20 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs title="Zero Gravity UI Template" slug="google-antigravity-ui" type="simple" />

              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-3">UI Template</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
                Zero Gravity UI Template
              </h1>
              <p className="text-xl text-brand-gray-light mb-4 max-w-3xl leading-relaxed">
                A modern, futuristic UI system that defines what <strong className="text-brand-gold">Zero Gravity</strong> dashboards should be — clean, weightless interfaces built for AI-era tools.
              </p>
              <p className="text-lg text-brand-gray-light mb-8 max-w-3xl leading-relaxed">
                Built with React, Vite, TailwindCSS, and Framer Motion. Features floating search elements, microgravity-style motion, and a custom Zero Gravity color palette.
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 text-xs rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  Zero Gravity
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  Dashboard UI
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  AI Interface
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  React Template
                </span>
              </div>

              <a
                href={stripeCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-8 py-4 text-base font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition mb-4"
              >
                Download Template →
              </a>
            </div>
          </section>

          {/* Live Demo Section */}
          <section className="py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-6 text-center">
                Live Demo — Zero Gravity Interface Preview
              </h2>
              <div className="w-full h-[700px] rounded-xl overflow-hidden border border-brand-gray-dark bg-brand-black">
                <iframe
                  src="https://zerogs.netlify.app"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="fullscreen"
                  loading="lazy"
                  title="Zero Gravity UI Preview"
                  className="border-0"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://zerogs.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 rounded-lg bg-brand-black text-brand-gold hover:bg-brand-gray-dark transition border border-brand-gold/20"
                >
                  Open Fullscreen Preview →
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-8">What&rsquo;s Inside</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                  <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">Floating Search Elements</h3>
                  <p className="text-brand-gray-light">
                    Search interface with microgravity-style motion and smooth animations that feel weightless and modern.
                  </p>
                </div>
                <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                  <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">Microgravity Motion</h3>
                  <p className="text-brand-gray-light">
                    Elements float and drift with physics-defying animations that create a futuristic, AI-native feel.
                  </p>
                </div>
                <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                  <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">Ultra-Minimal Spacing</h3>
                  <p className="text-brand-gray-light">
                    Clean typography and spacing that creates a sense of depth without clutter.
                  </p>
                </div>
                <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                  <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">Custom Color Palette</h3>
                  <p className="text-brand-gray-light">
                    Zero Gravity color system: Zero Gravity White, Event Horizon Black, Ion Glow Blue, Quantum Mint, and Gravity Well Pink.
                  </p>
                </div>
                <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                  <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">Drifting Cards</h3>
                  <p className="text-brand-gray-light">
                    Interactive card components that lift on hover and create a sense of depth and interactivity.
                  </p>
                </div>
                <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                  <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">Particle Field Background</h3>
                  <p className="text-brand-gray-light">
                    Subtle particle effects that add depth and visual interest without overwhelming the interface.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-6">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border border-brand-gray-dark rounded-lg bg-brand-black/50">
                  <p className="text-brand-gold font-semibold mb-2">React</p>
                  <p className="text-sm text-brand-gray-light">Component library</p>
                </div>
                <div className="text-center p-4 border border-brand-gray-dark rounded-lg bg-brand-black/50">
                  <p className="text-brand-gold font-semibold mb-2">Vite</p>
                  <p className="text-sm text-brand-gray-light">Build tool</p>
                </div>
                <div className="text-center p-4 border border-brand-gray-dark rounded-lg bg-brand-black/50">
                  <p className="text-brand-gold font-semibold mb-2">TailwindCSS</p>
                  <p className="text-sm text-brand-gray-light">Styling</p>
                </div>
                <div className="text-center p-4 border border-brand-gray-dark rounded-lg bg-brand-black/50">
                  <p className="text-brand-gold font-semibold mb-2">Framer Motion</p>
                  <p className="text-sm text-brand-gray-light">Animations</p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-6">What&rsquo;s Included</h2>
              
              {/* Inside the Kit Image */}
              <div className="my-8 rounded-xl overflow-hidden border border-brand-gray-dark">
                <Image
                  src="/inside-the-kit.png"
                  alt="What's inside the Zero Gravity UI template"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <ul className="space-y-3 text-lg text-brand-gray-light">
                <li className="flex gap-3">
                  <span className="text-brand-gold">•</span>
                  <span>Complete React + Vite source code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">•</span>
                  <span>All component files and assets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">•</span>
                  <span>TailwindCSS configuration with custom Zero Gravity palette</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">•</span>
                  <span>Framer Motion animation setup</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">•</span>
                  <span>Setup and installation instructions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">•</span>
                  <span>Documentation and customization guide</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">•</span>
                  <span>Commercial license included</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-4">
                Ready to Build Your Zero Gravity Interface?
              </h2>
              <p className="text-lg text-brand-gray-light mb-8 max-w-2xl mx-auto">
                Download the complete Zero Gravity UI template and start customizing your own futuristic interface today.
              </p>
              <a
                href={stripeCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-10 py-5 text-lg font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition"
              >
                Download Template →
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-8 text-center">FAQ</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="rounded-xl border border-brand-gray-dark p-6 open:bg-brand-black/50 transition-all duration-300"
                  >
                    <summary className="cursor-pointer font-semibold text-brand-gold hover:text-brand-gold/80 transition-colors">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-6">Learn More</h2>
              <p className="text-lg text-brand-gray-light mb-4">
                Read the full story behind this template and why it was built:
              </p>
              <a
                href="/playbook/google-antigravity-ui"
                className="inline-block text-brand-gold hover:text-brand-gold/80 underline text-lg"
              >
                Zero Gravity: The Story Behind the Dashboard UI →
              </a>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}

