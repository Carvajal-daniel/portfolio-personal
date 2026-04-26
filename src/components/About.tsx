"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useMemo } from "react"

export function About() {
  const shouldReduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return navigator.hardwareConcurrency <= 4
  }, [])

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="mb-13">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            sobre Daniel
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </div>

        {/* BLOCK 1 */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32 items-center"
        >
          <div className="order-2 lg:order-1">
            <Image
              src="/abouth.jpg"
              alt="desenvolvedor trabalhando com código"
              width={800}
              height={600}
              quality={70}
              className="w-full h-auto rounded-xl shadow-md shadow-gray-900/60"
            />
          </div>

          <div className="order-1 lg:order-2 flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Comecei minha jornada na tecnologia estudando desenvolvimento web e rapidamente me interessei por construir aplicações completas, do front ao back-end.

              Hoje atuo como desenvolvedor fullstack, criando projetos com foco em performance, organização de código e experiência do usuário.

              Estou em constante evolução, buscando transformar conhecimento em soluções reais e crescer profissionalmente na área.
            </p>
          </div>
        </motion.div>

        {/* BLOCK 2 */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32 items-center"
        >
          <div className="order-1 lg:order-1 flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Atualmente, estou desenvolvendo um sistema de agendamento inteligente com integração via WhatsApp e uso de IA para automatizar processos, gerar insights e apoiar a gestão de pequenos negócios.

              O projeto é focado em mercados com desafios reais de digitalização, como o venezuelano, buscando oferecer uma solução simples, acessível e eficiente.
            </p>
          </div>

          <div className="order-2 lg:order-2">
            <Image
              src="/agendas.png"
              alt="dashboard com automação e inteligência artificial"
              width={800}
              height={600}
              quality={70}
              className="w-full h-auto rounded-xl shadow-md shadow-gray-700/60"
            />
          </div>
        </motion.div>

        {/* BLOCK 3 */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center"
        >
          <div className="order-1 lg:order-2 flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Desde que iniciei no desenvolvimento, venho evoluindo através de projetos práticos e estudo contínuo.

              Realizei formações em desenvolvimento web pela Digital College e B7Web, além de estudar inglês para a área de tecnologia. Atualmente, estou me aprofundando em Inteligência Artificial e DevOps pela Alura.

              Busco oportunidades para crescer profissionalmente e contribuir em projetos reais.
            </p>
          </div>

          <div className="order-2 lg:order-1">
            <Image
              src="/education.jpg"
              alt="estudando desenvolvimento e tecnologia"
              width={800}
              height={600}
              quality={70}
              className="w-full h-auto rounded-xl shadow-md shadow-gray-600/60"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}