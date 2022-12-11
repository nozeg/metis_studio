import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), isoImport()],
  resolve: {
    alias: {
      $components: path.resolve('./src/components'),
    },
  },
};

export default config;
