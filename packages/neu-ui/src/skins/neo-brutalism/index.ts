import type { Skin } from '../../types/skin'
import { neoBrutalismTheme } from './theme/index'

/** The neo-brutalist skin preset. */
export const neoBrutalism: Skin = {
  name: 'neo-brutalism',
  label: 'Neo Brutalism',
  theme: neoBrutalismTheme,
  css: 'neo-brutalism.css'
}

export { neoBrutalismTheme }
export default neoBrutalism
