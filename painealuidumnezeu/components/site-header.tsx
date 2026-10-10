'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { nav, site } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-espresso/95 py-3 shadow-lg shadow-black/20 backdrop-blur' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <Link href="/" aria-label="Pâinea lui Dumnezeu — acasă" className="shrink-0">
          <Image
            src="/images/logo-text.svg"
            alt="Pâinea lui Dumnezeu"
            width={220}
            height={40}
            priority
            className={`w-auto transition-all duration-300 ${solid ? 'h-8' : 'h-10'}`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigare principală">
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-display text-sm uppercase tracking-[0.2em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all ${
                  active ? 'text-gold after:w-full' : 'text-white/85 after:w-0 hover:text-white hover:after:w-full'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href={site.phones[0].href}
            className="flex items-center gap-2 rounded-full border border-gold/60 px-4 py-2 font-display text-sm tracking-wider text-gold transition-colors hover:bg-gold hover:text-espresso"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phones[0].label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-white md:hidden"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 md:hidden" aria-label="Navigare mobilă">
          <ul className="flex flex-col px-4 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 font-display text-lg uppercase tracking-[0.2em] ${
                    pathname === item.href ? 'text-gold' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex items-center gap-3 py-2 text-white/80">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
