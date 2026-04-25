import { GrainOverlay } from '@/components/GrainOverlay'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Education } from '@/components/Education'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/BackToTop'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <GrainOverlay />

      <header>
        <Navigation />
      </header>

      <main>
        <section id="home" aria-label="Apresentação">
          <Hero />
        </section>

        <section id="about" aria-label="Sobre mim">
          <About />
        </section>

        <section id="skills" aria-label="Habilidades técnicas">
          <Skills />
        </section>

        <section id="experience" aria-label="Experiência">
          <Work />
        </section>

        <section id="education" aria-label="Educação">
          <Education />
        </section>

        <section id="projects" aria-label="Projetos">
          <Projects />
        </section>

        <section id="contact" aria-label="Contato">
          <Contact />
        </section>
      </main>

      <footer aria-label="Rodapé">
        <Footer />
      </footer>

      {/* 👇 AQUI */}
      <BackToTop />

    </div>
  )
}