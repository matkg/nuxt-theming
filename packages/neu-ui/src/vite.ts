import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'
import ui from '@nuxt/ui/vite'
import { NEU_THEME_MARKER } from './constants'
import { deepMerge } from './merge'
import type { Skin } from './types/skin'
import type { NeuTheme } from './types/theme'
import { resolveSkin, skins } from './registry'

/** Absolute path to this package's `src` directory (works from src and dist). */
const packageSrc = resolve(dirname(fileURLToPath(import.meta.url)), '../src').replaceAll('\\', '/')

export interface NeuUIOptions extends Record<string, unknown> {
  /** Skin preset: a built-in name, a `Skin` object, or a theme to merge. */
  skin?: string | Skin | NeuTheme
  /** Theme overrides applied on top of the skin. */
  ui?: NeuTheme
}

/**
 * Nuxt UI Vite plugin pre-configured with a skin preset.
 *
 * ```ts
 * // vite.config.ts
 * import vue from '@vitejs/plugin-vue'
 * import { skin } from '@neu-nuxt/ui/vite'
 *
 * export default defineConfig({
 *   plugins: [vue(), skin('glass')]
 * })
 * ```
 */
export function skin(
  nameOrSkin: string | Skin | ({ skin?: NeuUIOptions['skin'] } & NeuUIOptions) = {}
): (Plugin | Plugin[])[] {
  const options: NeuUIOptions = typeof nameOrSkin === 'string'
    ? { skin: nameOrSkin }
    : (nameOrSkin && 'skin' in nameOrSkin ? nameOrSkin : { skin: nameOrSkin })

  const { skin: skinOption, ui: userUi, ...rest } = options
  const preset = resolveSkin(skinOption)
  const theme = deepMerge({ ...preset.theme, [NEU_THEME_MARKER]: preset.name }, userUi)

  const factory = ui as unknown as (options?: Record<string, unknown>) => Plugin | Plugin[]
  const nuxtUiPlugins = factory({ ...rest, ui: theme })

  /**
   * Tailwind must scan the skin theme sources (they live in `node_modules`,
   * which Tailwind ignores by default). `@source` paths inside imported CSS are
   * resolved against the entry stylesheet, so injecting absolute paths into the
   * app's Tailwind entry is the reliable option. All built-in skins are scanned
   * so runtime switching works without a restart.
   */
  const sourceDirs = Object.keys(skins).map(name => `${packageSrc}/skins/${name}`)

  const sourcePlugin: Plugin = {
    name: 'neu-ui:source',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.css')) return
      const importsTailwind = code.includes('@import "tailwindcss"') || code.includes("@import 'tailwindcss'")
      if (!importsTailwind) return

      const sources = sourceDirs.map(dir => `@source "${dir}";`)
      return {
        code: [code, ...sources, ''].join('\n'),
        map: null
      }
    }
  }

  // Build-time: mark the document so the skin's scoped tokens apply.
  const htmlPlugin: Plugin = {
    name: 'neu-ui:skin-attr',
    transformIndexHtml(html) {
      if (preset.name === 'neumorphism') return html
      if (/<html[^>]*data-skin=/.test(html)) return html
      return html.replace(/<html([^>]*)>/, `<html$1 data-skin="${preset.name}">`)
    }
  }

  return [sourcePlugin, htmlPlugin, ...(Array.isArray(nuxtUiPlugins) ? nuxtUiPlugins : [nuxtUiPlugins])]
}

/** Backwards-compatible alias for `skin('neumorphism')`. */
export function neuUI(options: NeuUIOptions = {}) {
  return skin(options)
}

export { skins, resolveSkin, resolveSkinTheme, getSkin, listSkins } from './registry'
export type { Skin }
export default skin
