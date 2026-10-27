<script setup lang="ts">
import { computed, ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const query = ref('')

const icons = [
  'house', 'user', 'users', 'settings', 'search', 'bell', 'calendar', 'mail',
  'lock', 'star', 'heart', 'trash-2', 'download', 'upload', 'chevron-right',
  'arrow-right', 'check', 'x', 'plus', 'minus', 'refresh-cw', 'sun', 'moon',
  'cloud', 'database', 'cpu', 'terminal', 'git-branch', 'package', 'shield-check',
  'sparkles', 'layers', 'palette', 'table', 'chart-pie', 'clock', 'map-pin',
  'message-square', 'play', 'pause', 'zap', 'flame', 'leaf', 'rocket', 'wrench'
]

const filtered = computed(() =>
  icons.filter(name => name.includes(query.value.toLowerCase().trim()))
)
</script>

<template>
  <div>
    <PageHeader
      title="Icons"
      description="Icons are provided by Nuxt UI's Icon component and the Lucide collection bundled with this showcase."
      badge="Element"
    />

    <div class="space-y-10">
      <Demo title="Lucide set" description="Search the collection — names are prefixed with i-lucide-.">
        <template #actions>
          <UInput v-model="query" placeholder="Filter icons…" icon="i-lucide-search" size="sm" class="w-52" />
        </template>

        <div class="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          <div
            v-for="name in filtered"
            :key="name"
            class="flex flex-col items-center gap-2 rounded-2xl bg-default px-2 py-4 text-center surface-well-sm"
          >
            <UIcon :name="`i-lucide-${name}`" class="size-6 text-primary" />
            <span class="w-full truncate text-[10px] text-dimmed">{{ name }}</span>
          </div>
        </div>

        <p v-if="!filtered.length" class="py-8 text-center text-sm text-muted">
          No icon matches “{{ query }}”.
        </p>
      </Demo>

      <Demo title="Sizes & colors">
        <div class="space-y-6">
          <div class="flex flex-wrap items-end gap-4">
            <UIcon v-for="size in ['size-4', 'size-5', 'size-6', 'size-8', 'size-10', 'size-12']" :key="size" name="i-lucide-sparkles" :class="[size, 'text-primary']" />
          </div>
          <div class="flex flex-wrap items-center gap-4">
            <UIcon v-for="color in ['text-primary', 'text-secondary', 'text-success', 'text-info', 'text-warning', 'text-error', 'text-muted']" :key="color" name="i-lucide-hexagon" :class="[color, 'size-8']" />
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <div class="grid size-12 place-items-center rounded-2xl bg-default surface-card">
              <UIcon name="i-lucide-package" class="size-5 text-primary" />
            </div>
            <div class="grid size-12 place-items-center rounded-2xl bg-default surface-well">
              <UIcon name="i-lucide-terminal" class="size-5 text-toned" />
            </div>
            <div class="grid size-12 place-items-center rounded-2xl bg-primary/10">
              <UIcon name="i-lucide-zap" class="size-5 text-primary" />
            </div>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
