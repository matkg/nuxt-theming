<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader
      title="Page not found"
      description="The page you are looking for does not exist — but the shadows do."
      badge="404"
    />

    <div class="rounded-3xl bg-default neu-raised p-8 text-center sm:p-12">
      <div class="mx-auto grid size-16 place-items-center rounded-2xl bg-default neu-inset">
        <UIcon name="i-lucide-ghost" class="size-7 text-dimmed" />
      </div>
      <p class="mt-4 text-sm text-muted">Try the component catalog instead.</p>
      <div class="mt-5 flex justify-center gap-2">
        <UButton to="/" icon="i-lucide-house">Back home</UButton>
        <UButton to="/components" color="neutral" variant="soft" icon="i-lucide-layout-grid">All components</UButton>
      </div>
    </div>
  </div>
</template>
