"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

const skills = [
  'Next.js & React',
  'TypeScript',
  'Node.js (Express, Fastify)',
  'REST APIs & Backend Architecture',
  'Authentication & Authorization (JWT, Roles, Permissions)',
  'Data Validation (Zod, class-validator)',
  'PostgreSQL & MongoDB',
  'Prisma & Drizzle ORM',
  'Docker',
  'Tailwind CSS & shadcn/ui',
  'Arquitetura Hexagonal'
]

export function Skills() {
  const shouldReduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return navigator.hardwareConcurrency <= 4
  }, [])

  return (
    <section id="skills" className="section-padding -mt-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="mb-13">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Expertise Técnica
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </div>

        {/* Title */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-[10vw] md:text-[13rem] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          tecnologias
        </motion.h2>

        {/* Skills List (SEM motion em cada item) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border-b border-gray-800 pb-4"
            >
              <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}