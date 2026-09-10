'use client'

import { profile } from '@/data/projects'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-center pb-16 pt-28 md:justify-end md:pb-24 md:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_65%_10%,color-mix(in_oklab,var(--color-danger)_22%,transparent),transparent_55%),radial-gradient(ellipse_50%_45%_at_15%_85%,color-mix(in_oklab,#3a1018_80%,transparent),transparent_55%),linear-gradient(180deg,#050506_0%,#0a0a0c_50%,#050506_100%)]" />
        <div className="cinematic-grain absolute inset-0 opacity-[0.35]" />
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-danger/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="hero-fade font-mono text-[11px] uppercase tracking-[0.28em] text-danger">
          Engineer · Builder · hoeslovevid
        </p>

        <h1 className="hero-title hero-fade hero-fade-delay-1 mt-5 max-w-full font-display font-bold text-text">
          Danger<span className="text-danger">!</span>
        </h1>

        <div className="mt-8 flex max-w-2xl flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="hero-fade hero-fade-delay-2 text-lg leading-relaxed text-mute md:text-xl">
            {profile.tagline}
          </p>

          <div className="hero-fade hero-fade-delay-3 flex shrink-0 flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center bg-danger px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-white/15 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text transition-colors hover:border-danger hover:text-danger"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
