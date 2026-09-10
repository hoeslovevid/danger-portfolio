'use client'

import { featuredProjects, type Project } from '@/data/projects'
import { Reveal } from './Reveal'

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const n = String(index + 1).padStart(2, '0')
  const headline = project.title ?? project.name

  return (
    <Reveal delay={index * 0.08}>
      <article className="group glass relative overflow-hidden p-6 md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-danger/10 blur-3xl transition-opacity group-hover:opacity-100"
        />

        <div className="flex flex-wrap items-start justify-between gap-4">
          <span className="font-display text-5xl font-semibold tracking-tight text-danger/90 md:text-6xl">
            {n}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
            {project.language}
          </span>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-2xl font-bold tracking-tight text-text transition-colors group-hover:text-danger md:text-3xl">
            {headline}
          </h3>
          {project.title && (
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
              {project.name}
            </p>
          )}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute md:text-base">
            {project.blurb}
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mute"
            >
              {tag}
            </li>
          ))}
          {project.tech?.map((t) => (
            <li
              key={t}
              className="border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mute"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
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
              className="inline-flex items-center border border-white/15 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text transition-colors hover:border-danger hover:text-danger"
            >
              Live site ↗
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export function Featured() {
  return (
    <section id="featured" className="relative border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-danger">Featured</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Deep work
            </h2>
            <p className="max-w-xs font-mono text-[12px] leading-relaxed text-mute md:text-right">
              VoidLens, Vesper, and CowBot — the flagship three.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-1 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
