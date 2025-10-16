import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve | Market Research, Creators & Agencies — Lopez Productions.ai',
  description: 'We build AI-powered landing pages, automation systems, and strategic market analysis for research teams, creators, and agencies. Cut busywork, increase conversions, and scale with practical, no-overwhelm systems.',
  keywords: 'market research, creator tools, agency workflows, AI landing pages, business automation, workflow optimization, competitive analysis',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/industries',
    title: 'Industries We Serve | Market Research, Creators & Agencies — Lopez Productions.ai',
    description: 'We build AI-powered landing pages, automation systems, and strategic market analysis for research teams, creators, and agencies. Cut busywork, increase conversions, and scale with practical, no-overwhelm systems.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Market Research, Creators & Agencies — Lopez Productions.ai',
    description: 'We build AI-powered landing pages, automation systems, and strategic market analysis for research teams, creators, and agencies. Cut busywork, increase conversions, and scale with practical, no-overwhelm systems.',
    images: ['/og-image.jpg'],
  },
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
