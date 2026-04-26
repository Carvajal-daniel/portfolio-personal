"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const education = [
  {
    title: 'Formação Fullstack',
    institution: 'Digital College',
    period: '2024 — 2025',
    description:
      'Formação completa em desenvolvimento web com foco em aplicações modernas, boas práticas e desenvolvimento fullstack.',
  },
  {
    title: 'Formação Fullstack',
    institution: 'B7Web',
    period: '2024 — atual',
    description:
      'Aprofundamento em desenvolvimento web com foco prático na construção de aplicações e fundamentos de front-end e back-end.',
  },
  {
    title: 'Inteligência Artificial & DevOps (em andamento)',
    institution: 'Alura',
    period: '2026 — Atual',
    description:
      'Estudos focados em automação, integração de IA e práticas de infraestrutura e deploy.',
  },
  {
    title: 'Inglês para Tecnologia (em andamento)',
    institution: 'Alura',
    period: '2026 — Atual',
    description:
      'Desenvolvimento da comunicação em inglês voltada para o ambiente técnico e profissional.',
  }
]

export function Education() {
  return (
    <section id="education" className="-mt-20 section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div {...fadeInUp} className="mb-13">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Formação
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] md:text-[12rem] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCAÇÃO
        </motion.h2>

        {/* Education List */}
        <div className="space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={item.title + item.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 pt-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                {/* Left */}
                <div>
                  <h3 className="text-xl md:text-2xl text-white font-light">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1">
                    {item.institution}
                  </p>
                </div>

                {/* Right (period) */}
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-widest">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}