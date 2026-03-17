"use client"

import { useLanguage } from "@/context/language-context"
import { Sparkles, Heart, PartyPopper, Lightbulb } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const serviceIcons = {
  christmas: Sparkles,
  wedding: Heart,
  event: PartyPopper,
  custom: Lightbulb,
}

const serviceImages = {
  christmas: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe2-ZdNJe0gopD3uZemzj6R9AprEWv3g8c.jpeg",
  wedding: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe11-Gbaze74H4cUoIJ1GvRNstypcV5xIHH.jpeg",
  event: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe8-Eff2r3ieG1GYr2rdQ6RBilAAP7ioRO.jpeg",
  custom: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe9-RG0wxSi1UUu2ykAP6Id03RYB0GgADR.jpeg",
}

export function Services() {
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

  const services = [
    {
      key: "christmas" as const,
      ...t.services.christmas,
    },
    {
      key: "wedding" as const,
      ...t.services.wedding,
    },
    {
      key: "event" as const,
      ...t.services.event,
    },
    {
      key: "custom" as const,
      ...t.services.custom,
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-foreground">
            {t.services.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.key]
            return (
              <div
                key={service.key}
                className={`group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={serviceImages[service.key]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div className="absolute -top-8 left-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
