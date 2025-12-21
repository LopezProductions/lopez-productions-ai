import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tools & Accelerators | Lopez Productions',
  description: 'Optional tools that support website launches and search visibility for AI-native companies. Accelerators built while designing websites and search systems for AI startups.',
  alternates: {
    canonical: 'https://lopezproductions.ai/templates',
  },
  openGraph: {
    title: 'Tools & Accelerators | Lopez Productions',
    description: 'Optional tools that support website launches and search visibility for AI-native companies. Accelerators built while designing websites and search systems for AI startups.',
  },
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}




