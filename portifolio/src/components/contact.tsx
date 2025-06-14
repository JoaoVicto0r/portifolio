"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <p className="text-[#0a0a0a]/70 dark:text-white/70">
            Interessado em trabalhar juntos? Entre em contato para discutirmos seu próximo projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#7928ca]/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-[#7928ca]" />
              </div>
              <div className="pl-16">
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-[#0a0a0a]/70 dark:text-white/70">victor566518@gmail.com</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#7928ca]/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-[#7928ca]" />
              </div>
              <div className="pl-16">
                <h3 className="text-lg font-medium mb-1">Telefone</h3>
                <p className="text-[#0a0a0a]/70 dark:text-white/70">+55 (81) 9 9899-3138</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#7928ca]/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-[#7928ca]" />
              </div>
              <div className="pl-16">
                <h3 className="text-lg font-medium mb-1">Localização</h3>
                <p className="text-[#0a0a0a]/70 dark:text-white/70">Vitoria De Santo Antão, Brasil</p>
              </div>
            </div>

            <div className="pt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31598.97563379377!2d-35.29600799999999!3d-8.11451795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa54a93d22ad87%3A0x813856d6816ceb4b!2sVit%C3%B3ria%20de%20Santo%20Ant%C3%A3o%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1749847865362!5m2!1spt-BR!2sbr"
                className="w-full h-64 rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formspree.io/f/xpwrraqe"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  required
                  className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  required
                  className="min-h-[150px] rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-lg bg-[#7928ca] hover:bg-[#6a23b5] text-white"
              >
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
