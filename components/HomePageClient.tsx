'use client'

import React, { useState, createContext, useContext } from 'react'
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

