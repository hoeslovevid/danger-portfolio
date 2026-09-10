export type FilterTag = 'Warframe' | 'Bots' | 'Web' | 'Browser'

export type Project = {
  id: string
  name: string
  title?: string
  blurb: string
  language: string
  tags: FilterTag[]
  tech?: string[]
  repo: string
  site?: string
  featured?: boolean
  featuredOrder?: number
}

export const filterTags: FilterTag[] = ['Warframe', 'Bots', 'Web', 'Browser']

export const projects: Project[] = [
  {
    id: 'everything-warframe',
    name: 'everything-warframe',
    title: 'VoidLens',
    blurb: 'Warframe overlay for worldstate, Baro, inventory sync, relic scanning.',
    language: 'TypeScript',
    tags: ['Warframe'],
    tech: ['Desktop', 'Overlay', 'OCR'],
    repo: 'https://github.com/hoeslovevid/everything-warframe',
    // Live Pages site for this repo (Warframe-Companion-Helper path 404s)
    site: 'https://hoeslovevid.github.io/everything-warframe/',
    featured: true,
    featuredOrder: 1,
  },
  {
    id: 'vesper-browser',
    name: 'vesper-browser',
    title: 'Vesper',
    blurb: 'Privacy-first Firefox fork with Zen-class chrome.',
    language: 'JavaScript',
    tags: ['Browser'],
    tech: ['Privacy', 'Firefox'],
    repo: 'https://github.com/hoeslovevid/vesper-browser',
    site: 'https://hoeslovevid.github.io/vesper-browser/',
    featured: true,
    featuredOrder: 2,
  },
  {
    id: 'CowBot',
    name: 'CowBot',
    blurb: 'Twitch giveaway + gambling chat bot.',
    language: 'Python',
    tags: ['Bots'],
    tech: ['Twitch', 'Community'],
    repo: 'https://github.com/hoeslovevid/CowBot',
    featured: true,
    featuredOrder: 3,
  },
  {
    id: 'Tiles-R-Us',
    name: 'Tiles-R-Us',
    title: 'Tiles R Us',
    blurb: 'Disruption/Survival tile grader.',
    language: 'Python',
    tags: ['Warframe'],
    tech: ['Tooling', 'Grading'],
    repo: 'https://github.com/hoeslovevid/Tiles-R-Us',
  },
  {
    id: 'wfclanrecruit',
    name: 'wfclanrecruit',
    title: 'WF Clan Recruit',
    blurb: 'Clan/alliance recruitment board.',
    language: 'JavaScript',
    tags: ['Warframe', 'Web'],
    tech: ['Recruitment'],
    repo: 'https://github.com/hoeslovevid/wfclanrecruit',
  },
  {
    id: 'obsidian-clanbot',
    name: 'obsidian-clanbot',
    blurb: 'Discord bot for the Obsidian Warframe clan.',
    language: 'Python',
    tags: ['Warframe', 'Bots'],
    tech: ['Discord', 'Railway'],
    repo: 'https://github.com/hoeslovevid/obsidian-clanbot',
  },
  {
    id: 'obsidian-clan-website',
    name: 'obsidian-clan-website',
    blurb: 'Community stack — clan site.',
    language: 'CSS',
    tags: ['Web', 'Warframe'],
    tech: ['Clan', 'Design'],
    repo: 'https://github.com/hoeslovevid/obsidian-clan-website',
  },
  {
    id: 'obsidian-overseer-website',
    name: 'obsidian-overseer-website',
    blurb: 'Community stack — overseer.',
    language: 'HTML',
    tags: ['Web', 'Warframe'],
    tech: ['Clan', 'Ops'],
    repo: 'https://github.com/hoeslovevid/obsidian-overseer-website',
  },
  {
    id: 'clan-events-website',
    name: 'clan-events-website',
    blurb: 'Community stack — events.',
    language: 'CSS',
    tags: ['Web', 'Warframe'],
    tech: ['Events', 'Community'],
    repo: 'https://github.com/hoeslovevid/clan-events-website',
  },
]

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))

export const profile = {
  name: 'Danger!',
  handle: 'hoeslovevid',
  github: 'https://github.com/hoeslovevid',
  tagline: 'Desktop tools, community platforms, and automation.',
  about:
    'I build tools that sit close to the metal of community and play — transparent game overlays, privacy-first browsers, Twitch bots, and the Discord/web stack that keeps a Warframe clan running. Sharp engineering with a creative edge.',
}

export const skills = [
  { label: 'TypeScript / JS', detail: 'Desktop overlays, browsers, web apps' },
  { label: 'Python', detail: 'Bots, graders, automation' },
  { label: 'Systems UX', detail: 'Transparent overlays, OCR, live sync' },
  { label: 'Community platforms', detail: 'Twitch, Discord, clan tooling' },
  { label: 'Privacy tooling', detail: 'Hardened browser defaults' },
  { label: 'Deploy & ops', detail: 'Railway, static sites, GitHub Pages' },
]
