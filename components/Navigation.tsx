'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isSolutionsMobileOpen, setIsSolutionsMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
    { href: '/templates', label: 'Templates' },
    { href: '/playbook', label: 'Playbook' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const solutionsSubItems = [
    { href: '/solutions', label: 'Solutions Overview' },
    { href: '/pricing', label: 'Pricing' },
  ]

  // Check if current path is Solutions or Pricing
  const isSolutionsActive = pathname === '/solutions' || pathname === '/pricing'

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    setIsSolutionsOpen(false)
    setIsSolutionsMobileOpen(false)
    
    if (href.includes('#')) {
      // Handle anchor links
      const [path, hash] = href.split('#')
      
      if (path === pathname || (path === '/' && pathname === '/')) {
        // Same page anchor - scroll to element
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`)
          if (element) {
            const offset = 80 // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else {
        // Different page with anchor - navigate then scroll
        router.push(href)
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`)
          if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 500)
      }
    } else {
      // Regular page navigation
      router.push(href)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.solutions-dropdown')) {
        setIsSolutionsOpen(false)
      }
    }

    if (isSolutionsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSolutionsOpen])

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
            <Link href="/" className="text-2xl font-serif font-bold text-gradient">
              Lopez Productions
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Home */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  href="/"
                  onClick={(e) => handleNavClick('/', e)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group block ${
                    pathname === '/' ? 'text-brand-gold' : 'text-brand-gray-light hover:text-brand-gold'
                  }`}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>

              {/* Solutions Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative solutions-dropdown"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group flex items-center gap-1 ${
                    isSolutionsActive ? 'text-brand-gold' : 'text-brand-gray-light hover:text-brand-gold'
                  }`}
                >
                  Solutions
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-brand-gray-dark border border-brand-gray-dark rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      {solutionsSubItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(subItem.href, e)}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            pathname === subItem.href
                              ? 'text-brand-gold bg-brand-black/50'
                              : 'text-brand-gray-light hover:text-brand-gold hover:bg-brand-black/30'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Other Nav Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 2) * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group block ${
                      pathname === item.href ? 'text-brand-gold' : 'text-brand-gray-light hover:text-brand-gold'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
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
              {/* Home */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  href="/"
                  onClick={(e) => handleNavClick('/', e)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    pathname === '/' ? 'text-brand-gold' : 'text-brand-gray-light hover:text-brand-gold'
                  }`}
                >
                  Home
                </Link>
              </motion.div>

              {/* Solutions with Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setIsSolutionsMobileOpen(!isSolutionsMobileOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isSolutionsActive ? 'text-brand-gold' : 'text-brand-gray-light hover:text-brand-gold'
                  }`}
                >
                  Solutions
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-200 ${isSolutionsMobileOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isSolutionsMobileOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1"
                    >
                      {solutionsSubItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(subItem.href, e)}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                            pathname === subItem.href
                              ? 'text-brand-gold'
                              : 'text-brand-gray-light hover:text-brand-gold'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Other Nav Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 2) * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      pathname === item.href ? 'text-brand-gold' : 'text-brand-gray-light hover:text-brand-gold'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 