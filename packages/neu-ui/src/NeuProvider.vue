<script setup lang="ts">
import UApp from '@nuxt/ui/components/App.vue'
import { applyNeuTheme } from './runtime'
import type { NeuTheme } from './theme/types'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  /** Partial theme merged on top of the neumorphic defaults. */
  theme?: NeuTheme
}>()

defineSlots<{ default?: () => unknown }>()

// Runs during setup, before any child component is created.
applyNeuTheme(props.theme)
</script>

<template>
  <UApp v-bind="$attrs">
    <slot />
  </UApp>
</template>
