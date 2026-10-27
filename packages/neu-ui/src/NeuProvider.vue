<script setup lang="ts">
import UApp from '@nuxt/ui/components/App.vue'
import { applySkin } from './runtime'
import type { NeuTheme } from './types/theme'
import type { Skin } from './types/skin'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  /** Skin to apply by name or as a preset object. */
  skin?: string | Skin
  /** Partial theme merged on top of the skin defaults. */
  theme?: NeuTheme
}>()

defineSlots<{ default?: () => unknown }>()

// Runs during setup, before any child component is created.
applySkin(props.skin, props.theme)
</script>

<template>
  <UApp v-bind="$attrs">
    <slot />
  </UApp>
</template>
