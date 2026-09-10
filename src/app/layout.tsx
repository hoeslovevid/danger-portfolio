import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['400', '500', '600', '700'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
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
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-svh bg-ink font-sans text-text antialiased">{children}</body>
    </html>
  )
}
