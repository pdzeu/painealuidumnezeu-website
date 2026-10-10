type Props = {
  eyebrow?: string
  title: React.ReactNode
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  as?: 'h1' | 'h2'
  className?: string
}

export function SectionHeading({ eyebrow, title, align = 'center', tone = 'dark', as: Tag = 'h2', className = '' }: Props) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && <p className="font-script text-4xl leading-none text-gold md:text-5xl">{eyebrow}</p>}
      <Tag
        className={`mt-2 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-balance md:text-5xl ${
          tone === 'light' ? 'text-white' : 'text-espresso'
        }`}
      >
        {title}
      </Tag>
      <Divider className={`mt-5 ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex w-24 items-center gap-2 ${className}`}>
      <span className="h-px flex-1 bg-gold" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px flex-1 bg-gold" />
    </span>
  )
}
