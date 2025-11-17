'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'
import { usePathname } from 'next/navigation'
import ContactFormModal from './ContactFormModal'

interface ModalContextType {
  openModal: () => void
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {}
})

export const useModal = () => useContext(ModalContext)

interface HomePageClientProps {
  children: React.ReactNode
}

export default function HomePageClient({ children }: HomePageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Handle hash scrolling when page loads or hash changes
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1) // Remove the #
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const offset = 80 // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 300) // Wait for page to render
      }
    }

    // Handle initial load
    handleHashScroll()

    // Handle hash changes (e.g., when navigating from another page)
    window.addEventListener('hashchange', handleHashScroll)

    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [pathname])

  return (
    <ModalContext.Provider value={{ openModal: () => setIsModalOpen(true) }}>
      {children}
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </ModalContext.Provider>
  )
}

