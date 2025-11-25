import React from 'react'
import Script from 'next/script'
import type { Metadata } from 'next'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { notFound } from 'next/navigation'

const TEMPLATE_DATA: Record<
  string,
  {
    title: string
    category: string
    description: string
    longDescription: string
    features: string[]
    idealFor: string[]
    buyLink: string
    previewUrl: string
  }
> = {
  'polaris-blue': {
    title: 'Polaris Blue',
    category: 'Web Template',
    description:
      'A modern, professional website template with a clean blue aesthetic perfect for tech companies and creative agencies.',
    longDescription:
      'Polaris Blue features a sophisticated color scheme, smooth animations, and a layout designed to showcase your services and portfolio. Built with performance and conversion in mind.',
    features: [
      'Modern blue color scheme',
      'Smooth scroll animations',
      'Service showcase sections',
      'Portfolio gallery',
      'Contact forms included',
      'Mobile-first responsive design',
      'SEO optimized',
      'Built in Next.js + Tailwind',
    ],
    idealFor: [
      'Tech companies',
      'Creative agencies',
      'Professional services',
      'Consulting firms',
    ],
    buyLink: 'https://buy.stripe.com/XXXXXXXX', // Replace with Stripe link
    previewUrl: 'https://polaris-blue.netlify.app/',
  },
  'polaris-light': {
    title: 'Polaris Light',
    category: 'Web Template',
    description:
      'A light, airy website template perfect for modern brands that want a clean, minimalist aesthetic.',
    longDescription:
      'Polaris Light emphasizes white space, elegant typography, and subtle interactions. Perfect for brands that want to let their content shine without visual clutter.',
    features: [
      'Light, minimalist design',
      'Elegant typography',
      'Subtle animations',
      'Content-focused layout',
      'Blog section included',
      'Testimonial sections',
      'Mobile responsive',
      'Fast loading performance',
    ],
    idealFor: [
      'Lifestyle brands',
      'Content creators',
      'Minimalist businesses',
      'Personal brands',
    ],
    buyLink: 'https://buy.stripe.com/YYYYYYYY',
    previewUrl: 'https://polaris-light.netlify.app/',
  },
  'law-crest': {
    title: 'Law Crest',
    category: 'Web Template',
    description:
      'A professional legal services website template with elegant design and trust-building elements.',
    longDescription:
      'Law Crest is designed specifically for legal professionals, featuring sections for practice areas, attorney profiles, case studies, and client testimonials. Built to establish credibility and convert visitors into clients.',
    features: [
      'Professional legal design',
      'Practice area sections',
      'Attorney profile pages',
      'Case study showcase',
      'Client testimonial sections',
      'Contact and consultation forms',
      'Trust indicators',
      'Bar association compliant',
    ],
    idealFor: [
      'Law firms',
      'Solo attorneys',
      'Legal consultants',
      'Paralegal services',
    ],
    buyLink: 'https://buy.stripe.com/ZZZZZZZZ',
    previewUrl: 'https://law-crest.netlify.app/',
  },
  'roamline': {
    title: 'Roamline',
    category: 'Web Template',
    description:
      'A travel and adventure-focused website template designed for tour operators, travel bloggers, and adventure companies.',
    longDescription:
      'Roamline captures the spirit of adventure with stunning imagery support, destination showcases, and booking integration. Perfect for travel businesses that want to inspire wanderlust.',
    features: [
      'Adventure-focused design',
      'Destination showcase',
      'Image gallery optimized',
      'Booking section',
      'Travel blog layout',
      'Testimonial sections',
      'Social media integration',
      'Mobile-optimized for travelers',
    ],
    idealFor: [
      'Travel agencies',
      'Tour operators',
      'Travel bloggers',
      'Adventure companies',
    ],
    buyLink: 'https://buy.stripe.com/AAAAAAAA',
    previewUrl: 'https://roamline.netlify.app/',
  },
  'shieldcare': {
    title: 'Shieldcare',
    category: 'Web Template',
    description:
      'A healthcare and medical services website template designed to build trust and facilitate patient communication.',
    longDescription:
      'Shieldcare combines a professional medical aesthetic with patient-friendly navigation. Features include service pages, provider profiles, appointment booking, and health information sections.',
    features: [
      'Healthcare-focused design',
      'Service pages',
      'Provider profiles',
      'Appointment booking',
      'Patient portal integration',
      'Health information sections',
      'HIPAA-compliant structure',
      'Accessibility optimized',
    ],
    idealFor: [
      'Medical practices',
      'Healthcare clinics',
      'Dental offices',
      'Wellness centers',
    ],
    buyLink: 'https://buy.stripe.com/BBBBBBBB',
    previewUrl: 'https://shieldcare.netlify.app/',
  },
  'revive-pt': {
    title: 'Revive PT',
    category: 'Web Template',
    description:
      'A physical therapy and wellness website template designed for PT clinics, chiropractors, and wellness practitioners.',
    longDescription:
      'Revive PT emphasizes movement, recovery, and wellness with dynamic layouts, treatment showcase sections, and patient success stories. Built to help patients understand your services and book appointments.',
    features: [
      'Wellness-focused design',
      'Treatment showcase',
      'Patient success stories',
      'Appointment booking',
      'Exercise library section',
      'Insurance information',
      'Location and hours',
      'Mobile-friendly for on-the-go',
    ],
    idealFor: [
      'Physical therapy clinics',
      'Chiropractic offices',
      'Wellness centers',
      'Rehabilitation facilities',
    ],
    buyLink: 'https://buy.stripe.com/CCCCCCCC',
    previewUrl: 'https://revive-pt.netlify.app/',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = TEMPLATE_DATA[slug]

  if (!template) {
    return {
      title: 'Template Not Found | Lopez Productions',
    }
  }

  return {
    title: `${template.title} | Lopez Productions`,
    description: template.description,
    openGraph: {
      title: template.title,
      description: template.description,
    },
  }
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = TEMPLATE_DATA[slug]

  if (!template) {
    notFound()
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: template.title,
    description: template.description,
    category: template.category,
    url: `https://lopezproductions.ai/templates/${slug}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: template.buyLink,
    },
  }

  return (
    <>
      <Script id="template-schema" type="application/ld+json">
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
          
          <section className="pt-20 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-3">
                {template.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                {template.title}
              </h1>
              <p className="text-lg text-brand-gray-light mb-10 max-w-3xl">
                {template.description}
              </p>
              
              <p className="text-base text-brand-gray-light mb-12 max-w-3xl leading-relaxed">
                {template.longDescription}
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">
                  What&apos;s Inside
                </h2>
                <ul className="space-y-2 text-lg text-brand-gray-light">
                  {template.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand-gold">•</span> <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">
                  Ideal For
                </h2>
                <ul className="space-y-2 text-lg text-brand-gray-light">
                  {template.idealFor.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand-gold">•</span> <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">
                  Live Preview
                </h2>
                <div className="rounded-lg border border-brand-gray-dark overflow-hidden bg-brand-black">
                  <iframe
                    src={template.previewUrl}
                    title={`${template.title} preview`}
                    className="w-full h-[600px] border-0"
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts"
                  />
                </div>
                <div className="mt-4 text-center">
                  <a
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:text-brand-gold-dark text-sm underline"
                  >
                    Open full preview in new tab →
                  </a>
                </div>
              </section>

              <section className="mt-12 pt-8 border-t border-brand-gray-dark">
                <a
                  href={template.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition"
                >
                  Buy Template →
                </a>
              </section>
            </div>
          </section>
          
          <Footer />
        </div>
      </main>
    </>
  )
}

