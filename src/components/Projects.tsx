"use client"

import { motion } from 'framer-motion'
import type { Variants } from "framer-motion"

const projects = [
  {
    title: 'E-commerce de Moda (Fullstack)',
    image: '/ecommerce.png',
    description:
      'Aplicação de e-commerce com autenticação de usuários, busca de produtos, filtros por categorias e navegação dinâmica.',
    impact:
      'Sistema funcional com cadastro e login de usuários, integração com banco de dados e interface totalmente responsiva.',
    tech: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Drizzle ORM',
      'Better Auth'
    ],
    status: 'Projeto funcional (não finalizado comercialmente)',
    links: {
      live: 'https://ecomerce-tainara.vercel.app/',
      frontend: 'https://github.com/Carvajal-daniel/ecomerce-tainara'
    }
  },
  {
    title: 'Cardápio Digital com Pedido via WhatsApp',
    image: '/cardapio.png',
    description:
      'Sistema de cardápio digital com navegação por categorias, carrinho de compras e finalização de pedidos com envio direto para o WhatsApp.',
    impact:
      'Inclui validação de pagamento em dinheiro (controle de troco) e experiência totalmente responsiva para dispositivos móveis.',
    tech: [
      'React',
      'JavaScript'
    ],
    status: 'Projeto funcional',
    links: {
      live: 'https://cardapio-react-coral.vercel.app/',
      frontend: 'https://github.com/Carvajal-daniel/CardapioReact'
    }
  },
  {
    title: 'Sistema de Análise de Negócios com IA',
    image: '/analybussine.png',
    description:
      'Plataforma para análise de concorrência e geração de insights estratégicos para pequenos negócios.',
    impact:
      'Auxilia na tomada de decisões e posicionamento no mercado.',
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
      live: 'https://analybusiness.vercel.app/',
      frontend: 'https://github.com/Carvajal-daniel/analyBusiness',
      backend: 'https://github.com/Carvajal-daniel/api-analy-business'
    }
  },
  {
  title: 'Sistema de Automação de Agendamentos com IA',
  image: '/agendas.png',
  description:
  'Plataforma em desenvolvimento que automatiza agendamentos, centraliza o atendimento via WhatsApp e utiliza IA para gerar insights, promoções e conteúdos estratégicos para pequenos negócios.',
  impact:
    'Arquitetura focada em backend escalável, automação de processos e integração com serviços externos.',
  tech: [
    'Next.js',
    'TypeScript',
    'Tailwind',
    'Node.js',
    'Fastify',
    'PostgreSQL',
    'Drizzle ORM',
    'Docker'
  ],
  status: 'Em desenvolvimento (UI baseada em conceito)',
  links: {
    live: 'http://uplys.com.br/',
    frontend: 'https://github.com/Carvajal-daniel/uplys-front',
    backend: 'https://github.com/Carvajal-daniel/api-uplys'
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
          className="font-display text-[10vw] md:text-[12rem] lg:text-section leading-none tracking-tight mb-12 lg:mb-24"
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

              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* IMAGE */}
                {project.image && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-[40%] group"
                  >
                    <div className="overflow-hidden rounded-xl border border-gray-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </a>
                )}

                {/* CONTENT */}
                <div className="flex-1 max-w-2xl">

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

                  {/* Status */}
                  <div className="mt-4">
                    <span className="text-xs text-gray-600 uppercase tracking-widest">
                      {project.status}
                    </span>
                  </div>

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