'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-green-500 font-mono">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="PrathamPortfolio/public/me.jpg" // Replace with your photo URL
            alt="Pratham Hegde"
            width={300} // Replace with appropriate width
            height={300} // Replace with appropriate height
            className="rounded-full border-4 border-green-500 shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 text-center md:text-left text-green-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <p className="mb-4 text-lg text-gray-300 leading-relaxed">
            Hello! I&apos;m <span className="text-green-500 font-bold">Pratham Hegde</span>, a student at <span className="text-green-500 font-bold">Arizona State University</span>, pursuing a degree in Computer Science with a focus on <span className="text-green-500 font-bold">Cybersecurity</span>. With a <span className="text-green-500">GPA of 3.93/4.0</span>, I&apos;m proud to be part of the <span className="text-green-500 font-bold">Barrett Honors College</span> and the <span className="text-green-500 font-bold">Grand Challenges Scholars Program.</span>
          </p>
          <p className="mb-4 text-lg text-gray-300 leading-relaxed">
            My passion lies in using technology to solve real-world problems and contribute to cutting-edge research. Whether it&apos;s crafting efficient code or exploring new technologies, I&apos;m driven to make an impact.
          </p>
          <p className="mb-4 text-lg text-gray-300 leading-relaxed">
            Beyond academics, I thrive in leadership roles, serving as the <span className="text-green-500">Treasurer</span> for the <span className="text-green-500">Indian Students&apos; Association</span> and the <span className="text-green-500">Director of Finance</span> for <span className="text-green-500">CS+Social Good ASU</span>. These experiences have shaped me into a collaborative and forward-thinking individual.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
