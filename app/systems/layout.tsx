import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineered Systems, Not Just Screens | Lopez Productions',
  description:
    'Governed Next.js control panels, admin dashboards, and internal tools. The Phenom reference architecture demonstrates interface standards and design governance for decision-critical software.',
  keywords: 'interface design systems, complex systems design, reference implementation, governed interfaces, decision-critical interfaces',
  alternates: {
    canonical: 'https://lopezproductions.ai/systems',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/systems',
    title: 'Engineered Systems, Not Just Screens | Lopez Productions',
    description:
      'Governed Next.js control panels, admin dashboards, and internal tools. The Phenom reference architecture demonstrates interface standards and design governance for decision-critical software.',
    images: ['/lp-og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineered Systems, Not Just Screens | Lopez Productions',
    description:
      'Governed Next.js control panels, admin dashboards, and internal tools. The Phenom reference architecture demonstrates interface standards and design governance for decision-critical software.',
    images: ['/lp-og.png'],
  },
}

export default function SystemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
