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

export function Contact() {
  return (
    <section id="contact" className="section-padding -mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div {...fadeInUp} className="mb-13">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Contato
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Title */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-[12vw] md:text-[12rem] lg:text-hero leading-none tracking-tight mb-12"
        >
          Vamos <br /> conversar
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeInUp}
          className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mb-12"
        >
          Estou disponível para oportunidades, projetos ou qualquer conversa sobre tecnologia.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col sm:flex-row gap-6 text-lg"
        >
          {/* Email */}
          <a
            href="mailto:danielcarvajal.dev@gmail.com"
            className="text-gray-300 hover:text-white transition-colors underline underline-offset-4"
          >
            danielcarvajal.dev@gmail.com
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5585921842910"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors underline underline-offset-4"
          >
            WhatsApp
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Carvajal-daniel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}