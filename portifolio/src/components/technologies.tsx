"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const technologies = [
  { name: "React", level: 50, category: "Frontend" },
  { name: "Next.js", level: 60, category: "Frontend" },
  { name: "TypeScript", level: 68, category: "Linguagem" },
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "Nest.js", level: 60, category: "Backend" },
  { name: "Javascript", level: 70, category: "Linguagem" },
  { name: "HTML", level: 70, category: "Linguagem" },
  { name: "CSS", level: 70, category: "Linguagem" },
  { name: "Tailwind CSS", level: 70, category: "Frontend" },
  { name: "PostgreSQL", level: 65, category: "Banco de Dados" },
  { name: "MySQL", level: 65, category: "Banco de Dados" },
  { name: "Docker", level: 20, category: "DevOps" },
  { name: "AWS", level: 20, category: "Cloud" },
  { name: "Prisma", level: 50, category: "ORM" },
]

const categories = ["Todos", "Frontend", "Backend", "Linguagem", "Banco de Dados", "DevOps", "Cloud", "ORM"]

const getLevelText = (level: number) => {
  if (level >= 80) return "Avançado"
  if (level >= 60) return "Intermediário"
  return "Iniciante"
}

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTechnologies =
    activeCategory === "Todos" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <section id="tecnologias" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Tecnologias</h2>
          <p className="text-[#0a0a0a]/70 dark:text-white/70">
            Ferramentas e linguagens que utilizo para criar soluções digitais eficientes e escaláveis.
          </p>
        </motion.div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? "bg-[#7928ca] text-white"
                    : "bg-[#0a0a0a]/5 dark:bg-white/5 hover:bg-[#0a0a0a]/10 dark:hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`relative p-6 rounded-xl border border-[#0a0a0a]/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a] transition-all duration-300 ${
                hoveredTech === tech.name ? "shadow-lg" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">{tech.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[#0a0a0a]/5 dark:bg-white/5">{tech.category}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#0a0a0a]/60 dark:text-white/60">Proficiência</span>
                  <span className="font-medium">{getLevelText(tech.level)}</span>
                </div>

                <div className="h-2 w-full bg-[#0a0a0a]/10 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-[#7928ca] to-[#ff0080]"
                  />
                </div>

                <div className="text-right text-xs text-[#0a0a0a]/60 dark:text-white/60">{tech.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
