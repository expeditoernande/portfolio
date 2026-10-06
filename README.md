# expeditoernande.com.br

Meu portfólio pessoal. React + Vite + TypeScript, publicado na Vercel.

**→ [expeditoernande.com.br](https://expeditoernande.com.br/)**

## Projetos

Cinco projetos, cada um com link ao vivo:

| Projeto | Stack | Link |
|---|---|---|
| **GRAXA** | Next.js · Postgres | [graxa-estudio.vercel.app](https://graxa-estudio.vercel.app) |
| **NULLVOID** | Next.js · Postgres | [nullvoid-store.vercel.app](https://nullvoid-store.vercel.app) |
| **ÉLAN Perfumes** | Next.js | [elan-perfumes.vercel.app](https://elan-perfumes.vercel.app) |
| **AURA Botânica** | React · Node.js | [aura-store-green-delta.vercel.app](https://aura-store-green-delta.vercel.app) |
| **NØCT** | React · Node.js | [noct-store-iota.vercel.app](https://noct-store-iota.vercel.app) |

## Sobre este site

SPA com **fallback de SEO**: como todo o conteúdo é renderizado por JavaScript, um plugin do Vite injeta o texto real (nome, projetos, skills, contato) no HTML inicial, invisível para quem navega. Sem isso, o Google indexaria a página vazia.

Inclui `robots.txt`, `sitemap.xml` e as tags Open Graph para o card de link no WhatsApp.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # dist/
npm run typecheck
```

## Deploy

É automático: `git push` na `main` dispara o build na Vercel.

## Stack

React · Vite · TypeScript · Tailwind CSS 4
