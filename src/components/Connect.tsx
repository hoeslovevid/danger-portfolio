import { useInView } from '../hooks/useInView'

export function Connect() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="connect" className="relative overflow-hidden border-t border-line py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-40 opacity-25" />
      </div>

      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-5 md:px-8 ${inView ? 'is-visible' : ''}`}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">Connect</p>
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
          className="mt-10 inline-flex items-center gap-3 bg-signal px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-transform hover:-translate-y-0.5"
        >
          github.com/hoeslovevid
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  )
}
