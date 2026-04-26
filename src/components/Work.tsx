"use client"

import { motion } from 'framer-motion'
import { useMemo } from "react"

const experiences = [
  {
    title: 'Desenvolvedor Fullstack (Projeto em Desenvolvimento)',
    company: 'Sistema de Automação de Agendamentos com IA',
    period: '2026 — Atual',
    description: 'Desenvolvimento de um sistema que automatiza o processo de agendamento com integração via WhatsApp, utilizando IA para automatizar atendimentos, recuperar clientes inativos e gerar promoções inteligentes aprovadas pelo proprietário. O objetivo é aumentar a retenção de clientes e otimizar a gestão de pequenos negócios.',
    skills: ['Next.js', 'Node.js', 'REST API', 'Integração com IA', 'Docker'],
  },
  {
    title: 'Desenvolvedor Frontend (Colaboração)',
    company: 'HomeFly',
    location: 'Remoto',
    period: '2024',
    description: 'Colaboração no desenvolvimento de componentes frontend para um sistema CRM, com foco em reutilização, organização e melhoria da experiência do usuário.',
    skills: ['React', 'Next.js', 'Componentes UI', 'Frontend'],
  },
  {
    title: 'Desenvolvedor Fullstack (Projetos Pessoais)',
    company: 'Independente',
    period: '2024 — Atual',
    description: 'Desenvolvimento de aplicações completas com autenticação JWT, controle de permissões, validação de dados e organização utilizando arquitetura hexagonal.',
    skills: ['JWT', 'Roles & Permissions', 'Zod', 'Arquitetura Hexagonal'],
  },
]

export function Work() {
  const shouldReduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return navigator.hardwareConcurrency <= 4
  }, [])

  return (
    <section id="work" className="section-padding -mt-14">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="mb-13">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Carreira
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </div>

        {/* Title */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="font-display -mt-2 text-[10vw] md:text-[12rem] lg:text-section leading-none tracking-tight mb-13 lg:mb-24"
        >
          EXPERIÊNCIA <br /> PROFISSIONAL
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.05 // 👈 menor delay
              }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* Left */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.article>
          ))}

          <div className="border-t border-gray-800" />
        </div>

      </div>
    </section>
  )
}