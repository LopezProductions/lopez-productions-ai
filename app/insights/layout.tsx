import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Workflow Insights & Automation Guides | Lopez Productions',
  description: 'Expert insights on AI automation, workflow optimization, and creative systems. Learn how to build smarter brands with automated processes that actually work.',
  keywords: 'AI automation insights, workflow optimization, creative systems, business automation, AI workflows, automation guides, productivity systems',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/insights',
    title: 'AI Workflow Insights & Automation Guides | Lopez Productions',
    description: 'Expert insights on AI automation, workflow optimization, and creative systems. Learn how to build smarter brands with automated processes that actually work.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Insights & Automation Guides | Lopez Productions',
    description: 'Expert insights on AI automation, workflow optimization, and creative systems.',
    images: ['/og-image.jpg'],
  },
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
