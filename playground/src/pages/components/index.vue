<script setup lang="ts">
import { catalog, catalogCount } from '../../data/catalog.generated'
</script>

<template>
  <div>
    <header class="mb-8">
      <div class="flex flex-wrap items-center gap-3">
        <h1 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">All components</h1>
        <UBadge :label="`${catalogCount} re-exported`" color="primary" variant="soft" />
      </div>
      <p class="mt-2 max-w-2xl text-sm text-muted sm:text-base">
        Every public Nuxt UI component is exported with a <code class="text-primary">Neu</code> prefix and
        inherits the neumorphic theme. Items with a page have a dedicated showcase; the rest are
        available with the same styling.
      </p>
    </header>

    <div class="space-y-8">
      <section v-for="group in catalog" :key="group.label">
        <div class="mb-3 flex items-center gap-2">
          <div class="grid size-8 place-items-center rounded-lg bg-default neu-raised-sm">
            <UIcon :name="group.icon" class="size-4 text-primary" />
          </div>
          <h2 class="text-sm font-semibold uppercase tracking-widest text-toned">{{ group.label }}</h2>
          <span class="text-xs text-dimmed">{{ group.items.length }}</span>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <component
            :is="item.to ? 'RouterLink' : 'div'"
            v-for="item in group.items"
            :key="item.name"
            :to="item.to"
            class="group flex items-center gap-3 rounded-2xl bg-default px-4 py-3"
            :class="item.to ? 'neu-raised-sm transition-transform hover:-translate-y-0.5' : 'neu-inset-sm'"
          >
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-semibold text-highlighted">
                Neu{{ item.name }}
              </p>
              <p class="truncate text-xs text-muted">{{ item.description }}</p>
            </div>
            <UBadge
              v-if="item.to"
              label="demo"
              color="primary"
              variant="soft"
              size="sm"
            />
            <UBadge
              v-else
              label="theme"
              color="neutral"
              variant="soft"
              size="sm"
            />
          </component>
        </div>
      </section>
    </div>
  </div>
</template>
