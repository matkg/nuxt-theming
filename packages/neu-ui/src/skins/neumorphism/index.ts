import type { Skin } from '../../types/skin'
import { neuTheme } from './theme/index'

/** The neumorphic skin preset. */
export const neumorphism: Skin = {
  name: 'neumorphism',
  label: 'Neumorphism',
  theme: neuTheme,
  css: 'neumorphism.css'
}

export { neuTheme }
export default neumorphism
