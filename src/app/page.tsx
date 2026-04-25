
import { GrainOverlay } from '@/components/GrainOverlay'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Writing } from '@/components/Writing'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Education } from '@/components/Education'
import { Speaking } from '@/components/Speaker'
import { Navigation } from '@/components/Navigation'

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

