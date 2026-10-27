import type { Skin } from '../../types/skin'
import { glassTheme } from './theme/index'

/** The glassmorphism skin preset. */
export const glass: Skin = {
  name: 'glass',
  label: 'Glassmorphism',
  theme: glassTheme,
  css: 'glass.css'
}

export { glassTheme }
export default glass
