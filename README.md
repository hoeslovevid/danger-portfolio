# Danger! — Developer Portfolio

Personal portfolio for **Danger!** ([@hoeslovevid](https://github.com/hoeslovevid)) — desktop systems, privacy browsers, and clan infrastructure.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion

## IA

Hero → Featured (3) → All work (filterable) → About → Contact

Featured: `everything-warframe` (VoidLens), `vesper-browser`, `CowBot`. Full grid is filterable by **Warframe / Bots / Web / Browser**. This portfolio repo is not listed.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run build:pages` | Same build (use `GITHUB_PAGES=true` for static export + basePath) |
| `npm run lint` | ESLint |

### GitHub Pages static export

```bash
GITHUB_PAGES=true npm run build
```

Output lands in `out/`. Publish that folder (e.g. `npx gh-pages -d out`). Site:

`https://hoeslovevid.github.io/danger-portfolio/`

### Vercel

1. Import the repo in Vercel (Framework: Next.js).
2. Build: `npm run build` · Output: default.
3. Deploy — root path `/`.

## Content

Edit `src/data/projects.ts` to add or update projects, tags, and featured order.
