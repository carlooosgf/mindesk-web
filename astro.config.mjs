// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mindesk.es',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/mensaje-enviado'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    host: true
  }
});