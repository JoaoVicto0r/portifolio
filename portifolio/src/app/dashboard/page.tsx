"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { ArrowLeft, Plus, Trash2, LogOut, Sliders, Briefcase } from "lucide-react"

interface Technology {
  id: string
  name: string
  level: number
  category: string
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [newTech, setNewTech] = useState({ name: "", level: 50, category: "Frontend" })
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    liveUrl: "",
    githubUrl: "",
  })
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn")
    if (!loggedIn) {
      router.push("/login")
    } else {
      setIsLoggedIn(true)
      // Carregar dados salvos
      const savedTechs = localStorage.getItem("technologies")
      const savedProjects = localStorage.getItem("projects")

      if (savedTechs) {
        setTechnologies(JSON.parse(savedTechs))
      }
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects))
      }
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/")
  }

  const addTechnology = () => {
    if (newTech.name && newTech.category) {
      const tech: Technology = {
        id: Date.now().toString(),
        ...newTech,
      }
      const updatedTechs = [...technologies, tech]
      setTechnologies(updatedTechs)
      localStorage.setItem("technologies", JSON.stringify(updatedTechs))
      setNewTech({ name: "", level: 50, category: "Frontend" })
    }
  }

  const removeTechnology = (id: string) => {
    const updatedTechs = technologies.filter((tech) => tech.id !== id)
    setTechnologies(updatedTechs)
    localStorage.setItem("technologies", JSON.stringify(updatedTechs))
  }

  const addProject = () => {
    if (newProject.title && newProject.description) {
      const project: Project = {
        id: Date.now().toString(),
        ...newProject,
        technologies: newProject.technologies.split(",").map((t) => t.trim()),
      }
      const updatedProjects = [...projects, project]
      setProjects(updatedProjects)
      localStorage.setItem("projects", JSON.stringify(updatedProjects))
      setNewProject({
        title: "",
        description: "",
        technologies: "",
        liveUrl: "",
        githubUrl: "",
      })
    }
  }

  const removeProject = (id: string) => {
    const updatedProjects = projects.filter((project) => project.id !== id)
    setProjects(updatedProjects)
    localStorage.setItem("projects", JSON.stringify(updatedProjects))
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a]">
        <div className="animate-pulse">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a]">
      <header className="border-b border-[#0a0a0a]/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="rounded-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Portfólio
              </Button>
            </Link>
            <h1 className="text-xl font-medium">Dashboard</h1>
          </div>
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="rounded-full border border-[#0a0a0a]/10 dark:border-white/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="technologies" className="space-y-8">
          <TabsList className="bg-white dark:bg-[#0a0a0a] border border-[#0a0a0a]/10 dark:border-white/10 p-1 rounded-full">
            <TabsTrigger
              value="technologies"
              className="rounded-full data-[state=active]:bg-[#7928ca] data-[state=active]:text-white"
            >
              <Sliders className="h-4 w-4 mr-2" />
              Tecnologias
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="rounded-full data-[state=active]:bg-[#7928ca] data-[state=active]:text-white"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Projetos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technologies" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#0a0a0a] border border-[#0a0a0a]/5 dark:border-white/5 rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-medium mb-6">Adicionar Nova Tecnologia</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="tech-name" className="text-sm font-medium">
                    Nome da Tecnologia
                  </label>
                  <Input
                    id="tech-name"
                    value={newTech.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewTech({ ...newTech, name: e.target.value })
                    }
                    placeholder="Ex: React"
                    className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="tech-category" className="text-sm font-medium">
                    Categoria
                  </label>
                  <select
                    id="tech-category"
                    value={newTech.category}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setNewTech({ ...newTech, category: e.target.value })
                    }
                    className="w-full h-10 rounded-lg border border-[#0a0a0a]/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7928ca]/10 focus:border-[#7928ca]"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Linguagem">Linguagem</option>
                    <option value="Banco de Dados">Banco de Dados</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Cloud">Cloud</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="tech-level" className="text-sm font-medium">
                    Nível (0-100)
                  </label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="tech-level"
                      type="range"
                      min="0"
                      max="100"
                      value={newTech.level}
                      onChange={(e) => setNewTech({ ...newTech, level: Number.parseInt(e.target.value) })}
                      className="flex-1"
                    />
                    <span className="w-12 text-center">{newTech.level}%</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button onClick={addTechnology} className="rounded-lg bg-[#7928ca] hover:bg-[#6a23b5] text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Tecnologia
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] border border-[#0a0a0a]/5 dark:border-white/5 rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-medium mb-6">Tecnologias Cadastradas</h2>
              <div className="grid gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 border border-[#0a0a0a]/5 dark:border-white/5 rounded-lg hover:border-[#7928ca]/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{tech.name}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-[#0a0a0a]/5 dark:bg-white/5">
                          {tech.category}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#0a0a0a]/60 dark:text-white/60">Nível</span>
                          <span>{tech.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#0a0a0a]/10 dark:bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#7928ca] to-[#ff0080]"
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTechnology(tech.id)}
                      className="ml-4 h-8 w-8 rounded-full text-[#0a0a0a]/60 dark:text-white/60 hover:text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
                {technologies.length === 0 && (
                  <div className="text-center py-12 text-[#0a0a0a]/60 dark:text-white/60">
                    <p>Nenhuma tecnologia cadastrada ainda.</p>
                    <p className="text-sm mt-2">Adicione sua primeira tecnologia acima.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#0a0a0a] border border-[#0a0a0a]/5 dark:border-white/5 rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-medium mb-6">Adicionar Novo Projeto</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="project-title" className="text-sm font-medium">
                      Título do Projeto
                    </label>
                    <Input
                      id="project-title"
                      value={newProject.title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewProject({ ...newProject, title: e.target.value })
                      }
                      placeholder="Ex: E-commerce Platform"
                      className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-technologies" className="text-sm font-medium">
                      Tecnologias (separadas por vírgula)
                    </label>
                    <Input
                      id="project-technologies"
                      value={newProject.technologies}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewProject({ ...newProject, technologies: e.target.value })
                      }
                      placeholder="Ex: React, Next.js, TypeScript"
                      className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="project-description" className="text-sm font-medium">
                    Descrição
                  </label>
                  <Textarea
                    id="project-description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    placeholder="Descreva seu projeto..."
                    className="min-h-[100px] rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="project-live" className="text-sm font-medium">
                      URL do Projeto
                    </label>
                    <Input
                      id="project-live"
                      value={newProject.liveUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewProject({ ...newProject, liveUrl: e.target.value })
                      }
                      placeholder="https://meu-projeto.com"
                      className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-github" className="text-sm font-medium">
                      URL do GitHub
                    </label>
                    <Input
                      id="project-github"
                      value={newProject.githubUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewProject({ ...newProject, githubUrl: e.target.value })
                      }
                      placeholder="https://github.com/usuario/projeto"
                      className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                    />
                  </div>
                </div>
                <Button onClick={addProject} className="rounded-lg bg-[#7928ca] hover:bg-[#6a23b5] text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Projeto
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] border border-[#0a0a0a]/5 dark:border-white/5 rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-medium mb-6">Projetos Cadastrados</h2>
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="border border-[#0a0a0a]/5 dark:border-white/5 rounded-lg overflow-hidden hover:border-[#7928ca]/30 transition-colors"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-4 flex-1">
                          <h3 className="font-medium text-lg">{project.title}</h3>
                          <p className="text-sm text-[#0a0a0a]/70 dark:text-white/70">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#0a0a0a]/5 dark:bg-white/5">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#7928ca] hover:underline"
                              >
                                Ver Projeto →
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#7928ca] hover:underline"
                              >
                                GitHub →
                              </a>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeProject(project.id)}
                          className="ml-4 h-8 w-8 rounded-full text-[#0a0a0a]/60 dark:text-white/60 hover:text-red-500 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {projects.length === 0 && (
                  <div className="text-center py-12 text-[#0a0a0a]/60 dark:text-white/60">
                    <p>Nenhum projeto cadastrado ainda.</p>
                    <p className="text-sm mt-2">Adicione seu primeiro projeto acima.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
