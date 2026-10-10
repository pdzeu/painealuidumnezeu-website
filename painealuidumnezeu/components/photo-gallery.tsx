'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

type Props = {
  photos: string[]
  /** "mosaic" = prima poză mare (acasă), "grid" = grilă uniformă (despre noi) */
  variant?: 'mosaic' | 'grid'
}

export function PhotoGallery({ photos, variant = 'grid' }: Props) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  const gridClass =
    variant === 'mosaic'
      ? 'grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4 md:h-[560px]'
      : 'grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4'

  return (
    <>
      <div className={gridClass}>
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-xl bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              variant === 'grid'
                ? 'aspect-square'
                : i === 0
                  ? 'col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto'
                  : 'aspect-square md:aspect-auto'
            }`}
            aria-label={`Deschide fotografia ${i + 1}`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes={variant === 'mosaic' && i === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors group-hover:bg-espresso/40">
              <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galerie foto"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button type="button" onClick={close} className="absolute right-4 top-4 p-2 text-white/80 hover:text-white" aria-label="Închide">
            <X className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className="absolute left-2 p-3 text-white/80 hover:text-white md:left-6"
            aria-label="Fotografia anterioară"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[active]} alt="" fill sizes="100vw" className="object-contain" />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className="absolute right-2 p-3 text-white/80 hover:text-white md:right-6"
            aria-label="Fotografia următoare"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <p className="absolute bottom-4 font-display text-sm tracking-[0.3em] text-white/60">
            {active + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  )
}
