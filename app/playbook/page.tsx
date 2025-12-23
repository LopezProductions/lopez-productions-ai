import React from 'react'
import type { Metadata } from 'next'
import PlaybookPageClient from './PlaybookPageClient'

export const metadata: Metadata = {
  title: 'The AI Systems Playbook | Technical Workflows for AI Founders | Lopez Productions',
  description: 'A practical systems playbook for building AI products — balancing human judgment, intelligent workflows, and scalable automation.',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook',
  },
}

export default function PlaybookPage() {
  return <PlaybookPageClient />
}
