import { useRef, useState, useEffect } from 'react'

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
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      const cx = el.scrollLeft + el.clientWidth / 2
      const cards = Array.from(el.children) as HTMLElement[]
      let closest = 0
      let min = Infinity
      cards.forEach((card, i) => {
        const cc = card.offsetLeft + card.offsetWidth / 2
        const d = Math.abs(cc - cx)
        if (d < min) { min = d; closest = i }
      })
      setActiveIndex(closest)
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    el.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => { el.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  const scrollTo = (i: number) => {
    const el = scrollRef.current
    const child = el?.children[i] as HTMLElement | undefined
    if (!el || !child) return
    el.scrollTo({ left: child.offsetLeft + child.offsetWidth / 2 - el.clientWidth / 2, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-white rounded-t-[2rem] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]" style={{ height: '35dvh' }}>
      <div className="h-full flex flex-col justify-center overflow-hidden px-4 sm:px-6">
        <div
          ref={scrollRef}
          className="flex items-center gap-5 sm:gap-7 md:gap-10 overflow-x-auto scrollbar-hide py-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {categories.map((cat, i) => {
            const active = i === activeIndex
            return (
              <a
                key={cat.name}
                href={cat.href}
                className="flex flex-col items-center gap-3 flex-shrink-0 transition-all duration-300 cursor-pointer"
                style={{
                  scrollSnapAlign: 'center',
                  transform: active ? 'scale(1)' : 'scale(0.78)',
                  opacity: active ? 1 : 0.45,
                }}
                onClick={(e) => {
                  if (i !== activeIndex) { e.preventDefault(); scrollTo(i) }
                }}
              >
                <div className="w-[88px] h-[88px] sm:w-[104px] sm:h-[104px] md:w-[116px] md:h-[116px] rounded-full overflow-hidden border-2 border-gray-100 shadow-md transition-all duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                </div>
                <span className={`text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300 ${active ? 'text-gray-900' : 'text-gray-400'}`}>
                  {cat.name}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
