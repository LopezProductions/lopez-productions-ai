import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Website Design for Modern Products | Lopez Productions',
  description: 'I design SaaS websites that convert, build trust, and stay visible as search becomes increasingly AI-driven. Built for founders who want a site that explains their product clearly.',
  keywords: 'SaaS website design, SaaS website, B2B SaaS website, SaaS landing page design, SaaS website builder',
  alternates: {
    canonical: 'https://lopezproductions.ai/saas-website-design',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/saas-website-design',
    title: 'SaaS Website Design for Modern Products | Lopez Productions',
    description: 'I design SaaS websites that convert, build trust, and stay visible as search becomes increasingly AI-driven.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Website Design for Modern Products | Lopez Productions',
    description: 'I design SaaS websites that convert, build trust, and stay visible as search becomes increasingly AI-driven.',
    images: ['/og-image.jpg'],
  },
}

export default function SaaSWebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
