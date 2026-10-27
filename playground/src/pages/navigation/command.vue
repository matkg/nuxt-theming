<script setup lang="ts">
import { computed, ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'
import { openSearch } from '../../composables/search'

const selected = ref('')
const search = ref('')

const groups = [
  {
    id: 'elements',
    label: 'Elements',
    items: [
      { label: 'Button', icon: 'i-lucide-square-mouse-pointer', to: '/elements/button', suffix: 'Elements' },
      { label: 'Badge', icon: 'i-lucide-tag', to: '/elements/badge', suffix: 'Elements' },
      { label: 'Alert', icon: 'i-lucide-bell-ring', to: '/elements/alert', suffix: 'Elements' },
      { label: 'Card', icon: 'i-lucide-square', to: '/elements/card', suffix: 'Elements' }
    ]
  },
  {
    id: 'forms',
    label: 'Forms',
    items: [
      { label: 'Input', icon: 'i-lucide-text-cursor-input', to: '/forms/input', suffix: 'Forms' },
      { label: 'Select', icon: 'i-lucide-list-filter', to: '/forms/select', suffix: 'Forms' },
      { label: 'Checkbox', icon: 'i-lucide-circle-check-big', to: '/forms/choices', suffix: 'Forms' },
      { label: 'Slider', icon: 'i-lucide-sliders-horizontal', to: '/forms/slider', suffix: 'Forms' }
    ]
  },
  {
    id: 'overlays',
    label: 'Overlays',
    items: [
      { label: 'Modal', icon: 'i-lucide-gallery-horizontal-end', to: '/overlays/modal', suffix: 'Overlays' },
      { label: 'Toast', icon: 'i-lucide-message-square', to: '/overlays/toast', suffix: 'Overlays' }
    ]
  }
]

const selectedLabel = computed(() => selected.value || '—')
</script>

<template>
  <div>
    <PageHeader
      title="Command palette"
      description="A searchable list inside a floating clay panel. The global shortcut (⌘K / Ctrl+K) opens the same thing from the header."
      badge="Navigation"
    />

    <div class="space-y-10">
      <Demo title="Inline palette" description="Type to filter, use arrow keys to move, Enter to select.">
        <div class="mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-default surface-deck">
          <UCommandPalette
            v-model="selected"
            v-model:search-term="search"
            :groups="groups"
            value-key="to"
            placeholder="Search pages…"
            :close="false"
          />
        </div>
        <p class="mt-4 text-center text-xs text-muted">Selected: <span class="font-mono text-highlighted">{{ selectedLabel }}</span></p>
      </Demo>

      <Demo title="Triggers">
        <div class="flex flex-wrap items-center gap-3">
          <UButton icon="i-lucide-search" label="Open global search" @click="openSearch" />
          <div class="flex items-center gap-2 text-sm text-muted">
            or press
            <UKbd>⌘</UKbd>
            <UKbd>K</UKbd>
          </div>
        </div>
        <p class="mt-3 text-xs text-muted">
          The global palette lives in <code class="text-primary">App.vue</code> and reuses the same groups as this page.
        </p>
      </Demo>

      <Demo title="Search only">
        <div class="max-w-sm overflow-hidden rounded-2xl bg-default surface-panel">
          <UCommandPalette :groups="groups" :close="false" :autofocus="false" placeholder="Filter components…" />
        </div>
      </Demo>
    </div>
  </div>
</template>
