"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function Contact() {
  const shouldReduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return navigator.hardwareConcurrency <= 4
  }, [])

  return (
    <section id="contact" className="section-padding -mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="mb-10">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Contato
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </div>

        {/* Title */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display text-[12vw] md:text-[12rem] lg:text-hero leading-none tracking-tight mb-8"
        >
          Vamos <br /> conversar
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mb-12"
        >
          Aberto a oportunidades, freelas e projetos.  
          Se tiver uma ideia ou quiser conversar, me chama.
        </motion.p>

        {/* CONTACT CARDS */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >

          {/* Email */}
          <a
            href="mailto:danielcarvajal.dev@gmail.com"
            className="
              group
              border border-gray-800
              p-6
              hover:border-gray-600
              transition-all duration-300
            "
          >
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">
              Email
            </p>
            <p className="text-white text-sm break-all group-hover:opacity-80">
              danielcarvajal.dev@gmail.com
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5585921842910"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              border border-gray-800
              p-6
              hover:border-gray-600
              transition-all duration-300
            "
          >
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">
              WhatsApp
            </p>
            <p className="text-white text-sm group-hover:opacity-80">
              Enviar mensagem →
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Carvajal-daniel"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              border border-gray-800
              p-6
              hover:border-gray-600
              transition-all duration-300
            "
          >
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">
              GitHub
            </p>
            <p className="text-white text-sm group-hover:opacity-80">
              Ver projetos →
            </p>
          </a>

        </motion.div>

      </div>
    </section>
  )
}