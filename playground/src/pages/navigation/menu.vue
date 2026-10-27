<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const step = ref('details')

const menuItems = [
  {
    label: 'Components',
    icon: 'i-lucide-shapes',
    children: [
      { label: 'Button', icon: 'i-lucide-square-mouse-pointer', to: '/elements/button', description: 'Raised, pressed and flat variants' },
      { label: 'Card', icon: 'i-lucide-square', to: '/elements/card', description: 'Raised content panels' },
      { label: 'Table', icon: 'i-lucide-table', to: '/data/table', description: 'Accessible data grids' }
    ]
  },
  {
    label: 'Forms',
    icon: 'i-lucide-text-cursor-input',
    children: [
      { label: 'Input', icon: 'i-lucide-text-cursor-input', to: '/forms/input', description: 'Inset text fields' },
      { label: 'Select', icon: 'i-lucide-list-filter', to: '/forms/select', description: 'Dropdowns and menus' }
    ]
  },
  { label: 'Theming', icon: 'i-lucide-palette', to: '/theming' },
  { label: 'All components', icon: 'i-lucide-layout-grid', to: '/components' }
]

const verticalItems = [
  { label: 'Getting started', icon: 'i-lucide-rocket', to: '/' },
  { label: 'Theming', icon: 'i-lucide-palette', to: '/theming' },
  {
    label: 'Components',
    icon: 'i-lucide-shapes',
    children: [
      { label: 'Button', to: '/elements/button' },
      { label: 'Card', to: '/elements/card' },
      { label: 'Input', to: '/forms/input' }
    ]
  }
]

const steps = [
  { title: 'Account', description: 'Create your profile', icon: 'i-lucide-user-round', value: 'account' },
  { title: 'Details', description: 'Workspace settings', icon: 'i-lucide-settings', value: 'details' },
  { title: 'Review', description: 'Confirm everything', icon: 'i-lucide-circle-check', value: 'review' },
  { title: 'Done', description: 'Start building', icon: 'i-lucide-rocket', value: 'done' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Menu & Stepper"
      description="Navigation with popover panels and a multi-step indicator built from raised circles."
      badge="Navigation"
    />

    <div class="space-y-10">
      <Demo title="Navigation menu" description="Hover the items to open the floating panels.">
        <UNavigationMenu :items="menuItems" class="w-full justify-center" />
      </Demo>

      <Demo title="Vertical menu">
        <UNavigationMenu :items="verticalItems" orientation="vertical" class="w-full max-w-xs" />
      </Demo>

      <Demo title="Stepper">
        <div class="space-y-8">
          <UStepper v-model="step" :items="steps" class="w-full" />
          <UStepper v-model="step" :items="steps" orientation="vertical" class="w-full max-w-sm" />
        </div>
        <p class="mt-4 text-xs text-muted">Active step: <span class="font-semibold text-highlighted">{{ step }}</span></p>
      </Demo>

      <Demo title="Stepper in a card">
        <div class="rounded-2xl bg-default p-5 surface-well-sm">
          <UStepper v-model="step" :items="steps" class="w-full" />
          <USeparator class="my-5" />
          <div class="flex items-center justify-between">
            <p class="text-sm text-muted">Step content for <span class="font-semibold text-highlighted">{{ step }}</span></p>
            <UButton size="sm" trailing-icon="i-lucide-arrow-right" label="Continue" />
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
