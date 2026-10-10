import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { menuSections, type MenuCategory, type MenuItem } from '@/lib/menu'

export const metadata: Metadata = {
  title: 'Meniu',
  description: 'Pâine cu maia, patiserie, cafea, mâncare, băuturi răcoritoare și vinuri — meniul Pâinea lui Dumnezeu.',
}

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

// Ancorele folosite în bara de navigare a meniului
const categories = menuSections.flatMap((section) =>
  section.categories.map((category, i) => ({
    category,
    layout: section.layout,
    id: section.layout === 'cards' ? slug(category.title) : i === 0 ? section.id : `${section.id}-${slug(category.title)}`,
  })),
)

const quickNav = [
  { id: 'paine', label: 'Pâine' },
  { id: 'patiserie', label: 'Patiserie' },
  { id: 'cafea', label: 'Cafea' },
  { id: 'mancare', label: 'Mâncare' },
  { id: 'racoritoare', label: 'Băuturi' },
  { id: 'vinuri', label: 'Vinuri' },
]

export default function MenuPage() {
  return (
    <>
      <PageHero title="Meniu" crumb="Meniu" image="/images/hero-menu.jpg" />

      <nav aria-label="Categorii meniu" className="sticky top-[68px] z-40 md:top-[62px] border-b border-line bg-flour/95 backdrop-blur">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 md:justify-center md:px-8">
          {quickNav.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="block rounded-full border border-line px-5 py-2 font-display text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-espresso"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {categories.map(({ category, layout, id }, index) => (
        <section key={id} id={id} className={`scroll-mt-32 py-20 md:py-24 ${index % 2 ? 'bg-cream' : 'texture'}`}>
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="Meniu" title={category.title} />
            </Reveal>
            {layout === 'cards' ? <CardGrid category={category} /> : <PriceList category={category} />}
          </div>
        </section>
      ))}

      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <Image src="/images/menu-bottom.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-espresso/45">
          <p className="font-script text-5xl text-white md:text-7xl">Poftă bună!</p>
        </div>
      </section>
    </>
  )
}

function CardGrid({ category }: { category: MenuCategory }) {
  return (
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {category.items.map((item, i) => (
        <Reveal key={item.name} delay={(i % 3) * 100}>
          <ProductCard item={item} />
        </Reveal>
      ))}
    </div>
  )
}

function PriceList({ category }: { category: MenuCategory }) {
  const long = category.items.some((i) => (i.description?.length ?? 0) > 120)
  return (
    <Reveal className={`mx-auto mt-14 grid gap-x-16 ${long ? 'max-w-4xl' : 'max-w-6xl md:grid-cols-2'}`}>
      {category.items.map((item, i) => (
        <PriceRow key={`${item.name}-${i}`} item={item} />
      ))}
    </Reveal>
  )
}

function PriceRow({ item }: { item: MenuItem }) {
  const meta = [item.weight, item.kcal && `${item.kcal} kcal`].filter(Boolean).join(' / ')
  return (
    <div className="border-b border-line py-6">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-lg font-medium uppercase tracking-wide text-espresso">{item.name}</h3>
        <span className="mb-1 flex-1 border-b border-dotted border-muted/40" />
        {item.price && <span className="shrink-0 font-display text-lg text-gold-dark">{item.price} RON</span>}
      </div>
      {item.description && <p className="mt-2 leading-relaxed text-muted">{item.description}</p>}
      {(meta || item.macros) && (
        <p className="mt-2 text-sm text-crust">
          {meta && <span className="font-display uppercase tracking-[0.15em]">{meta}</span>}
          {meta && item.macros && <span className="mx-2 text-line">|</span>}
          {item.macros}
        </p>
      )}
    </div>
  )
}
