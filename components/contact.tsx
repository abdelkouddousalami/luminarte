"use client"

import { useLanguage } from "@/context/language-context"
import { useEffect, useRef, useState } from "react"
import { Phone, MapPin, Mail } from "lucide-react"

export function Contact() {
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

  return (
    <section
      id="contact"
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
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Phone Numbers */}
            <div className="p-5 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-foreground">
                  {t.contact.info.phone}
                </h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="tel:+393383763401"
                  className="flex items-center text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  338 3763401
                </a>
                <a
                  href="tel:+393339119327"
                  className="flex items-center text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  333 9119327
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-foreground">
                  Email
                </h3>
              </div>
              <a
                href="mailto:Luminartesnc26@gmail.com"
                className="text-sm md:text-lg text-muted-foreground hover:text-primary transition-colors break-all"
              >
                Luminartesnc26@gmail.com
              </a>
            </div>
          </div>

          {/* Location with Map */}
          <div
            className={`mt-4 md:mt-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-5 md:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-foreground">
                    {t.contact.info.location}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">LuminArte s.n.c</p>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-border h-48 sm:h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.2024!2d13.6997!3d42.8512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUxJzA0LjMiTiAxM8KwNDEnNTguOSJF!5e0!3m2!1sen!2sit!4v1710000000000!5m2!1sen!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LuminArte Location"
                />
              </div>
              
              <a
                href="https://maps.app.goo.gl/Pd9AEpDF6zX1PwgN8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm md:text-base text-primary hover:text-primary/80 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {t.lang === "it" ? "Apri in Google Maps" : "Open in Google Maps"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
