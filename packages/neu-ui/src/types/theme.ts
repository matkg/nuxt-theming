/**
 * Loose structural types for Nuxt UI theme overrides.
 *
 * Nuxt UI ships precise generated types through the `#build/ui` alias
 * (available in your app after running the Nuxt UI Vite plugin), but a
 * library cannot rely on that alias at build time. These types describe
 * the shape the Vite plugin and the `ui` prop accept.
 */

export type ThemeSlot = string | ((defaults: string) => string)

export type ThemeVariantValue = string | Record<string, ThemeSlot>

export interface ComponentThemeOverride {
  /** `slots` for multi-element components, `base` for single-element ones. */
  slots?: Record<string, ThemeSlot>
  base?: ThemeSlot
  variants?: Record<string, Record<string, ThemeVariantValue>>
  compoundVariants?: Array<Record<string, unknown>>
  defaultVariants?: Record<string, unknown>
}

export interface NeuTheme {
  /** Semantic color aliases (must exist in your Tailwind theme). */
  colors?: Record<string, string>
  [component: string]: unknown
}

export interface NeuUIOptions {
  /** Vue component prefix used by the Nuxt UI auto-import. @default 'U' */
  prefix?: string
  /** Extra Nuxt UI configuration, deep-merged on top of the neumorphic theme. */
  ui?: NeuTheme
  /** Nuxt UI theme options (colors, transitions, unstyled…). */
  theme?: Record<string, unknown>
  /** Pass-through of every other Nuxt UI Vite plugin option. */
  [key: string]: unknown
}
