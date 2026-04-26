"use client"

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src="/hero-img2.jpeg"
          alt="Daniel banner"
          initial={{ opacity: 0, scale: 1.05, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            w-full 
            h-screen md:h-[110vh]
            mt-10
            md:ml-40
            object-cover 
            object-[center_20%] md:object-[center_30%] 
            brightness-75
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4">
        
        <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16">
          
          <div className="w-full max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="font-display flex flex-col items-start text-white leading-[0.85] tracking-tight text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem]">
                <span className="block">DANIEL</span>
                <span className="block">CARVAJAL</span>
                <span className="block text-[2rem] sm:text-[3rem] md:text-[3.5rem] mt-4">
                  dev fullstack
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
              >
                Desenvolvedor fullstack focado em criar aplicações modernas, rápidas e bem estruturadas.
              </motion.p>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}