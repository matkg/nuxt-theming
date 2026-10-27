<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const items = [
  {
    date: '2 minutes ago',
    title: 'Theme published',
    description: '126 component overrides shipped to the registry.',
    icon: 'i-lucide-rocket',
    color: 'success' as const
  },
  {
    date: '1 hour ago',
    title: 'Pull request merged',
    description: 'Inset shadows now use a softer falloff in dark mode.',
    icon: 'i-lucide-git-merge',
    color: 'primary' as const
  },
  {
    date: 'Yesterday',
    title: 'Component audit',
    description: 'All form controls verified against WCAG AA contrast.',
    icon: 'i-lucide-shield-check',
    color: 'info' as const
  },
  {
    date: '3 days ago',
    title: 'Breaking change',
    description: 'Renamed surface utilities to the neu- prefix.',
    icon: 'i-lucide-triangle-alert',
    color: 'warning' as const
  }
]
</script>

<template>
  <div>
    <PageHeader
      title="Timeline"
      description="Chronological events with raised markers connected by a pressed rail."
      badge="Data"
    />

    <div class="space-y-10">
      <Demo title="Vertical">
        <UTimeline :items="items" class="w-full" />
      </Demo>

      <Demo title="Compact">
        <UTimeline :items="items.slice(0, 3)" size="sm" class="w-full" />
      </Demo>

      <Demo title="Neutral">
        <UTimeline :items="items" color="neutral" :default-value="items.length - 1" class="w-full" />
      </Demo>

      <Demo title="In a card">
        <div class="rounded-2xl bg-default p-5 surface-well-sm">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <p class="text-sm font-semibold text-highlighted">Activity log</p>
              <p class="text-xs text-muted">Last 7 days</p>
            </div>
            <UBadge label="live" color="success" variant="soft" icon="i-lucide-activity" />
          </div>
          <UTimeline :items="items" size="sm" />
        </div>
      </Demo>
    </div>
  </div>
</template>
