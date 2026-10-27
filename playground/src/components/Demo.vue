<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  padded?: boolean
}>(), {
  padded: true
})
</script>

<template>
  <section class="space-y-3">
    <header v-if="title || description || $slots.actions" class="flex flex-wrap items-end justify-between gap-3">
      <div class="min-w-0">
        <h2 v-if="title" class="text-base font-semibold text-highlighted">{{ title }}</h2>
        <p v-if="description" class="mt-0.5 text-sm text-muted">{{ description }}</p>
      </div>
      <slot name="actions" />
    </header>

    <div
      class="rounded-3xl bg-default neu-raised"
      :class="padded ? 'p-5 sm:p-6' : ''"
    >
      <slot />
    </div>
  </section>
</template>
