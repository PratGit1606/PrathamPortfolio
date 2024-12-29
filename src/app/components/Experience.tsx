'use client'

import { motion } from 'framer-motion'
import Lottie from 'react-lottie-player'
import profAnimation from '../../../public/prof.json'

const experiences = [
  {
    title: "Research Assistant",
    company: "Professor Hokeun Kim",
    period: "December 2024 – Present",
    description: [
      "Pioneered research into TEE system vulnerabilities",
      "Led security risk analysis and countermeasure development",
      "Presented findings to faculty and research teams"
    ]
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Arizona State University",
    period: "August 2024 – December 2024",
    description: [
      "Mentored 100+ students in C++ programming",
      "Improved average exam scores by 25%",
      "Reduced assignment errors by 30%"
    ]
  },
  {
    title: "Software Development Intern",
    company: "UNIUS",
    period: "August 2024 – December 2024",
    description: [
      "Optimized Next.js features reducing load times by 30%",
      "Completed high-priority features ahead of schedule",
      "Accelerated project delivery by 20%"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="container mx-auto px-6 max-w-6xl relative flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h2 className="text-6xl font-bold tracking-tight mb-4">Professional Journey</h2>
          <p className="text-gray-400 text-2xl mb-16">
            A timeline of my growth in software development, research, and academia.
          </p>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.6 }}
                className="group relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-green-500/20"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-green-500 -translate-x-[5px] group-hover:scale-150 transition-transform duration-200" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-green-500 transition-colors duration-200">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-gray-400">{experience.company}</p>
                  <p className="text-xs text-gray-500">{experience.period}</p>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-green-500/50 before:rounded-full"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content: Lottie Animation */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Lottie
            loop
            animationData={profAnimation}
            play
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
