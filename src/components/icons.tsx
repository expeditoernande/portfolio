import type { IconType } from 'react-icons'
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMercadopago,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

export const SKILL_ICONS: Record<string, IconType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  typescript: SiTypescript,
  next: SiNextdotjs,
  node: SiNodedotjs,
  express: SiExpress,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  mercadopago: SiMercadopago,
}