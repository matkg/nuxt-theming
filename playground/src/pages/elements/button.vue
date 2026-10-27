<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const loading = ref(false)

function simulate() {
  loading.value = true
  setTimeout(() => { loading.value = false }, 1800)
}

const variants = ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link'] as const
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div>
    <PageHeader
      title="Button"
      description="The most tactile component in the system: raised at rest, lifted on hover, pressed into the surface on click."
      badge="Element"
    />

    <div class="space-y-10">
      <Demo title="Variants" description="Solid buttons keep their semantic fill; flat variants drop the shadow.">
        <div class="flex flex-wrap items-center gap-3">
          <UButton
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            :label="variant"
            class="capitalize"
          />
        </div>
      </Demo>

      <Demo title="Colors" description="Seven semantic aliases, each available in every variant.">
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <UButton v-for="color in colors" :key="color" :color="color" :label="color" class="capitalize" />
          </div>
          <div class="flex flex-wrap gap-2">
            <UButton v-for="color in colors" :key="color" :color="color" variant="soft" :label="color" class="capitalize" />
          </div>
        </div>
      </Demo>

      <Demo title="Sizes">
        <div class="flex flex-wrap items-end gap-3">
          <UButton v-for="size in sizes" :key="size" :size="size" :label="size" color="neutral" variant="soft" class="uppercase" />
        </div>
      </Demo>

      <Demo title="Icons & avatars">
        <div class="flex flex-wrap items-center gap-3">
          <UButton icon="i-lucide-plus" label="New project" />
          <UButton icon="i-lucide-download" label="Download" color="neutral" variant="soft" />
          <UButton trailing-icon="i-lucide-arrow-right" label="Continue" color="neutral" variant="outline" />
          <UButton icon="i-lucide-star" color="warning" variant="soft" square aria-label="Favourite" />
          <UButton icon="i-lucide-trash-2" color="error" variant="soft" square aria-label="Delete" />
          <UButton
            :avatar="{ src: 'https://github.com/nuxt.png', alt: 'Nuxt' }"
            label="Nuxt"
            color="neutral"
            variant="soft"
          />
        </div>
      </Demo>

      <Demo title="States">
        <div class="flex flex-wrap items-center gap-3">
          <UButton label="Normal" />
          <UButton label="Disabled" disabled />
          <UButton label="Soft disabled" color="neutral" variant="soft" disabled />
          <UButton :loading="loading" label="Saving" @click="simulate" />
          <UButton icon="i-lucide-loader-circle" loading color="neutral" variant="soft" square aria-label="Loading" />
        </div>
        <p class="mt-4 text-xs text-muted">Click “Saving” to see the pressed and loading states.</p>
      </Demo>

      <Demo title="Layout">
        <div class="space-y-4">
          <UButton block label="Block button" icon="i-lucide-check" />
          <div class="flex gap-2">
            <UButton class="flex-1" label="Cancel" color="neutral" variant="soft" />
            <UButton class="flex-1" label="Confirm" />
          </div>
        </div>
      </Demo>

      <Demo title="On a surface" description="Buttons float above cards thanks to the shared clay palette.">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl bg-default p-4 surface-well-sm">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Inset well</p>
            <div class="mt-3 flex gap-2">
              <UButton size="sm" label="Accept" />
              <UButton size="sm" label="Decline" color="neutral" variant="soft" />
            </div>
          </div>
          <div class="rounded-2xl bg-default p-4 surface-card">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Raised card</p>
            <div class="mt-3 flex gap-2">
              <UButton size="sm" label="Accept" />
              <UButton size="sm" label="Decline" color="neutral" variant="soft" />
            </div>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
