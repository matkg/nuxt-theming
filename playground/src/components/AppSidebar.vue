<script setup lang="ts">
import { useRoute } from 'vue-router'
import { navigation } from '../data/navigation'

const route = useRoute()
const toast = useToast()

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

async function copyInstall() {
  try {
    await navigator.clipboard.writeText('npm install @neu-nuxt/ui')
    toast.add({ title: 'Copied to clipboard', description: 'npm install @neu-nuxt/ui', icon: 'i-lucide-check', color: 'success' })
  } catch {
    toast.add({ title: 'Could not copy', description: 'npm install @neu-nuxt/ui', icon: 'i-lucide-triangle-alert', color: 'error' })
  }
}
</script>

<template>
  <nav class="space-y-7">
    <div v-for="group in navigation" :key="group.label">
      <p class="px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-dimmed">
        {{ group.label }}
      </p>
      <ul class="mt-2.5 space-y-1.5">
        <li v-for="item in group.items" :key="item.to">
          <RouterLink
            :to="item.to"
            class="surface-nav flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="isActive(item.to) ? 'is-active text-highlighted' : 'text-muted hover:text-default'"
          >
            <UIcon
              :name="item.icon"
              class="size-4 shrink-0 transition-colors"
              :class="isActive(item.to) ? 'text-primary' : 'text-dimmed'"
            />
            <span class="truncate">{{ item.label }}</span>
            <UBadge
              v-if="item.badge"
              :label="item.badge"
              color="neutral"
              variant="soft"
              size="sm"
              class="ms-auto"
            />
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="rounded-2xl surface-well p-3">
      <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-dimmed">
        Install
      </p>
      <div class="mt-2 flex items-center gap-2">
        <code class="min-w-0 flex-1 truncate text-xs text-toned">npm i @neu-nuxt/ui</code>
        <UButton
          icon="i-lucide-copy"
          color="neutral"
          variant="soft"
          size="xs"
          square
          aria-label="Copy install command"
          @click="copyInstall"
        />
      </div>
    </div>

    <p class="px-3 text-xs text-dimmed">
      Built on Nuxt UI v4 · Vue 3 · Tailwind CSS v4
    </p>
  </nav>
</template>
