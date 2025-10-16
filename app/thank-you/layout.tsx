import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Welcome to Lopez Productions',
  description: 'Thanks for joining Lopez Productions! Access your free content planning kit and resources.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/thank-you',
    title: 'Thank You | Welcome to Lopez Productions',
    description: 'Thanks for joining Lopez Productions! Access your free content planning kit and resources.',
    images: ['/og-image.jpg'],
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
