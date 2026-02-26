import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineered SaaS Websites. Built for AI-Era Discovery. | Lopez Productions',
  description: 'We design and develop Next.js marketing sites that explain your product clearly, build trust with buyers, and structure your data so AI search engines actually understand what you do.',
  keywords: 'SaaS website design, SaaS website, B2B SaaS website, SaaS landing page design, AEO, GEO, AI-era websites, Next.js marketing site',
  alternates: {
    canonical: 'https://lopezproductions.ai/saas-website-design',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/saas-website-design',
    title: 'Engineered SaaS Websites. Built for AI-Era Discovery. | Lopez Productions',
    description: 'We design and develop Next.js marketing sites that explain your product clearly, build trust with buyers, and structure your data so AI search engines actually understand what you do.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineered SaaS Websites. Built for AI-Era Discovery. | Lopez Productions',
    description: 'We design and develop Next.js marketing sites that explain your product clearly, build trust with buyers, and structure your data so AI search engines actually understand what you do.',
    images: ['/og-image.jpg'],
  },
}

export default function SaaSWebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
