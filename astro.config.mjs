// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsDir: 'assets'
    }
  },
  integrations: [react()],
  adapter: netlify(),
  publicDir: './src/assets'
});