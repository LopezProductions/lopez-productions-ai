import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Portfolio Template | Launch Your Site in 10 Minutes',
  description: 'Download a free Notion-to-Website AI portfolio template and start customizing your showcase today.',
  keywords: 'free portfolio website builder, best free portfolio website builder, free website builder for portfolio',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/free-portfolio-template',
    title: 'Free AI Portfolio Template | Launch Your Site in 10 Minutes',
    description: 'Download a free Notion-to-Website AI portfolio template and start customizing your showcase today.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Portfolio Template | Launch Your Site in 10 Minutes',
    description: 'Download a free Notion-to-Website AI portfolio template and start customizing your showcase today.',
    images: ['/og-image.jpg'],
  },
}

export default function FreePortfolioTemplateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}








