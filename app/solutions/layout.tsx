import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Systems & Automation Solutions | Lopez Productions',
  description: 'Explore Lopez Productions\' AI systems — from workflow automation to content, brand, and design engines — plus market research that powers it all.',
  keywords: [
    'AI workflow systems',
    'content automation engine',
    'brand automation systems',
    'AI design tools',
    'AI market research systems',
    'automation agency',
    'AI systems designer',
  ].join(', '),
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/solutions',
    title: 'AI Systems & Automation Solutions | Lopez Productions',
    description: 'Explore Lopez Productions\' AI systems — from workflow automation to content, brand, and design engines — plus market research that powers it all.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Systems & Automation Solutions | Lopez Productions',
    description: 'Explore Lopez Productions\' AI systems — from workflow automation to content, brand, and design engines — plus market research that powers it all.',
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

