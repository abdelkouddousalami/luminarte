"use client"

import { LanguageProvider } from "@/context/language-context"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <Gallery />
        <Projects />
        <About />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
