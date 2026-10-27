import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { neuUI } from '../packages/neu-ui/src/vite'

const library = (path: string) => fileURLToPath(new URL(`../packages/neu-ui/${path}`, import.meta.url))

export default defineConfig({
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
      { find: '@neu-nuxt/ui/theme.css', replacement: library('src/theme.css') },
      { find: '@neu-nuxt/ui/vite', replacement: library('src/vite.ts') },
      { find: '@neu-nuxt/ui', replacement: library('src/index.ts') }
    ]
  }
})
