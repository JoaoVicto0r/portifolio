"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { ArrowLeft, LogIn } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulação de login (em produção, usar autenticação real)
    if (email === "admin@portfolio.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true")
      router.push("/dashboard")
    } else {
      setError("Email ou senha incorretos")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Portfólio
          </Button>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white dark:bg-[#0a0a0a] border border-[#0a0a0a]/5 dark:border-white/5 rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Bem-vindo de volta</h1>
              <p className="text-[#0a0a0a]/60 dark:text-white/60">
                Entre com suas credenciais para acessar o dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@portfolio.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                  className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Senha
                  </label>
                  <a href="#" className="text-xs text-[#7928ca] hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  required
                  className="rounded-lg border-[#0a0a0a]/10 dark:border-white/10 focus:border-[#7928ca] focus:ring-[#7928ca]/10 bg-transparent"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-[#7928ca] hover:bg-[#6a23b5] text-white"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Entrando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    Entrar
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-8 p-4 bg-[#0a0a0a]/5 dark:bg-white/5 rounded-lg">
              <p className="text-sm text-[#0a0a0a]/70 dark:text-white/70">
                <strong>Credenciais de demonstração:</strong>
                <br />
                Email: admin@portfolio.com
                <br />
                Senha: admin123
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
