import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Technologies } from "../components/technologies"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-[#fafafa] selection:bg-[#7928ca]/20">
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
