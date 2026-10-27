import type { App, Component, Plugin } from 'vue'
import * as components from './components'
import { applyNeuTheme } from './runtime'
import type { NeuTheme } from './theme/types'

export interface NeuUIPluginOptions {
  /** Partial theme merged on top of the neumorphic defaults. */
  theme?: NeuTheme
  /** Shorthand for `theme.colors`. */
  colors?: Record<string, string>
  /**
   * Register every `Neu*` component globally.
   * Set to `false` to import components individually.
   * @default true
   */
  registerComponents?: boolean
}

/**
 * Vue plugin: applies the neumorphic theme and registers all `Neu*`
 * components globally.
 *
 * ```ts
 * import ui from '@nuxt/ui/vue-plugin'
 * import NeuUI from '@neu-nuxt/ui'
 *
 * app.use(ui)
 * app.use(NeuUI, { colors: { primary: 'teal' } })
 * ```
 */
const NeuUI: Plugin<[NeuUIPluginOptions?]> = {
  install(app: App, options: NeuUIPluginOptions = {}) {
    const theme: NeuTheme = { ...(options.theme ?? {}) }

    if (options.colors) {
      theme.colors = {
        ...((options.theme?.colors as Record<string, string> | undefined) ?? {}),
        ...options.colors
      }
    }

    applyNeuTheme(Object.keys(theme).length ? theme : undefined)

    if (options.registerComponents === false) return

    for (const [name, component] of Object.entries(components)) {
      app.component(name, component as Component)
    }
  }
}

export default NeuUI
