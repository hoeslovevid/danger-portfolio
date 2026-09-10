import { featuredProjects, type Project } from '../data/projects'
import { useInView } from '../hooks/useInView'

function accentClass(accent?: Project['accent']) {
  if (accent === 'steel') return 'text-steel'
  if (accent === 'ember') return 'text-ember'
  return 'text-signal'
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView<HTMLElement>()
  const n = String(index + 1).padStart(2, '0')

  return (
    <article
      ref={ref}
      className={`reveal group relative grid gap-8 border-t border-line py-12 md:grid-cols-[auto_1fr] md:gap-14 md:py-16 ${inView ? 'is-visible' : ''}`}
    >
      <div className="flex items-start gap-4 md:flex-col md:gap-2">
        <span className={`font-display text-5xl font-extrabold tracking-tighter md:text-7xl ${accentClass(project.accent)}`}>
          {n}
        </span>
        <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute md:mt-0">
          Featured
        </span>
      </div>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="font-display text-3xl font-bold tracking-tight text-text transition-colors group-hover:text-signal md:text-4xl">
            {project.name}
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
            {project.language}
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
          {project.blurb}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mute"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-text px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Repository ↗
          </a>
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text transition-colors hover:border-signal hover:text-signal"
            >
              Live site ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Featured() {
  return (
    <section id="featured" className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6 py-12 md:py-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">Featured</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Deep work
            </h2>
          </div>
          <p className="hidden max-w-xs text-right font-mono text-[12px] leading-relaxed text-mute md:block">
            Flagship builds — overlays, OCR, and a privacy browser fork.
          </p>
        </div>

        <div>
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
