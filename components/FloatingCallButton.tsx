'use client'

import React from 'react'

export default function FloatingCallButton() {
  return (
    <a
      href="https://calendly.com/reuben-lopezproductions/intro"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999]
                 bg-brand-gold text-brand-black font-medium
                 px-5 py-3 rounded-full shadow-xl
                 hover:bg-brand-gold-dark transition-all duration-300
                 flex items-center gap-2 whitespace-nowrap
                 hover:scale-105 active:scale-95
                 hover:shadow-2xl"
      style={{ 
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999
      }}
    >
      <span>Book a 15-min Call</span>
      <span>→</span>
    </a>
  )
}

