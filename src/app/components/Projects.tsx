'use client'

import { motion } from 'framer-motion'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "Sherpa",
    subtitle: "Autonomous Vehicle Collaboration Platform",
    description: "A data-sharing platform for autonomous vehicles enhancing traffic flow and reducing congestion.",
    tags: ["Next.js", "TomTom API", "YOLO", "Vector Search - IRIS", "Flask"],
    metrics: "83.4% accuracy, 15% congestion reduction",
    link: "https://devpost.com/software/sherpa-hxp59l",
    images: ["images/sherpa1.png", "images/sherpa2.jpg", "images/sherpa3.jpg"]
  },
  {
    title: "Pronewer",
    subtitle: "Business Social Platform",
    description: "LinkedIn-Fiverr hybrid platform for business networking and freelancer collaboration.",
    tags: ["Next.js", "AWS", "Clerk", "TailwindCSS"],
    metrics: "30% user engagement increase",
    link: "https://www.pronewer.com/",
    images: ["images/pronewer1.png", "images/pronewer2.png", "images/pronewer3.png"]
  },
  {
    title: "TaskerPro",
    subtitle: "Task Management System",
    description: "A comprehensive task management system designed to streamline productivity for teams and individuals.",
    tags: ["React", "Material-UI"],
    metrics: "Enhanced team efficiency by 20%",
    link: "https://github.com/PratGit1606/TaskerProPratGit",
    images: ["images/taskerpro1.png", "images/taskerpro2.png"]
  },
  {
    title: "WhatTheBleep",
    subtitle: "Automatic Audio Censorship Tool",
    description: "An AI-powered tool that automatically detects and censors inappropriate language in audio streams.",
    tags: ["Python", "Reflex", "OpenAI Whisper"],
    metrics: "98% detection accuracy",
    link: "https://github.com/PratGit1606/WhatTheBleep-AutomaticCensor",
    images: ["images/whatthebleep1.jpg", "images/whatthebleep2.jpg"]
  },
  {
    title: "Rocket Rescue",
    subtitle: "Space Mission Simulation Game",
    description: "An engaging game simulating space rescue missions, challenging players' strategic thinking designed to improve mobility for stroke patients.",
    tags: ["p5JS", "HTML", "CSS"],
    metrics: "Achieved 500+ users",
    link: "https://github.com/PratGit1606/MasterProject---RocketRescue",
    images: ["images/rocketrescue1.jpg"]
  },
  {
    title: "Reddit Upvote System",
    subtitle: "Reddit Post Ranking Simulator",
    description: "A system simulating Reddit's upvote mechanism for post ranking and popularity prediction.",
    tags: ["ReactUI", "Bootstrap"],
    metrics: "First project into the React world",
    link: "https://github.com/PratGit1606/RedditUpvoteSystem",
    images: ["images/redditupvote1.png", "images/redditupvote2.png"]
  }
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={3000}
          dynamicHeight={false}
          className="rounded-t-lg"
        >
          {project.images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`${project.title} Image ${index + 1}`}
                width={600} // Adjust width based on your design
                height={400} // Adjust height based on your design
                className="w-full h-48 object-cover"
                placeholder="blur"
                blurDataURL={image} // Optional: Use a low-quality image for placeholder
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="relative z-20 p-6 flex flex-col">
        <div className="mb-auto">
          <Link href={project.link}>
            <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-green-500 transition-colors duration-200 mt-4">
              {project.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
          <p className="text-sm text-gray-300 mb-6">{project.description}</p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-xs text-green-500 font-medium">{project.metrics}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
            Innovative Projects
          </h2>
          <p className="text-gray-400">
            Pushing the boundaries of technology with these cutting-edge solutions.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
