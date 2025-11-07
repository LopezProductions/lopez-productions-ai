import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started | Lopez Productions — AI Systems Packages',
  description: 'Choose from Launch, Growth, or Scale AI Systems packages. Lopez Productions builds automation systems that connect your tools and scale your business.',
  keywords: ['AI systems packages', 'automation setup', 'AI workflow design'],
  openGraph: {
    title: 'Get Started | Lopez Productions — AI Systems Packages',
    description: 'Choose from Launch, Growth, or Scale AI Systems packages. Lopez Productions builds automation systems that connect your tools and scale your business.',
  },
}

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

