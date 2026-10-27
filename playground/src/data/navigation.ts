import { catalogCount } from './catalog.generated'

export interface NavItem {
  label: string
  to: string
  icon?: string
  badge?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export const navigation: NavGroup[] = [
  {
    label: 'Getting started',
    items: [
      { label: 'Introduction', to: '/', icon: 'i-lucide-house' },
      { label: 'Theming', to: '/theming', icon: 'i-lucide-palette' },
      { label: 'All components', to: '/components', icon: 'i-lucide-layout-grid', badge: String(catalogCount) }
    ]
  },
  {
    label: 'Elements',
    items: [
      { label: 'Button', to: '/elements/button', icon: 'i-lucide-square-mouse-pointer' },
      { label: 'Badge', to: '/elements/badge', icon: 'i-lucide-tag' },
      { label: 'Alert', to: '/elements/alert', icon: 'i-lucide-bell-ring' },
      { label: 'Avatar', to: '/elements/avatar', icon: 'i-lucide-user-round' },
      { label: 'Card', to: '/elements/card', icon: 'i-lucide-square' },
      { label: 'Indicators', to: '/elements/indicators', icon: 'i-lucide-gauge' },
      { label: 'Icons', to: '/elements/icons', icon: 'i-lucide-sparkles' }
    ]
  },
  {
    label: 'Forms',
    items: [
      { label: 'Input', to: '/forms/input', icon: 'i-lucide-text-cursor-input' },
      { label: 'Select', to: '/forms/select', icon: 'i-lucide-list-filter' },
      { label: 'Choices', to: '/forms/choices', icon: 'i-lucide-circle-check-big' },
      { label: 'Slider & Switch', to: '/forms/slider', icon: 'i-lucide-sliders-horizontal' },
      { label: 'Advanced', to: '/forms/advanced', icon: 'i-lucide-calendar-days' },
      { label: 'Validation', to: '/forms/validation', icon: 'i-lucide-shield-check' }
    ]
  },
  {
    label: 'Navigation',
    items: [
      { label: 'Tabs', to: '/navigation/tabs', icon: 'i-lucide-app-window' },
      { label: 'Accordion', to: '/navigation/accordion', icon: 'i-lucide-chevrons-down-up' },
      { label: 'Breadcrumb', to: '/navigation/breadcrumb', icon: 'i-lucide-chevrons-right' },
      { label: 'Menu & Stepper', to: '/navigation/menu', icon: 'i-lucide-menu' },
      { label: 'Command palette', to: '/navigation/command', icon: 'i-lucide-search' }
    ]
  },
  {
    label: 'Overlays',
    items: [
      { label: 'Modal & Drawers', to: '/overlays/modal', icon: 'i-lucide-gallery-horizontal-end' },
      { label: 'Menus & Tooltips', to: '/overlays/menus', icon: 'i-lucide-mouse-pointer-click' },
      { label: 'Toast', to: '/overlays/toast', icon: 'i-lucide-message-square' }
    ]
  },
  {
    label: 'Data',
    items: [
      { label: 'Table', to: '/data/table', icon: 'i-lucide-table' },
      { label: 'Timeline', to: '/data/timeline', icon: 'i-lucide-git-commit-vertical' },
      { label: 'User & Tree', to: '/data/user', icon: 'i-lucide-users' }
    ]
  },
  {
    label: 'Layout',
    items: [
      { label: 'Page blocks', to: '/layout/page', icon: 'i-lucide-layout-template' },
      { label: 'App shell', to: '/layout/shell', icon: 'i-lucide-panel-left' }
    ]
  }
]

/** Flat list, used by the command palette. */
export const flatNavigation = navigation.flatMap(group =>
  group.items.map(item => ({ ...item, group: group.label }))
)
