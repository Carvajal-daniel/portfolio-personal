"use client"

import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/libs/utils'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'about', label: 'Sobre mim' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Experiença' },
  { id: 'education', label: 'Formação' },
  { id: 'projects', label: 'Projetos' },
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="fixed top-0 left-0 right-0 z-[70] p-6 flex justify-between items-start md:hidden">
        
        {/* BOTÃO */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="text-white p-2 -m-2"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>

        {/* SOCIAL MOBILE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -2, opacity: 0.7 }}
              className="text-sm text-white"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex flex-col justify-center px-6 md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col gap-6"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "text-3xl text-white text-left",
                    "hover:opacity-60",
                    activeSection === item.id && "opacity-60"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP SOCIAL */}
      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="flex items-center gap-6 justify-end"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -3, opacity: 0.6, scale: 1.05 }}
              className="text-sm text-white"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ opacity: 0, x: 40 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 40,
        }}
        transition={{ duration: 0.4 }}
        className="hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10"
      >
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ opacity: 0.6 }}
              className={cn(
                "text-sm text-white relative py-1",
                activeSection === item.id &&
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white"
              )}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  )
}