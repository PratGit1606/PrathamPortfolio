'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Lottie from 'react-lottie-player'
import HeroAnimation from '../../../public/Hero.json'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-green-500 font-mono pt-20 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      </div>

      {/* Terminal-like intro */}
      {!showMainContent && (
        <div className="absolute z-10 text-lg flex flex-col items-center justify-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {`> Initializing portfolio...`}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {`> Loading projects...`}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {`> Welcome to Pratham's World!`}
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      {showMainContent && (
        <div className="container max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10 border-2 border-green-500 p-4 md:p-6 rounded-md bg-black/80 shadow-lg">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-green-500 font-bold text-sm tracking-wider">{`// SOFTWARE DEVELOPER & ASPIRING RESEARCHER`}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span
                className="block text-green-500"
                style={{ minHeight: '50px' }} // Stabilize typewriter height
              >
                <Typewriter
                  words={[
                    'printf("Hello, World! This is Pratham\\n");',
                    'console.log("Hello, World! This is Pratham");',
                    'print("Hello, World! This is Pratham")',
                    'Pratham@linux:~$ ./compile_impact',
                  ]}
                  loop={false}
                  typeSpeed={30}
                  deleteSpeed={20}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed"
            >
              <span className="block text-green-500">Pratham@linux:~$</span>
              <span>
                Merging cutting-edge development with groundbreaking research to create impactful digital solutions. <br />

                <span className="text-green-500">
                  ASU Computer Science student striving to push the boundaries of what&apos;s possible. <br />
                </span>

                {`/* Nice to meet you! */`}
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-green-500 rounded hover:bg-green-600 transition-colors duration-200"
              >
                Explore Projects
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-green-500 border border-green-500 rounded hover:bg-green-500/10 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 max-w-xs md:max-w-md mx-auto"
          >
            <Lottie
              loop
              animationData={HeroAnimation}
              play
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
        </div>
      )}
    </section>
  )
}
