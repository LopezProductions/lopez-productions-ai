import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Portfolio & AI Automation Guides | Lopez Productions',
  description: 'Expert guides on building portfolio websites, AI automation, and workflow optimization. Learn how to create systems that scale your creative business.',
  keywords: 'portfolio website guide, AI automation blog, workflow optimization, creative business tips',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/blog',
    title: 'Blog | Portfolio & AI Automation Guides | Lopez Productions',
    description: 'Expert guides on building portfolio websites, AI automation, and workflow optimization.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Portfolio & AI Automation Guides | Lopez Productions',
    description: 'Expert guides on building portfolio websites, AI automation, and workflow optimization.',
    images: ['/og-image.jpg'],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}






