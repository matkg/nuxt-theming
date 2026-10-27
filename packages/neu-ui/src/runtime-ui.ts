import { toComponentUi } from './utils/adapt'
import { neuTheme } from './skins/neumorphism/theme/index'
import { glassTheme } from './skins/glass/theme/index'


/**
 * Flattened `ui` prop shape for every built-in skin.
 * Useful to drive `<UTheme :ui="skinComponentUi.glass.button">` or the `ui` prop directly.
 */
export const skinComponentUi = {
  neumorphism: toComponentUi(neuTheme),
  glass: toComponentUi(glassTheme)
} as const

export type SkinComponentUi = typeof skinComponentUi

/**
 * Convenience helper: pick the flattened `ui` map for a skin.
 */
export function componentUiFor<K extends keyof typeof skinComponentUi>(skin: K): Record<string, Record<string, unknown>> {
  return skinComponentUi[skin]
}
