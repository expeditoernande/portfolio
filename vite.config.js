import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

const SITE = 'https://expeditoernande.com.br/'

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const seoBody = `
    <div class="seo-fallback" aria-hidden="true">
      <div role="heading" aria-level="1"><strong>${esc('Expedito Ernande — Desenvolvedor Full Stack')}</strong></div>
      <p>${esc(
        'Desenvolvedor Full Stack em São Paulo. Interfaces modernas e responsivas, APIs, checkout, pagamentos e integrações que fazem a venda acontecer.',
      )}</p>
      <h2>${esc('Projetos')}</h2>
      <ul>
        <li>GRAXA — landing de estúdio de design</li>
        <li>NULLVOID — loja de streetwear grunge</li>
        <li>ÉLAN Perfumes — landing de ecommerce de perfumes</li>
        <li>AURA Botânica — loja de sabonetes artesanais</li>
        <li>NØCT — loja de moda alternativa</li>
      </ul>
      <h2>${esc('Skills')}</h2>
      <p>${esc(
        'HTML, CSS, JavaScript, React, TypeScript, Next.js, Node.js, Express, Git, GitHub, Figma, Mercado Pago.',
      )}</p>
      <h2>${esc('Formação')}</h2>
      <p>${esc(
        'Análise e Desenvolvimento de Sistemas (graduação). HTML, CSS, JavaScript ES6, React, TypeScript e Next.js pela Origamid.',
      )}</p>
      <h2>${esc('Contato')}</h2>
      <p>${esc(
        'Disponível para novos projetos e oportunidades: expeditoernande@hotmail.com',
      )}</p>
    </div>`

function seoFallback() {
  return {
    name: 'seo-fallback',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const head = [
          html.includes('rel="canonical"')
            ? ''
            : `    <link rel="canonical" href="${SITE}" />\n`,
          '    <style>.seo-fallback{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}</style>\n',
        ].join('')

        return {
          html: html
            .replace('</head>', `${head}  </head>`)
            .replace('<div id="root"></div>', `<div id="root"></div>${seoBody}`),
          tags: [],
        }
      },
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), seoFallback()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
