import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation & Workflow Systems for Creators and Small Teams | Lopez Productions',
  description: 'Build smarter systems without tech overwhelm. Websites, Notion dashboards, and AI-powered workflows for creators, consultants, and small businesses.',
  keywords: [
    'AI workflow systems',
    'content automation engine',
    'brand automation systems',
    'AI design tools',
    'AI market research systems',
    'automation agency',
    'AI systems designer',
  ].join(', '),
  alternates: {
    canonical: 'https://lopezproductions.ai/solutions',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/solutions',
    title: 'AI Automation & Workflow Systems for Creators and Small Teams | Lopez Productions',
    description: 'Build smarter systems without tech overwhelm. Websites, Notion dashboards, and AI-powered workflows for creators, consultants, and small businesses.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & Workflow Systems for Creators and Small Teams | Lopez Productions',
    description: 'Build smarter systems without tech overwhelm. Websites, Notion dashboards, and AI-powered workflows for creators, consultants, and small businesses.',
    images: ['/og-image.jpg'],
  },
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

