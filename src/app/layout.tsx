import type { Metadata } from 'next'
import { IBM_Plex_Mono, Sora, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600'],
})

const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Danger! — Developer Portfolio',
  description:
    'Danger! — desktop systems, privacy browsers, and clan infrastructure by hoeslovevid.',
  metadataBase: new URL('https://hoeslovevid.github.io/danger-portfolio'),
  openGraph: {
    title: 'Danger! — Developer Portfolio',
    description:
      'Desktop systems, privacy browsers, and clan infrastructure by Danger! (hoeslovevid).',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${sora.variable} ${plex.variable}`}>
      <body className="min-h-svh bg-ink text-text antialiased">{children}</body>
    </html>
  )
}
