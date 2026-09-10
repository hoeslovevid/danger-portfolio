export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-lg font-bold tracking-tight">
          Danger<span className="text-signal">!</span>
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
          © {year} · Built for the work ·{' '}
          <a
            href="https://github.com/hoeslovevid"
            target="_blank"
            rel="noreferrer"
            className="text-text transition-colors hover:text-signal"
          >
            @hoeslovevid
          </a>
        </p>
      </div>
    </footer>
  )
}
