"use client"

import { useEffect, useState } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // 👇 PRIORIDADE TOTAL: topo da página
      if (scrollY < 120) {
        setActiveSection("home")
        return
      }

      const sections = document.querySelectorAll("section")

      let current = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        const id = section.getAttribute("id") || ""

        // 👇 área ativa mais precisa
        if (
          scrollY >= sectionTop - 150 &&
          scrollY < sectionTop + sectionHeight - 150
        ) {
          current = id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
}