<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const tab = ref('overview')
const verticalTab = ref('general')

const items = [
  { label: 'Overview', icon: 'i-lucide-layout-dashboard', value: 'overview' },
  { label: 'Activity', icon: 'i-lucide-activity', value: 'activity', badge: '12' },
  { label: 'Members', icon: 'i-lucide-users', value: 'members' },
  { label: 'Settings', icon: 'i-lucide-settings', value: 'settings' }
]

const verticalItems = [
  { label: 'General', icon: 'i-lucide-settings', value: 'general' },
  { label: 'Members', icon: 'i-lucide-users', value: 'members' },
  { label: 'Billing', icon: 'i-lucide-credit-card', value: 'billing' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Tabs"
      description="Pill tabs sit in a pressed track; the active tab is a raised stone. Link tabs keep a soft underline."
      badge="Navigation"
    />

    <div class="space-y-10">
      <Demo title="Pill" description="The default variant — a segmented control carved into the surface.">
        <UTabs v-model="tab" :items="items" class="w-full" />

        <div class="mt-6 rounded-2xl bg-default p-5 neu-inset-sm">
          <p v-if="tab === 'overview'" class="text-sm text-muted">
            Overview content. The panel uses an inset surface to contrast with the raised card.
          </p>
          <p v-else-if="tab === 'activity'" class="text-sm text-muted">
            12 new events since your last visit.
          </p>
          <p v-else-if="tab === 'members'" class="text-sm text-muted">
            Invite your teammates and manage their roles.
          </p>
          <p v-else class="text-sm text-muted">
            Workspace settings, danger zone and integrations.
          </p>
        </div>
      </Demo>

      <Demo title="Colors & sizes">
        <div class="space-y-5">
          <UTabs :items="items.slice(0, 3)" color="success" :model-value="'activity'" />
          <UTabs :items="items.slice(0, 3)" color="error" :model-value="'members'" size="sm" />
          <UTabs :items="items.slice(0, 3)" color="warning" :model-value="'overview'" size="lg" />
        </div>
      </Demo>

      <Demo title="Link variant">
        <UTabs v-model="tab" :items="items" variant="link" class="w-full" />
      </Demo>

      <Demo title="Vertical">
        <UTabs v-model="verticalTab" :items="verticalItems" orientation="vertical" class="w-full max-w-md" />
      </Demo>
    </div>
  </div>
</template>
