"use client"

import { useLanguage } from "@/context/language-context"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-3xl font-semibold text-primary mb-4 block"
            >
              LuminArte
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.about.description.slice(0, 150)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a
                    href="tel:+393383763401"
                    className="hover:text-primary transition-colors block"
                  >
                    +39 338 376 3401
                  </a>
                  <a
                    href="tel:+393349119327"
                    className="hover:text-primary transition-colors block"
                  >
                    +39 334 911 9327
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Ascoli Piceno, Italy
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">
              {t.footer.followUs}
            </h4>
            <a
              href="https://instagram.com/luminarte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-sm">@luminarte</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} LuminArte. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>in Italy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
