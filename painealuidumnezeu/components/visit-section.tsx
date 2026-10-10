import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { hours, site } from '@/lib/site'

type Props = {
  title?: string
}

/** Adrese, telefon, program și hartă — folosit pe Acasă și pe Contact. */
export function VisitSection({ title = 'ușor de găsit (după miros sau waze)' }: Props) {
  return (
    <section className="texture py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-crust/10 ring-1 ring-line">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <MapPin className="h-9 w-9 text-gold" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-semibold uppercase leading-snug tracking-wide text-espresso md:text-3xl">
                {title}
              </h2>
              <ul className="mt-6 space-y-3">
                {site.addresses.map((a, i) => (
                  <li key={a.label}>
                    <a href={a.maps} target="_blank" rel="noopener noreferrer" className="text-ink transition-colors hover:text-gold-dark">
                      {i + 1}. {a.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 border-t border-line pt-6">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-ink hover:text-gold-dark">
                  <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                  {site.email}
                </a>
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="flex items-center gap-3 text-ink hover:text-gold-dark">
                    <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <iframe
              title="Harta — Șos. Gheorghe Ionescu Sisești 50"
              src={site.mapEmbed}
              className="h-72 w-full grayscale-[30%] md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="texture-dark relative rounded-2xl p-8 text-white shadow-xl md:p-10">
          <Clock className="h-9 w-9 text-gold" aria-hidden="true" />
          <p className="mt-4 font-script text-4xl text-gold">Te așteptăm</p>
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wide">Program</h2>
          <ul className="mt-6">
            {hours.map((row) => (
              <li key={row.day} className="flex items-center justify-between border-b border-white/10 py-3 last:border-0">
                <span className="text-white/80">{row.day}</span>
                <span className="font-display tracking-wider">{row.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
