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
    blurb:
      'Warframe companion and transparent overlay for Windows and Linux/Proton — worldstate, Baro, inventory sync, relic and riven OCR.',
    language: 'TypeScript',
    tags: ['Warframe'],
    tech: ['Desktop', 'Overlay', 'OCR'],
    repo: 'https://github.com/hoeslovevid/everything-warframe',
    site: 'https://hoeslovevid.github.io/Warframe-Companion-Helper/',
    featured: true,
    featuredOrder: 1,
  },
  {
    id: 'vesper-browser',
    name: 'vesper-browser',
    blurb:
      'Privacy-first Firefox fork with Zen-class chrome — vertical tabs, workspaces, split view, and hardened defaults.',
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
    blurb:
      'Twitch giveaway and gambling chat bot built for live community streams.',
    language: 'Python',
    tags: ['Bots'],
    tech: ['Twitch', 'Community'],
    repo: 'https://github.com/hoeslovevid/CowBot',
    featured: true,
    featuredOrder: 3,
  },
  {
    id: 'wfclanrecruit',
    name: 'wfclanrecruit',
    blurb:
      'Recruitment board for Warframe clans and alliances — match players with the right groups.',
    language: 'JavaScript',
    tags: ['Warframe', 'Web'],
    tech: ['Recruitment'],
    repo: 'https://github.com/hoeslovevid/wfclanrecruit',
  },
  {
    id: 'Tiles-R-Us',
    name: 'Tiles-R-Us',
    blurb:
      'Tile grader for Warframe Disruption and Survival — score layouts before you commit.',
    language: 'Python',
    tags: ['Warframe'],
    tech: ['Tooling', 'Grading'],
    repo: 'https://github.com/hoeslovevid/Tiles-R-Us',
  },
  {
    id: 'obsidian-clanbot',
    name: 'obsidian-clanbot',
    blurb:
      'Discord bot for the Obsidian Warframe clan — ops, roles, and workflows on Railway.',
    language: 'Python',
    tags: ['Warframe', 'Bots'],
    tech: ['Discord', 'Railway'],
    repo: 'https://github.com/hoeslovevid/obsidian-clanbot',
  },
  {
    id: 'obsidian-clan-website',
    name: 'obsidian-clan-website',
    blurb:
      'Public-facing website for the Obsidian clan — identity, presence, and clan info.',
    language: 'CSS',
    tags: ['Web', 'Warframe'],
    tech: ['Clan', 'Design'],
    repo: 'https://github.com/hoeslovevid/obsidian-clan-website',
  },
  {
    id: 'obsidian-overseer-website',
    name: 'obsidian-overseer-website',
    blurb:
      'Overseer dashboard site for Obsidian leadership — status and clan oversight surfaces.',
    language: 'HTML',
    tags: ['Web', 'Warframe'],
    tech: ['Clan', 'Ops'],
    repo: 'https://github.com/hoeslovevid/obsidian-overseer-website',
  },
  {
    id: 'clan-events-website',
    name: 'clan-events-website',
    blurb:
      'Events site for clan activities — schedules, announcements, and community drops.',
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
  tagline: 'Desktop systems, privacy browsers, and clan infrastructure.',
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
