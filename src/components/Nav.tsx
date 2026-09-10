const links = [
  { href: '#about', label: 'About' },
  { href: '#featured', label: 'Featured' },
  { href: '#projects', label: 'Projects' },
  { href: '#connect', label: 'Connect' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-block size-2.5 rotate-45 bg-signal shadow-[0_0_12px_color-mix(in_oklab,var(--color-signal)_55%,transparent)] transition-transform group-hover:scale-110"
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-text md:text-xl">
            Danger<span className="text-signal">!</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/hoeslovevid"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal transition-opacity hover:opacity-80"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
