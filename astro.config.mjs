// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Update with your actual domain
  site: 'https://your-domain.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});