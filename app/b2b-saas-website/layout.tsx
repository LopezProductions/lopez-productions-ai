import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B2B SaaS Website Design: What Actually Works (and What Doesn\'t) | Lopez Productions',
  description: 'B2B SaaS websites aren\'t about flash or hype. They\'re about clarity, credibility, and making it easy for the right buyer to say yes. Learn what works, what doesn\'t, and how much it actually costs.',
  keywords: 'B2B SaaS website, B2B SaaS website design, best B2B websites, B2B website cost, B2B SaaS examples',
  alternates: {
    canonical: 'https://lopezproductions.ai/b2b-saas-website',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/b2b-saas-website',
    title: 'B2B SaaS Website Design: What Actually Works (and What Doesn\'t) | Lopez Productions',
    description: 'B2B SaaS websites aren\'t about flash or hype. They\'re about clarity, credibility, and making it easy for the right buyer to say yes.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B SaaS Website Design: What Actually Works (and What Doesn\'t) | Lopez Productions',
    description: 'B2B SaaS websites aren\'t about flash or hype. They\'re about clarity, credibility, and making it easy for the right buyer to say yes.',
    images: ['/og-image.jpg'],
  },
}

export default function B2BSaaSWebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
