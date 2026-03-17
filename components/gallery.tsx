"use client"

import { useLanguage } from "@/context/language-context"
import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Category = "all" | "christmas" | "weddings" | "events" | "custom"

interface GalleryItem {
  id: number
  src: string
  category: Category
  alt: string
}

const galleryItems: GalleryItem[] = [
  { 
    id: 1, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe2-ZdNJe0gopD3uZemzj6R9AprEWv3g8c.jpeg", 
    category: "christmas", 
    alt: "Illuminated Santa Claus display" 
  },
  { 
    id: 2, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe4-Xwt6eWjhLxKzvrabC65trbnBtvK5fL.jpeg", 
    category: "weddings", 
    alt: "Elegant courtyard wedding lighting" 
  },
  { 
    id: 3, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe5-Pw34NcmS6khjA8xPp0yAexyl3FbVuQ.jpeg", 
    category: "events", 
    alt: "Historic courtyard event lighting" 
  },
  { 
    id: 4, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe6-By0uGzHLwzCy12FaFYi5GmFiB4236U.jpeg", 
    category: "christmas", 
    alt: "Shopping center Christmas decorations" 
  },
  { 
    id: 5, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe7-MYlKC0UB4huoqX1SqKNrtVDrwh1ZvC.jpeg", 
    category: "christmas", 
    alt: "Commercial building Christmas lights" 
  },
  { 
    id: 6, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe8-Eff2r3ieG1GYr2rdQ6RBilAAP7ioRO.jpeg", 
    category: "events", 
    alt: "Beach venue night lighting" 
  },
  { 
    id: 7, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe9-RG0wxSi1UUu2ykAP6Id03RYB0GgADR.jpeg", 
    category: "custom", 
    alt: "Artistic purple LED ring installation" 
  },
  { 
    id: 8, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe10-89DdXvXG050FOq5adLt1P4l6UI2HBD.jpeg", 
    category: "christmas", 
    alt: "Building with icicle lights and snowflakes" 
  },
  { 
    id: 9, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe11-Gbaze74H4cUoIJ1GvRNstypcV5xIHH.jpeg", 
    category: "weddings", 
    alt: "LOVE sign light sculpture" 
  },
  { 
    id: 10, 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibe12-cZjpLoghgefJd7vbhbBs824I2HoHAX.jpeg", 
    category: "christmas", 
    alt: "Golden illuminated reindeer decoration" 
  },
]

export function Gallery() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
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

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t.gallery.categories.all },
    { key: "christmas", label: t.gallery.categories.christmas },
    { key: "weddings", label: t.gallery.categories.weddings },
    { key: "events", label: t.gallery.categories.events },
    { key: "custom", label: t.lang === "it" ? "Artistico" : "Artistic" },
  ]

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    )
    let newIndex
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    }
    setSelectedImage(filteredItems[newIndex])
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-foreground">
            {t.gallery.title}
          </h2>
        </div>

        {/* Category Filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm uppercase tracking-wider rounded-full border transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground/70 border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <button
                onClick={() => setSelectedImage(item)}
                className="group relative block w-full aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <span className="text-primary-foreground text-2xl">+</span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl w-full bg-background/95 backdrop-blur-lg border-border p-2 md:p-4" aria-describedby={undefined}>
          <VisuallyHidden>
            <DialogTitle>Gallery Image</DialogTitle>
          </VisuallyHidden>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 text-foreground hover:bg-foreground/10"
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateImage("prev")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-foreground/10"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateImage("next")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-foreground/10"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {selectedImage && (
              <div className="relative w-full aspect-[4/3] md:aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain rounded-lg"
                  quality={90}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
