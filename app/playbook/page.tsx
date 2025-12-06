import React from 'react'
import type { Metadata } from 'next'
import PlaybookPageClient from './PlaybookPageClient'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook',
  },
}

export default function PlaybookPage() {
  return <PlaybookPageClient />
}
