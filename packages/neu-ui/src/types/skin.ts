/**
 * Design preset for Nuxt UI: component theme overrides plus the design
 * tokens and surface utilities shipped in the corresponding CSS file.
 */
import type { NeuTheme } from '../types/theme'

export interface Skin {
  /** Public identifier, e.g. `'neumorphism'`. */
  name: string
  /** Human readable label. */
  label: string
  /** Component theme overrides, in Nuxt UI's `app.config.ui` shape. */
  theme: NeuTheme
  /** Stylesheet path relative to the skin's `css` directory. */
  css?: string
}
