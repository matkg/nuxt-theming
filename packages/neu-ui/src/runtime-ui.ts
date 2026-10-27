import { toComponentUi } from './theme/adapt'
import { neuTheme } from './theme/index'

/**
 * Flattened `ui` prop shape, useful with `<UTheme :ui="neuComponentUi">`
 * or with the `ui` prop of a single component.
 *
 * Variants cannot be expressed through the `ui` prop, so they are not part
 * of this object — use the Vite plugin or `<NeuProvider>` for the full theme.
 */
export const neuComponentUi = toComponentUi(neuTheme)
