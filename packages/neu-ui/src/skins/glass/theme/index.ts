import type { NeuTheme } from '../../../types/theme'

/**
 * Frosted-glass surface utilities (defined in `glass.css`):
 * same rule as neumorphism — plain CSS classes win over variant
 * utilities like `shadow-lg` or `ring`.
 */
const glassPanel = 'glass-panel'
const glassCard = 'glass-card'
const glassField = 'glass-field'
const glassNav = 'glass-nav'
const glassWell = 'glass-well'

/**
 * The glassmorphic theme, in the exact shape of Nuxt UI's `app.config.ui`.
 */
export const glassTheme: NeuTheme = {
  colors: {
    primary: 'sky',
    secondary: 'violet',
    success: 'emerald',
    info: 'cyan',
    warning: 'amber',
    error: 'rose',
    neutral: 'slate'
  },

  /* ---------------------------------------------------------------- */
  /* Elements                                                          */
  /* ---------------------------------------------------------------- */

  button: {
    slots: {
      base: 'rounded-xl font-semibold tracking-tight'
    },
    variants: {
      variant: {
        solid: 'shadow-[0_12px_28px_-12px_var(--glass-shadow)]',
        outline: 'glass-btn',
        soft: 'glass-btn',
        subtle: 'glass-btn',
        ghost: 'glass-clear!',
        link: 'glass-clear!'
      }
    }
  },

  badge: {
    slots: {
      base: 'rounded-md font-semibold'
    },
    variants: {
      variant: {
        outline: 'glass-badge',
        soft: 'glass-badge',
        subtle: 'glass-badge'
      }
    }
  },

  kbd: {
    slots: {
      base: 'rounded-md glass-surface px-1.5 font-mono'
    }
  },

  avatar: {
    slots: {
      root: glassCard
    }
  },

  avatarGroup: {
    slots: {
      base: 'ring-2 ring-(--glass-surface)'
    }
  },

  chip: {
    slots: {
      base: 'ring-2 ring-(--glass-surface)'
    }
  },

  alert: {
    slots: {
      root: 'rounded-2xl glass-surface'
    }
  },

  banner: {
    slots: {
      root: 'rounded-xl glass-card'
    }
  },

  card: {
    slots: {
      root: 'rounded-2xl glass-surface'
    }
  },

  empty: {
    slots: {
      root: 'rounded-2xl glass-surface'
    }
  },

  progress: {
    slots: {
      base: 'glass-groove',
      indicator: 'glass-progress'
    }
  },

  skeleton: {
    slots: {
      base: 'rounded-xl glass-groove'
    }
  },

  separator: {
    slots: {
      border: 'opacity-80'
    }
  },

  /* ---------------------------------------------------------------- */
  /* Forms                                                             */
  /* ---------------------------------------------------------------- */

  input: {
    slots: {
      base: 'rounded-lg glass-field'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  textarea: {
    slots: {
      base: 'rounded-xl glass-field'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  select: {
    slots: {
      base: 'rounded-lg glass-field',
      content: 'rounded-xl glass-panel ring-0',
      item: 'rounded-md'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  selectMenu: {
    slots: {
      base: 'rounded-lg glass-field',
      content: 'rounded-xl glass-panel ring-0',
      item: 'rounded-md'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  inputMenu: {
    slots: {
      base: 'rounded-lg glass-field',
      content: 'rounded-xl glass-panel ring-0',
      item: 'rounded-md',
      tagsItem: 'rounded-md glass-card'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  inputNumber: {
    slots: {
      base: 'rounded-lg glass-field'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  inputTags: {
    slots: {
      base: 'rounded-lg glass-field',
      item: 'rounded-md glass-card',
      input: 'bg-transparent'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  inputDate: {
    slots: {
      base: 'rounded-lg glass-field'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  inputTime: {
    slots: {
      base: 'rounded-lg glass-field'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  pinInput: {
    slots: {
      base: 'rounded-lg glass-field text-center'
    },
    variants: {
      variant: {
        none: 'glass-clear'
      }
    }
  },

  checkbox: {
    slots: {
      base: 'rounded-sm glass-field'
    },
    variants: {
      variant: {
        card: { root: 'rounded-xl glass-card border-0' }
      }
    }
  },

  checkboxGroup: {
    variants: {
      variant: {
        card: { item: 'rounded-xl glass-card' }
      }
    }
  },

  radioGroup: {
    slots: {
      base: 'glass-field'
    },
    variants: {
      variant: {
        card: { item: 'rounded-xl glass-card' }
      }
    }
  },

  switch: {
    slots: {
      base: 'glass-track border-0',
      thumb: 'glass-thumb'
    }
  },

  slider: {
    slots: {
      track: 'glass-groove',
      thumb: 'glass-thumb ring-0'
    }
  },

  inputRating: {
    slots: {
      root: 'gap-1'
    }
  },

  fileUpload: {
    slots: {
      base: 'rounded-2xl glass-field border-0',
      file: 'rounded-lg glass-card p-2'
    }
  },

  colorPicker: {
    slots: {
      picker: 'rounded-lg glass-groove',
      selector: 'rounded-lg glass-groove'
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
      list: 'rounded-xl glass-tabs',
      indicator: 'rounded-md glass-tabs-indicator',
      trigger: 'rounded-md glass-tabs-trigger',
      content: 'rounded-xl'
    },
    variants: {
      variant: {
        link: {
          list: 'rounded-none glass-tabs-link',
          indicator: 'glass-clear rounded-full'
        }
      }
    }
  },

  accordion: {
    slots: {
      root: 'space-y-3',
      item: 'rounded-xl glass-panel border-none border-b-0 overflow-hidden',
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
    }
  },

  stepper: {
    slots: {
      trigger: 'glass-surface',
      separator: 'glass-groove'
    }
  },

  sidebar: {
    slots: {
      inner: 'bg-default'
    }
  },

  header: {
    slots: {
      root: 'glass-header bg-default/70'
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
      overlay: 'glass-overlay',
      content: 'rounded-2xl glass-deck ring-0',
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
      overlay: 'glass-overlay',
      content: 'glass-deck sm:glass-deck-edge ring-0',
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
      overlay: 'glass-overlay',
      content: 'glass-deck ring-0'
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
      content: 'rounded-xl glass-deck ring-0',
      item: 'rounded-md',
      input: 'border-0'
    }
  },

  contextMenu: {
    slots: {
      content: 'rounded-xl glass-deck ring-0',
      item: 'rounded-md'
    }
  },

  popover: {
    slots: {
      content: 'rounded-xl glass-deck ring-0'
    }
  },

  tooltip: {
    slots: {
      content: 'rounded-lg glass-card ring-0 h-auto px-3 py-1.5'
    }
  },

  toast: {
    slots: {
      root: 'rounded-xl glass-deck ring-0'
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
      root: 'rounded-2xl glass-panel overflow-hidden',
      thead: 'bg-elevated/40'
    }
  },

  timeline: {
    slots: {
      indicator: 'glass-surface',
      separator: 'glass-groove'
    }
  },

  calendar: {
    slots: {
      root: 'rounded-2xl glass-surface p-3'
    }
  },

  carousel: {
    slots: {
      dot: 'glass-clear!'
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
      root: 'rounded-2xl glass-surface'
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
      root: 'rounded-2xl glass-surface'
    }
  },

  authForm: {
    slots: {
      root: 'rounded-2xl glass-deck'
    }
  },

  blogPost: {
    slots: {
      root: 'rounded-2xl glass-panel'
    }
  },

  chatMessage: {
    slots: {
      content: 'rounded-xl glass-card'
    }
  },

  editor: {
    slots: {
      root: 'rounded-xl glass-groove'
    }
  }
}

export { glassTheme as theme }
export default glassTheme
