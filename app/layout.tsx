import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
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
  title: 'AI-Powered Brand Systems for Creators & Small Businesses | Lopez Productions',
  description: 'Build a professional portfolio, content engine, and digital identity using AI. Modern brand systems for creators, founders, and small businesses.',
  keywords: [
    'AI brand systems',
    'AI portfolio builder',
    'Content engine',
    'Digital identity',
    'Brand kit',
    'Creator website',
    'Small business branding',
    'AI content systems',
  ].join(', '),
  authors: [{ name: 'Reuben Lopez' }],
  icons: {
    icon: [
      { url: '/lpfavicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/lpfavicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/lpfavicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai',
    title: 'AI-Powered Brand Systems for Creators & Small Businesses | Lopez Productions',
    description: 'Build a professional portfolio, content engine, and digital identity using AI. Modern brand systems for creators, founders, and small businesses.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Brand Systems for Creators & Small Businesses | Lopez Productions',
    description: 'Build a professional portfolio, content engine, and digital identity using AI. Modern brand systems for creators, founders, and small businesses.',
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
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lopez Productions",
              "url": "https://lopezproductions.ai",
              "logo": "https://lopezproductions.ai/transparent_logo_lp.png",
              "sameAs": [
                "https://www.youtube.com/@LopezWorkflows",
                "https://www.linkedin.com/company/lopez-productions"
              ]
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://lopezproductions.ai",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lopezproductions.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="bg-brand-black text-brand-white">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8MR5FQDTBY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8MR5FQDTBY');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  )
} 