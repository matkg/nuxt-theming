<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader
      title="Page blocks"
      description="Marketing and documentation primitives: heroes, sections, cards, empty states and containers."
      badge="Layout"
    />

    <div class="space-y-10">
      <Demo title="Page hero" :padded="false">
        <UPageHero
          title="Build softer interfaces"
          description="A hero block with a headline, description and two calls to action — all inheriting the active skin's surfaces."
          :links="[
            { label: 'Get started', to: '/elements/button', icon: 'i-lucide-rocket' },
            { label: 'Theming', to: '/theming', color: 'neutral', variant: 'soft', icon: 'i-lucide-palette' }
          ]"
          class="py-10"
        >
          <template #headline>
            <UBadge label="New" color="primary" variant="soft" icon="i-lucide-sparkles" />
          </template>
        </UPageHero>
      </Demo>

      <Demo title="Page card">
        <div class="grid gap-4 sm:grid-cols-3">
          <UPageCard
            title="Raised by default"
            description="Cards lift off the page with a dual shadow and a large radius."
            icon="i-lucide-square"
          />
          <UPageCard
            title="Token driven"
            description="Every surface reads from the same CSS variables."
            icon="i-lucide-palette"
            variant="soft"
          />
          <UPageCard
            title="Composable"
            description="Works with hero, section and grid blocks."
            icon="i-lucide-layers"
            variant="subtle"
          />
        </div>
      </Demo>

      <Demo title="Page section">
        <UPageSection
          title="A section inside a page"
          description="Sections provide vertical rhythm and an optional header area."
          :links="[{ label: 'Learn more', to: '/theming', trailingIcon: 'i-lucide-arrow-right', variant: 'soft', color: 'neutral' }]"
        >
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl bg-default p-4 surface-well-sm">
              <p class="text-sm font-semibold text-highlighted">Inset surface</p>
              <p class="mt-1 text-xs text-muted">For content that should recede.</p>
            </div>
            <div class="rounded-2xl bg-default p-4 surface-card">
              <p class="text-sm font-semibold text-highlighted">Raised surface</p>
              <p class="mt-1 text-xs text-muted">For content that should stand out.</p>
            </div>
          </div>
        </UPageSection>
      </Demo>

      <Demo title="Empty state">
        <UEmpty
          icon="i-lucide-package-open"
          title="No components yet"
          description="Install @neu-nuxt/ui to unlock the full catalog of soft surfaces."
          variant="outline"
          :actions="[
            { label: 'Install', icon: 'i-lucide-download' },
            { label: 'Read the docs', color: 'neutral', variant: 'soft' }
          ]"
        />
      </Demo>

      <Demo title="Container">
        <UContainer class="rounded-2xl bg-default py-4 surface-well-sm">
          <p class="text-center text-sm text-muted">
            <code class="text-primary">UContainer</code> centers content at the configured max width
            (<code>--ui-container</code>).
          </p>
        </UContainer>
      </Demo>
    </div>
  </div>
</template>
