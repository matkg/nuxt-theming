import { deepMerge } from './merge'
import type { Skin } from './types/skin'
import type { NeuTheme } from './types/theme'
import glass from './skins/glass'
import neumorphism from './skins/neumorphism'

/** All built-in skins, keyed by name. */
export const skins = {
  neumorphism,
  glass
} as const

export type BuiltInSkinName = keyof typeof skins

export { default as neumorphism } from './skins/neumorphism'
export { default as glass } from './skins/glass'

/** Look up a built-in skin by name. */
export function getSkin(name: string): Skin | undefined {
  return skins[name as BuiltInSkinName]
}

/** All built-in skins. */
export function listSkins(): Skin[] {
  return Object.values(skins)
}

/** Resolve a built-in skin, falling back to neumorphism. */
export function resolveSkin(skin?: string | Skin | NeuTheme): Skin {
  if (typeof skin === 'string') {
    return getSkin(skin) ?? neumorphism
  }
  if (skin && typeof skin === 'object' && 'name' in skin && 'theme' in skin) {
    return skin as Skin
  }
  return neumorphism
}

/**
 * Resolve the final theme for a skin plus optional user overrides.
 * The merge is user-over-preset; nested objects merge recursively.
 */
export function resolveSkinTheme(skin: Skin | string, overrides?: NeuTheme): NeuTheme {
  const preset = typeof skin === 'string' ? getSkin(skin) : skin
  if (!preset) {
    throw new Error(`Unknown skin "${typeof skin === 'string' ? skin : skin.name}"`)
  }
  return overrides ? deepMerge(structuredClone(preset.theme), overrides) : preset.theme
}
