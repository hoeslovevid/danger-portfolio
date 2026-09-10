'use client'

import { profile, skills } from '@/data/projects'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="relative border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-danger">About</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
            Sharp systems.
            <br />
            Creative edge.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
            {profile.about}
          </p>
        </Reveal>

        <ul className="grid gap-0 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <Reveal key={skill.label} delay={0.05 * i}>
              <li className="border-t border-white/10 py-5">
                <p className="font-display text-lg font-semibold tracking-tight text-text">
                  {skill.label}
                </p>
                <p className="mt-1.5 font-mono text-[12px] leading-relaxed text-mute">
                  {skill.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
