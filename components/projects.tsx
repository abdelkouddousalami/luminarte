"use client"

import { useLanguage } from "@/context/language-context"
import { useEffect, useRef, useState } from "react"
import { MapPin, Calendar } from "lucide-react"

interface Project {
  id: number
  image: string
  titleEn: string
  titleIt: string
  typeEn: string
  typeIt: string
  location: string
  year: string
  descriptionEn: string
  descriptionIt: string
}

const projects: Project[] = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe4-Xwt6eWjhLxKzvrabC65trbnBtvK5fL.jpeg",
    titleEn: "Wedding Lighting Installation",
    titleIt: "Installazione Luminosa per Matrimonio",
    typeEn: "Wedding",
    typeIt: "Matrimonio",
    location: "Ascoli Piceno",
    year: "2024",
    descriptionEn: "Elegant fairy light canopy creating a magical atmosphere for an outdoor summer wedding.",
    descriptionIt: "Elegante tetto di lucine che crea un'atmosfera magica per un matrimonio estivo all'aperto.",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe12-cZjpLoghgefJd7vbhbBs824I2HoHAX.jpeg",
    titleEn: "Christmas City Center",
    titleIt: "Centro Città Natale",
    typeEn: "Christmas",
    typeIt: "Natale",
    location: "San Benedetto del Tronto",
    year: "2023",
    descriptionEn: "Spectacular holiday illuminations transforming the city center into a winter wonderland.",
    descriptionIt: "Spettacolari illuminazioni natalizie che trasformano il centro città in un paese delle meraviglie invernale.",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe5-Pw34NcmS6khjA8xPp0yAexyl3FbVuQ.jpeg",
    titleEn: "Corporate Gala Event",
    titleIt: "Evento Gala Aziendale",
    typeEn: "Event",
    typeIt: "Evento",
    location: "Fermo",
    year: "2024",
    descriptionEn: "Sophisticated lighting design for a prestigious corporate celebration.",
    descriptionIt: "Design illuminotecnico sofisticato per una prestigiosa celebrazione aziendale.",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe7-MYlKC0UB4huoqX1SqKNrtVDrwh1ZvC.jpeg",
    titleEn: "Historic Village Festival",
    titleIt: "Festival del Borgo Storico",
    typeEn: "Street Decoration",
    typeIt: "Decorazione Stradale",
    location: "Offida",
    year: "2023",
    descriptionEn: "Artistic lighting highlighting the beautiful architecture of this historic village.",
    descriptionIt: "Illuminazione artistica che evidenzia la bella architettura di questo borgo storico.",
  },
]

export function Projects() {
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
    <section
      id="projects"
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
            {t.projects.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={language === "en" ? project.titleEn : project.titleIt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs uppercase tracking-wider bg-primary/90 text-primary-foreground rounded-full">
                    {language === "en" ? project.typeEn : project.typeIt}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {language === "en" ? project.titleEn : project.titleIt}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {language === "en" ? project.descriptionEn : project.descriptionIt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
