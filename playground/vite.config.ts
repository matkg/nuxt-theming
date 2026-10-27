import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { neuUI } from '../packages/neu-ui/src/vite'

const library = (path: string) => fileURLToPath(new URL(`../packages/neu-ui/${path}`, import.meta.url))

// GitHub Pages project sites are served from /<repository>/. Local builds keep `/`.
const pagesBase = process.env.GITHUB_PAGES === 'true'
  ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'nuxt-theming'}/`
  : '/'

export default defineConfig({
  base: pagesBase,
  plugins: [
    vue(),
    neuUI({
      colorMode: true
    })
  ],
  build: {
    chunkSizeWarningLimit: 3000
  },
  resolve: {
    // Use the library sources directly so the showcase does not need a build step.
    alias: [
      { find: '@neu-nuxt/ui/skins/glass.css', replacement: library('src/skins/glass/glass.css') },
      { find: '@neu-nuxt/ui/skins/neo-brutalism.css', replacement: library('src/skins/neo-brutalism/neo-brutalism.css') },
      { find: '@neu-nuxt/ui/skins/neumorphism.css', replacement: library('src/skins/neumorphism/neumorphism.css') },
      { find: '@neu-nuxt/ui/theme.css', replacement: library('src/skins/neumorphism/neumorphism.css') },
      { find: '@neu-nuxt/ui/vite', replacement: library('src/vite.ts') },
      { find: '@neu-nuxt/ui/skin', replacement: library('src/skin.ts') },
      { find: '@neu-nuxt/ui', replacement: library('src/index.ts') }
    ]
  }
})
