// @ts-check
import { defineConfig, envField } from 'astro/config';

import node from '@astrojs/node';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  env: {
    schema: {
      DIRECTUS_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      DIRECTUS_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      DIRECTUS_BUSINESS_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      DIRECTUS_FRESA_WINGS_BUSINESS_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
