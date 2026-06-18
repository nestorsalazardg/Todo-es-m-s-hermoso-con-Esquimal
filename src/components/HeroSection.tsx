import { useState, useEffect } from 'react'
import RevealLayer from './RevealLayer'

const BG_IMAGE_1 = 'https://esquimal.mx/web/image/2039743-6621884e/imagen-sin-esquimal--xt.webp'
const BG_IMAGE_2 = 'https://esquimal.mx/web/image/2043436-2b7aa9e1/imagen-con-esquimal--xt.webp'

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window
    if (!isTouch) {
      setShowHint(false)
      return
    }
    const timer = setTimeout(() => setShowHint(false), 7000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', letterSpacing: '-0.02em', fontFamily: "'Inter', sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center md:justify-between p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <img
            src="https://esquimal.mx/web/image/website/2/logo/Web%20Esquimal?unique=3d50266"
            alt="Esquimal"
            className="h-8 sm:h-9 w-auto brightness-0 invert"
          />
        </div>
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          <a href="https://esquimal.mx/shop/category/recamara-2" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">Recámara</a>
          <a href="https://esquimal.mx/shop/category/decoracion-5" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">Decoración</a>
          <a href="https://esquimal.mx/shop/category/hogar-6" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">Hogar</a>
          <a href="https://esquimal.mx/shop/category/infantil-7" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">Infantil</a>
          <a href="https://esquimal.mx/shop/category/mascota-76" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">Mascota</a>
          <a href="https://esquimal.mx/shop?tags=53" className="text-white/80 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-white/20 hover:text-white transition-colors">Novedades</a>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed z-[99] md:hidden inset-0 top-16 bg-black/80 backdrop-blur-md flex flex-col items-center">
          <div className="flex-1 flex flex-col items-center justify-center gap-4 w-full px-6">
            <a href="https://esquimal.mx/shop/category/recamara-2" className="text-white text-lg font-medium w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all active:scale-95 text-center" onClick={() => setMobileOpen(false)}>Recámara</a>
            <a href="https://esquimal.mx/shop/category/decoracion-5" className="text-white/80 text-lg font-medium w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all active:scale-95 text-center" onClick={() => setMobileOpen(false)}>Decoración</a>
            <a href="https://esquimal.mx/shop/category/hogar-6" className="text-white/80 text-lg font-medium w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all active:scale-95 text-center" onClick={() => setMobileOpen(false)}>Hogar</a>
            <a href="https://esquimal.mx/shop/category/infantil-7" className="text-white/80 text-lg font-medium w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all active:scale-95 text-center" onClick={() => setMobileOpen(false)}>Infantil</a>
            <a href="https://esquimal.mx/shop/category/mascota-76" className="text-white/80 text-lg font-medium w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all active:scale-95 text-center" onClick={() => setMobileOpen(false)}>Mascota</a>
            <a href="https://esquimal.mx/shop?tags=53" className="text-white/80 text-lg font-medium w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all active:scale-95 text-center" onClick={() => setMobileOpen(false)}>Novedades</a>
          </div>
          <div className="pb-10">
            <button
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all active:scale-95"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {showHint && (
        <div className="fixed inset-0 z-[200] md:hidden flex items-center justify-center p-6 pointer-events-none">
          <div className="absolute inset-0 bg-black/70" />
          <div className="pointer-events-auto relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl hero-anim hero-fade">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://esquimal.mx/web/image/2013112-6e1d1bd3/esquimal-inspo-02.webp)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <div className="relative z-10 flex flex-col items-center text-center px-8 pt-16 pb-8">
              <button
                className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors"
                onClick={() => setShowHint(false)}
                aria-label="Cerrar"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-5 border border-white/30">
                <img
                  src="https://esquimal.mx/web/image/2039609-6a6bd72a/icono-desplazar.webp"
                  alt="Deslizar"
                  className="w-9 h-9 brightness-0 invert"
                />
              </div>
              <p className="text-white text-xl sm:text-2xl font-medium leading-snug">
                Desliza el dedo en la pantalla para descubrir
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
        <div className="absolute inset-0 hero-zoom">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG_IMAGE_1})`, zIndex: 10 }}
          />
          <RevealLayer image={BG_IMAGE_2} />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-between md:justify-center text-center px-5 pointer-events-none pt-32 pb-10 md:pt-0 md:pb-0" style={{ zIndex: 50 }}>
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
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://esquimal.mx"
              className="flex-1 md:flex-none md:w-auto md:mt-6 md:sm:mt-8 bg-[#2a3440] hover:bg-[#1f2833] text-white text-sm font-medium px-7 h-12 inline-flex items-center justify-center rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#2a3440]/30 pointer-events-auto hero-anim hero-fade"
              style={{ animationDelay: '0.85s' }}
            >
              Ir a la tienda
            </a>
            <button
              className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all active:scale-95 pointer-events-auto flex-shrink-0"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menú"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
