<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const variants = ['outline', 'soft', 'subtle', 'solid'] as const
</script>

<template>
  <div>
    <PageHeader
      title="Card"
      description="A raised clay panel. Use the header, body and footer slots for structure."
      badge="Element"
    />

    <div class="space-y-10">
      <Demo title="Variants">
        <div class="grid gap-4 sm:grid-cols-2">
          <UCard v-for="variant in variants" :key="variant" :variant="variant">
            <template #header>
              <div class="flex items-center justify-between">
                <p class="font-semibold capitalize">{{ variant }} card</p>
                <UBadge :label="variant" color="neutral" variant="soft" size="sm" />
              </div>
            </template>
            <p class="text-sm text-muted">
              Cards use the same clay surface as the page, with a dual shadow to lift them off it.
            </p>
          </UCard>
        </div>
      </Demo>

      <Demo title="Structured card">
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="grid size-10 place-items-center rounded-xl bg-default neu-inset">
                <UIcon name="i-lucide-package" class="size-5 text-primary" />
              </div>
              <div class="min-w-0">
                <p class="text-sm font-semibold text-highlighted">Project settings</p>
                <p class="text-xs text-muted">Manage your workspace preferences</p>
              </div>
            </div>
          </template>

          <div class="space-y-4 text-sm">
            <p class="text-muted">
              Cards accept arbitrary content. The neumorphic theme only changes the surface, radius
              and shadow — layout and accessibility stay 100% Nuxt UI.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge label="Vue 3" icon="i-lucide-component" color="success" variant="soft" />
              <UBadge label="Tailwind v4" icon="i-lucide-wind" color="info" variant="soft" />
              <UBadge label="Nuxt UI" icon="i-lucide-hexagon" color="primary" variant="soft" />
            </div>
          </div>

          <template #footer>
            <div class="flex flex-wrap items-center justify-between gap-3">
              <p class="text-xs text-muted">Last updated 2 minutes ago</p>
              <div class="flex gap-2">
                <UButton label="Cancel" color="neutral" variant="ghost" size="sm" />
                <UButton label="Save changes" size="sm" icon="i-lucide-check" />
              </div>
            </div>
          </template>
        </UCard>
      </Demo>

      <Demo title="In a grid" description="Cards can be composed into dashboards and pricing sections.">
        <div class="grid gap-4 sm:grid-cols-3">
          <div v-for="stat in [
            { label: 'Revenue', value: '$12.4k', icon: 'i-lucide-trending-up', color: 'text-success' },
            { label: 'Active users', value: '2,481', icon: 'i-lucide-users', color: 'text-primary' },
            { label: 'Churn', value: '1.2%', icon: 'i-lucide-trending-down', color: 'text-error' }
          ]" :key="stat.label" class="rounded-2xl bg-default p-4 neu-raised-sm">
            <div class="flex items-center justify-between">
              <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">{{ stat.label }}</p>
              <UIcon :name="stat.icon" class="size-4" :class="stat.color" />
            </div>
            <p class="mt-2 text-2xl font-semibold text-highlighted">{{ stat.value }}</p>
            <UProgress :model-value="66" size="xs" class="mt-3" />
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
