"use client"

import { motion } from 'framer-motion'
import type { Variants } from "framer-motion"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-13">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            sobre Daniel
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* FIRST BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32 items-center">

          {/* IMAGEM */}
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="/abouth.jpg"
              alt="desenvolvedor trabalhando com código"
              className="w-full h-auto transition-all duration-700
              rounded-2xl shadow-md shadow-gray-900/80 hover:scale-[1.01]"
            />
          </motion.div>

          {/* TEXTO */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Comecei minha jornada na tecnologia estudando desenvolvimento web e rapidamente me interessei por construir aplicações completas, do front ao back-end.

              Hoje atuo como desenvolvedor fullstack, criando projetos com foco em performance, organização de código e experiência do usuário.

              Estou em constante evolução, buscando transformar conhecimento em soluções reais e crescer profissionalmente na área.
            </p>
          </motion.div>
        </div>


        {/* SECOND BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32 items-center">

          {/* TEXTO */}
          <motion.div
            {...fadeInUp}
            className="order-1 lg:order-1 flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Atualmente, estou desenvolvendo um sistema de agendamento inteligente com integração via WhatsApp e uso de IA para automatizar processos, gerar insights e apoiar a gestão de pequenos negócios.

              O projeto é focado em mercados com desafios reais de digitalização, como o venezuelano, buscando oferecer uma solução simples, acessível e eficiente.
            </p>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            <img
              src="/agendas.png"
              alt="dashboard com automação e inteligência artificial"
              className="w-full h-auto rounded-2xl shadow-md shadow-gray-700/80 hover:scale-[1.01] transition-all duration-700"
            />
          </motion.div>
        </div>


        {/* THIRD BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">

          {/* TEXTO */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Desde que iniciei no desenvolvimento, venho evoluindo através de projetos práticos e estudo contínuo.

              Realizei formações em desenvolvimento web pela Digital College e B7Web, além de estudar inglês para a área de tecnologia. Atualmente, estou me aprofundando em Inteligência Artificial e DevOps pela Alura.

              Busco oportunidades para crescer profissionalmente e contribuir em projetos reais.
            </p>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="/education.jpg"
              alt="estudando desenvolvimento e tecnologia"
              className="w-full h-auto transition-all duration-700
              rounded-2xl shadow-md shadow-gray-600/80 hover:scale-[1.01]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}