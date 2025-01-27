// vite.config.js
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import tailwindcss from "tailwindcss";

// Optionally load data from an external file or an API
import artData from './src/data.js';

export default defineConfig({
  plugins: [
    handlebars({
      // Directory where partials live
      partialDirectory: resolve(__dirname, 'src/partials'),

      // Optional: Provide data or helpers
      context: { artData },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  // You can tweak build output directory here if desired:
  build: {
    outDir: 'docs'
  },

  // For GitHub pages with a custom base path, you might need:
  // base: '/my-portfolio-site/',
});
