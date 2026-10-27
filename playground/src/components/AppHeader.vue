<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { navigation } from '../data/navigation'
import { skinOptions, useSkinState } from '../composables/skin'

const emit = defineEmits<{ search: [], 'toggle-sidebar': [] }>()

const isDark = useDark()
const route = useRoute()
const { skin, setSkin } = useSkinState()

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))
</script>

<template>
  <header class="surface-header sticky top-0 z-40 border-b border-default/40 bg-default/70 backdrop-blur-xl">
    <div class="mx-auto flex h-16 w-full max-w-[110rem] items-center gap-2 px-4 sm:px-6 lg:px-8">
      <UButton
        class="lg:hidden"
        icon="i-lucide-menu"
        color="neutral"
        variant="soft"
        square
        aria-label="Open navigation"
        @click="emit('toggle-sidebar')"
      />

      <RouterLink to="/" class="group flex items-center gap-2.5">
        <span class="grid size-9 place-items-center rounded-xl bg-default surface-card">
          <span class="size-3 rounded-full bg-primary shadow-[0_0_14px] shadow-primary/70 transition-transform group-hover:scale-125" />
        </span>
        <span class="text-lg font-semibold tracking-tight text-highlighted">
          neu<span class="text-primary">/</span>ui
        </span>
      </RouterLink>

      <nav class="ml-6 hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="item in navigation[0]!.items"
          :key="item.to"
          :to="item.to"
          class="surface-nav rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
          :class="isActive(item.to) ? 'is-active text-highlighted' : 'text-muted hover:text-default'"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="ml-auto flex items-center gap-2">
        <button
          type="button"
          class="surface-nav hidden items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:text-default sm:flex"
          @click="emit('search')"
        >
          <UIcon name="i-lucide-search" class="size-4" />
          <span class="hidden lg:inline">Search</span>
          <UKbd class="hidden md:inline-flex">⌘K</UKbd>
        </button>

        <USelect
          :model-value="skin"
          :items="skinOptions"
          icon="i-lucide-sparkles"
          size="sm"
          class="hidden w-40 md:block"
          aria-label="Design skin"
          @update:model-value="setSkin"
        />

        <UButton
          :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
          color="neutral"
          variant="soft"
          square
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="isDark = !isDark"
        />

        <UButton
          to="https://ui.nuxt.com"
          target="_blank"
          icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="soft"
          square
          aria-label="Nuxt UI documentation"
        />
      </div>
    </div>
  </header>
</template>
