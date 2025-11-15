'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Use Intersection Observer instead of scroll listener for better INP performance
    const observer = new IntersectionObserver(
      (entries) => {
        // When the sentinel is not visible, we've scrolled past it
        setIsScrolled(!entries[0].isIntersecting)
      },
      { threshold: 0, rootMargin: '-50px 0px 0px 0px' }
    )
    
    // Create a sentinel element to observe
    const sentinel = document.createElement('div')
    sentinel.id = 'nav-scroll-sentinel'
    sentinel.style.cssText = 'position: absolute; top: 0; left: 0; width: 1px; height: 1px; pointer-events: none;'
    document.body.insertBefore(sentinel, document.body.firstChild)
    
    observer.observe(sentinel)
    
    return () => {
      observer.disconnect()
      const element = document.getElementById('nav-scroll-sentinel')
      if (element && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/get-started', label: 'Get Started' },
    { href: '/playbook', label: 'Playbook' },
    { href: '/#about', label: 'About' },
  ]

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    
    if (href.startsWith('/')) {
      // Handle page navigation (including homepage anchor links like /#about)
      window.location.href = href
    } else {
      // Handle anchor links on current page
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-black/95 backdrop-blur-md shadow-lg' 
        : 'bg-brand-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center space-x-3"
          >
            <img 
              src="/lp_closeup.png" 
              alt="Lopez Productions logo" 
              className="w-8 h-8 rounded-full object-cover border border-brand-gold/50"
            />
            <a href="/" className="text-2xl font-serif font-bold text-gradient">
              Lopez Productions
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-brand-gray-light hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-gray-light hover:text-brand-gold focus:outline-none focus:text-brand-gold transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-gray-dark/95 backdrop-blur-md border-t border-brand-gray-dark"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-brand-gray-light hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 