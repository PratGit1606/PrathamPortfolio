'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-32 h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 64, // Center the light effect horizontally
        y: mousePosition.y - 64, // Center the light effect vertically
      }}
      transition={{
        type: 'spring',
        mass: 0.6,
        stiffness: 100,
        damping: 10,
      }}
      style={{
        backdropFilter: 'brightness(1.5)', // Lighten the underlying content
        WebkitBackdropFilter: 'brightness(1.5)',
      }}
    />
  )
}
