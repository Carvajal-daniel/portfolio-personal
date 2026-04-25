"use client"

import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/libs/utils'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'writing', label: 'Writing' },
  { id: 'speaking', label: 'Speaking' },
]

const socialLinks = [
  { label: 'Email', href: 'mailto:danielcarvajal.dev@gmail.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/daniel_vcarvajal?igsh=aDlhcnJhbXQzOHY1' },
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
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start md:hidden">
        
        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white mix-blend-difference p-2 -m-2"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-6 h-6"
          >
            <Menu
              className={cn(
                "absolute inset-0 transition-all duration-300",
                mobileMenuOpen ? "opacity-0 scale-75" : "opacity-100"
              )}
            />
            <X
              className={cn(
                "absolute inset-0 transition-all duration-300",
                mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )}
            />
          </motion.div>
        </button>

        {/* SOCIAL (MOBILE) */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col justify-center px-6 md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
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
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "text-3xl font-display text-white text-left",
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
        <div className="flex items-center gap-6 justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
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
                "text-sm text-white mix-blend-difference relative py-1",
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