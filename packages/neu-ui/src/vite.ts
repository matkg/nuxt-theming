import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'
import ui from '@nuxt/ui/vite'
import { NEU_THEME_MARKER } from './constants'
import { deepMerge } from './merge'
import { neuTheme } from './theme/index'
import type { NeuUIOptions } from './theme/types'

/** Absolute path to the component theme sources shipped with this package. */
const themeDir = resolve(dirname(fileURLToPath(import.meta.url)), '../src/theme').replace(/\\/g, '/')

/**
 * Nuxt UI generates its CSS on the fly, so Tailwind must also scan this
 * package's theme files (they are inside `node_modules`, which Tailwind
 * ignores by default). `@source` paths inside imported CSS are resolved
 * relative to the entry stylesheet, so the safest option is to inject an
 * absolute path into the app's Tailwind entry.
 */
function neuSourcePlugin(): Plugin {
  return {
    name: 'neu-ui:source',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.css')) return
      if (!code.includes('@import "tailwindcss"') && !code.includes("@import 'tailwindcss'")) return

      return { code: `${code}\n@source "${themeDir}";\n`, map: null }
    }
  }
}

/**
 * Nuxt UI Vite plugin pre-configured with the neumorphic theme.
 * Everything Nuxt UI accepts (`prefix`, `theme`, `router`, `icon`, …)
 * still works.
 *
 * ```ts
 * // vite.config.ts
 * import vue from '@vitejs/plugin-vue'
 * import { neuUI } from '@neu-nuxt/ui/vite'
 *
 * export default defineConfig({
 *   plugins: [vue(), neuUI()]
 * })
 * ```
 */
export function neuUI(options: NeuUIOptions = {}) {
  const { ui: userUi, ...rest } = options
  const theme = deepMerge({ ...neuTheme, [NEU_THEME_MARKER]: true }, userUi)

  const factory = ui as unknown as (options?: Record<string, unknown>) => Plugin | Plugin[]
  const nuxtUiPlugins = factory({ ...rest, ui: theme })

  return [neuSourcePlugin(), ...(Array.isArray(nuxtUiPlugins) ? nuxtUiPlugins : [nuxtUiPlugins])]
}

export default neuUI
