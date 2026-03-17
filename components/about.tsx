"use client"

import { useLanguage } from "@/context/language-context"
import { useEffect, useRef, useState } from "react"
import { Award, Users, Lightbulb, Clock } from "lucide-react"

const stats = [
  { icon: Award, valueEn: "10+", valueIt: "10+", labelEn: "Years Experience", labelIt: "Anni di Esperienza" },
  { icon: Users, valueEn: "500+", valueIt: "500+", labelEn: "Happy Clients", labelIt: "Clienti Soddisfatti" },
  { icon: Lightbulb, valueEn: "1000+", valueIt: "1000+", labelEn: "Projects Completed", labelIt: "Progetti Completati" },
  { icon: Clock, valueEn: "24/7", valueIt: "24/7", labelEn: "Support Available", labelIt: "Supporto Disponibile" },
]

export function About() {
  const { language, t } = useLanguage()
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

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe5-Pw34NcmS6khjA8xPp0yAexyl3FbVuQ.jpeg"
                alt="LuminArte team at work"
                className="w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary/50" />
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8">
              {t.about.title}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Signature/Brand Mark */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full border border-border">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-sm uppercase tracking-widest text-foreground/80">
                  Ascoli Piceno, Italy
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className={`p-3 md:p-4 rounded-lg bg-secondary/30 border border-border transition-all duration-700 hover:border-primary/50 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                    <div className="text-xl md:text-3xl font-semibold text-foreground">
                      {language === "en" ? stat.valueEn : stat.valueIt}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {language === "en" ? stat.labelEn : stat.labelIt}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
