'use client'

import React, { useState, useEffect } from 'react'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const distanceFromBottom = documentHeight - (currentScrollY + windowHeight)

          // Check if user is within 100px of bottom
          const isNearBottom = distanceFromBottom <= 100

          // Determine scroll direction
          const scrollingDown = currentScrollY > lastScrollY
          const scrollingUp = currentScrollY < lastScrollY

          // Behavior rules:
          // 1. Always visible on initial load (isVisible starts as true)
          // 2. Hide on scroll down (unless near bottom)
          // 3. Show on scroll up
          // 4. Show when near bottom
          if (isNearBottom) {
            setIsVisible(true)
          } else if (scrollingDown) {
            setIsVisible(false)
          } else if (scrollingUp) {
            setIsVisible(true)
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <a
      href="https://calendly.com/reuben-lopezproductions/intro"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[9999]
                 bg-brand-gold text-brand-black font-medium
                 px-5 py-3 rounded-full shadow-xl
                 hover:bg-brand-gold-dark transition-all duration-300
                 flex items-center gap-2 whitespace-nowrap
                 hover:scale-105 active:scale-95
                 hover:shadow-2xl
                 hidden md:flex
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
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
