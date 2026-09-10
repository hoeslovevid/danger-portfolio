export type Project = {
  id: string
  name: string
  blurb: string
  language: string
  tags: string[]
  repo: string
  site?: string
  featured?: boolean
  accent?: 'signal' | 'steel' | 'ember'
}

export const projects: Project[] = [
  {
    id: 'everything-warframe',
    name: 'everything-warframe',
    blurb:
      'Warframe companion and transparent overlay (VoidLens) for Windows and Linux/Proton — worldstate, Baro, inventory sync, plus relic and riven OCR.',
    language: 'TypeScript',
    tags: ['Desktop', 'Overlay', 'OCR', 'Warframe'],
    repo: 'https://github.com/hoeslovevid/everything-warframe',
    site: 'https://hoeslovevid.github.io/Warframe-Companion-Helper/',
    featured: true,
    accent: 'signal',
  },
  {
    id: 'vesper-browser',
    name: 'vesper-browser',
    blurb:
      'Privacy-first Firefox fork with Zen-class chrome — vertical tabs, workspaces, split view, and hardened defaults out of the box.',
    language: 'JavaScript',
    tags: ['Browser', 'Privacy', 'Firefox'],
    repo: 'https://github.com/hoeslovevid/vesper-browser',
    site: 'https://hoeslovevid.github.io/vesper-browser/',
    featured: true,
    accent: 'steel',
  },
  {
    id: 'CowBot',
    name: 'CowBot',
    blurb:
      'Twitch chat bot for giveaways and gambling mechanics — built for live community streams.',
    language: 'Python',
    tags: ['Twitch', 'Bot', 'Community'],
    repo: 'https://github.com/hoeslovevid/CowBot',
    accent: 'ember',
  },
  {
    id: 'wfclanrecruit',
    name: 'wfclanrecruit',
    blurb:
      'Recruitment board for Warframe clans and alliances — match players with the right groups.',
    language: 'JavaScript',
    tags: ['Web', 'Warframe', 'Recruitment'],
    repo: 'https://github.com/hoeslovevid/wfclanrecruit',
  },
  {
    id: 'Tiles-R-Us',
    name: 'Tiles-R-Us',
    blurb:
      'Tile grader for Warframe Disruption and Survival missions — score layouts before you commit.',
    language: 'Python',
    tags: ['Tooling', 'Warframe', 'Grading'],
    repo: 'https://github.com/hoeslovevid/Tiles-R-Us',
  },
  {
    id: 'obsidian-clanbot',
    name: 'obsidian-clanbot',
    blurb:
      'Discord bot for the Obsidian Warframe clan — ops, roles, and clan workflows on Railway.',
    language: 'Python',
    tags: ['Discord', 'Bot', 'Railway'],
    repo: 'https://github.com/hoeslovevid/obsidian-clanbot',
  },
  {
    id: 'obsidian-clan-website',
    name: 'obsidian-clan-website',
    blurb:
      'Public-facing website for the Obsidian clan — identity, presence, and clan info.',
    language: 'CSS',
    tags: ['Web', 'Clan', 'Design'],
    repo: 'https://github.com/hoeslovevid/obsidian-clan-website',
  },
  {
    id: 'obsidian-overseer-website',
    name: 'obsidian-overseer-website',
    blurb:
      'Overseer dashboard site for Obsidian leadership — status and clan oversight surfaces.',
    language: 'HTML',
    tags: ['Web', 'Clan', 'Ops'],
    repo: 'https://github.com/hoeslovevid/obsidian-overseer-website',
  },
  {
    id: 'clan-events-website',
    name: 'clan-events-website',
    blurb:
      'Events site for clan activities — schedules, announcements, and community drops.',
    language: 'CSS',
    tags: ['Web', 'Events', 'Community'],
    repo: 'https://github.com/hoeslovevid/clan-events-website',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const gridProjects = projects.filter((p) => !p.featured)

export const skills = [
  { label: 'TypeScript / JS', detail: 'Desktop overlays, browsers, web apps' },
  { label: 'Python', detail: 'Bots, graders, automation' },
  { label: 'Systems UX', detail: 'Transparent overlays, OCR, live sync' },
  { label: 'Community platforms', detail: 'Twitch, Discord, clan tooling' },
  { label: 'Privacy tooling', detail: 'Hardened browser defaults' },
  { label: 'Deploy & ops', detail: 'Railway, static sites, GitHub Pages' },
]

export const profile = {
  name: 'Danger!',
  handle: 'hoeslovevid',
  github: 'https://github.com/hoeslovevid',
  tagline: 'Desktop systems, privacy browsers, and clan infrastructure.',
  about:
    'I build tools that sit close to the metal of community and play — transparent game overlays, privacy-first browsers, Twitch bots, and the Discord/web stack that keeps a Warframe clan running. Sharp engineering with a creative edge.',
}
