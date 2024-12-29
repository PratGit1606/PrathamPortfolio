'use client'

import { motion } from 'framer-motion'

const techStack = {
  Frontend: [
    { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
    { name: 'TailwindCSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
    { name: 'React Native', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
  ],
  Backend: [
    { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { name: 'Java', logo: 'https://cdn.worldvectorlogo.com/logos/java.svg' },
    { name: 'C/C++', logo: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
    { name: 'SQL', logo: '/sql.png' },
  ],
  Tools: [
    { name: 'Linux', logo: 'https://cdn.worldvectorlogo.com/logos/tux.svg' },
    { name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
    { name: 'CloudFlare', logo: 'https://cdn.worldvectorlogo.com/logos/cloudflare.svg' },
    { name: 'Clerk', logo: '/clerk.png' },
  ],
  Specialized: [
    { name: 'Assembly Language', logo: '/ASM.jpg' },
    { name: 'NLP', logo: 'https://cdn-icons-png.flaticon.com/512/4293/4293773.png' },
    { name: 'Semantic Search', logo: 'https://cdn-icons-png.flaticon.com/512/1484/1484000.png' },
    { name: 'DSA', logo: '/DSA.png' },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black text-green-500 font-mono relative">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black opacity-60"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold mb-16 text-center tracking-tight text-green-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        {/* Tech Categories */}
        {Object.entries(techStack).map(([category, skills]) => (
          <div key={category} className="mb-12">
            {/* Category Title */}
            <motion.h3
              className="text-3xl font-bold mb-8 text-green-500 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              {category}
            </motion.h3>

            {/* Skill Cards */}
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center px-6 py-6 bg-zinc-900 text-gray-300 rounded-lg border border-green-500 shadow-md w-36 transform hover:scale-105 transition duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-16 h-16 mb-4"
                  />
                  <span className="text-lg font-bold">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
