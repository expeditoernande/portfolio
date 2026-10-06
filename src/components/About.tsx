import { Reveal } from './Reveal'
import { site } from '../data/site'

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12 text-center">
      <span className="inline-block h-px w-10 bg-accent/70 align-middle" aria-hidden />
      <h2 className="mx-4 inline-block font-display text-2xl font-medium tracking-wide text-ink md:text-3xl">
        {title}
      </h2>
      <span className="inline-block h-px w-10 bg-accent/70 align-middle" aria-hidden />
    </div>
  )
}

export function About() {
  return (
    <section id="sobre" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <SectionTitle title={site.aboutTitle} />
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-4 text-center">
            {site.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mx-auto max-w-2xl leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {site.aboutCards.map((card) => (
              <div
                key={card}
                className="rounded-xl border border-line-soft bg-panel/60 px-4 py-5 text-center transition-colors hover:border-accent/45"
              >
                <span className="mx-auto mb-2 block size-1.5 rounded-full bg-accent" aria-hidden />
                <span className="text-sm text-ink-soft">{card}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}