<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const open = ref(true)

const getKey = (item: { label: string }) => item.label

const treeItems = [
  {
    label: 'src',
    icon: 'i-lucide-folder-open',
    children: [
      { label: 'components', icon: 'i-lucide-folder', children: [
        { label: 'AppHeader.vue', icon: 'i-lucide-file-code' },
        { label: 'AppSidebar.vue', icon: 'i-lucide-file-code' }
      ] },
      { label: 'pages', icon: 'i-lucide-folder', children: [
        { label: 'index.vue', icon: 'i-lucide-file-code' }
      ] },
      { label: 'main.ts', icon: 'i-lucide-file-code-2' }
    ]
  },
  { label: 'package.json', icon: 'i-lucide-file-json' },
  { label: 'vite.config.ts', icon: 'i-lucide-file-cog' }
]
</script>

<template>
  <div>
    <PageHeader
      title="User & tree"
      description="Stacked avatars, name/description pairs and a nested tree — all with the same clay surfaces."
      badge="Data"
    />

    <div class="space-y-10">
      <Demo title="User">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="space-y-4">
            <UUser
              name="Sébastien Chopin"
              description="Co-founder, Nuxt"
              :avatar="{ src: 'https://github.com/atinux.png', alt: 'Sébastien' }"
              size="xl"
            />
            <UUser
              name="Evan You"
              description="Creator, Vue.js"
              :avatar="{ src: 'https://github.com/yyx990803.png', alt: 'Evan' }"
              size="lg"
            />
            <UUser
              name="Nuxt UI"
              description="Design system"
              :avatar="{ src: 'https://github.com/nuxt.png', alt: 'Nuxt' }"
              size="md"
            />
          </div>
          <div class="flex flex-col items-center justify-center gap-6 rounded-2xl bg-default p-6 neu-inset-sm">
            <UUser
              orientation="vertical"
              name="Ada Lovelace"
              description="First programmer"
              :avatar="{ alt: 'AL' }"
              size="2xl"
            />
            <div class="flex -space-x-2">
              <UAvatar src="https://github.com/nuxt.png" size="sm" />
              <UAvatar src="https://github.com/vuejs.png" size="sm" />
              <UAvatar src="https://github.com/vitejs.png" size="sm" />
              <UAvatar alt="+9" size="sm" />
            </div>
          </div>
        </div>
      </Demo>

      <Demo title="Collapsible">
        <UCollapsible v-model:open="open">
          <UButton
            :label="open ? 'Hide details' : 'Show details'"
            :trailing-icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            color="neutral"
            variant="soft"
          />
          <template #content>
            <div class="mt-4 rounded-2xl bg-default p-5 text-sm text-muted neu-inset-sm">
              Collapsibles animate their height. The content surface is inset so the trigger stays
              visually raised while the panel opens underneath.
            </div>
          </template>
        </UCollapsible>
      </Demo>

      <Demo title="Tree">
        <div class="rounded-2xl bg-default p-4 neu-inset-sm">
          <UTree :items="treeItems" :get-key="getKey" :default-expanded="['src']" />
        </div>
      </Demo>
    </div>
  </div>
</template>
