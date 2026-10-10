'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { site } from '@/lib/site'

/**
 * Nu avem încă un backend pentru formular, așa că mesajul se deschide
 * în clientul de email al vizitatorului, gata de trimis către info@.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('nume') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('mesaj') ?? '')
    const subject = `Mesaj de pe site${name ? ` — ${name}` : ''}`
    const body = `${message}\n\n${name}\n${email}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-line bg-white px-5 py-3.5 text-ink placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="sr-only" htmlFor="nume">
        Nume Prenume
      </label>
      <input id="nume" name="nume" type="text" maxLength={256} placeholder="Nume Prenume" className={field} />
      <label className="sr-only" htmlFor="email">
        Adresă Email
      </label>
      <input id="email" name="email" type="email" required maxLength={256} placeholder="Adresă Email" className={field} />
      <label className="sr-only" htmlFor="mesaj">
        Mesajul tău
      </label>
      <textarea id="mesaj" name="mesaj" required rows={6} maxLength={5000} placeholder="Mesajul tău" className={`${field} sm:col-span-2`} />
      <div className="flex flex-col items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-full bg-gold px-10 py-3.5 font-display text-sm uppercase tracking-[0.2em] text-espresso shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-dark hover:text-white"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Trimite mesajul
        </button>
        {sent && (
          <p role="status" className="text-sm text-muted">
            Mulțumim! Dacă nu s-a deschis aplicația de email, scrie-ne direct la{' '}
            <a href={`mailto:${site.email}`} className="text-gold-dark underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
