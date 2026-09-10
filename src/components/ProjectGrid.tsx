import { gridProjects, type Project } from '../data/projects'
import { useInView } from '../hooks/useInView'

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`reveal group grid gap-4 border-t border-line py-8 transition-colors hover:bg-ink-3/40 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] md:items-start md:gap-8 md:py-9 ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 40}ms` }}
    >
      <div>
        <h3 className="font-display text-xl font-bold tracking-tight text-text transition-colors group-hover:text-signal md:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
          {project.language}
        </p>
      </div>

      <div>
        <p className="max-w-xl text-sm leading-relaxed text-mute md:text-base">{project.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-line/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-mute"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 md:justify-end">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-text transition-colors hover:border-signal hover:text-signal"
        >
          GitHub ↗
        </a>
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-signal/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-ink"
          >
            Live ↗
          </a>
        )}
      </div>
    </article>
  )
}

export function ProjectGrid() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="projects" className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={ref} className={`reveal mb-10 md:mb-14 ${inView ? 'is-visible' : ''}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">Archive</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            All projects
          </h2>
          <p className="mt-4 max-w-lg text-mute">
            Bots, graders, clan sites, and recruitment tooling — the full stack around community and
            Warframe ops.
          </p>
        </div>

        <div className="border-b border-line">
          {gridProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
