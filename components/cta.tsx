"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function CTA() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe6-By0uGzHLwzCy12FaFYi5GmFiB4236U.jpeg"
          alt="Decorative lighting background"
          fill
          className="object-cover"
          quality={85}
          priority={false}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-primary/50" />
            <div className="w-3 h-3 bg-primary rounded-full" />
            <div className="h-px w-16 bg-primary/50" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance">
            {t.cta.title}
          </h2>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            {t.cta.button}
          </Button>
        </div>
      </div>
    </section>
  )
}
