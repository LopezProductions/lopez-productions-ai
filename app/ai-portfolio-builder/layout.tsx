import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Portfolio Website Builder | Smarter Sites for Creators',
  description: 'Forget cookie-cutter templates. We build intelligent portfolio systems that update automatically, integrate your tools, and impress clients.',
  keywords: 'AI portfolio website builder, AI portfolio builder, best portfolio website builder, build your own portfolio website',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/ai-portfolio-builder',
    title: 'AI Portfolio Website Builder | Smarter Sites for Creators',
    description: 'Forget cookie-cutter templates. We build intelligent portfolio systems that update automatically, integrate your tools, and impress clients.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Portfolio Website Builder | Smarter Sites for Creators',
    description: 'Forget cookie-cutter templates. We build intelligent portfolio systems that update automatically, integrate your tools, and impress clients.',
    images: ['/og-image.jpg'],
  },
}

export default function AIPortfolioBuilderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}








