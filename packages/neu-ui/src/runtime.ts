// @ts-ignore - `#imports` is a virtual module provided by Nuxt UI's Vite plugin
import { useAppConfig } from '#imports'
import { NEU_THEME_MARKER } from './constants'
import { deepMerge } from './merge'
import { getSkin, neumorphism } from './registry'
import type { Skin } from './types/skin'
import type { NeuTheme } from './types/theme'

function isSkin(value: unknown): value is Skin {
  return !!value && typeof value === 'object' && 'name' in value && 'theme' in value
}

/**
 * Apply a skin to Nuxt UI's reactive app config.
 *
 * - `applySkin()` applies neumorphism, unless a skin is already active.
 * - `applySkin('glass')` switches to a registered skin.
 * - `applySkin('glass', { colors: { primary: 'teal' } })` adds overrides.
 * - `applySkin({ button: { slots: { base: 'rounded-full' } } })` merges a theme
 *   onto the currently active skin.
 */
export function applySkin(skinOrTheme?: Skin | string | NeuTheme, overrides?: NeuTheme): Record<string, unknown> {
  const appConfig = useAppConfig() as { ui?: Record<string, unknown> }
  const existing = (appConfig.ui ?? {}) as Record<string, unknown>

  const active = typeof existing[NEU_THEME_MARKER] === 'string' ? existing[NEU_THEME_MARKER] as string : undefined
  if (active && typeof document !== 'undefined') {
    document.documentElement.dataset.skin = active
  }

  // Default application: do nothing if a skin was already applied (build-time).
  if (skinOrTheme === undefined) {
    if (existing[NEU_THEME_MARKER]) return existing

    const merged = deepMerge(existing, neumorphism.theme) as Record<string, unknown>
    merged[NEU_THEME_MARKER] = neumorphism.name
    appConfig.ui = merged
    return merged
  }

  const isTheme = !isSkin(skinOrTheme) && typeof skinOrTheme !== 'string'

  let preset: Skin
  let resolved: NeuTheme

  if (isTheme) {
    const current = typeof existing[NEU_THEME_MARKER] === 'string'
      ? getSkin(existing[NEU_THEME_MARKER] as string)
      : undefined
    preset = current ?? neumorphism
    resolved = deepMerge(structuredClone(preset.theme), skinOrTheme as NeuTheme)
  } else {
    preset = typeof skinOrTheme === 'string'
      ? (getSkin(skinOrTheme) ?? neumorphism)
      : skinOrTheme as Skin
    resolved = overrides ? deepMerge(structuredClone(preset.theme), overrides) : preset.theme
  }

  const merged = deepMerge(existing, resolved) as Record<string, unknown>
  merged[NEU_THEME_MARKER] = preset.name
  appConfig.ui = merged

  // Scoped skin stylesheets key off this attribute.
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.skin = preset.name
  }

  return merged
}

/** @deprecated Use `applySkin`. */
export const applyNeuTheme = applySkin
