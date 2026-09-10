'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_65%_10%,color-mix(in_oklab,var(--color-danger)_22%,transparent),transparent_55%),radial-gradient(ellipse_50%_45%_at_15%_85%,color-mix(in_oklab,#3a1018_80%,transparent),transparent_55%),linear-gradient(180deg,#050506_0%,#0a0a0c_50%,#050506_100%)]" />
        <div className="cinematic-grain absolute inset-0 opacity-[0.35]" />
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-danger/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.28em] text-danger"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Engineer · Builder · hoeslovevid
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-[clamp(4.25rem,17vw,10.5rem)] font-extrabold leading-[0.82] tracking-[-0.05em] text-text"
          initial={reduce ? false : { opacity: 0, y: 24, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '-0.05em' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Danger<span className="text-danger">!</span>
        </motion.h1>

        <div className="mt-8 flex max-w-2xl flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <motion.p
            className="text-lg leading-relaxed text-mute md:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Desktop systems, privacy browsers, and clan infrastructure — tools built for play,
            community, and control.
          </motion.p>

          <motion.div
            className="flex shrink-0 flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
