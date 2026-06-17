import { useRef } from 'react'

const categories = [
  { name: 'Recámara', image: 'https://esquimal.mx/web/image/934008-c6eb7fbf/Rec%C3%A1mara-Esquimal-4.webp', href: 'https://esquimal.mx/shop/category/recamara-2' },
  { name: 'Decoración', image: 'https://esquimal.mx/web/image/934075-1493b707/Decoraci%C3%B3n-Esquimal-2025.webp', href: 'https://esquimal.mx/shop/category/decoracion-5' },
  { name: 'Hogar', image: 'https://esquimal.mx/web/image/930475-cbd4a63a/Hogar-Esquimal-2025-02.webp', href: 'https://esquimal.mx/shop/category/hogar-6' },
  { name: 'Infantil', image: 'https://esquimal.mx/web/image/934066-786fdace/Infantil-Esquimal-2025.webp', href: 'https://esquimal.mx/shop/category/infantil-7' },
  { name: 'Mascota', image: 'https://esquimal.mx/web/image/913855-e5044d0c/Mascota-Hero-2025.webp', href: 'https://esquimal.mx/shop/category/mascota-76' },
  { name: 'Novedades', image: 'https://esquimal.mx/web/image/1408570-4bc413e1/Novedades-destacadas.webp', href: 'https://esquimal.mx/shop?tags=53' },
]

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[0] as HTMLElement
    const w = (card?.offsetWidth ?? 280) + 16
    el.scrollBy({ left: dir === 'left' ? -w : w, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-black py-6 md:py-10">
      <div className="relative max-w-7xl mx-auto px-4">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group relative flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] h-[260px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-lg sm:text-xl font-medium">{cat.name}</h3>
              </div>
            </a>
          ))}
        </div>

        <button
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 items-center justify-center text-white hover:bg-white/25 transition-all"
          onClick={() => scroll('left')}
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 items-center justify-center text-white hover:bg-white/25 transition-all"
          onClick={() => scroll('right')}
          aria-label="Siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  )
}
