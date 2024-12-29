'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tight">Let's Innovate Together</h2>
            <p className="text-gray-400">
             Feel Free to Reach out!
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:phegde9@asu.edu"
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-black bg-green-500 rounded hover:bg-green-600 transition-colors duration-200"
              >
                phegde9@asu.edu
              </a>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com/in/pratham-hegde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/prathamhegde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

