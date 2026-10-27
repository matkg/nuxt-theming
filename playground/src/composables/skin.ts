import { useSkin } from '@neu-nuxt/ui'

export interface SkinOption {
  label: string
  value: string
  icon?: string
}

export const skinOptions: SkinOption[] = [
  { label: 'Neumorphism', value: 'neumorphism', icon: 'i-lucide-circle-dot' },
  { label: 'Glassmorphism', value: 'glass', icon: 'i-lucide-scan-line' },
  { label: 'Neo Brutalism', value: 'neo-brutalism', icon: 'i-lucide-zap' }
]

/** Shared skin state for the showcase (wraps the library composable). */
export function useSkinState() {
  return useSkin({ persist: true })
}
