import React from 'react'
import type { Metadata } from 'next'
import PlaybookPageClient from './PlaybookPageClient'

export const metadata: Metadata = {
  title: 'The AI Systems Playbook | Technical Workflows for AI Founders | Lopez Productions',
  description: 'Technical workflows, architecture patterns, and automation systems for founders building AI products.',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook',
  },
}

export default function PlaybookPage() {
  return <PlaybookPageClient />
}
