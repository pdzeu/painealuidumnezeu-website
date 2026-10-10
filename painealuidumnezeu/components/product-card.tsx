import Image from 'next/image'
import type { MenuItem } from '@/lib/menu'

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-crust/10">
      <div className="relative aspect-square overflow-hidden bg-white">
        {item.image && (
          // Fotografiile produselor sunt pătrate, decupate pe fundal alb
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {item.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-espresso">
            {item.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-xl font-medium uppercase tracking-wide text-espresso">{item.name}</h3>
          <span className="mb-1 flex-1 border-b border-dotted border-line" />
          {item.price && <span className="font-display text-lg text-gold-dark">{item.price} RON</span>}
        </div>
        {item.description && <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{item.description}</p>}
        {item.weight && (
          <p className="mt-4 font-display text-sm uppercase tracking-[0.2em] text-crust">{item.weight}.</p>
        )}
      </div>
    </article>
  )
}
