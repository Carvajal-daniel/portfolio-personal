"use client"

import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/libs/utils'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'projects', label: 'Projetos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'experience', label: 'Experiência' },
  { id: 'education', label: 'Formação' },
  { id: 'contact', label: 'Contato' },
]

const socialLinks = [
  { label: 'Email', href: 'mailto:danielcarvajal.dev@gmail.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/daniel_vcarvajal' },
  { label: 'Github', href: 'https://github.com/Carvajal-daniel' },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  // CONFIGURAÇÕES DE VELOCIDADE ACELERADAS
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 🚀 Antes 0.1 (mais rápido entre itens)
        delayChildren: 0.05    // 🚀 Antes 0.2 (começa quase na hora)
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Menos deslocamento para parecer mais rápido
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.2, ease: "easeOut" } 
    }
  }

  return (
    <>
      {/* MOBILE HEADER */}
      <div 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] p-4 flex justify-between items-center md:hidden transition-all duration-300",
          isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
        )}
      >
        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="text-white w-10 h-10 flex items-center justify-center focus:outline-none relative"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }} // Troca de ícone mais rápida
                className="flex items-center justify-center"
              >
                <X size={28} />
              </motion.div>
            ) : (
              mounted && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }} // Troca de ícone mais rápida
                  className="flex items-center justify-center"
                >
                  <Menu size={24} />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </button>

        {/* SOCIAL MOBILE ANIMADO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={itemVariants}
              className="text-sm text-white font-medium"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // Fundo abre mais rápido
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-md flex flex-col justify-center px-8 md:hidden"
          >
            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              {navItems
                .filter(item => item.id !== 'home')
                .map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className={cn(
                      "text-4xl font-bold text-white text-left transition-colors",
                      activeSection === item.id ? "text-white" : "text-white/90"
                    )}
                  >
                    {item.label}
                  </motion.button>
                ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP SOCIAL */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 p-10">
        <div className="max-w-[1440px] mx-auto flex justify-end">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          x: isVisible ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
        className="hidden md:block fixed bottom-0 right-0 z-50 p-10"
      >
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-sm text-white relative py-1 hover:opacity-60 transition-all",
                activeSection === item.id && 
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>
    </>
  )
}