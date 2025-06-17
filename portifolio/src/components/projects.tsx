"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"

const projects = [
  {
    title: "Sistema de Precificação de Produtos ",
    description:
      "Sistema em andadmento para precificação e criação de Receitas culinárias, com sistema de autenticação, dashboard, controle de estoque, controle financeiro, exportação de Receitas em PDFs, Cadastro de fornecedores entre outras funcionalidades.",
    image: "/price.png?height=400&width=600",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Nest.JS", "Prisma", "Tailwind CSS"],
    liveUrl: "https://project-psi-seven-46.vercel.app/",
    githubUrl: "https://github.com/JoaoVicto0r/Project",
  },
  {
    title: "API de autenticação com Nest.js",
    description: "sistema de autenticação com Nest.js, Prisma e JWT, com funcionalidades de login, registro e recuperação de senha.",
    image: "/auth.jpg?height=400&width=600",
    technologies: ["Node.js", "PostgreSQL", "Prisma", "Nest.js"],
    liveUrl: "https://github.com/JoaoVicto0r/authtentic_nest.js",
    githubUrl: "https://github.com/JoaoVicto0r/authtentic_nest.js",
  },
  {
    title: "Site de Investimentos",
    description: "site de investimentos com Next.js, TypeScript e Tailwind CSS, com funcionalidades de autenticação, dashboard e controle financeiro.",
    image: "/siteclient.jpg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "https://site-client-eight.vercel.app/",
    githubUrl: "https://github.com/JoaoVicto0r/siteClient",
  },
  {
    title: "API Crud com Nest.js e Prisma",
    description: "Demosntração de CRUD com Nest.js e Prisma, com funcionalidades de autenticação, dashboard e controle financeiro.",
    image: "/nest.png?height=400&width=600",
    technologies: ["Nest.js", "Prisma", "PostgreSQL"],
    liveUrl: "https://github.com/JoaoVicto0r/nest-prisma-crud",
    githubUrl: "https://github.com/JoaoVicto0r/nest-prisma-crud",
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projetos" className="py-24 bg-[#fafafa] dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projetos</h2>
          <p className="text-[#0a0a0a]/70 dark:text-white/70">
            Uma seleção dos meus trabalhos recentes, demonstrando minhas habilidades e experiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/9]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7928ca]/80 to-[#ff0080]/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="flex gap-4">
                    <Button size="sm" className="rounded-full bg-white text-[#0a0a0a] hover:bg-white/90" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-transparent border-white text-white hover:bg-white/20"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium mb-2 group-hover:text-[#7928ca] transition-colors">{project.title}</h3>

              <p className="text-[#0a0a0a]/70 dark:text-white/70 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-[#0a0a0a]/5 dark:bg-white/5 text-[#0a0a0a]/70 dark:text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                className="inline-flex items-center text-sm font-medium text-[#7928ca] hover:underline"
              >
                Ver detalhes
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
