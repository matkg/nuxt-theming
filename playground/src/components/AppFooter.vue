<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-16 border-t border-default/60">
    <div class="mx-auto flex w-full max-w-[110rem] flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-2.5">
        <span class="grid size-8 place-items-center rounded-lg bg-default surface-card">
          <span class="size-2.5 rounded-full bg-primary" />
        </span>
        <p class="text-sm text-muted">
          <span class="font-semibold text-highlighted">neu/ui</span> — a skin system for Nuxt UI.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-1">
        <UButton to="/components" variant="ghost" color="neutral" size="sm">Components</UButton>
        <UButton to="/theming" variant="ghost" color="neutral" size="sm">Theming</UButton>
        <UButton to="https://ui.nuxt.com" target="_blank" variant="ghost" color="neutral" size="sm" trailing-icon="i-lucide-arrow-up-right">
          Nuxt UI
        </UButton>
        <span class="ms-2 text-xs text-dimmed">© {{ year }}</span>
      </div>
    </div>
  </footer>
</template>
