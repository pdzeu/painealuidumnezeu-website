import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: root,
  turbopack: { root },

  // Adresele vechi din Webflow, ca link-urile deja distribuite să meargă în continuare
  async redirects() {
    return [
      { source: '/meniu-first-page', destination: '/meniu', permanent: true },
      { source: '/meniu-mancare', destination: '/meniu#mancare', permanent: true },
      { source: '/meniu-racoritoare', destination: '/meniu#racoritoare', permanent: true },
      { source: '/meniu-vinuri', destination: '/meniu#vinuri', permanent: true },
      { source: '/menu-categories/:slug', destination: '/meniu#:slug', permanent: true },
      { source: '/:path(menu-classic|menu-list|menu-small-grid)', destination: '/meniu', permanent: true },
    ]
  },
}

export default nextConfig
