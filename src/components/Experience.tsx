import { GraduationCap, Briefcase } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionTitle } from './About'
import { site } from '../data/site'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-16 border-y border-line-soft bg-night-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <SectionTitle title={site.experienceTitle} />
        </Reveal>

        <div className="relative border-l border-line pl-7">
          {site.experience.map((item, index) => (
            <Reveal key={`${item.role}-${item.company}`} delay={index * 80}>
              <div className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[37px] top-1.5 grid size-4 place-items-center rounded-full border border-accent/60 bg-night"
                  aria-hidden
                >
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-base text-ink">{item.role}</h3>
                  <span className="text-sm text-accent-bright">· {item.company}</span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <Briefcase size={12} />
                  {item.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <SectionTitle title={site.educationTitle} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.education.map((item, index) => (
            <Reveal key={item.course} delay={index * 80}>
              <div className="h-full rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/45">
                <GraduationCap size={20} className="text-accent-bright" />
                <h3 className="mt-3 font-display text-[15px] leading-snug text-ink">
                  {item.course}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                  {item.institution && (
                    <span className="rounded-full border border-line px-2 py-0.5">
                      {item.institution}
                    </span>
                  )}
                  <span className="rounded-full border border-line px-2 py-0.5">{item.period}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}