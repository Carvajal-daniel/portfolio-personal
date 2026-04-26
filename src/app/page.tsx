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
        {/* 1. Impacto inicial */}
        <section id="home" aria-label="Apresentação">
          <Hero />
        </section>

        {/* 2. Quem é você e o que busca (Contexto rápido) */}
        <section id="about" aria-label="Sobre mim">
          <About />
        </section>

        {/* 3. PROJETOS: Prova real do que você sabe fazer */}
        <section id="projects" aria-label="Projetos">
          <Projects />
        </section>

        {/* 4. SKILLS: O "como" você faz (apoia os projetos acima) */}
        <section id="skills" aria-label="Habilidades técnicas">
          <Skills />
        </section>

        {/* 5. EXPERIÊNCIA: Onde você já passou */}
        <section id="experience" aria-label="Experiência">
          <Work />
        </section>

        {/* 6. FORMAÇÃO: Teu background acadêmico */}
        <section id="education" aria-label="Educação">
          <Education />
        </section>

        {/* 7. CALL TO ACTION: Hora de te chamarem */}
        <section id="contact" aria-label="Contato">
          <Contact />
        </section>
      </main>

      <footer aria-label="Rodapé">
        <Footer />
      </footer>

      <BackToTop />
    </div>
  )
}