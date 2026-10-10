import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { VisitSection } from '@/components/visit-section'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Șos. Gheorghe Ionescu Sisești 50 și Strada Neagoe Vodă 56, București. 0722 80 70 40 · info@painealuidumnezeu.ro',
}

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" crumb="Contact" image="/images/hero-contact.jpg" />

      <section className="bg-cream py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="Contactează-ne" title="Contact" />
          <div className="mt-12 rounded-2xl bg-white p-6 shadow-xl shadow-crust/10 ring-1 ring-line md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </section>

      <VisitSection title="ușor de găsit" />
    </>
  )
}
