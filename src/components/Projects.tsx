import { ArrowUpRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Reveal } from './Reveal'
import { SectionTitle } from './About'
import { site } from '../data/site'

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionTitle title={site.projectsTitle} />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(124,58,237,0.4)]">
                <div className="relative m-3 mb-0 h-48 overflow-hidden rounded-xl bg-ink/5">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Captura de tela de ${project.name}`}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${project.preview}`}>
                      <span className="absolute inset-0 grid place-items-center">
                        <span className="font-display text-lg font-medium tracking-[0.3em] text-white/85">
                          {project.name.slice(0, 4).toUpperCase()}
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] uppercase tracking-label text-accent-bright">
                    {project.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-lg text-ink">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-night transition-colors hover:bg-accent-bright"
                    >
                      Ver projeto
                      <ArrowUpRight size={14} />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`GitHub de ${project.name}`}
                        className="inline-flex items-center justify-center rounded-full border border-line px-3.5 py-2 text-[13px] text-ink-soft transition-colors hover:border-accent/60 hover:text-accent-bright"
                      >
                        <SiGithub size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}