import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Company Websites | Lopez Productions',
  description: 'Production-ready websites for AI-native products — from prompt to production. System-level architecture that explains complex technology clearly and remains legible as products evolve.',
  keywords: 'AI company website, AI startup website, AI product website design, AI-native website, AI business systems',
  alternates: {
    canonical: 'https://lopezproductions.ai/ai-company-websites',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/ai-company-websites',
    title: 'AI Company Websites | Lopez Productions',
    description: 'Production-ready websites for AI-native products — from prompt to production. System-level architecture that explains complex technology clearly.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Company Websites | Lopez Productions',
    description: 'Production-ready websites for AI-native products — from prompt to production. System-level architecture that explains complex technology clearly.',
    images: ['/og-image.jpg'],
  },
}

export default function AICompanyWebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
