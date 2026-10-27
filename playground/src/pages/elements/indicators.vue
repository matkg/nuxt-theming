<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const kbdVariants = ['solid', 'outline', 'soft', 'subtle'] as const
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const
const chips = ['primary', 'success', 'warning', 'error'] as const
</script>

<template>
  <div>
    <PageHeader
      title="Indicators"
      description="Keys, progress, skeletons, chips and dividers — the small pieces that make a soft surface feel alive."
      badge="Element"
    />

    <div class="space-y-10">
      <Demo title="Kbd">
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <UKbd v-for="variant in kbdVariants" :key="variant" :variant="variant" :label="variant" class="capitalize" />
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <UKbd v-for="size in ['sm', 'md', 'lg'] as const" :key="size" :size="size" :label="size" />
            <span class="ms-2 text-sm text-muted">Press</span>
            <UKbd>⌘</UKbd>
            <UKbd>K</UKbd>
            <span class="text-sm text-muted">to search</span>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <UKbd v-for="color in colors" :key="color" :color="color" :label="color" class="capitalize" />
          </div>
        </div>
      </Demo>

      <Demo title="Progress">
        <div class="space-y-6">
          <div v-for="color in colors.slice(0, 4)" :key="color">
            <div class="mb-2 flex items-center justify-between text-xs text-muted">
              <span class="capitalize">{{ color }}</span>
              <span class="font-semibold text-highlighted">72%</span>
            </div>
            <UProgress :model-value="72" :color="color" />
          </div>

          <div class="flex flex-wrap items-center gap-6">
            <UProgress :model-value="35" size="xs" class="w-32" />
            <UProgress :model-value="55" size="sm" class="w-32" />
            <UProgress :model-value="75" size="lg" class="w-32" />
            <UProgress :model-value="90" size="xl" class="w-32" />
          </div>

          <UProgress :model-value="64" status />
        </div>
      </Demo>

      <Demo title="Skeleton">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="space-y-3 rounded-2xl bg-default p-4 neu-inset-sm">
            <div class="flex items-center gap-3">
              <USkeleton class="size-10 rounded-full" />
              <div class="flex-1 space-y-2">
                <USkeleton class="h-3 w-1/2" />
                <USkeleton class="h-3 w-3/4" />
              </div>
            </div>
            <USkeleton class="h-20 w-full rounded-2xl" />
          </div>
          <div class="space-y-3 rounded-2xl bg-default p-4 neu-inset-sm">
            <USkeleton class="h-4 w-2/3" />
            <USkeleton class="h-3 w-full" />
            <USkeleton class="h-3 w-5/6" />
            <div class="flex gap-2 pt-2">
              <USkeleton class="h-8 w-24 rounded-xl" />
              <USkeleton class="h-8 w-24 rounded-xl" />
            </div>
          </div>
        </div>
      </Demo>

      <Demo title="Chip">
        <div class="flex flex-wrap items-center gap-6">
          <UChip v-for="color in chips" :key="color" :color="color" :text="color[0]!.toUpperCase()" size="2xl">
            <UAvatar :alt="color.slice(0, 2).toUpperCase()" size="lg" />
          </UChip>
          <UChip color="primary" inset size="2xl">
            <div class="grid size-12 place-items-center rounded-xl bg-default neu-raised-sm">
              <UIcon name="i-lucide-bell" class="size-5 text-primary" />
            </div>
          </UChip>
          <UChip color="success" standalone size="lg" />
        </div>
      </Demo>

      <Demo title="Separator">
        <div class="space-y-6">
          <USeparator />
          <USeparator label="Section" />
          <USeparator icon="i-lucide-sparkles" label="With icon" />
          <USeparator type="dashed" color="primary" />
          <div class="flex h-10 items-center gap-4">
            <span class="text-sm text-muted">Left</span>
            <USeparator orientation="vertical" />
            <span class="text-sm text-muted">Right</span>
            <USeparator orientation="vertical" color="primary" size="sm" />
            <span class="text-sm text-muted">End</span>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
