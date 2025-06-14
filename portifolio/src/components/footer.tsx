"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail,Phone as Whatsapp, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
                    { Icon: Github, url: "https://github.com/JoaoVicto0r" },
                    { Icon: Linkedin, url: "https://www.linkedin.com/in/joaovictor5665/" },
                   //{ Icon: Twitter, url: "https://twitter.com/seu-usuario" },
                    { Icon: Instagram, url: "https://www.instagram.com/victo0r__/" },
                    { Icon: Mail, url: "mailto:victor566518@gmail.com" },
                    { Icon: Whatsapp, url: "https://wa.me/5581998993138" }
                  ];

  return (
    <footer className="py-12 border-t border-[#0a0a0a]/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-xl font-medium mb-2">Portfólio</h3>
            <p className="text-sm text-[#0a0a0a]/60 dark:text-white/60 max-w-xs">
              Criando experiências digitais memoráveis e soluções inovadoras.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#0a0a0a]/10 dark:border-white/10 text-[#0a0a0a]/70 dark:text-white/70 hover:bg-[#7928ca]/10 hover:text-[#7928ca] hover:border-[#7928ca]/30 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-[#0a0a0a]/5 dark:border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-[#0a0a0a]/60 dark:text-white/60 mb-4 md:mb-0">
            © {currentYear} Portfólio João Victor S. Gomes. Todos os direitos reservados.
          </p>

          <div className="flex space-x-6">
            {["Sobre", "Projetos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#0a0a0a]/60 dark:text-white/60 hover:text-[#7928ca] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
