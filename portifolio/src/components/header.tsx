"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Menu, X, User } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#0a0a0a]/5 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center space-x-2 pl-7" href="/">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-medium tracking-tight">
            João Victor
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 pl-8 text-xl">
          {["Sobre", "Tecnologias", "Projetos", "Contato"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative py-2 px-1 font-medium text-[#0a0a0a]/80 dark:text-white/80 hover:text-[#0a0a0a] dark:hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7928ca] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/*
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full px-4 border border-[#0a0a0a]/10 dark:border-white/10 hover:bg-[#7928ca]/5 hover:text-[#7928ca]"
            >
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
          */} 
          <Button
            className="md:hidden rounded-full w-9 h-9 p-0 flex items-center justify-center"
            size="icon"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-[#0a0a0a]/5 dark:border-white/5"
        >
          <nav className="flex flex-col space-y-4 p-6">
            {["Sobre", "Tecnologias", "Projetos", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-[#7928ca] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
