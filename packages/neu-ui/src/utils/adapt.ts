import type { NeuTheme } from '../types/theme'

/**
 * Flatten an app-config shaped theme (`{ button: { slots: { base } } }`)
 * into the shape used by the `ui` prop and `<UTheme>` (`{ button: { base } }`).
 *
 * Variants cannot be expressed through the `ui` prop, so they are dropped:
 * use the Vite plugin or `<NeuProvider>` for the full theme.
 */
export function toComponentUi(theme: NeuTheme): Record<string, Record<string, unknown>> {
  const result: Record<string, Record<string, unknown>> = {}

  for (const [key, value] of Object.entries(theme)) {
    if (!value || typeof value !== 'object') continue
    const component = value as { slots?: Record<string, unknown>, base?: unknown }
    if (component.slots) {
      result[key] = component.slots
    } else if (component.base) {
      result[key] = { base: component.base }
    }
  }

  return result
}
