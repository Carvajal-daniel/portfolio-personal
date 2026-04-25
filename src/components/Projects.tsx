"use client"

import { motion } from 'framer-motion'
import type { Variants } from "framer-motion"

const projects = [
  {
    title: 'Sistema de Automação de Agendamentos com IA',
    description:
      'Desenvolvimento de um sistema que automatiza o processo de agendamento com integração via WhatsApp, utilizando IA para automatizar atendimentos, recuperar clientes inativos e gerar promoções inteligentes aprovadas pelo proprietário.',
    impact:
      'O objetivo é aumentar a retenção de clientes e otimizar a gestão de pequenos negócios.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'shadcn/ui',
      'Node.js',
      'Fastify',
      'PostgreSQL',
      'Drizzle ORM',
      'Docker',
      'BetterAuth',
      'Arquitetura Hexagonal'
    ],
    status: 'Em desenvolvimento',
    links: {
      live: 'http://uplys.com.br/',
      frontend: 'https://github.com/Carvajal-daniel/uplys-front',
      backend: 'https://github.com/Carvajal-daniel/api-uplys'
    }
  },
  {
    title: 'Sistema de Análise de Negócios com IA',
    description:
      'Plataforma que permite a pequenos negócios cadastrar serviços e preços, analisando concorrência local e gerando relatórios com insights estratégicos.',
    impact:
      'Ajuda na tomada de decisão e posicionamento competitivo no mercado.',
    tech: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'REST API',
      'JWT',
      'PostgreSQL'
    ],
    status: 'Em desenvolvimento',
    links: {
      frontend: 'https://github.com/Carvajal-daniel/analyBusiness',
      backend: 'https://github.com/Carvajal-daniel/api-analy-business'
    }
  },
]

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export function Projects() {
  return (
    <section id="projects" className="section-padding -mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div {...fadeInUp} className="mb-13">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Projetos
          </span>
          <div className="w-6 h-px bg-gray-600" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 py-10 md:py-12 group px-4 -mx-4 hover:bg-gray-900/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-6">

                {/* Left */}
                <div className="max-w-2xl">

                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-400 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {project.impact}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-gray-500 border border-gray-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 mt-5 text-sm text-gray-500">

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        🌐 Live →
                      </a>
                    )}

                    {project.links.frontend && (
                      <a
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        💻 Frontend →
                      </a>
                    )}

                    {project.links.backend && (
                      <a
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        ⚙️ Backend →
                      </a>
                    )}

                  </div>

                </div>

                {/* Right */}
                <div className="flex items-start md:items-center">
                  <span className="text-sm text-gray-600 uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}

          <div className="border-t border-gray-800" />
        </div>

      </div>
    </section>
  )
}