import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Systems Playbook | Lopez Productions',
  description: 'Explore the Lopez Productions Playbook — practical guides on AI workflows, automation, and brand systems that help small businesses scale smarter.',
  keywords: [
    'AI workflow systems',
    'AI automation blog',
    'AI content engine',
    'brand automation',
    'Notion Make Zapier automation',
    'AI design systems',
  ].join(', '),
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/playbook',
    title: 'AI Systems Playbook | Lopez Productions',
    description: 'Explore the Lopez Productions Playbook — practical guides on AI workflows, automation, and brand systems that help small businesses scale smarter.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Systems Playbook | Lopez Productions',
    description: 'Explore the Lopez Productions Playbook — practical guides on AI workflows, automation, and brand systems that help small businesses scale smarter.',
    images: ['/og-image.jpg'],
  },
}

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

