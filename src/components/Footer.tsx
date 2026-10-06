import { Mail } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { BiLogoLinkedin } from 'react-icons/bi'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-line-soft py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div>
          <p className="font-display text-base text-ink">{site.name}</p>
          <p className="mt-0.5 text-sm text-muted">{site.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent-bright"
          >
            <SiGithub size={17} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent-bright"
          >
            <BiLogoLinkedin size={17} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="E-mail"
            className="text-muted transition-colors hover:text-accent-bright"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-5 md:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <p className="mt-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  )
}