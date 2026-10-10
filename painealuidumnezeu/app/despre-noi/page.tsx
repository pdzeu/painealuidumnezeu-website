import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, MessageCircle, Phone, PlayCircle } from 'lucide-react'
import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PhotoGallery } from '@/components/photo-gallery'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { aboutGallery, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Despre noi',
  description: 'O afacere de familie: o echipă din oameni buni și calzi ca Pâinea lui Dumnezeu.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="Despre noi" crumb="Despre noi" image="/images/hero-about.jpg" />

      <section className="texture py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-20 md:px-8">
          <Reveal className="relative isolate">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-crust/20">
              <Image src="/images/team.jpg" alt="Echipa Pâinea lui Dumnezeu" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -left-4 -top-4 -z-10 hidden h-full w-full rounded-2xl border-2 border-gold md:block" aria-hidden="true" />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading align="left" eyebrow="Echipa noastră" title="a tunat si ne-a adunat" />
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
              <p>Povestea noastră e simplă: ne-am dorit o afacere de familie din care să dăm energia noastră tuturor.</p>
              <p>Am făcut o echipă din oameni buni si calzi ca Painea Lui Dumnezeu.</p>
              <p>Am copt pâinea si am gustat-o cu cei care ne-au calcat pragul.</p>
              <p>De aici vă lăsăm pe voi sa povestiți mai departe.</p>
            </div>
            <p className="mt-6 font-script text-4xl text-gold-dark">Am încălecat pe-o șa...</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <PhotoGallery photos={aboutGallery} />
          </Reveal>
        </div>
      </section>

      <section className="texture-dark py-24 text-center md:py-32">
        <Reveal className="mx-auto max-w-3xl px-4">
          <PlayCircle className="mx-auto h-14 w-14 text-gold" strokeWidth={1.25} aria-hidden="true" />
          <SectionHeading tone="light" eyebrow="Urmărește" title="cum se face o pâine de la zero" className="mt-4" />
          <p className="mt-6 font-display text-lg uppercase tracking-[0.3em] text-white/60">( În curând )</p>
          <ButtonLink href="/meniu" className="mt-10">
            Descoperă meniul
          </ButtonLink>
        </Reveal>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          <InfoCard icon={<MapPin className="h-7 w-7" />}>
            {site.addresses.map((a, i) => (
              <a key={a.label} href={a.maps} target="_blank" rel="noopener noreferrer" className="block hover:text-gold-dark">
                {i + 1}. {a.label}
              </a>
            ))}
          </InfoCard>
          <InfoCard icon={<Phone className="h-7 w-7" />}>
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="block hover:text-gold-dark">
                {p.label}
              </a>
            ))}
          </InfoCard>
          <InfoCard icon={<Mail className="h-7 w-7" />}>
            <a href={`mailto:${site.email}`} className="break-all hover:text-gold-dark">
              {site.email}
            </a>
          </InfoCard>
          <InfoCard icon={<MessageCircle className="h-7 w-7" />}>
            <Link href="/contact" className="font-display uppercase tracking-[0.2em] text-gold-dark hover:text-espresso">
              Părerea ta →
            </Link>
          </InfoCard>
        </div>
      </section>
    </>
  )
}

function InfoCard({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Reveal className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-line">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark">{icon}</span>
      <div className="space-y-1 text-ink">{children}</div>
    </Reveal>
  )
}
