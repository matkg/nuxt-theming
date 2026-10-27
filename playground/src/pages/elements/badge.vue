<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const variants = ['solid', 'outline', 'soft', 'subtle'] as const
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div>
    <PageHeader
      title="Badge"
      description="Small, tactile status pills. Outline and subtle variants get a gentle raised shadow."
      badge="Element"
    />

    <div class="space-y-10">
      <Demo title="Variants">
        <div class="flex flex-wrap items-center gap-3">
          <UBadge v-for="variant in variants" :key="variant" :variant="variant" :label="variant" class="capitalize" />
        </div>
      </Demo>

      <Demo title="Colors">
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="color in colors" :key="color" :color="color" :label="color" class="capitalize" />
          </div>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="color in colors" :key="color" :color="color" variant="soft" :label="color" class="capitalize" />
          </div>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="color in colors" :key="color" :color="color" variant="outline" :label="color" class="capitalize" />
          </div>
        </div>
      </Demo>

      <Demo title="Sizes">
        <div class="flex flex-wrap items-center gap-3">
          <UBadge v-for="size in sizes" :key="size" :size="size" color="neutral" variant="soft" :label="size" class="uppercase" />
        </div>
      </Demo>

      <Demo title="With icons & avatars">
        <div class="flex flex-wrap items-center gap-3">
          <UBadge label="Verified" icon="i-lucide-badge-check" color="success" variant="soft" />
          <UBadge label="Pending" icon="i-lucide-clock" color="warning" />
          <UBadge label="Nuxt" :avatar="{ src: 'https://github.com/nuxt.png', alt: 'Nuxt' }" variant="subtle" color="neutral" />
          <UBadge label="v4.12" color="primary" variant="outline" icon="i-lucide-tag" />
        </div>
      </Demo>

      <Demo title="In context" description="Badges pair well with buttons, table cells and navigation items.">
        <div class="flex flex-wrap items-center gap-3">
          <UButton color="neutral" variant="soft">
            Inbox
            <template #trailing>
              <UBadge label="12" color="primary" size="sm" variant="solid" />
            </template>
          </UButton>
          <UButton color="neutral" variant="soft">
            Releases
            <template #trailing>
              <UBadge label="new" color="success" size="sm" />
            </template>
          </UButton>
          <UUser
            name="Nuxt UI"
            description="Design system"
            :avatar="{ src: 'https://github.com/nuxt.png', alt: 'Nuxt' }"
            :ui="{ description: 'text-xs' }"
          />
          <UBadge label="Beta" color="warning" variant="subtle" icon="i-lucide-flask-conical" />
        </div>
      </Demo>
    </div>
  </div>
</template>
