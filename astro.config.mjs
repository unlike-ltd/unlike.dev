import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://unlike.dev',
  integrations: [sitemap(), tailwind()],
})
