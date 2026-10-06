import { Reveal } from './Reveal'
import { SectionTitle } from './About'
import { SKILL_ICONS } from './icons'
import { site } from '../data/site'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-y border-line-soft bg-night-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <SectionTitle title={site.skillsTitle} />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {site.skills.map((skill, index) => {
            const Icon = SKILL_ICONS[skill.icon]
            return (
              <Reveal key={skill.name} delay={index * 40}>
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-panel/60 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_30px_-8px_rgba(139,92,246,0.35)]">
                  {Icon ? (
                    <Icon
                      size={26}
                      className="text-muted transition-colors duration-300 group-hover:text-accent-bright"
                    />
                  ) : (
                    <span className="size-6 rounded-full bg-accent/30" aria-hidden />
                  )}
                  <span className="text-center text-[13px] text-ink-soft transition-colors group-hover:text-ink">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}