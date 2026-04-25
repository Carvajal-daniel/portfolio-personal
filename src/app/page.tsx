
import { GrainOverlay } from '@/components/GrainOverlay'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Writing } from '@/components/Writing'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navegação'
import { Hero } from '@/components/Hero'
import { About } from '@/components/Sobre'
import { Education } from '@/components/Educação'
import { Speaking } from '@/components/Falando'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Education />
        <Writing />
        <Speaking />
        <Contact />
      </main>
    </div>
  )
}

