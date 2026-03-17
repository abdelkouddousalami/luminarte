"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl md:text-3xl font-semibold tracking-wide text-primary hover:text-primary/80 transition-colors"
            >
              LuminArte
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 text-sm">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 rounded transition-all duration-300 ${
                    language === "en"
                      ? "text-primary font-medium"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  EN
                </button>
                <span className="text-foreground/40">|</span>
                <button
                  onClick={() => setLanguage("it")}
                  className={`px-2 py-1 rounded transition-all duration-300 ${
                    language === "it"
                      ? "text-primary font-medium"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  IT
                </button>
              </div>

              {/* Mobile Hamburger */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground hover:text-primary transition-colors z-[60] relative"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "hsl(var(--background) / 0.97)" }}
      >
        {/* Backdrop blur layer */}
        <div className="absolute inset-0 backdrop-blur-xl" />

        {/* Decorative glow */}
        <div
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${
            isOpen ? "opacity-20" : "opacity-0"
          }`}
          style={{ background: "hsl(var(--primary) / 0.3)" }}
        />

        {/* Menu Content */}
        <div className="relative flex flex-col h-full px-6 py-4">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-semibold tracking-wide text-primary"
            >
              LuminArte
            </button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-border" />

          {/* Nav Links */}
          <nav className="flex flex-col justify-center flex-1 gap-2 mt-4">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`group flex items-center gap-4 py-4 text-left transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 60 + 100}ms` : "0ms" }}
              >
                {/* Index number */}
                <span className="text-xs text-primary/50 font-mono w-5 text-right shrink-0">
                  0{index + 1}
                </span>
                {/* Divider line */}
                <span className="h-px w-6 bg-primary/30 group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
                {/* Label */}
                <span className="text-3xl font-light uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors duration-300">
                  {link.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom: Language + decoration */}
          <div
            className={`pb-8 transition-all duration-500 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isOpen ? "480ms" : "0ms" }}
          >
            <div className="h-px w-full bg-border mb-6" />
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Language
              </span>
              <div className="flex items-center gap-1 text-sm">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                    language === "en"
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground/60 hover:text-foreground border border-border"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("it")}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                    language === "it"
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground/60 hover:text-foreground border border-border"
                  }`}
                >
                  IT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
