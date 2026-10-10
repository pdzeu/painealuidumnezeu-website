import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Divider } from '@/components/section-heading'

type Props = {
  title: string
  image: string
  crumb: string
}

export function PageHero({ title, image, crumb }: Props) {
  return (
    <section className="relative flex min-h-[420px] items-end overflow-hidden bg-espresso md:min-h-[520px]">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/45 to-espresso/80" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 text-center md:px-8 md:pb-20">
        <h1 className="font-display text-5xl font-semibold uppercase tracking-wider text-white md:text-7xl">{title}</h1>
        <Divider className="mx-auto mt-5" />
        <nav aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm uppercase tracking-[0.2em] text-white/70">
          <Link href="/" className="transition-colors hover:text-gold">
            Acasă
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-gold">{crumb}</span>
        </nav>
      </div>
    </section>
  )
}
