<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const framework = ref('nuxt')
const multi = ref(['vue', 'nuxt'])
const user = ref('nuxt')
const tags = ref(['neumorphic', 'vue', 'nuxt-ui'])

const frameworks = [
  { label: 'Nuxt', value: 'nuxt', icon: 'i-lucide-hexagon' },
  { label: 'Vue', value: 'vue', icon: 'i-lucide-component' },
  { label: 'React', value: 'react', icon: 'i-lucide-atom' },
  { label: 'Svelte', value: 'svelte', icon: 'i-lucide-flame' },
  { label: 'Solid', value: 'solid', icon: 'i-lucide-box' }
]

const users = [
  { label: 'Nuxt', value: 'nuxt', avatar: { src: 'https://github.com/nuxt.png', alt: 'Nuxt' } },
  { label: 'Vue', value: 'vue', avatar: { src: 'https://github.com/vuejs.png', alt: 'Vue' } },
  { label: 'Vite', value: 'vite', avatar: { src: 'https://github.com/vitejs.png', alt: 'Vite' } },
  { label: 'Reka UI', value: 'reka', avatar: { src: 'https://github.com/reka-ui.png', alt: 'Reka' } }
]
</script>

<template>
  <div>
    <PageHeader
      title="Select"
      description="Dropdown surfaces float above the page with a deep, soft shadow. Every option row is a rounded pill."
      badge="Form"
    />

    <div class="space-y-10">
      <Demo title="Select">
        <div class="grid gap-3 sm:grid-cols-2">
          <USelect v-model="framework" :items="frameworks" placeholder="Pick a framework" class="w-full" />
          <USelect v-model="multi" :items="frameworks" multiple placeholder="Pick several" class="w-full" />
          <USelect :items="frameworks" placeholder="Disabled" disabled class="w-full" />
          <USelect :items="frameworks" placeholder="Loading" loading class="w-full" />
        </div>
      </Demo>

      <Demo title="Select menu" description="A searchable select with avatars.">
        <div class="grid gap-3 sm:grid-cols-2">
          <USelectMenu v-model="user" :items="users" placeholder="Assign to…" class="w-full" />
          <USelectMenu :items="users" multiple placeholder="Team members" class="w-full" />
        </div>
      </Demo>

      <Demo title="Input menu">
        <UInputMenu :items="frameworks" placeholder="Type to filter…" icon="i-lucide-search" class="w-full max-w-sm" />
      </Demo>

      <Demo title="Input tags" description="Tags are small raised chips inside an inset field.">
        <UInputTags v-model="tags" placeholder="Add a tag…" class="w-full max-w-lg" />
        <p class="mt-2 text-xs text-muted">Press Enter to add · Backspace to remove the last tag.</p>
      </Demo>

      <Demo title="In context">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl bg-default p-4 neu-inset-sm">
            <UFormField label="Framework" description="Used for the project template.">
              <USelect v-model="framework" :items="frameworks" class="w-full" />
            </UFormField>
          </div>
          <div class="rounded-2xl bg-default p-4 neu-raised-sm">
            <UFormField label="Assignee">
              <USelectMenu v-model="user" :items="users" class="w-full" />
            </UFormField>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
