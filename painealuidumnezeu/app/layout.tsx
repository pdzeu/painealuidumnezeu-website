import type { Metadata, Viewport } from 'next'
import { Great_Vibes, Karla, Oswald } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const oswald = Oswald({ subsets: ['latin', 'latin-ext'], variable: '--font-oswald', weight: ['300', '400', '500', '600', '700'] })
const karla = Karla({ subsets: ['latin', 'latin-ext'], variable: '--font-karla' })
const greatVibes = Great_Vibes({ subsets: ['latin', 'latin-ext'], variable: '--font-great-vibes', weight: '400' })

export const metadata: Metadata = {
  metadataBase: new URL('https://painealuidumnezeu.ro'),
  title: {
    default: 'Pâinea lui Dumnezeu — Brutărie artizanală',
    template: '%s | Pâinea lui Dumnezeu',
  },
  description:
    'Brutărie artizanală. Coacem pâine cu maia și o dospim la rece, minim 24 de ore. Șos. Gheorghe Ionescu Sisești 50 și Strada Neagoe Vodă 56, București.',
  openGraph: {
    images: ['/images/hero.jpg'],
    locale: 'ro_RO',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e1915',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${oswald.variable} ${karla.variable} ${greatVibes.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
