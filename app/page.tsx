'use client'

import { useState, useRef } from 'react'

export default function Page() {
  const [activeCard, setActiveCard] = useState('luxury')
  const cardRef = useRef(null)

  const downloadCard = async (format) => {
    if (!cardRef.current) return

    try {
      const html2canvas = (await import('html2canvas')).default
      
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
      })
      
      const link = document.createElement('a')
      link.href = canvas.toDataURL(`image/${format}`)
      link.download = `delices-business-card.${format}`
      link.click()
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-3">
            BIP Group 7
          </h1>
          <p className="text-xl text-foreground mb-2">
            DIY Baking Experience - Business Card Designs
          </p>
          <p className="text-muted-foreground">
            Standard size: 3.5" × 2" (90mm × 50mm) • Print-ready quality
          </p>
        </div>

        {/* Card Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-12">
          {[
            { id: 'luxury', label: 'Workshop Focus' },
            { id: 'modern', label: 'Modern DIY' },
            { id: 'artisan', label: 'Artisan Spirit' },
            { id: 'elegant', label: 'Premium Quality' },
          ].map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveCard(card.id)}
              className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeCard === card.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-white border-2 border-border text-foreground hover:border-primary hover:shadow-md'
              }`}
            >
              {card.label}
            </button>
          ))}
        </div>

        {/* Card Display Container */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl">
            {/* Download Buttons */}
            <div className="flex gap-3 justify-center mb-6">
              <button
                onClick={() => downloadCard('png')}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
              >
                ↓ Download PNG
              </button>
              <button
                onClick={() => downloadCard('jpeg')}
                className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
              >
                ↓ Download JPG
              </button>
            </div>

            {/* Cards Container */}
            <div ref={cardRef}>
              {/* Luxury Gold Card */}
              {activeCard === 'luxury' && (
                <div className="aspect-video rounded-xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-700 via-orange-600 to-amber-800 p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <div className="relative z-10">
                      <div className="flex items-baseline gap-2 mb-4">
                        <h1 className="text-5xl font-bold text-white">BIP Group 7</h1>
                      </div>
                      <p className="text-sm text-white/90 font-light">DIY Baking Kits & Workshops</p>
                      <p className="text-xs text-yellow-200 font-semibold mt-3 italic">✦ Empowering Home Bakers Across Europe ✦</p>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <p className="text-xs font-semibold text-white">Workshop Coordinator</p>
                      </div>
                      <p className="text-sm font-semibold text-white">Tatjana Todorovic</p>
                      <p className="text-xs text-white/80 mt-2">info@bipgroup7.eu • +31 20 123 4567</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Modern Minimal Card */}
              {activeCard === 'modern' && (
                <div className="aspect-video rounded-xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-white flex">
                    <div className="flex-1 bg-gradient-to-br from-primary to-orange-600 p-8 flex flex-col justify-between relative">
                      <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                      <div>
                        <h1 className="text-4xl font-bold text-white">BIP Group 7</h1>
                        <p className="text-sm text-white/90 mt-2">DIY Baking Made Simple</p>
                      </div>
                      <p className="text-xs text-white/80">Inspiring Home Bakers Since 2024</p>
                    </div>

                    <div className="flex-1 bg-white p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold mb-3">Business Development</p>
                        <p className="text-lg font-bold text-foreground">Nadezda Artamonova</p>
                      </div>
                      <div>
                        <p className="text-xs text-primary font-semibold mb-4">⸱ Create. Bake. Connect. ⸱</p>
                        <p className="text-xs text-primary font-medium">info@bipgroup7.eu</p>
                        <p className="text-xs text-foreground">+31 20 123 4567</p>
                        <p className="text-xs text-foreground">Benelux & Western EU</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Artisan Bold Card */}
              {activeCard === 'artisan' && (
                <div className="aspect-video rounded-xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary via-red-500 to-yellow-500 p-8 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute -top-16 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-black/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <p className="text-xs font-bold tracking-widest mb-3 text-white/80">EST. 2024</p>
                      <h1 className="text-6xl font-black mb-2 leading-none">BIP GROUP 7</h1>
                      <p className="text-sm font-light text-white/95">DIY Baking Revolution</p>
                      <p className="text-xs font-bold text-accent tracking-wide mt-3">CRAFT WITH CONFIDENCE • BAKE WITH PRIDE</p>
                    </div>

                    <div className="relative z-10">
                      <p className="text-xs font-bold text-white/80 mb-2">MARKETING SPECIALIST</p>
                      <p className="text-sm font-bold text-white mb-3">Vibecky Leinonen</p>
                      <p className="text-xs text-white/90">info@bipgroup7.eu</p>
                      <p className="text-xs text-white/90">+31 20 123 4567 • Benelux</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Elegant Serif Card */}
              {activeCard === 'elegant' && (
                <div className="aspect-video rounded-xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-white p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-transparent"></div>

                    <div>
                      <h1 className="text-5xl font-serif font-bold text-foreground mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                        BIP Group 7
                      </h1>
                      <p className="text-sm text-muted-foreground tracking-wide font-light">DIY BAKING EXPERIENCE</p>
                      <p className="text-xs text-primary font-serif mt-2 italic" style={{ fontFamily: 'Georgia, serif' }}>Where Tradition Meets Innovation</p>
                    </div>

                    <div className="space-y-3">
                      <div className="border-t border-primary/20 pt-4">
                        <p className="text-xs text-muted-foreground mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                          <em>Empowering home bakers with artisanal kits & workshops</em>
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">Tobias Bosl</p>
                        <p className="text-xs text-primary font-medium">info@bipgroup7.eu</p>
                        <p className="text-xs text-foreground">+31 20 123 4567 • Western Europe</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border-2 border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Product Highlights</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-foreground">Ready-measured artisanal baking kits</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-foreground">Educational workshops for all skill levels</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-foreground">Healthy options: gluten-free & allergen-friendly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-foreground">B2B solutions for schools, bakeries & hospitals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-foreground">Empowering families to bake together</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Core Values</h2>
            <ol className="space-y-3 text-foreground text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-primary">❤️</span>
                <span><strong>Family Connection:</strong> Creating moments that matter</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">✨</span>
                <span><strong>Creativity:</strong> Inspiring bakers to experiment & explore</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">📖</span>
                <span><strong>Historical Respect:</strong> Honoring traditional recipes</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">🎯</span>
                <span><strong>Quality:</strong> Premium ingredients, guaranteed results</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">🌍</span>
                <span><strong>Accessibility:</strong> Baking for everyone, everywhere</span>
              </li>
            </ol>
            <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
              💡 Vision: Expanding from Benelux to Western Europe
            </p>
          </div>
        </div>

        {/* Mission & Vision Showcase */}
        <div className="bg-white border-2 border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To provide high-quality DIY baking kits, educational workshops, and inspiring content that empower home bakers to create bakery-level bread with ease. We combine carefully selected ingredients, practical guidance, and authentic storytelling to make traditional baking accessible, meaningful, and enjoyable for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To inspire people to rediscover the joy of baking by empowering them to create meaningful moments for friends and family, refine their skills through hands-on workshops, and connect deeply with the rich stories behind every bread and ingredient. We enable customers to craft fresh, warm, bakery-quality bread at home — with confidence, creativity, and pride.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm font-semibold text-primary text-center">
              🍞 Unique Selling Proposition: Ready-measured artisanal baking kits that deliver guaranteed success and a joyful experience
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
