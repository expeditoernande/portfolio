import { ArrowDown, MessageCircle } from 'lucide-react'
import { site } from '../data/site'

const initials = site.name
  .split(' ')
  .map((part) => part[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-16"
      style={{
        background:
          'radial-gradient(60rem 34rem at 78% 22%, rgba(124,58,237,0.16), transparent 60%), radial-gradient(40rem 26rem at 12% 86%, rgba(139,92,246,0.1), transparent 60%)',
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28">
        <div className="animate-[fade-up_0.8s_ease-out_both]">
          <p className="text-[13px] font-medium uppercase tracking-label text-accent-bright">
            {site.heroKicker}
          </p>

          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            {site.name.split(' ')[0]}
            <br />
            <span className="text-sheen">{site.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="mt-5 font-display text-lg text-accent md:text-xl">{site.role}</p>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
            {site.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-night transition-all hover:bg-accent-bright hover:-translate-y-0.5"
            >
              Ver projetos
              <ArrowDown size={15} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-6 py-3 text-sm font-medium text-accent-bright transition-all hover:border-accent hover:bg-accent/10 hover:-translate-y-0.5"
            >
              Entre em contato
              <MessageCircle size={15} />
            </a>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center py-8 lg:w-auto">
          <div className="relative size-44 md:size-52">
            {site.photo ? (
              <img
                src={site.photo}
                alt={site.name}
                className="size-full rounded-[1.75rem] object-cover ring-1 ring-white/10"
              />
            ) : (
              <div className="relative size-full rounded-[1.75rem] bg-[conic-gradient(from_210deg,#a855f7,#3b0764,#4c1d95,#a855f7)] p-[1.5px] shadow-[0_18px_50px_-18px_rgba(124,58,237,0.5)] md:size-52">
                <div className="grid size-full place-items-center rounded-[calc(1.75rem-1.5px)] bg-night/85">
                  <span className="font-display text-6xl font-medium tracking-tight text-sheen md:text-7xl">
                    {initials}
                  </span>
                </div>
                <span
                  className="absolute inset-x-6 bottom-5 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                  aria-hidden
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}