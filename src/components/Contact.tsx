import { useState, type FormEvent } from 'react'
import { Check, Mail, Send } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { BiLogoLinkedin } from 'react-icons/bi'
import { Reveal } from './Reveal'
import { site } from '../data/site'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`)
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-panel/70 px-4 py-3 text-sm text-ink placeholder:text-muted outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20'

  return (
    <section id="contato" className="scroll-mt-16 border-t border-line-soft py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
            {site.contactTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{site.contactBody}</p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-accent/60 hover:text-accent-bright"
            >
              <Mail size={15} />
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-accent/60 hover:text-accent-bright"
            >
              <SiGithub size={15} />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-accent/60 hover:text-accent-bright"
            >
              <BiLogoLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-2xl border border-line bg-panel/60 p-6 text-left md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} mt-4 resize-none`}
            />
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-night transition-colors hover:bg-accent-bright"
            >
              {sent ? (
                <>
                  <Check size={15} />
                  E-mail aberto — confira sua caixa de saída
                </>
              ) : (
                <>
                  <Send size={15} />
                  Enviar mensagem
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}