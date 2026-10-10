import Image from 'next/image'
import { ChevronDown, Phone, Wheat } from 'lucide-react'
import { ButtonLink } from '@/components/button-link'
import { PhotoGallery } from '@/components/photo-gallery'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { Divider, SectionHeading } from '@/components/section-heading'
import { SocialIcons } from '@/components/social-icons'
import { VisitSection } from '@/components/visit-section'
import { breadItems, pastryItems } from '@/lib/menu'
import { homeGallery, site } from '@/lib/site'

const newInBakery = ['Chiflă burger', 'Campagne', 'Tomato & basil'].map((name) => breadItems.find((i) => i.name === name)!)

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* A fost odată ca niciodată... */}
      <section id="poveste" className="texture scroll-mt-20 py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl px-4 text-center">
          <Wheat className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
          <SectionHeading eyebrow="A fost odată ca niciodată..." title="descoperă din nou gustul pâinii" className="mt-4" />
          <p className="mt-8 text-lg leading-relaxed text-muted md:text-xl">
            Coacem pâine cu maia și o dospim la rece, minim 24 de ore.
            <br />
            Folosim ingrediente naturale, din import sau din România.
          </p>
          <ButtonLink href="/despre-noi" className="mt-10">
            Despre noi
          </ButtonLink>
        </Reveal>
      </section>

      {/* Produse noi */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Meniu" title="produse noi în brutărie" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newInBakery.map((item, i) => (
              <Reveal key={item.name} delay={i * 120}>
                <ProductCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <ButtonLink href="/meniu#paine">Descoperă meniul brutăriei</ButtonLink>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-4 md:space-y-32 md:px-8">
          <SideFeature
            image="/images/feature-1.jpg"
            title="bine faci, bine găsești."
            lines={[
              'Mâncarea va fi întotdeauna la fel de bună ca ingredientele din care este preparată.',
              'Folosim materii prime de calitate si nu vom facem compromisuri.',
            ]}
          />
          <SideFeature
            reversed
            image="/images/feature-2.jpg"
            title={
              <>
                cine se-aseamănă,
                <br />
                se-adună.
              </>
            }
            lines={[
              'Așa suntem noi, oameni plini de viață.',
              'Ne plac musafirii.',
              'Vei pleca cu zâmbetul pe buze din brutăria noastră.',
            ]}
          />
        </div>
      </section>

      {/* Patiserie */}
      <section className="texture py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Meniu" title="produse de patiserie" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastryItems.map((item, i) => (
              <Reveal key={item.name} delay={i * 120}>
                <ProductCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <ButtonLink href="/meniu#patiserie">Descoperă meniul patiseriei</ButtonLink>
          </div>
        </div>
      </section>

      {/* Proverb */}
      <section className="relative overflow-hidden py-32 md:py-44">
        <Image src="/images/team.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-espresso/65" />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center">
          <SectionHeading tone="light" eyebrow="Te așteptăm de luni până duminică" title="ochii care nu se văd se uită." />
        </Reveal>
      </section>

      {/* Vorba brutarului */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-20 md:px-8">
          <Reveal className="relative isolate">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-crust/20">
              <Image src="/images/baker.jpg" alt="Brutarul la lucru" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-2xl border-2 border-gold md:block" aria-hidden="true" />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              align="left"
              eyebrow="Vorba brutarului"
              title={
                <>
                  „cine se scoală de dimineață,
                  <br />
                  departe-ajunge”
                </>
              }
            />
            <p className="mt-8 text-lg leading-relaxed text-muted">
              Meseria de brutar nu ți-o alegi, te alege ea pe tine.
              <br />
              Este o meserie „cu chemare”.
              <br />
              Ne putem lăuda cu cei mai dedicați brutari din lume si nu ne poate contrazice nimeni.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <PhotoGallery photos={homeGallery} variant="mosaic" />
          </Reveal>
        </div>
      </section>

      <VisitSection />
    </>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-espresso">
      <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className="hero-zoom object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/85" />

      <div className="relative px-4 pb-24 pt-32 text-center">
        <Image
          src="/images/logo.svg"
          alt="Pâinea lui Dumnezeu"
          width={1431}
          height={666}
          priority
          className="mx-auto h-auto w-[min(80vw,520px)] drop-shadow-2xl"
        />
        <Divider className="mx-auto mt-8" />
        <p className="mt-6 font-display text-xl uppercase tracking-[0.35em] text-white md:text-2xl">Brutărie artizanală.</p>
        <p className="mt-2 font-script text-5xl text-gold md:text-6xl">Hai România!</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/meniu">Descoperă produsele</ButtonLink>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-8 md:px-8">
          <a href={site.phones[0].href} className="hidden items-center gap-3 text-white/85 hover:text-gold sm:flex">
            <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
            {site.phones.map((p) => p.label).join(' | ')}
          </a>
          <a
            href="#poveste"
            aria-label="Derulează în jos"
            className="mx-auto flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white/40 text-white hover:border-gold hover:text-gold sm:mx-0"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
          <SocialIcons className="hidden sm:flex" />
        </div>
      </div>
    </section>
  )
}

function SideFeature({
  image,
  title,
  lines,
  reversed = false,
}: {
  image: string
  title: React.ReactNode
  lines: string[]
  reversed?: boolean
}) {
  return (
    <div className={`flex flex-col items-center gap-0 md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-3/5">
        <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
      </Reveal>
      <Reveal
        delay={150}
        className={`texture relative -mt-16 w-[92%] rounded-2xl p-8 shadow-2xl shadow-crust/15 ring-1 ring-line md:mt-0 md:w-2/5 md:p-12 ${
          reversed ? 'md:-mr-16' : 'md:-ml-16'
        }`}
      >
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-espresso md:text-4xl">{title}</h2>
        <Divider className="mt-5" />
        <div className="mt-6 space-y-2 text-lg leading-relaxed text-muted">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
