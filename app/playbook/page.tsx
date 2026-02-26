import React from 'react'
import type { Metadata } from 'next'
import PlaybookPageClient from './PlaybookPageClient'

export const metadata: Metadata = {
  title: 'The Systems Playbook | Lopez Productions',
  description: 'Field notes, architecture breakdowns, and self-hosted automation workflows. We document the systems we actually build—not theoretical thought leadership.',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook',
  },
}

export default function PlaybookPage() {
  return <PlaybookPageClient />
}
