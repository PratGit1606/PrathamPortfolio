'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono text-green-500 ${isScrolled
          ? 'bg-black/80 md:bg-black backdrop-blur-sm border-b border-green-500/20'
          : 'bg-black/50'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <nav className="container mx-auto px-6 py-4 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <div
          className={`text-2xl font-bold md:order-none order-2 md:mb-0 mb-4 w-full md:w-auto text-center md:text-left ${
            isMenuOpen ? 'bg-black text-green-500 py-2 px-4 rounded-md' : ''
          }`}
        >
          <a href="#" className="text-green-500 hover:text-white transition-colors duration-300">
            Welcome!
          </a>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-green-500 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className={`absolute left-4 top-4 md:hidden text-green-500 focus:outline-none transition-all duration-300 ${
            isMenuOpen ? 'bg-black py-2 px-2 rounded-md' : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`absolute top-16 left-0 right-0 bg-black border-t border-green-500/20 md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-green-500 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  )
}
