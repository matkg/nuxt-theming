import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('./pages/index.vue') },
  { path: '/theming', name: 'theming', component: () => import('./pages/theming.vue') },
  { path: '/components', name: 'components', component: () => import('./pages/components/index.vue') },

  { path: '/elements/button', component: () => import('./pages/elements/button.vue') },
  { path: '/elements/badge', component: () => import('./pages/elements/badge.vue') },
  { path: '/elements/alert', component: () => import('./pages/elements/alert.vue') },
  { path: '/elements/avatar', component: () => import('./pages/elements/avatar.vue') },
  { path: '/elements/card', component: () => import('./pages/elements/card.vue') },
  { path: '/elements/indicators', component: () => import('./pages/elements/indicators.vue') },
  { path: '/elements/icons', component: () => import('./pages/elements/icons.vue') },

  { path: '/forms/input', component: () => import('./pages/forms/input.vue') },
  { path: '/forms/select', component: () => import('./pages/forms/select.vue') },
  { path: '/forms/choices', component: () => import('./pages/forms/choices.vue') },
  { path: '/forms/slider', component: () => import('./pages/forms/slider.vue') },
  { path: '/forms/advanced', component: () => import('./pages/forms/advanced.vue') },
  { path: '/forms/validation', component: () => import('./pages/forms/validation.vue') },

  { path: '/navigation/tabs', component: () => import('./pages/navigation/tabs.vue') },
  { path: '/navigation/accordion', component: () => import('./pages/navigation/accordion.vue') },
  { path: '/navigation/breadcrumb', component: () => import('./pages/navigation/breadcrumb.vue') },
  { path: '/navigation/menu', component: () => import('./pages/navigation/menu.vue') },
  { path: '/navigation/command', component: () => import('./pages/navigation/command.vue') },

  { path: '/overlays/modal', component: () => import('./pages/overlays/modal.vue') },
  { path: '/overlays/menus', component: () => import('./pages/overlays/menus.vue') },
  { path: '/overlays/toast', component: () => import('./pages/overlays/toast.vue') },

  { path: '/data/table', component: () => import('./pages/data/table.vue') },
  { path: '/data/timeline', component: () => import('./pages/data/timeline.vue') },
  { path: '/data/user', component: () => import('./pages/data/user.vue') },

  { path: '/layout/page', component: () => import('./pages/layout/page.vue') },
  { path: '/layout/shell', component: () => import('./pages/layout/shell.vue') },

  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./pages/[...path].vue') }
]
