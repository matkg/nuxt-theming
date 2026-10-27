import { deepMerge } from '../merge'
import type { NeuTheme } from './types'

/**
 * Neumorphic surface utilities (defined in `theme.css`):
 * these are plain CSS classes, so they always win over Tailwind
 * utilities such as `shadow-lg` or `ring` that Nuxt UI applies
 * through variants.
 */
const raisedSm = 'neu-raised-sm'
const raised = 'neu-raised'
const raisedLg = 'neu-raised-lg'
const raisedXl = 'neu-raised-xl'
const insetSm = 'neu-inset-sm'
const inset = 'neu-inset'
const button = 'neu-button'
const field = 'neu-field'
const check = 'neu-check'
const track = 'neu-track'
const thumb = 'neu-thumb'

/**
 * The neumorphic theme, in the exact shape of Nuxt UI's `app.config.ui`.
 *
 * Use it at build time through the Vite plugin:
 *
 * ```ts
 * // vite.config.ts
 * import { neuUI } from '@neu-nuxt/ui/vite'
 * export default defineConfig({ plugins: [vue(), neuUI()] })
 * ```
 *
 * or at runtime with the Vue plugin / `<NeuProvider>`.
 */
export const neuTheme: NeuTheme = {
  /**
   * Semantic colors. Override with `neuUI({ ui: { colors: { primary: 'teal' } } })`
   * (or `app.config` equivalent) to re-skin the whole library.
   */
  colors: {
    primary: 'indigo',
    secondary: 'violet',
    success: 'emerald',
    info: 'sky',
    warning: 'amber',
    error: 'rose',
    neutral: 'slate'
  },

  /* ---------------------------------------------------------------- */
  /* Elements                                                          */
  /* ---------------------------------------------------------------- */

  button: {
    slots: {
      base: `rounded-lg ${button} font-semibold tracking-tight`
    },
    variants: {
      size: {
        xs: { base: 'rounded-md' },
        sm: { base: 'rounded-md' }
      },
      variant: {
        // Flat variants must not float above the surface.
        ghost: 'shadow-none!',
        link: 'shadow-none!'
      }
    }
  },

  badge: {
    slots: {
      base: 'rounded-md font-semibold'
    },
    variants: {
      variant: {
        outline: raisedSm,
        subtle: raisedSm
      }
    }
  },

  kbd: {
    slots: {
      base: `rounded-md ${raisedSm} px-1.5 font-mono`
    }
  },

  avatar: {
    slots: {
      root: `${raisedSm}`
    }
  },

  avatarGroup: {
    slots: {
      base: 'ring-2 ring-(--neu-bg)'
    }
  },

  chip: {
    slots: {
      base: 'ring-2 ring-(--neu-bg)'
    }
  },

  alert: {
    slots: {
      root: `rounded-2xl ${raised}`
    }
  },

  banner: {
    slots: {
      root: 'rounded-2xl'
    }
  },

  card: {
    slots: {
      root: `rounded-2xl ${raised}`
    },
    variants: {
      variant: {
        outline: { root: 'ring-0' },
        subtle: { root: 'ring-0' }
      }
    }
  },

  empty: {
    slots: {
      root: 'rounded-2xl'
    },
    variants: {
      variant: {
        outline: { root: `border-0 ${inset} ring-0` },
        soft: { root: `${inset}` },
        subtle: { root: `${inset} ring-0` }
      }
    }
  },

  progress: {
    slots: {
      base: `${insetSm} bg-(--neu-bg)`,
      indicator: raisedSm
    }
  },

  skeleton: {
    slots: {
      base: `rounded-xl ${insetSm}`
    }
  },

  separator: {
    slots: {
      border: 'opacity-70'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Forms                                                             */
  /* ---------------------------------------------------------------- */

  input: {
    slots: {
      base: `rounded-lg ${field}`
    },
    variants: {
      variant: {
        none: 'shadow-none!'
      }
    }
  },

  textarea: {
    slots: {
      base: `rounded-xl ${field}`
    },
    variants: {
      variant: {
        none: 'shadow-none!'
      }
    }
  },

  select: {
    slots: {
      base: `rounded-lg ${field}`,
      content: `rounded-xl ${raisedXl} ring-0`,
      item: 'rounded-md'
    },
    variants: {
      variant: {
        none: 'shadow-none!'
      }
    }
  },

  selectMenu: {
    slots: {
      base: `rounded-lg ${field}`,
      content: `rounded-xl ${raisedXl} ring-0`,
      item: 'rounded-md'
    },
    variants: { variant: { none: 'shadow-none!' } }
  },

  inputMenu: {
    slots: {
      base: `rounded-lg ${field}`,
      content: `rounded-xl ${raisedXl} ring-0`,
      item: 'rounded-md',
      tagsItem: `rounded-md ${raisedSm}`
    },
    variants: { variant: { none: 'shadow-none!' } }
  },

  inputNumber: {
    slots: {
      base: `rounded-lg ${field}`
    },
    variants: { variant: { none: 'shadow-none!' } }
  },

  inputTags: {
    slots: {
      base: `rounded-lg ${field}`,
      item: `rounded-md ${raisedSm}`,
      input: 'bg-transparent'
    },
    variants: { variant: { none: 'shadow-none!' } }
  },

  inputDate: {
    slots: {
      base: `rounded-lg ${field}`
    },
    variants: { variant: { none: 'shadow-none!' } }
  },

  inputTime: {
    slots: {
      base: `rounded-lg ${field}`
    },
    variants: { variant: { none: 'shadow-none!' } }
  },

  pinInput: {
    slots: {
      base: `rounded-lg ${field} text-center`
    },
    variants: { variant: { none: 'shadow-none!' } }
  },

  checkbox: {
    slots: {
      base: `rounded-sm ${check} ring-0`
    },
    variants: {
      variant: {
        card: { root: `rounded-xl ${raisedSm} border-0` }
      }
    }
  },

  checkboxGroup: {
    variants: {
      variant: {
        card: { item: `rounded-xl ${raisedSm}` }
      }
    }
  },

  radioGroup: {
    slots: {
      base: `${check} ring-0`
    },
    variants: {
      variant: {
        card: { item: `rounded-xl ${raisedSm}` }
      }
    }
  },

  switch: {
    slots: {
      base: `${track} border-0`,
      thumb
    }
  },

  slider: {
    slots: {
      track: `${insetSm} bg-(--neu-bg)`,
      thumb: `${thumb}`
    }
  },

  inputRating: {
    slots: {
      root: 'gap-1'
    }
  },

  fileUpload: {
    slots: {
      base: `rounded-2xl ${inset} border-0`,
      file: `rounded-lg ${raisedSm} p-2`
    }
  },

  colorPicker: {
    slots: {
      picker: `rounded-lg ${insetSm}`,
      selector: `rounded-lg ${insetSm}`
    }
  },

  formField: {
    slots: {
      label: 'font-semibold'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Navigation                                                        */
  /* ---------------------------------------------------------------- */

  tabs: {
    slots: {
      list: `rounded-xl ${inset} bg-(--neu-bg)`,
      indicator: `rounded-lg ${raisedSm}`,
      trigger: 'rounded-lg',
      content: 'rounded-xl'
    },
    variants: {
      variant: {
        link: {
          list: 'rounded-none shadow-none! bg-transparent',
          indicator: 'shadow-none! rounded-full'
        }
      }
    }
  },

  accordion: {
    slots: {
      root: 'space-y-3',
      item: `rounded-xl ${raised} border-none border-b-0 overflow-hidden`,
      trigger: 'px-5 py-4',
      body: 'px-5 pb-5'
    }
  },

  breadcrumb: {
    slots: {
      link: 'rounded-md px-1.5 py-0.5'
    }
  },

  pagination: {
    slots: {
      list: 'gap-2'
    }
  },

  navigationMenu: {
    slots: {
      root: 'gap-2',
      link: 'rounded-lg',
      childLink: 'rounded-md'
    },
  },

  stepper: {
    slots: {
      trigger: raisedSm,
      separator: insetSm
    }
  },

  sidebar: {
    slots: {
      inner: 'bg-default'
    }
  },

  header: {
    slots: {
      root: 'bg-default/80'
    }
  },

  tree: {
    slots: {
      link: 'rounded-lg'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Overlays                                                          */
  /* ---------------------------------------------------------------- */

  modal: {
    slots: {
      overlay: 'neu-overlay',
      content: `rounded-2xl ${raisedXl} ring-0`,
      close: 'rounded-lg'
    },
    variants: {
      fullscreen: {
        true: { content: 'rounded-none' },
        false: { content: 'rounded-2xl ring-0' }
      }
    }
  },

  slideover: {
    slots: {
      overlay: 'neu-overlay',
      content: `${raisedXl} sm:ring-0`,
      close: 'rounded-lg'
    },
    variants: {
      inset: {
        true: { content: 'rounded-2xl' }
      }
    }
  },

  drawer: {
    slots: {
      overlay: 'neu-overlay',
      content: `${raisedXl} ring-0`
    },
    variants: {
      direction: {
        top: { content: 'rounded-b-2xl' },
        bottom: { content: 'rounded-t-2xl' },
        left: { content: 'rounded-e-2xl' },
        right: { content: 'rounded-s-2xl' }
      },
      inset: {
        true: { content: 'rounded-2xl' }
      }
    }
  },

  dropdownMenu: {
    slots: {
      content: `rounded-xl ${raisedXl} ring-0`,
      item: 'rounded-md',
      input: 'border-0'
    }
  },

  contextMenu: {
    slots: {
      content: `rounded-xl ${raisedXl} ring-0`,
      item: 'rounded-md'
    }
  },

  popover: {
    slots: {
      content: `rounded-xl ${raisedXl} ring-0`
    }
  },

  tooltip: {
    slots: {
      content: `rounded-lg ${raised} ring-0 h-auto px-3 py-1.5`
    }
  },

  toast: {
    slots: {
      root: `rounded-xl ${raisedXl} ring-0`
    }
  },

  commandPalette: {
    slots: {
      root: 'rounded-b-xl',
      item: 'rounded-md'
    }
  },

  listbox: {
    slots: {
      item: 'rounded-md'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Data display                                                      */
  /* ---------------------------------------------------------------- */

  table: {
    slots: {
      root: `rounded-2xl ${raised} overflow-hidden`,
      thead: 'bg-elevated/40'
    }
  },

  timeline: {
    slots: {
      indicator: raisedSm,
      separator: insetSm
    }
  },

  calendar: {
    slots: {
      root: `rounded-2xl ${raised} p-3`
    }
  },

  carousel: {
    slots: {
      dot: 'shadow-none!'
    }
  },

  user: {
    slots: {
      root: 'rounded-lg'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Marketing / page blocks                                           */
  /* ---------------------------------------------------------------- */

  pageCard: {
    slots: {
      root: `rounded-2xl ${raised}`
    }
  },

  pageHero: {
    slots: {
      root: 'py-8 sm:py-12'
    }
  },

  pageSection: {
    slots: {
      root: 'py-8 sm:py-12'
    }
  },

  pricingPlan: {
    slots: {
      root: `rounded-2xl ${raised}`
    }
  },

  authForm: {
    slots: {
      root: `rounded-2xl ${raisedXl}`
    }
  },

  blogPost: {
    slots: {
      root: `rounded-2xl ${raised}`
    }
  },

  chatMessage: {
    slots: {
      content: `rounded-xl ${raisedSm}`
    }
  },

  editor: {
    slots: {
      root: `rounded-xl ${insetSm}`
    }
  }
}

/** Merge a partial theme on top of the default neumorphic theme. */
export function resolveNeuTheme(theme?: NeuTheme): NeuTheme {
  return theme ? deepMerge(structuredClone(neuTheme), theme) : neuTheme
}

export { toComponentUi } from './adapt'
export type { NeuTheme, ComponentThemeOverride, ThemeSlot, NeuUIOptions } from './types'
