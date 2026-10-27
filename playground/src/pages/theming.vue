<script setup lang="ts">
import Demo from '../components/Demo.vue'
import PageHeader from '../components/PageHeader.vue'

const colors = [
  { name: 'primary', class: 'bg-primary' },
  { name: 'secondary', class: 'bg-secondary' },
  { name: 'success', class: 'bg-success' },
  { name: 'info', class: 'bg-info' },
  { name: 'warning', class: 'bg-warning' },
  { name: 'error', class: 'bg-error' },
  { name: 'neutral', class: 'bg-inverted' }
]

const surfaces = [
  { name: 'neu-raised', description: 'Static card or panel', class: 'neu-raised' },
  { name: 'neu-raised-sm', description: 'Compact chip or key', class: 'neu-raised-sm' },
  { name: 'neu-raised-lg', description: 'Floating menu', class: 'neu-raised-lg' },
  { name: 'neu-raised-xl', description: 'Modal or drawer', class: 'neu-raised-xl' },
  { name: 'neu-inset', description: 'Input or well', class: 'neu-inset' },
  { name: 'neu-inset-sm', description: 'Small control', class: 'neu-inset-sm' },
  { name: 'neu-pressed', description: 'Active / pressed state', class: 'neu-pressed' },
  { name: 'neu-border', description: 'Raised with a seam', class: 'neu-border' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Theming"
      description="Neumorphism is two shadows, one light source and a surface that matches the page. Everything else is tokens you can change."
      badge="Design system"
    />

    <div class="space-y-10">
      <Demo
        title="Semantic colors"
        description="Every Nuxt UI color alias is re-mapped to a soft, slightly desaturated palette. Change them once in neuUI()."
      >
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          <div
            v-for="color in colors"
            :key="color.name"
            class="rounded-2xl bg-default p-3 neu-raised-sm"
          >
            <div class="h-14 rounded-xl" :class="color.class" />
            <p class="mt-2 truncate text-xs font-semibold text-highlighted">{{ color.name }}</p>
            <p class="text-[11px] text-dimmed">color</p>
          </div>
        </div>

        <pre class="mt-5 overflow-x-auto rounded-2xl bg-default p-4 text-xs leading-relaxed text-toned neu-inset"><code>// vite.config.ts
neuUI({
  ui: {
    colors: { primary: 'teal', neutral: 'zinc' }
  }
})</code></pre>
      </Demo>

      <Demo
        title="Surface utilities"
        description="The theme is built from a handful of reusable surface classes. Use them in your own components."
      >
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div
            v-for="surface in surfaces"
            :key="surface.name"
            class="flex h-24 flex-col items-center justify-center gap-1 rounded-2xl bg-default text-center"
            :class="surface.class"
          >
            <code class="text-[11px] font-semibold text-highlighted">.{{ surface.name }}</code>
            <span class="px-2 text-[10px] leading-tight text-muted">{{ surface.description }}</span>
          </div>
        </div>
      </Demo>

      <Demo
        title="CSS variables"
        description="Surfaces and shadows are driven by custom properties, so dark mode is a variable swap — no duplicated utilities."
      >
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="rounded-2xl bg-default p-4 neu-inset">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Light</p>
            <pre class="mt-2 text-xs leading-relaxed text-toned"><code>--neu-bg: #e4eaf2;
--neu-shadow-light: #ffffff;
--neu-shadow-dark: #aab8cc;
--ui-radius: 0.35rem;</code></pre>
          </div>
          <div class="dark rounded-2xl bg-default p-4 neu-inset">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Dark</p>
            <pre class="mt-2 text-xs leading-relaxed text-toned"><code>--neu-bg: #2b303a;
--neu-shadow-light: #3e4655;
--neu-shadow-dark: #14171c;
--ui-radius: 0.35rem;</code></pre>
          </div>
        </div>

        <p class="mt-4 text-sm text-muted">
          Prefer your own palette? Override the variables after importing the theme:
        </p>

        <pre class="mt-3 overflow-x-auto rounded-2xl bg-default p-4 text-xs leading-relaxed text-toned neu-inset"><code>@import "tailwindcss";
@import "@nuxt/ui";
@import "@neu-nuxt/ui/theme.css";

:root {
  --neu-bg: #ece7ff;
  --neu-shadow-light: #ffffff;
  --neu-shadow-dark: #c6bde6;
}</code></pre>
      </Demo>

      <Demo
        title="Usage modes"
        description="Pick the integration that matches your app: build-time, runtime or scoped."
      >
        <div class="grid gap-4 lg:grid-cols-3">
          <div class="rounded-2xl bg-default p-4 neu-inset-sm">
            <p class="text-sm font-semibold text-highlighted">Build-time</p>
            <p class="mt-1 text-xs text-muted">Recommended. Full theme including variants and color aliases.</p>
            <code class="mt-3 block text-xs text-primary">neuUI()</code>
          </div>
          <div class="rounded-2xl bg-default p-4 neu-inset-sm">
            <p class="text-sm font-semibold text-highlighted">Runtime</p>
            <p class="mt-1 text-xs text-muted">Registers all Neu* components and applies the theme.</p>
            <code class="mt-3 block text-xs text-primary">app.use(NeuUI)</code>
            <p class="mt-2 text-[10px] leading-tight text-dimmed">
              Without <code>neuUI()</code>, add
              <code class="text-primary">@source "../node_modules/@neu-nuxt/ui/src/theme";</code>
              to your CSS.
            </p>
          </div>
          <div class="rounded-2xl bg-default p-4 neu-inset-sm">
            <p class="text-sm font-semibold text-highlighted">Scoped</p>
            <p class="mt-1 text-xs text-muted">Wrap a subtree — or the whole app — with the provider.</p>
            <code class="mt-3 block text-xs text-primary">&lt;NeuProvider&gt;</code>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
