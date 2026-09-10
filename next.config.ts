import type { NextConfig } from 'next'

const isPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: isPages ? 'export' : undefined,
  basePath: isPages ? '/danger-portfolio' : undefined,
  images: {
    unoptimized: isPages,
  },
}

export default nextConfig
