import { profile, skills } from '../data/projects'
import { useInView } from '../hooks/useInView'

export function About() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section id="about" ref={ref} className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8">
        <div className={`reveal ${inView ? 'is-visible' : ''}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">About</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
            Sharp systems.
            <br />
            Creative edge.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
            {profile.about}
          </p>
        </div>

        <ul className="grid gap-0 sm:grid-cols-2">
          {skills.map((skill, i) => {
            const delay =
              i % 4 === 0
                ? 'reveal-delay-1'
                : i % 4 === 1
                  ? 'reveal-delay-2'
                  : i % 4 === 2
                    ? 'reveal-delay-3'
                    : 'reveal-delay-4'
            return (
              <li
                key={skill.label}
                className={`reveal ${delay} border-t border-line py-5 ${inView ? 'is-visible' : ''}`}
              >
                <p className="font-display text-lg font-semibold tracking-tight text-text">{skill.label}</p>
                <p className="mt-1.5 font-mono text-[12px] leading-relaxed text-mute">{skill.detail}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
