"use client"

import { motion } from "framer-motion"

interface PortfolioIconProps {
  size?: number
  className?: string
  animated?: boolean
}

export function PortfolioIcon({ size = 32, className = "", animated = false }: PortfolioIconProps) {
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
  }

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  }

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      variants={animated ? iconVariants : {}}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Fundo circular com gradiente */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7928ca" />
            <stop offset="100%" stopColor="#ff0080" />
          </linearGradient>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>

        {/* Círculo de fundo */}
        <circle cx="50" cy="50" r="45" fill="url(#bgGradient)" className="drop-shadow-lg" />

        {/* Letra "P" estilizada */}
        <motion.path
          d="M25 25 L25 75 M25 25 L55 25 C65 25 70 35 70 45 C70 55 65 50 55 50 L25 50"
          stroke="url(#iconGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animated ? pathVariants : {}}
          initial="initial"
          animate="animate"
        />

        {/* Ponto decorativo */}
        <motion.circle
          cx="75"
          cy="30"
          r="3"
          fill="url(#iconGradient)"
          initial={animated ? { scale: 0, opacity: 0 } : {}}
          animate={
            animated
              ? {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.5 },
                }
              : {}
          }
        />
      </svg>
    </motion.div>
  )
}

// Versão simplificada para favicon
export function SimplifiedPortfolioIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7928ca" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="45" fill="url(#simpleGradient)" />
      <path
        d="M25 25 L25 75 M25 25 L55 25 C65 25 70 35 70 45 C70 55 65 50 55 50 L25 50"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
