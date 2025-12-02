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
    buyLink: 'https://buy.stripe.com/8x26oI1EOdy42Gc333cs806',
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
    buyLink: 'https://buy.stripe.com/8x26oI1EOdy42Gc333cs806',
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
    buyLink: 'https://buy.stripe.com/8x26oI1EOdy42Gc333cs806',
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
    buyLink: 'https://buy.stripe.com/8x26oI1EOdy42Gc333cs806',
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
    buyLink: 'https://buy.stripe.com/8x26oI1EOdy42Gc333cs806',
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
    buyLink: 'https://buy.stripe.com/8x26oI1EOdy42Gc333cs806',
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
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: template.title,
    description: template.description,
    image: `https://lopezproductions.ai/images/${slug}.jpg`,
    brand: {
      '@type': 'Brand',
      name: 'Lopez Productions',
    },
    offers: {
      '@type': 'Offer',
      price: '50.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://lopezproductions.ai/templates/${slug}`,
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

              {/* How It Works Section */}
              <section className="mb-12 pt-8 border-t border-brand-gray-dark">
                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">
                  How It Works
                </h2>
                
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                      1) Pick a Template
                    </h3>
                    <p className="text-lg text-brand-gray-light leading-relaxed">
                      Choose from clean, modern React or Next.js templates built for fast speeds and easy editing.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                      2) Choose Your Level of Support
                    </h3>
                    <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
                      You have two ways to launch:
                    </p>
                    
                    <div className="space-y-6 ml-4">
                      <div className="border-l-2 border-brand-gold pl-4">
                        <h4 className="text-lg font-semibold text-brand-gold mb-2">
                          Option A — Starter Template ($50)
                        </h4>
                        <p className="text-brand-gray-light mb-3">
                          Perfect if you want to customize everything yourself.
                        </p>
                        <p className="text-brand-gray-light font-semibold mb-2">You get:</p>
                        <ul className="space-y-1 text-brand-gray-light ml-4">
                          <li>• Complete codebase (React / Vite / Tailwind)</li>
                          <li>• 3–5 prebuilt page layouts</li>
                          <li>• Mobile-ready components</li>
                          <li>• Setup instructions</li>
                          <li>• Lifetime updates</li>
                        </ul>
                      </div>

                      <div className="border-l-2 border-brand-gold pl-4">
                        <h4 className="text-lg font-semibold text-brand-gold mb-2">
                          Option B — Done-For-You Website ($250)
                        </h4>
                        <p className="text-brand-gray-light mb-3">
                          I customize the template for you.
                        </p>
                        <p className="text-brand-gray-light font-semibold mb-2">You get:</p>
                        <ul className="space-y-1 text-brand-gray-light ml-4">
                          <li>• Full setup + deployment</li>
                          <li>• Custom branding (logo, colors, typography)</li>
                          <li>• Up to 3 fully edited pages</li>
                          <li>• Content placement & layout fixes</li>
                          <li>• 24–48 hour delivery</li>
                          <li>• Intake form included</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                      3) Optional Add-Ons
                    </h3>
                    <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
                      Add extra polish if you need it:
                    </p>
                    <ul className="space-y-2 text-brand-gray-light ml-4">
                      <li>• <strong className="text-brand-gold">Custom Image Pack (+$25)</strong> — Branded hero images + banner graphics</li>
                      <li>• <strong className="text-brand-gold">Mobile Optimization (+$50)</strong> — Additional refinement for small screen layouts, ensuring perfect responsiveness</li>
                      <li>• <strong className="text-brand-gold">Additional Page Build (+$60/page)</strong> — For teams that want more content built before launch</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Pricing Options Section */}
              <section className="mb-12 pt-8 border-t border-brand-gray-dark">
                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">
                  Pricing Options
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* BASE - $50 */}
                  <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-wider text-brand-gold">BASE</span>
                      <h3 className="text-2xl font-serif font-bold text-brand-gold mt-2">$50 Template</h3>
                      <p className="text-brand-gray-light mt-2">For DIY users</p>
                    </div>
                    <ul className="space-y-2 text-brand-gray-light mb-6">
                      <li>• Complete codebase</li>
                      <li>• 3–5 prebuilt pages</li>
                      <li>• Mobile-ready components</li>
                      <li>• Setup instructions</li>
                      <li>• Lifetime updates</li>
                    </ul>
                    <a
                      href="https://buy.stripe.com/8x26oI1EOdy42Gc333cs806"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-full px-6 py-3 text-base font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition"
                    >
                      Buy Now →
                    </a>
                  </div>

                  {/* POPULAR - $125 */}
                  <div className="border-2 border-brand-gold rounded-lg p-6 bg-brand-black/50 relative">
                    <div className="absolute -top-3 left-4 bg-brand-gold text-brand-black px-3 py-1 rounded-full text-xs font-semibold">
                      POPULAR
                    </div>
                    <div className="mb-4 mt-2">
                      <h3 className="text-2xl font-serif font-bold text-brand-gold">$125 Template + Branding Pack</h3>
                      <p className="text-brand-gray-light mt-2">Template + Branding</p>
                    </div>
                    <ul className="space-y-2 text-brand-gray-light mb-6">
                      <li>• Everything in Base</li>
                      <li>• Custom color palette</li>
                      <li>• Logo insertion</li>
                      <li>• 3 custom hero images</li>
                      <li>• Social media header pack</li>
                    </ul>
                    <a
                      href="https://buy.stripe.com/4gMaEYfvEgKga8E8nncs803"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-full px-6 py-3 text-base font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition"
                    >
                      Buy Now →
                    </a>
                  </div>

                  {/* PREMIUM - $250 */}
                  <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-wider text-brand-gold">PREMIUM</span>
                      <h3 className="text-2xl font-serif font-bold text-brand-gold mt-2">$250 Done-For-You</h3>
                      <p className="text-brand-gray-light mt-2">3 Pages Customized</p>
                    </div>
                    <ul className="space-y-2 text-brand-gray-light mb-6">
                      <li>• Full setup + deployment</li>
                      <li>• Custom branding</li>
                      <li>• Up to 3 fully edited pages</li>
                      <li>• Content placement & fixes</li>
                      <li>• 24–48 hour delivery</li>
                      <li>• Intake form included</li>
                    </ul>
                    <a
                      href="https://buy.stripe.com/8x214oabkbpWbcIfPPcs804"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-full px-6 py-3 text-base font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition"
                    >
                      Buy Now →
                    </a>
                  </div>

                  {/* ELITE - $450 */}
                  <div className="border border-brand-gray-dark rounded-lg p-6 bg-brand-black/50">
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-wider text-brand-gold">ELITE</span>
                      <h3 className="text-2xl font-serif font-bold text-brand-gold mt-2">$450 Full Brand + Website</h3>
                      <p className="text-brand-gray-light mt-2">Complete Solution</p>
                    </div>
                    <ul className="space-y-2 text-brand-gray-light mb-6">
                      <li>• Everything in Premium</li>
                      <li>• 5 custom pages</li>
                      <li>• Brand sheet</li>
                      <li>• Favicons</li>
                      <li>• Deployment done for you</li>
                    </ul>
                    <a
                      href="https://buy.stripe.com/5kQcN66Z88dK4Ok5bbcs805"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-full px-6 py-3 text-base font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition"
                    >
                      Buy Now →
                    </a>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-brand-gray-light">
                    Need help before or after purchase?{' '}
                    <a
                      href="mailto:support@lopezproductions.ai"
                      className="text-brand-gold hover:text-brand-gold-dark transition-colors underline"
                    >
                      support@lopezproductions.ai
                    </a>
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-12 pt-8 border-t border-brand-gray-dark">
                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      What&apos;s included in each template?
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">
                      Each template includes the complete codebase (React/Next.js + Tailwind), 3–5 prebuilt page layouts, baseline responsive styling, setup instructions, and lifetime updates. You get everything you need to launch a professional website.
                    </p>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      Do I need coding experience to use these templates?
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">
                      Not necessarily. Beginners can use the templates with minimal editing, and developers can customize them deeply. If you&apos;d rather not touch code, the $250 Done-For-You package handles everything for you.
                    </p>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      What&apos;s the difference between the $50 template and the $250 Done-For-You package?
                    </summary>
                    <div className="mt-3 text-brand-gray-light leading-relaxed space-y-3">
                      <p>
                        <strong className="text-brand-gold">$50 Template — DIY:</strong>
                        <br />
                        You receive the full codebase and customize it yourself.
                      </p>
                      <p>
                        <strong className="text-brand-gold">$250 Done-For-You — Assisted Build:</strong>
                        <br />
                        I customize up to 3 pages for you, apply your branding, help shape your layout, and handle deployment. This is ideal if you want a finished website quickly without the technical work.
                      </p>
                    </div>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      What add-ons are available?
                    </summary>
                    <div className="mt-3 text-brand-gray-light leading-relaxed space-y-2">
                      <p>You can enhance your build with optional upgrades:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong className="text-brand-gold">Custom Image Pack (+$25)</strong> — Branded hero images &amp; banner graphics</li>
                        <li>• <strong className="text-brand-gold">Mobile Optimization (+$50)</strong> — Manual refinement for small screens</li>
                        <li>• <strong className="text-brand-gold">Extra Page Build (+$60/page)</strong> — Add as many pages as you need</li>
                      </ul>
                      <p className="mt-2">Add-ons are available for both DIY and Done-For-You clients.</p>
                    </div>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      Are the templates mobile-friendly?
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">
                      Yes. All templates include baseline responsive styling out of the box.
                      <br />
                      <br />
                      The Mobile Optimization add-on provides extra refinement—perfect spacing, typography scaling, image adjustments, and improved small-screen usability.
                    </p>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      How long does the Done-For-You service take?
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">
                      Most builds are completed within 24–72 hours, depending on complexity and the number of customizations requested. You&apos;ll receive an intake form immediately after purchase so we can start quickly.
                    </p>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      Can you build a full website with more than 3 pages?
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">
                      Yes. Additional pages are available for $60/page, or you can request a custom quote for larger projects. Some clients upgrade to the $450 Elite Build for complete branding + 5+ pages.
                    </p>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      Can I request custom branding?
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">
                      Absolutely.
                      <br />
                      <br />
                      Add the Custom Image &amp; Branding Pack (+$25) or choose the Done-For-You option to have your colors, typography, logo, and style applied professionally.
                    </p>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      Do you offer refunds?
                    </summary>
                    <p className="mt-3 text-brand-gray-light leading-relaxed">
                      Due to the digital nature of the templates, refunds aren&apos;t available once the files have been delivered. However, I&apos;m always happy to help troubleshoot or make sure you can launch successfully.
                    </p>
                  </details>

                  <details className="rounded-xl border border-brand-gray-dark p-6 bg-brand-black/30 open:bg-brand-black/50 transition-all">
                    <summary className="cursor-pointer font-semibold text-brand-gray-light hover:text-brand-gold transition-colors text-lg">
                      What happens after I make a purchase?
                    </summary>
                    <div className="mt-3 text-brand-gray-light leading-relaxed space-y-2">
                      <p>You&apos;ll receive a confirmation email with:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Your download files</li>
                        <li>• Setup instructions</li>
                        <li>• (If applicable) your customization intake form</li>
                        <li>• A direct line of support if you need help launching</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </section>

              {/* Buy Button Section */}
              <section className="mt-12 pt-8 border-t border-brand-gray-dark">
                <div className="text-center">
                  <p className="text-brand-gray-light mb-4">
                    Ready to get started? Choose a pricing option above or start with the base template.
                  </p>
                  <a
                    href={template.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition"
                  >
                    Buy Template →
                  </a>
                </div>
              </section>
            </div>
          </section>
          
          <Footer />
        </div>
      </main>
    </>
  )
}

