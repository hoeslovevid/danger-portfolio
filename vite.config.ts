import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site needs a subpath; Vercel / local use root.
const base = process.env.GITHUB_PAGES === 'true' ? '/danger-portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
