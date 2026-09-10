'use client'

const links = [
  { href: '#featured', label: 'Featured' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-block size-2.5 rotate-45 bg-danger shadow-[0_0_16px_color-mix(in_oklab,var(--color-danger)_50%,transparent)] transition-transform group-hover:scale-110"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-text md:text-xl">
            Danger<span className="text-danger">!</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute transition-colors hover:text-danger"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/hoeslovevid"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-danger transition-opacity hover:opacity-80"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
