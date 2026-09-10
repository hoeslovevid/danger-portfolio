'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  filterTags,
  projects,
  type FilterTag,
  type Project,
} from '@/data/projects'
import { Reveal } from './Reveal'

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35 }}
      className="glass group flex h-full flex-col p-5 md:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold tracking-tight text-text transition-colors group-hover:text-danger">
          {project.name}
        </h3>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
          {project.language}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{project.blurb}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-danger/25 bg-danger/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-danger"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-text transition-colors hover:border-danger hover:text-danger"
        >
          GitHub ↗
        </a>
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-danger/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-danger transition-colors hover:bg-danger hover:text-white"
          >
            Live ↗
          </a>
        )}
      </div>
    </motion.article>
  )
}

export function Work() {
  const [active, setActive] = useState<FilterTag | 'All'>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.tags.includes(active))
  }, [active])

  return (
    <section id="work" className="relative border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-danger">All work</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Projects
          </h2>
          <p className="mt-4 max-w-lg text-mute">
            Filter the full set — Warframe tooling, bots, web surfaces, and browser work. This
            portfolio repo is excluded.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <div
            role="tablist"
            aria-label="Filter projects by tag"
            className="flex flex-wrap gap-2"
          >
            {(['All', ...filterTags] as const).map((tag) => {
              const isActive = active === tag
              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tag)}
                  className={`border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? 'border-danger bg-danger text-white'
                      : 'border-white/15 text-mute hover:border-danger/60 hover:text-text'
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 font-mono text-sm text-mute">No projects for this filter.</p>
        )}
      </div>
    </section>
  )
}
