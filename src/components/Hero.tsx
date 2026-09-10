export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      {/* Atmosphere — full-bleed plane */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_70%_15%,color-mix(in_oklab,var(--color-signal)_18%,transparent),transparent_55%),radial-gradient(ellipse_60%_50%_at_10%_80%,color-mix(in_oklab,var(--color-steel)_12%,transparent),transparent_50%),linear-gradient(180deg,var(--color-ink)_0%,var(--color-ink-2)_55%,var(--color-ink)_100%)]" />
        <div className="grid-noise absolute inset-0 opacity-70" />
        <div className="hazard-stripes animate-drift absolute -inset-20 opacity-40 mix-blend-screen" />
        <div className="scanline absolute inset-0 overflow-hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent animate-pulse-line" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="reveal is-visible reveal-delay-1 font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
          Engineer · Builder · hoeslovevid
        </p>

        <h1 className="animate-brand mt-5 font-display text-[clamp(4.5rem,18vw,11rem)] font-extrabold leading-[0.82] tracking-[-0.05em] text-text">
          Danger<span className="text-signal">!</span>
        </h1>

        <div className="mt-8 flex max-w-2xl flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="reveal is-visible reveal-delay-2 text-lg leading-relaxed text-mute md:text-xl">
            Desktop systems, privacy browsers, and clan infrastructure — tools built for play,
            community, and control.
          </p>

          <div className="reveal is-visible reveal-delay-3 flex shrink-0 flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center bg-signal px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="https://github.com/hoeslovevid"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text transition-colors hover:border-signal hover:text-signal"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
