"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={stagger}
      className="border-t border-gray-800 mt-13 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        {/* Left */}
        <motion.div variants={fadeUp}>
          <h3 className="text-white text-lg font-light">
            Daniel Carvajal
          </h3>
          <p className="text-gray-500 text-sm mt-2 max-w-sm">
            Desenvolvedor fullstack construindo soluções modernas com foco em performance e experiência.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-gray-500"
        >

          <motion.a
            href="mailto:danielcarvajal.dev@gmail.com"
            whileHover={{ y: -2 }}
            className="hover:text-white transition-colors"
          >
            Email
          </motion.a>

          <motion.a
            href="https://github.com/Carvajal-daniel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="hover:text-white transition-colors"
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/daniel-carvajal-3b275b373/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </motion.a>

        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        variants={fadeUp}
        className="max-w-7xl mx-auto mt-10 text-xs text-gray-600"
      >
        © {new Date().getFullYear()} Daniel Carvajal. Todos os direitos reservados.
      </motion.div>
    </motion.footer>
  )
}