"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "it"

interface Translations {
  nav: {
    home: string
    services: string
    gallery: string
    projects: string
    about: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  services: {
    title: string
    christmas: { title: string; description: string }
    wedding: { title: string; description: string }
    event: { title: string; description: string }
    custom: { title: string; description: string }
  }
  gallery: {
    title: string
    categories: {
      all: string
      christmas: string
      weddings: string
      events: string
      street: string
    }
  }
  projects: {
    title: string
    viewProject: string
  }
  about: {
    title: string
    description: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      phone: string
      eventType: string
      message: string
      submit: string
      eventTypes: {
        wedding: string
        christmas: string
        event: string
        custom: string
      }
    }
    info: {
      phone: string
      location: string
      followUs: string
    }
  }
  cta: {
    title: string
    button: string
  }
  footer: {
    quickLinks: string
    contactInfo: string
    followUs: string
    copyright: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Professional Lighting for Every Occasion",
      subtitle: "Christmas Decorations, Weddings, and Special Events",
      cta: "Request a Free Quote",
    },
    services: {
      title: "Our Services",
      christmas: {
        title: "Christmas Lighting",
        description: "Transform your space with magical holiday illuminations that capture the spirit of the season.",
      },
      wedding: {
        title: "Wedding Lighting",
        description: "Create unforgettable romantic atmospheres with elegant lighting designed for your special day.",
      },
      event: {
        title: "Event Lighting",
        description: "Elevate any celebration with professional lighting that sets the perfect mood.",
      },
      custom: {
        title: "Custom Installations",
        description: "Bespoke lighting solutions tailored to your unique vision and requirements.",
      },
    },
    gallery: {
      title: "Our Gallery",
      categories: {
        all: "All",
        christmas: "Christmas",
        weddings: "Weddings",
        events: "Events",
        street: "Street Decorations",
      },
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
    },
    about: {
      title: "About LuminArte",
      description: "LuminArte specializes in creative lighting installations that transform spaces into unforgettable experiences. Our team combines design, technology, and creativity to illuminate weddings, cities, and special events. With years of experience and a passion for excellence, we bring your vision to light.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your next project",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        eventType: "Event Type",
        message: "Your Message",
        submit: "Send Message",
        eventTypes: {
          wedding: "Wedding",
          christmas: "Christmas Decoration",
          event: "Special Event",
          custom: "Custom Installation",
        },
      },
      info: {
        phone: "Phone",
        location: "Location",
        followUs: "Follow Us",
      },
    },
    cta: {
      title: "Let's Light Up Your Event",
      button: "Contact Us",
    },
    footer: {
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Follow Us",
      copyright: "All rights reserved.",
    },
  },
  it: {
    nav: {
      home: "Home",
      services: "Servizi",
      gallery: "Galleria",
      projects: "Progetti",
      about: "Chi Siamo",
      contact: "Contatti",
    },
    hero: {
      title: "Illuminazioni Professionali per Ogni Occasione",
      subtitle: "Natale, Matrimoni ed Eventi Speciali",
      cta: "Richiedi un Preventivo Gratuito",
    },
    services: {
      title: "I Nostri Servizi",
      christmas: {
        title: "Illuminazioni Natalizie",
        description: "Trasforma il tuo spazio con magiche illuminazioni natalizie che catturano lo spirito della stagione.",
      },
      wedding: {
        title: "Illuminazioni per Matrimoni",
        description: "Crea atmosfere romantiche indimenticabili con illuminazioni eleganti progettate per il tuo giorno speciale.",
      },
      event: {
        title: "Illuminazioni per Eventi",
        description: "Eleva ogni celebrazione con illuminazioni professionali che creano l'atmosfera perfetta.",
      },
      custom: {
        title: "Installazioni Personalizzate",
        description: "Soluzioni di illuminazione su misura per la tua visione unica e le tue esigenze.",
      },
    },
    gallery: {
      title: "La Nostra Galleria",
      categories: {
        all: "Tutto",
        christmas: "Natale",
        weddings: "Matrimoni",
        events: "Eventi",
        street: "Decorazioni Stradali",
      },
    },
    projects: {
      title: "Progetti in Evidenza",
      viewProject: "Vedi Progetto",
    },
    about: {
      title: "Chi è LuminArte",
      description: "LuminArte è specializzata in installazioni luminose creative che trasformano gli spazi in esperienze indimenticabili. Il nostro team combina design, tecnologia e creatività per illuminare matrimoni, città ed eventi speciali. Con anni di esperienza e una passione per l'eccellenza, diamo luce alla tua visione.",
    },
    contact: {
      title: "Contattaci",
      subtitle: "Parliamo del tuo prossimo progetto",
      form: {
        name: "Il Tuo Nome",
        email: "Indirizzo Email",
        phone: "Numero di Telefono",
        eventType: "Tipo di Evento",
        message: "Il Tuo Messaggio",
        submit: "Invia Messaggio",
        eventTypes: {
          wedding: "Matrimonio",
          christmas: "Decorazione Natalizia",
          event: "Evento Speciale",
          custom: "Installazione Personalizzata",
        },
      },
      info: {
        phone: "Telefono",
        location: "Posizione",
        followUs: "Seguici",
      },
    },
    cta: {
      title: "Illuminiamo il Tuo Evento",
      button: "Contattaci",
    },
    footer: {
      quickLinks: "Link Rapidi",
      contactInfo: "Info Contatto",
      followUs: "Seguici",
      copyright: "Tutti i diritti riservati.",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
