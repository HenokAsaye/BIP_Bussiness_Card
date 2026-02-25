"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { ClassicCard, DarkCard, MinimalCard, PremiumCard } from "@/components/business-cards"

const CARD_VARIANTS = [
  { id: "classic", label: "Classic Cream" },
  { id: "dark", label: "Dark Edition" },
  { id: "minimal", label: "Minimal" },
  { id: "premium", label: "Premium Black" },
] as const

type CardId = (typeof CARD_VARIANTS)[number]["id"]

export default function Page() {
  const [activeCard, setActiveCard] = useState<CardId>("classic")
  const cardRef = useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = useState(false)

  const downloadCard = useCallback(
    async (format: "png" | "jpeg") => {
      if (!cardRef.current || downloading) return
      setDownloading(true)

      try {
        const html2canvas = (await import("html2canvas")).default
        const canvas = await html2canvas(cardRef.current, {
          scale: 3,
          backgroundColor: null,
          useCORS: true,
        })

        const link = document.createElement("a")
        link.href = canvas.toDataURL(`image/${format}`, 1.0)
        link.download = `the-self-bakery-card-${activeCard}.${format === "jpeg" ? "jpg" : format}`
        link.click()
      } catch (error) {
        console.error("Download failed:", error)
      } finally {
        setDownloading(false)
      }
    },
    [activeCard, downloading]
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Hero header */}
      <header className="px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 relative mx-auto mb-6">
            <Image
              src="/images/self-bakery-logo.jpeg"
              alt="The Self Bakery logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight text-balance">
            The Self Bakery
          </h1>
          <p className="text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mt-3 font-sans">
            From mix to mastery
          </p>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            International business card collection. Select a design and download in high resolution.
          </p>
        </div>
      </header>

      {/* Card selector */}
      <section className="px-6 pb-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {CARD_VARIANTS.map((card) => (
              <button
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                  activeCard === card.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-foreground/30"
                }`}
              >
                {card.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Card display */}
      <section className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <div
            ref={cardRef}
            className="transition-all duration-500"
          >
            {activeCard === "classic" && <ClassicCard />}
            {activeCard === "dark" && <DarkCard />}
            {activeCard === "minimal" && <MinimalCard />}
            {activeCard === "premium" && <PremiumCard />}
          </div>
        </div>
      </section>

      {/* Download actions */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => downloadCard("png")}
              disabled={downloading}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-sans font-medium hover:opacity-90 transition-all disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloading ? "Downloading..." : "Download PNG"}
            </button>
            <button
              onClick={() => downloadCard("jpeg")}
              disabled={downloading}
              className="flex items-center gap-2 px-6 py-3 bg-card text-foreground border border-border rounded-full text-sm font-sans font-medium hover:bg-secondary transition-all disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloading ? "Downloading..." : "Download JPG"}
            </button>
          </div>

          {/* Card info */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            International standard: 3.5" x 2" (90mm x 50mm) -- Print-ready at 300 DPI
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground font-sans">
            The Self Bakery -- From mix to mastery -- Amsterdam, Netherlands
          </p>
        </div>
      </footer>
    </main>
  )
}
