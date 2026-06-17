import { useState } from 'react'
import RevealLayer from './RevealLayer'

const BG_IMAGE_1 = 'https://esquimal.mx/web/image/2039595-8bc87ce3/imagen-sin-esquimal-26.webp'
const BG_IMAGE_2 = 'https://esquimal.mx/web/image/2039594-c52578d6/imagen-con-esquimall.webp'

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', letterSpacing: '-0.02em', fontFamily: "'Inter', sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <img
            src="https://esquimal.mx/web/image/website/2/logo/Web%20Esquimal?unique=3d50266"
            alt="Esquimal"
            className="h-8 sm:h-9 w-auto brightness-0 invert"
          />
        </div>
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          <a href="https://esquimal.mx/shop" className="text-white text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap">EDREDONES Y COBERTORES</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">SÁBANAS</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">VENTILADORES</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">ESQUIMALITO</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">MÁS</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Menú">
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed z-[99] md:hidden inset-0 top-16 bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 pt-8">
          <a href="https://esquimal.mx/shop" className="text-white text-lg font-medium px-6 py-3" onClick={() => setMobileOpen(false)}>EDREDONES Y COBERTORES</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-lg font-medium px-6 py-3" onClick={() => setMobileOpen(false)}>SÁBANAS</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-lg font-medium px-6 py-3" onClick={() => setMobileOpen(false)}>VENTILADORES</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-lg font-medium px-6 py-3" onClick={() => setMobileOpen(false)}>ESQUIMALITO</a>
          <a href="https://esquimal.mx/shop" className="text-white/80 text-lg font-medium px-6 py-3" onClick={() => setMobileOpen(false)}>MÁS</a>
        </div>
      )}

      <section className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat hero-zoom"
          style={{ backgroundImage: `url(${BG_IMAGE_1})`, zIndex: 10 }}
        />

        <RevealLayer image={BG_IMAGE_2} />

        <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none" style={{ zIndex: 50 }}>
          <h1 className="text-white leading-[0.95]">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-6xl md:text-7xl hero-anim hero-reveal"
              style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
            >
              Espacios más hermosos
            </span>
            <span
              className="block font-normal text-4xl sm:text-6xl md:text-7xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              con Esquimal
            </span>
          </h1>
          <p className="mt-6 sm:mt-8 max-w-[400px] sm:max-w-[500px] text-base sm:text-lg md:text-xl text-white/80 leading-relaxed hero-anim hero-fade" style={{ animationDelay: '0.7s' }}>
            Pasa de lo ordinario a lo extraordinario. Con Esquimal, transforma tu habitación en un espacio lleno de vida, estilo y el confort que mereces.
          </p>
          <a
            href="https://esquimal.mx"
            className="mt-6 sm:mt-8 bg-[#2a3440] hover:bg-[#1f2833] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#2a3440]/30 pointer-events-auto hero-anim hero-fade"
            style={{ animationDelay: '0.85s' }}
          >
            Comprar
          </a>
        </div>
      </section>
    </div>
  )
}
