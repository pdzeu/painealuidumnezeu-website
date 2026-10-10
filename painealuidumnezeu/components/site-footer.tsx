import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialIcons } from '@/components/social-icons'
import { instagramPhotos, nav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="texture-dark text-white/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20 lg:grid-cols-[1.2fr_1fr_0.8fr_1.2fr]">
        <div>
          <Image src="/images/logo.svg" alt="Pâinea lui Dumnezeu" width={220} height={102} className="h-auto w-48" />
          <p className="mt-6 max-w-xs leading-relaxed">
            Coacem pâine cu maia și o dospim la rece, minim 24 de ore.
          </p>
          <SocialIcons className="mt-6" />
        </div>

        <div>
          <FooterTitle>Contact</FooterTitle>
          <ul className="space-y-4 text-sm">
            {site.addresses.map((a, i) => (
              <li key={a.label}>
                <a href={a.maps} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition-colors hover:text-gold">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {i + 1}. {a.label}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex gap-3 transition-colors hover:text-gold">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Navigație</FooterTitle>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Instagram</FooterTitle>
          <div className="grid grid-cols-3 gap-2">
            {instagramPhotos.map((src) => (
              <a
                key={src}
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded"
                aria-label="Vezi pe Instagram"
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 bg-espresso/0 transition-colors group-hover:bg-espresso/30" />
              </a>
            ))}
          </div>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-display text-sm uppercase tracking-[0.2em] text-gold hover:text-white"
          >
            Vezi mai mult →
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs uppercase tracking-[0.2em] text-white/50 sm:flex-row sm:justify-between md:px-8">
          <span>© {new Date().getFullYear()} Pâinea lui Dumnezeu</span>
          <span>Brutărie artizanală · București</span>
        </div>
      </div>
    </footer>
  )
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-6 font-display text-lg uppercase tracking-[0.2em] text-white">{children}</h3>
}
