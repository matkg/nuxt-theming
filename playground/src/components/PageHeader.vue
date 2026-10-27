<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  badge?: string
}>()
</script>

<template>
  <header class="mb-8 flex flex-wrap items-start justify-between gap-4">
    <div class="min-w-0">
      <div class="flex items-center gap-2">
        <h1 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">{{ title }}</h1>
        <UBadge v-if="badge" :label="badge" color="primary" variant="soft" size="sm" />
      </div>
      <p v-if="description" class="mt-2 max-w-2xl text-sm text-muted sm:text-base">{{ description }}</p>
    </div>
    <slot name="actions" />
  </header>
</template>
