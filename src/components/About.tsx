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
          <span className="text-sm text-gray-500 tracking-widest uppercase">sobre Daniel</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Early work - Street photography"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PARSONS SCHOOL OF DESIGN - NEW YORK / USA
            </p>
          </motion.div>

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


        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Atualmente, estou desenvolvendo um sistema de agendamento inteligente com integração via WhatsApp e uso de IA para automatizar processos, gerar insights e apoiar a gestão de pequenos negócios.

              O projeto é focado em mercados com desafios reais de digitalização, como o venezuelano, buscando oferecer uma solução simples, acessível e eficiente.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Magnum Photos Office"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              MAGNUM PHOTOS - LONDON / UK
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Bruce shooting for National Geographic"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SHOOTING FOR NATIONAL GEOGRAPHIC - PATAGONIA / AR<br />
              (2019)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Desde que iniciei no desenvolvimento, venho evoluindo através de projetos práticos e estudo contínuo.

              Realizei formações em desenvolvimento web pela Digital College e B7Web, além de estudar inglês para a área de tecnologia. Atualmente, estou me aprofundando em Inteligência Artificial e DevOps pela Alura.

              Busco oportunidades para crescer profissionalmente e contribuir em projetos reais.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
