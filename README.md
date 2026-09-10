# Danger! — Developer Portfolio

Personal portfolio for **Danger!** ([@hoeslovevid](https://github.com/hoeslovevid)) — desktop systems, privacy browsers, and clan infrastructure.

Built with **Vite + React + TypeScript + Tailwind CSS**. Static export ready for GitHub Pages or Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Typecheck + production build → `dist/` |
| `npm run build:pages` | Production build with GitHub Pages base path (`/danger-portfolio/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Deploy

### Vercel

1. Import this repository in [Vercel](https://vercel.com).
2. Framework preset: **Vite** (defaults are fine).
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy. Root path `/` is used by default.

Optional: add `vercel.json` is already included for SPA-style routing (single page).

### GitHub Pages

1. Build with the Pages base path:

   ```bash
   npm run build:pages
   ```

2. Publish the `dist/` folder to the `gh-pages` branch (or configure **Settings → Pages** to deploy from GitHub Actions).

   Example with the `gh-pages` package:

   ```bash
   npx gh-pages -d dist
   ```

3. Site URL will be:

   `https://hoeslovevid.github.io/danger-portfolio/`

If the repository name changes, update `base` in `vite.config.ts` (the `GITHUB_PAGES` branch).

### Manual static host

```bash
npm run build
```

Upload the contents of `dist/` to any static host (Netlify, Cloudflare Pages, S3, etc.).

## Project structure

```
src/
  components/   # Hero, About, Featured, ProjectGrid, Connect, Footer, Nav
  data/         # Curated project + profile content
  hooks/        # Scroll reveal helper
  App.tsx
  index.css     # Design tokens + motion utilities
```

Project copy lives in `src/data/projects.ts` — edit there to add or update repos.

## Design notes

Dark-forward hazard aesthetic: charcoal ink, signal amber accent, Syne + Sora + IBM Plex Mono. Featured builds get deep editorial panels; the archive is a responsive project list with language tags and GitHub / live links.
