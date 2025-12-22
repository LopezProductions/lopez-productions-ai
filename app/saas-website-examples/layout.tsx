import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Website Examples | Lopez Productions',
  description: 'What high-performing SaaS websites get right. Real patterns, structures, and decisions — not surface-level aesthetics. Systems-based reference for effective SaaS website design.',
  keywords: 'SaaS website examples, SaaS website patterns, SaaS interface architecture, SaaS discoverability, SaaS category signaling, effective SaaS websites',
  alternates: {
    canonical: 'https://lopezproductions.ai/saas-website-examples',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/saas-website-examples',
    title: 'SaaS Website Examples | Lopez Productions',
    description: 'What high-performing SaaS websites get right. Real patterns, structures, and decisions — not surface-level aesthetics.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Website Examples | Lopez Productions',
    description: 'What high-performing SaaS websites get right. Real patterns, structures, and decisions — not surface-level aesthetics.',
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
