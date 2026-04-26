"use client"

import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/libs/utils'
import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

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
  { label: 'CV', href: '/Daniel-Carvajal-FullStack.pdf' },
  { label: 'Instagram', href: 'https://www.instagram.com/daniel_vcarvajal' },
  { label: 'Github', href: 'https://github.com/Carvajal-daniel' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    }
  },
  exit: {
    opacity: 0,
    transition: { 
      staggerChildren: 0.02, 
      staggerDirection: -1 
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.2, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: 8,
    transition: { duration: 0.1 }
  }
}

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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

  return (
    <>
      {/* MOBILE HEADER */}
      <div 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] p-4 flex justify-between items-center md:hidden transition-all duration-300",
          isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
        )}
      >
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
                transition={{ duration: 0.1 }}
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
                  transition={{ duration: 0.1 }}
                >
                  <Menu size={24} />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </button>

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
              className="text-sm text-white font-medium flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label === 'CV' && <Download size={14} />}
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-md flex flex-col justify-center px-8 md:hidden"
          >
            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col gap-6"
            >
              {navItems
                .filter(item => item.id !== 'home')
                .map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className={cn(
                      "text-4xl font-bold text-white text-left transition-colors",
                      activeSection === item.id ? "text-white" : "text-white/60"
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
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 p-10 pointer-events-none">
        <div className="max-w-[1440px] mx-auto flex justify-end pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-6"
          >
{socialLinks.map((link) => {
  const isCV = link.label === 'CV'

  return (
    <a
      key={link.label}
      href={link.href}
      {...(isCV
        ? { download: true }
        : { target: "_blank", rel: "noopener noreferrer" })}
      className={`flex items-center gap-2 text-sm transition-all ${
        isCV
          ? "px-3 py-1 border border-white/20 rounded-md text-white hover:bg-white hover:text-black"
          : "text-white hover:opacity-60"
      }`}
    >
      {isCV && <Download size={14} />}
      {isCV ? "Currículo" : link.label}
    </a>
  )
})}
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