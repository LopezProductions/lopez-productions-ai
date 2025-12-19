import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Website Examples | Lopez Productions',
  description: 'Examples of effective SaaS website design, structure, and patterns. See how high-performing SaaS websites prioritize clarity, credibility, and modern search visibility.',
  keywords: 'SaaS website examples, SaaS website design examples, best SaaS websites, SaaS website patterns',
  alternates: {
    canonical: 'https://lopezproductions.ai/saas-website-examples',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/saas-website-examples',
    title: 'SaaS Website Examples | Lopez Productions',
    description: 'Examples of effective SaaS website design, structure, and patterns.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Website Examples | Lopez Productions',
    description: 'Examples of effective SaaS website design, structure, and patterns.',
    images: ['/og-image.jpg'],
  },
}

export default function SaaSWebsiteExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
