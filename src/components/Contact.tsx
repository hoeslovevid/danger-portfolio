'use client'

import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--color-danger)_18%,transparent),transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-danger">Contact</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Find the code on GitHub.
          </h2>
          <p className="mt-5 max-w-xl text-mute md:text-lg">
            Open-source builds, experiments, and the repos behind overlays, browsers, and clan
            infrastructure.
          </p>

          <a
            href="https://github.com/hoeslovevid"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-danger px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
          >
            github.com/hoeslovevid
            <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
