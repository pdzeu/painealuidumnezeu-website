import Image from 'next/image'
import { ButtonLink } from '@/components/button-link'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-espresso px-4 text-center">
      <Image src="/images/hero-menu.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <div className="relative pt-24">
        <p className="font-script text-5xl text-gold">Ups!</p>
        <h1 className="mt-2 font-display text-6xl font-semibold uppercase tracking-wider text-white md:text-8xl">404</h1>
        <p className="mt-4 text-lg text-white/75">Pagina pe care o cauți nu există. Poate s-a terminat pâinea...</p>
        <ButtonLink href="/" className="mt-10">
          Înapoi acasă
        </ButtonLink>
      </div>
    </section>
  )
}
