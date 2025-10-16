import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lopezproductions.ai'),
  title: 'Lopez Productions - AI-Powered Workflows & Creative Strategies',
  description: 'AI-powered workflows and creative strategies for non-techies who want results — without the overwhelm. Build smarter brands with automated systems.',
  keywords: 'AI workflows, branding, automation, content systems, visual assets, Notion templates',
  authors: [{ name: 'Reuben Lopez' }],
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai',
    title: 'Lopez Productions - AI-Powered Workflows & Creative Strategies',
    description: 'AI-powered workflows and creative strategies for non-techies who want results — without the overwhelm.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lopez Productions - AI-Powered Workflows & Creative Strategies',
    description: 'AI-powered workflows and creative strategies for non-techies who want results — without the overwhelm.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-black text-brand-white">
        {children}
      </body>
    </html>
  )
} 