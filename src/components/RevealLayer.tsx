import { useRef, useEffect } from 'react'

const SPOTLIGHT_R = 260

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  const imgRatio = img.naturalWidth / img.naturalHeight
  const canvasRatio = canvasW / canvasH

  let sx: number, sy: number, sw: number, sh: number

  if (imgRatio > canvasRatio) {
    sh = img.naturalHeight
    sw = img.naturalHeight * canvasRatio
    sx = (img.naturalWidth - sw) / 2
    sy = 0
  } else {
    sw = img.naturalWidth
    sh = img.naturalWidth / canvasRatio
    sx = 0
    sy = (img.naturalHeight - sh) / 2
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasW, canvasH)
}

export default function RevealLayer({ image }: { image: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const loadedRef = useRef(false)
  const mouseRef = useRef({ x: -999, y: -999 })
  const smoothRef = useRef({ x: -999, y: -999 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const img = new Image()
    img.src = image
    imgRef.current = img
    img.onload = () => {
      loadedRef.current = true
      draw()
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }
    resize()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [image])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) {
        mouseRef.current.x = t.clientX
        mouseRef.current.y = t.clientY
      }
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('touchmove', handleTouch, { passive: false })
    window.addEventListener('touchstart', handleTouch, { passive: false })

    const animate = () => {
      const s = smoothRef.current
      const m = mouseRef.current
      s.x += (m.x - s.x) * 0.1
      s.y += (m.y - s.y) * 0.1

      draw()
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('touchmove', handleTouch)
      window.removeEventListener('touchstart', handleTouch)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function draw() {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img || !loadedRef.current) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { x, y } = smoothRef.current
    const w = canvas.width
    const h = canvas.height

    ctx.clearRect(0, 0, w, h)
    drawImageCover(ctx, img, w, h)

    ctx.globalCompositeOperation = 'destination-in'

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.4, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)')
    gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)')
    gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'source-over'
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-30 pointer-events-none"
    />
  )
}
