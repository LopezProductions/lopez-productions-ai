import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Lopez Productions — AI Systems Packages',
  description: 'Simple pricing for AI-powered brand systems, templates, and automation packages. Choose from preset packages or build your own custom solution.',
  keywords: ['pricing', 'AI systems packages', 'automation pricing', 'brand system pricing', 'AI workflow pricing'],
  alternates: {
    canonical: 'https://lopezproductions.ai/pricing',
  },
  openGraph: {
    title: 'Pricing | Lopez Productions — AI Systems Packages',
    description: 'Simple pricing for AI-powered brand systems, templates, and automation packages. Choose from preset packages or build your own custom solution.',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>}




