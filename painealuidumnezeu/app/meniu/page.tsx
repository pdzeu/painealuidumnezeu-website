import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { Divider, SectionHeading } from '@/components/section-heading'
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

// Pagina e împărțită în două meniuri: bistro (mâncare, băuturi, vinuri) și brutărie (pâine, patiserie, cafea)
const menuGroups = [
  {
    id: 'bistro',
    label: 'Bistro',
    tagline: 'Mâncare, băuturi răcoritoare și vinuri',
    sections: ['mancare', 'racoritoare', 'vinuri'],
    nav: [
      { id: 'mancare', label: 'Mâncare' },
      { id: 'racoritoare', label: 'Băuturi' },
      { id: 'vinuri', label: 'Vinuri' },
    ],
  },
  {
    id: 'brutarie',
    label: 'Brutărie',
    tagline: 'Pâine cu maia, patiserie și cafea',
    sections: ['paine'],
    nav: [
      { id: 'paine', label: 'Pâine' },
      { id: 'patiserie', label: 'Patiserie' },
      { id: 'cafea', label: 'Cafea' },
    ],
  },
]

// Ancorele folosite în bara de navigare a meniului
const categoriesOf = (sectionIds: string[]) =>
  sectionIds
    .map((id) => menuSections.find((s) => s.id === id)!)
    .flatMap((section) =>
      section.categories.map((category, i) => ({
        category,
        layout: section.layout,
        id: section.layout === 'cards' ? slug(category.title) : i === 0 ? section.id : `${section.id}-${slug(category.title)}`,
      })),
    )

export default function MenuPage() {
  return (
    <>
      <PageHero title="Meniu" crumb="Meniu" image="/images/hero-menu.jpg" />

      <nav aria-label="Categorii meniu" className="sticky top-[68px] z-40 md:top-[62px] border-b border-line bg-flour/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-3 md:justify-center md:px-8">
          {menuGroups.map((group, g) => (
            <div key={group.id} className={`flex shrink-0 items-center gap-2 ${g ? 'border-l border-line pl-6' : ''}`}>
              <a href={`#${group.id}`} className="mr-1 font-script text-2xl leading-none text-gold-dark">
                {group.label}
              </a>
              <ul className="flex gap-2">
                {group.nav.map((item) => (
                  <li key={item.id} className="shrink-0">
                    <a
                      href={`#${item.id}`}
                      className="block rounded-full border border-line px-4 py-2 font-display text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-espresso"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {menuGroups.map((group) => (
        <div key={group.id}>
          <section id={group.id} className="texture-dark scroll-mt-32 py-12 md:py-14">
            <Reveal className="mx-auto max-w-7xl px-4 text-center md:px-8">
              <SectionHeading title={group.label} tone="light" />
              <p className="mt-5 font-display text-sm uppercase tracking-[0.2em] text-white/70">{group.tagline}</p>
            </Reveal>
          </section>

          {categoriesOf(group.sections).map(({ category, layout, id }, index) => (
            <section key={id} id={id} className={`scroll-mt-32 py-10 md:py-14 ${index % 2 ? 'bg-cream' : 'texture'}`}>
              <div className="mx-auto max-w-7xl px-4 md:px-8">
                <Reveal className="text-center">
                  <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-espresso md:text-3xl">
                    {category.title}
                  </h2>
                  {category.note && (
                    <p className="mt-2 font-display text-sm uppercase tracking-[0.2em] text-crust">{category.note}</p>
                  )}
                  <Divider className="mx-auto mt-3" />
                </Reveal>
                {layout === 'cards' ? <CardGrid category={category} /> : <PriceList category={category} />}
              </div>
            </section>
          ))}
        </div>
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
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
    <Reveal className={`mx-auto mt-6 grid gap-x-16 ${long ? 'max-w-4xl' : 'max-w-6xl md:grid-cols-2'}`}>
      {category.items.map((item, i) => (
        <PriceRow key={`${item.name}-${i}`} item={item} />
      ))}
    </Reveal>
  )
}

function PriceRow({ item }: { item: MenuItem }) {
  const meta = [item.weight, item.kcal && `${item.kcal} kcal`].filter(Boolean).join(' / ')
  return (
    <div className="border-b border-line py-4">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-lg font-medium uppercase tracking-wide text-espresso">{item.name}</h3>
        {item.badge && (
          <span className="shrink-0 self-center rounded-full bg-gold px-2.5 py-0.5 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-espresso">
            {item.badge}
          </span>
        )}
        <span className="mb-1 flex-1 border-b border-dotted border-muted/40" />
        {item.price && <span className="shrink-0 font-display text-lg text-gold-dark">{item.price} RON</span>}
      </div>
      {item.description && <p className="mt-1 whitespace-pre-line leading-snug text-muted">{item.description}</p>}
      {(meta || item.macros) && (
        <p className="mt-1 text-sm text-crust">
          {meta && <span className="font-display uppercase tracking-[0.15em]">{meta}</span>}
          {meta && item.macros && <span className="mx-2 text-line">|</span>}
          {item.macros}
        </p>
      )}
      {item.allergens && <p className="mt-0.5 text-xs italic text-muted">Alergeni: {item.allergens}</p>}
    </div>
  )
}
