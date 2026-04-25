"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-6 z-50
        shadow-lg
        shadow-gray-700/40
        right-6 md:right-auto md:left-6

        w-11 h-11
        flex items-center justify-center

        bg-black/70 backdrop-blur-md
        border border-gray-700
        text-gray-300

        transition-all duration-300
        hover:text-white hover:border-gray-500 hover:bg-black

        hover:-translate-y-1

        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ChevronUp size={18} />
    </button>
  )
}