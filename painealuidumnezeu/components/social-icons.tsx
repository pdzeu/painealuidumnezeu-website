import { site } from '@/lib/site'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.5h2.53l.38-2.93H13.5V8.7c0-.85.24-1.43 1.46-1.43h1.55V4.65a20.8 20.8 0 0 0-2.27-.12c-2.24 0-3.78 1.37-3.78 3.89v2.15H7.93v2.93h2.53V21h3.04Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function SocialIcons({ className = '' }: { className?: string }) {
  const link =
    'flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:bg-gold hover:text-espresso'
  return (
    <div className={`flex gap-3 ${className}`}>
      <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={link}>
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={link}>
        <InstagramIcon className="h-4 w-4" />
      </a>
    </div>
  )
}
