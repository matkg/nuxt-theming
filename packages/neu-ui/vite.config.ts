import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2022',
    sourcemap: true,
    minify: false,
    cssCodeSplit: false,
    lib: {
      formats: ['es'],
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        vite: fileURLToPath(new URL('./src/vite.ts', import.meta.url)),
        chart: fileURLToPath(new URL('./src/chart.ts', import.meta.url))
      }
    },
    rollupOptions: {
      external: [
        'vue',
        '#imports',
        '#build/app.config',
        '@nuxt/ui',
        /^@nuxt\/ui\//,
        'tailwindcss',
        'node:url',
        'node:path'
      ]
    }
  }
})
