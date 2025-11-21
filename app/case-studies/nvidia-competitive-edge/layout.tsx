import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NVIDIA Competitive Edge | AI & Gaming Market Analysis by Lopez Productions.ai',
  description: 'Strategic breakdown of NVIDIA\'s GPU dominance, CUDA ecosystem, and future AI roadmap. Expert analysis of competitive positioning and market psychology.',
  keywords: 'NVIDIA analysis, GPU market, CUDA ecosystem, AI infrastructure, competitive strategy, market research, tech analysis',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/case-studies/nvidia-competitive-edge',
    title: 'NVIDIA Competitive Edge | AI & Gaming Market Analysis by Lopez Productions.ai',
    description: 'Strategic breakdown of NVIDIA\'s GPU dominance, CUDA ecosystem, and future AI roadmap. Expert analysis of competitive positioning and market psychology.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVIDIA Competitive Edge | AI & Gaming Market Analysis by Lopez Productions.ai',
    description: 'Strategic breakdown of NVIDIA\'s GPU dominance, CUDA ecosystem, and future AI roadmap. Expert analysis of competitive positioning and market psychology.',
    images: ['/og-image.jpg'],
  },
}

export default function NvidiaCaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
