import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Company Websites | Lopez Productions',
  description: 'Website design for AI-native companies. Learn how to structure AI product websites that explain complex technology clearly and show up correctly in search.',
  keywords: 'AI company website, AI startup website, AI product website design, AI-native website',
  alternates: {
    canonical: 'https://lopezproductions.ai/ai-company-websites',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/ai-company-websites',
    title: 'AI Company Websites | Lopez Productions',
    description: 'Website design for AI-native companies. Learn how to structure AI product websites that explain complex technology clearly.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Company Websites | Lopez Productions',
    description: 'Website design for AI-native companies. Learn how to structure AI product websites that explain complex technology clearly.',
    images: ['/og-image.jpg'],
  },
}

export default function AICompanyWebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
