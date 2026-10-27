<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const sizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const
const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'] as const
</script>

<template>
  <div>
    <PageHeader
      title="Avatar"
      description="Profile images, initials and icon fallbacks — each one raised off the surface."
      badge="Element"
    />

    <div class="space-y-10">
      <Demo title="Sizes">
        <div class="flex flex-wrap items-end gap-3">
          <UAvatar
            v-for="size in sizes"
            :key="size"
            :size="size"
            src="https://github.com/nuxt.png"
            alt="Nuxt"
          />
        </div>
      </Demo>

      <Demo title="Fallbacks & colors">
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-3">
            <UAvatar alt="MD" size="xl" />
            <UAvatar alt="NU" color="primary" size="xl" />
            <UAvatar alt="Vue" color="success" size="xl" />
            <UAvatar icon="i-lucide-user" color="neutral" size="xl" />
            <UAvatar icon="i-lucide-bot" color="info" size="xl" />
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <UAvatar v-for="color in colors" :key="color" :color="color" :alt="color.slice(0, 2).toUpperCase()" size="lg" />
          </div>
        </div>
      </Demo>

      <Demo title="Groups & status">
        <div class="flex flex-wrap items-center gap-8">
          <UAvatarGroup size="md" :max="4">
            <UAvatar src="https://github.com/nuxt.png" alt="Nuxt" />
            <UAvatar src="https://github.com/vuejs.png" alt="Vue" />
            <UAvatar src="https://github.com/tailwindlabs.png" alt="Tailwind" />
            <UAvatar src="https://github.com/unjs.png" alt="UnJS" />
            <UAvatar src="https://github.com/vitejs.png" alt="Vite" />
            <UAvatar src="https://github.com/reka-ui.png" alt="Reka" />
          </UAvatarGroup>

          <UChip color="success" inset size="3xl">
            <UAvatar src="https://github.com/nuxt.png" alt="Online" size="xl" />
          </UChip>

          <UChip color="error" inset size="2xl" position="bottom-right">
            <UAvatar icon="i-lucide-user" size="lg" />
          </UChip>
        </div>
      </Demo>

      <Demo title="Avatar with user">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl bg-default p-4 surface-well-sm">
            <UUser
              name="Sébastien Chopin"
              description="Co-founder, Nuxt"
              :avatar="{ src: 'https://github.com/atinux.png', alt: 'Sébastien' }"
              size="lg"
            />
          </div>
          <div class="rounded-2xl bg-default p-4 surface-well-sm">
            <UUser
              name="Evan You"
              description="Creator, Vue.js"
              :avatar="{ src: 'https://github.com/yyx990803.png', alt: 'Evan' }"
              size="lg"
            />
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
