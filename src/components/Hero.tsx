"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useMemo } from "react"

export function Hero() {
  const shouldReduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return navigator.hardwareConcurrency <= 4
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* animação leve */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, scale: 1.03 }
          }
          animate={
            shouldReduceMotion
              ? {}
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-img2.jpeg"
            alt="Daniel banner"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="
              object-cover
              object-[center_25%] md:object-[center_30%] mt-12
              brightness-[0.4]
            "
          />
        </motion.div>

        {/* overlay leve */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-2">
        
        <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16">
          
          <div className="w-full max-w-5xl">

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              animate={
                shouldReduceMotion
                  ? {}
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-display flex flex-col items-start text-white leading-[0.85] tracking-tight text-[6rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem]">
                <span>DANIEL</span>
                <span>CARVAJAL</span>
                <span className="text-[2rem] tracking-tight sm:text-[3rem] md:text-[3.5rem] mt-2 ml-1">
                  dev fullstack
                </span>
              </h1>

              <motion.p
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0 }
                }
                animate={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 1 }
                }
                transition={{ delay: 0.3, duration: 0.4 }}
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