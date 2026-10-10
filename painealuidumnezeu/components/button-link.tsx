import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

export function ButtonLink({ href, children, variant = 'solid', className = '' }: Props) {
  const styles =
    variant === 'solid'
      ? 'bg-gold text-espresso shadow-lg shadow-gold/20 hover:bg-gold-dark hover:text-white'
      : 'border border-white/60 text-white hover:border-gold hover:bg-gold hover:text-espresso'
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 font-display text-sm uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </Link>
  )
}
