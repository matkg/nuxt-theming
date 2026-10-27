// `#imports` is a virtual module provided by the Nuxt UI Vite plugin.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - no types for the virtual module
import { useAppConfig } from '#imports'
import { NEU_THEME_MARKER } from './constants'
import { deepMerge } from './merge'
import { neuTheme, resolveNeuTheme } from './theme/index'
import type { NeuTheme } from './theme/types'

/**
 * Merge the neumorphic theme into Nuxt UI's reactive app config.
 *
 * This is what `<NeuProvider>` and the `NeuUI` Vue plugin use, so that
 * every `U*` / `Neu*` component rendered below them picks up the theme
 * without touching `vite.config.ts`.
 *
 * If the theme was already applied at build time through `neuUI()`, this
 * is a no-op unless an explicit `theme` is passed.
 */
export function applyNeuTheme(theme?: NeuTheme): Record<string, unknown> {
  const appConfig = useAppConfig() as { ui?: Record<string, unknown> }
  const existing = (appConfig.ui ?? {}) as Record<string, unknown>

  if (!theme && existing[NEU_THEME_MARKER]) {
    return existing
  }

  const override = theme ? resolveNeuTheme(theme) : neuTheme
  const merged = deepMerge(existing, override) as Record<string, unknown>
  merged[NEU_THEME_MARKER] = true
  appConfig.ui = merged

  return merged
}
