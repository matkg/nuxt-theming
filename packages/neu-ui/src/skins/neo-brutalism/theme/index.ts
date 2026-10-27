import type { NeuTheme } from '../../../types/theme'

/**
 * Neo-brutalist surface utilities (defined in `neo-brutalism.css`).
 * These are plain CSS classes, so they always win over Tailwind utilities
 * such as `shadow-lg` or `ring` that Nuxt UI applies through variants.
 */
const panel = 'brutal-panel'
const card = 'brutal-card'
const deck = 'brutal-deck'
const deckSm = 'brutal-deck-sm'
const well = 'brutal-well'
const wellSm = 'brutal-well-sm'
const nav = 'brutal-nav'
const field = 'brutal-field'
const button = 'brutal-button'
const check = 'brutal-check'
const track = 'brutal-track'
const thumb = 'brutal-thumb'

/**
 * The neo-brutalist theme, in the exact shape of Nuxt UI's `app.config.ui`.
 *
 * Use it at build time through the Vite plugin:
 *
 * ```ts
 * // vite.config.ts
 * import { skin } from '@neu-nuxt/ui/vite'
 * export default defineConfig({ plugins: [vue(), skin('neo-brutalism')] })
 * ```
 *
 * or at runtime with the Vue plugin / `<NeuProvider>`.
 */
export const neoBrutalismTheme: NeuTheme = {
  /**
   * Bright, flat blocks. Solid buttons/badges use black labels on these
   * fills (`--ui-text-inverted` is black for this skin).
   */
  colors: {
    primary: 'yellow',
    secondary: 'pink',
    success: 'lime',
    info: 'cyan',
    warning: 'orange',
    error: 'red',
    neutral: 'zinc'
  },

  /* ---------------------------------------------------------------- */
  /* Elements                                                          */
  /* ---------------------------------------------------------------- */

  button: {
    slots: {
      base: 'rounded-none font-black uppercase tracking-wide'
    },
    variants: {
      variant: {
        solid: button,
        outline: button,
        soft: button,
        subtle: button,
        ghost: 'brutal-clear!',
        link: 'brutal-clear!'
      }
    }
  },

  badge: {
    slots: {
      base: 'rounded-none brutal-badge font-black uppercase tracking-wide'
    },
    variants: {
      variant: {
        outline: card,
        subtle: card
      }
    }
  },

  kbd: {
    slots: {
      base: `rounded-none ${card} px-1.5 font-mono font-bold`
    }
  },

  avatar: {
    slots: {
      root: card
    }
  },

  avatarGroup: {
    slots: {
      base: 'ring-2 ring-(--brutal-paper)'
    }
  },

  chip: {
    slots: {
      base: 'ring-2 ring-(--brutal-paper)'
    }
  },

  alert: {
    slots: {
      root: `rounded-none ${panel}`
    }
  },

  banner: {
    slots: {
      root: `rounded-none ${card}`
    }
  },

  card: {
    slots: {
      root: `rounded-none ${panel}`
    },
    variants: {
      variant: {
        outline: { root: 'ring-0!' },
        subtle: { root: 'ring-0!' }
      }
    }
  },

  empty: {
    slots: {
      root: `rounded-none ${well}`
    },
    variants: {
      variant: {
        outline: { root: `${well} ring-0!` },
        soft: { root: `${well} ring-0!` },
        subtle: { root: `${well} ring-0!` }
      }
    }
  },

  progress: {
    slots: {
      base: 'brutal-track',
      indicator: 'brutal-progress'
    }
  },

  skeleton: {
    slots: {
      base: `rounded-none ${wellSm}`
    }
  },

  separator: {
    slots: {
      border: 'bg-(--brutal-border-color) opacity-100'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Forms                                                             */
  /* ---------------------------------------------------------------- */

  input: {
    slots: {
      base: `rounded-none ${field}`
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  textarea: {
    slots: {
      base: `rounded-none ${field}`
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  select: {
    slots: {
      base: `rounded-none ${field}`,
      content: `rounded-none ${deck} ring-0!`,
      item: 'rounded-none'
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  selectMenu: {
    slots: {
      base: `rounded-none ${field}`,
      content: `rounded-none ${deck} ring-0!`,
      item: 'rounded-none'
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  inputMenu: {
    slots: {
      base: `rounded-none ${field}`,
      content: `rounded-none ${deck} ring-0!`,
      item: 'rounded-none',
      tagsItem: `rounded-none ${card}`
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  inputNumber: {
    slots: {
      base: `rounded-none ${field}`
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  inputTags: {
    slots: {
      base: `rounded-none ${field}`,
      item: `rounded-none ${card}`,
      input: 'bg-transparent'
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  inputDate: {
    slots: {
      base: `rounded-none ${field}`
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  inputTime: {
    slots: {
      base: `rounded-none ${field}`
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  pinInput: {
    slots: {
      base: `rounded-none ${field} text-center`
    },
    variants: {
      variant: {
        none: 'brutal-clear!'
      }
    }
  },

  checkbox: {
    slots: {
      base: `rounded-none ${check} ring-0!`
    },
    variants: {
      variant: {
        card: { root: `rounded-none ${card}` }
      }
    }
  },

  checkboxGroup: {
    variants: {
      variant: {
        card: { item: `rounded-none ${card}` }
      }
    }
  },

  radioGroup: {
    slots: {
      base: `${check} ring-0!`
    },
    variants: {
      variant: {
        card: { item: `rounded-none ${card}` }
      }
    }
  },

  switch: {
    slots: {
      base: track,
      thumb
    }
  },

  slider: {
    slots: {
      track: track,
      thumb: `${thumb} ring-0!`
    }
  },

  inputRating: {
    slots: {
      root: 'gap-1'
    }
  },

  fileUpload: {
    slots: {
      base: `rounded-none ${well}`,
      file: `rounded-none ${card} p-2`
    }
  },

  colorPicker: {
    slots: {
      picker: `rounded-none ${wellSm}`,
      selector: `rounded-none ${wellSm}`
    }
  },

  formField: {
    slots: {
      label: 'font-black uppercase tracking-wide'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Navigation                                                        */
  /* ---------------------------------------------------------------- */

  tabs: {
    slots: {
      list: `rounded-none ${track}`,
      indicator: 'rounded-none brutal-tab-indicator',
      trigger: 'rounded-none font-bold',
      content: 'rounded-none'
    },
    variants: {
      variant: {
        link: {
          list: 'rounded-none brutal-clear! bg-transparent',
          indicator: 'brutal-clear! rounded-none'
        }
      }
    }
  },

  accordion: {
    slots: {
      root: 'space-y-4',
      item: `rounded-none ${panel} overflow-hidden`,
      trigger: 'px-5 py-4 font-bold',
      body: 'px-5 pb-5'
    }
  },

  breadcrumb: {
    slots: {
      link: 'rounded-none px-1.5 py-0.5 font-bold'
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
      link: `rounded-none ${nav} font-bold`,
      childLink: `rounded-none ${nav}`
    }
  },

  stepper: {
    slots: {
      trigger: card,
      separator: track
    }
  },

  sidebar: {
    slots: {
      inner: 'bg-default'
    }
  },

  header: {
    slots: {
      root: 'brutal-header'
    }
  },

  tree: {
    slots: {
      link: 'rounded-none'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Overlays                                                          */
  /* ---------------------------------------------------------------- */

  modal: {
    slots: {
      overlay: 'brutal-overlay',
      content: `rounded-none ${deck} ring-0!`,
      close: 'rounded-none'
    },
    variants: {
      fullscreen: {
        true: { content: 'rounded-none' },
        false: { content: 'rounded-none ring-0!' }
      }
    }
  },

  slideover: {
    slots: {
      overlay: 'brutal-overlay',
      content: `rounded-none ${deck} ring-0!`,
      close: 'rounded-none'
    },
    variants: {
      inset: {
        true: { content: 'rounded-none' }
      }
    }
  },

  drawer: {
    slots: {
      overlay: 'brutal-overlay',
      content: `rounded-none ${deck} ring-0!`
    },
    variants: {
      direction: {
        top: { content: 'rounded-none' },
        bottom: { content: 'rounded-none' },
        left: { content: 'rounded-none' },
        right: { content: 'rounded-none' }
      },
      inset: {
        true: { content: 'rounded-none' }
      }
    }
  },

  dropdownMenu: {
    slots: {
      content: `rounded-none ${deck} ring-0!`,
      item: 'rounded-none',
      input: 'border-0'
    }
  },

  contextMenu: {
    slots: {
      content: `rounded-none ${deck} ring-0!`,
      item: 'rounded-none'
    }
  },

  popover: {
    slots: {
      content: `rounded-none ${deck} ring-0!`
    }
  },

  tooltip: {
    slots: {
      content: `rounded-none ${card} ring-0! h-auto px-3 py-1.5 font-bold`
    }
  },

  toast: {
    slots: {
      root: `rounded-none ${deckSm} ring-0!`
    }
  },

  commandPalette: {
    slots: {
      root: 'rounded-none',
      item: 'rounded-none'
    }
  },

  listbox: {
    slots: {
      item: 'rounded-none'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Data display                                                      */
  /* ---------------------------------------------------------------- */

  table: {
    slots: {
      root: `rounded-none ${panel} overflow-hidden`,
      thead: 'bg-(--brutal-accent-yellow)',
      th: 'text-black!'
    }
  },

  timeline: {
    slots: {
      indicator: card,
      separator: track
    }
  },

  calendar: {
    slots: {
      root: `rounded-none ${panel} p-3`
    }
  },

  carousel: {
    slots: {
      dot: 'brutal-clear!'
    }
  },

  user: {
    slots: {
      root: 'rounded-none'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Marketing / page blocks                                           */
  /* ---------------------------------------------------------------- */

  pageCard: {
    slots: {
      root: `rounded-none ${panel}`
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
      root: `rounded-none ${panel}`
    }
  },

  authForm: {
    slots: {
      root: `rounded-none ${deck}`
    }
  },

  blogPost: {
    slots: {
      root: `rounded-none ${panel}`
    }
  },

  chatMessage: {
    slots: {
      content: `rounded-none ${card}`
    }
  },

  editor: {
    slots: {
      root: `rounded-none ${wellSm}`
    }
  }
}

export { neoBrutalismTheme as theme }
export default neoBrutalismTheme
