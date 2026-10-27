import { ref } from 'vue'
import type { Ref } from 'vue'
import { applySkin } from './runtime'
import { getSkin } from './registry'
import type { Skin } from './types/skin'
import type { NeuTheme } from './types/theme'

const STORAGE_KEY = 'nuxt-ui-skin'

const skin = ref('neumorphism')
let initialized = false

function readStored(): string | undefined {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? undefined
  } catch {
    return undefined
  }
}

function persist(name: string) {
  try {
    localStorage.setItem(STORAGE_KEY, name)
  } catch {
    // storage may be unavailable (private mode); switching still works
  }
}

/**
 * Shared, reactive skin state.
 *
 * ```ts
 * const { skin, setSkin } = useSkin()
 * setSkin('glass')
 * ```
 *
 * The first call applies the current skin (stored choice or neumorphism).
 * Use `setSkin` rather than mutating `skin` directly.
 */
export function useSkin(options: { persist?: boolean, initial?: string } = {}) {
  if (!initialized) {
    initialized = true

    if (typeof window !== 'undefined') {
      const stored = readStored()
      const chosen = stored && getSkin(stored) ? stored : options.initial
      if (chosen && getSkin(chosen)) skin.value = chosen
    } else if (options.initial) {
      skin.value = options.initial
    }

    applySkin(skin.value)
  }

  function setSkin(next: string | Skin, theme?: NeuTheme) {
    const name = typeof next === 'string' ? next : next.name
    applySkin(next, theme)
    skin.value = name

    if (options.persist !== false && typeof window !== 'undefined') {
      persist(name)
    }
  }

  return { skin: skin as Ref<string>, setSkin }
}
