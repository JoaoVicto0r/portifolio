"use client"

import { Button } from "../components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="sobre" className="relative min-h-screen flex items-center pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-[#ff0080]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#7928ca]/10 text-[#7928ca] dark:bg-[#7928ca]/20 text-sm font-medium mb-4">
              Desenvolvedor Full Stack
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Criando experiências digitais <span className="text-[#7928ca]">memoráveis</span>
            </h1>

            <p className="text-lg text-[#0a0a0a]/70 dark:text-white/70 leading-relaxed">
              Desenvolvedor apaixonado por transformar ideias em soluções elegantes e funcionais. 
              Especializado em criar interfaces intuitivas e experiências de usuário excepcionais. 
              Atuo como desenvolvedor full stack com experiência em NestJS, Prisma, 
              Next.js, TypeScript e PostgreSQL, desenvolvendo sistemas completos com autenticação, 
              dashboards administrativos, carteiras digitais e controle financeiro. 
              Tenho domínio em integrações via API, uso de boas práticas de arquitetura
               (DDD, Clean Architecture) e versionamento com Git.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                className="rounded-full px-6 bg-[#7928ca] hover:bg-[#6a23b5] text-white"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="rounded-full px-6 py-2 border border-[#0a0a0a]/20 dark:border-white/20 
                          bg-white text-[#0a0a0a] dark:bg-transparent dark:text-white
                          hover:bg-[#7928ca]/10 hover:text-[#7928ca] hover:border-[#7928ca]/30 
                          transition-colors duration-200"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contato
          </Button>
            </div>

            <div className="flex space-x-4 pt-6">
              <a href="https://github.com/JoaoVicto0r" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0a0a0a]/5 dark:hover:bg-white/5">
                <Github className="h-5 w-5" />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/joaovictor5665/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0a0a0a]/5 dark:hover:bg-white/5">
                <Linkedin className="h-5 w-5" />
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => document.getElementById("tecnologias")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
