"use client"

import Image from "next/image"

interface CardProps {
  className?: string
}

export function ClassicCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-[#faf6f0] flex flex-col justify-between p-8 relative overflow-hidden">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#c9a96e]" />

        {/* Logo and brand */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1614] tracking-tight leading-none">
              The Self Bakery
            </h1>
            <p className="text-xs text-[#8a7560] tracking-[0.25em] uppercase mt-2 font-sans">
              From mix to mastery
            </p>
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 relative flex-shrink-0">
            <Image
              src="/images/self-bakery-logo.jpeg"
              alt="The Self Bakery logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Contact details */}
        <div className="relative z-10">
          <div className="w-12 h-px bg-[#c9a96e] mb-4" />
          <p className="text-xs text-[#8a7560] font-sans uppercase tracking-wider mb-1">
            Master Baker
          </p>
          <p className="text-sm font-semibold text-[#1a1614] font-sans">
            Tatjana Todorovic
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <p className="text-xs text-[#6b5d4f] font-sans">info@theselfbakery.eu</p>
            <p className="text-xs text-[#6b5d4f] font-sans">+31 20 123 4567</p>
          </div>
          <p className="text-xs text-[#8a7560] font-sans mt-1">Amsterdam, Netherlands</p>
        </div>
      </div>
    </div>
  )
}

export function DarkCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-[#1a1614] flex relative overflow-hidden">
        {/* Left panel */}
        <div className="w-2/5 bg-[#c9a96e] p-6 md:p-8 flex flex-col justify-between relative">
          <div className="w-12 h-12 md:w-14 md:h-14 relative">
            <Image
              src="/images/self-bakery-logo.jpeg"
              alt="The Self Bakery logo"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div>
            <p className="text-xs text-[#1a1614]/70 font-sans uppercase tracking-wider">Est. 2024</p>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#faf6f0] leading-tight">
              The Self<br />Bakery
            </h1>
            <p className="text-xs text-[#c9a96e] tracking-[0.2em] uppercase mt-2 font-sans">
              From mix to mastery
            </p>
          </div>

          <div>
            <p className="text-xs text-[#c9a96e]/80 font-sans uppercase tracking-wider mb-1">
              Head of Operations
            </p>
            <p className="text-sm font-semibold text-[#faf6f0] font-sans">
              Nadezda Artamonova
            </p>
            <p className="text-xs text-[#faf6f0]/60 font-sans mt-2">
              info@theselfbakery.eu
            </p>
            <p className="text-xs text-[#faf6f0]/60 font-sans">
              +31 20 123 4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MinimalCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-[#faf6f0] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#c9a96e]" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#c9a96e]" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#c9a96e]" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#c9a96e]" />

        {/* Center content */}
        <div className="w-16 h-16 md:w-20 md:h-20 relative mb-4">
          <Image
            src="/images/self-bakery-logo.jpeg"
            alt="The Self Bakery logo"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1614] tracking-tight text-center">
          The Self Bakery
        </h1>
        <p className="text-xs text-[#c9a96e] tracking-[0.3em] uppercase mt-1 font-sans">
          From mix to mastery
        </p>

        <div className="w-10 h-px bg-[#c9a96e] my-3" />

        <p className="text-xs font-semibold text-[#1a1614] font-sans">Vibecky Leinonen</p>
        <p className="text-xs text-[#6b5d4f] font-sans mt-1">
          info@theselfbakery.eu | +31 20 123 4567
        </p>
        <p className="text-xs text-[#8a7560] font-sans">
          Amsterdam, NL
        </p>
      </div>
    </div>
  )
}

export function PremiumCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-[#1a1614] p-8 flex flex-col justify-between relative overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

        {/* Top */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#faf6f0] tracking-tight leading-none">
              The Self Bakery
            </h1>
            <p className="text-xs text-[#c9a96e] tracking-[0.25em] uppercase mt-2 font-sans">
              From mix to mastery
            </p>
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 relative flex-shrink-0 rounded-lg overflow-hidden border border-[#c9a96e]/30">
            <Image
              src="/images/self-bakery-logo.jpeg"
              alt="The Self Bakery logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <p className="text-xs text-[#c9a96e] font-sans uppercase tracking-[0.2em]">
              Creative Director
            </p>
          </div>
          <p className="text-sm font-semibold text-[#faf6f0] font-sans">
            Tobias Bosl
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <p className="text-xs text-[#faf6f0]/60 font-sans">info@theselfbakery.eu</p>
            <p className="text-xs text-[#faf6f0]/60 font-sans">+31 20 123 4567</p>
          </div>
          <p className="text-xs text-[#c9a96e]/60 font-sans mt-1">
            Amsterdam, Netherlands | Benelux & EU
          </p>
        </div>
      </div>
    </div>
  )
}
