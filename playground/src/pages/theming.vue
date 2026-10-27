<script setup lang="ts">
import Demo from '../components/Demo.vue'
import PageHeader from '../components/PageHeader.vue'
import { skinOptions, useSkinState } from '../composables/skin'

const { skin, setSkin } = useSkinState()

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
  { name: 'surface-panel', description: 'Page panel / card', class: 'surface-panel' },
  { name: 'surface-card', description: 'Compact chip or key', class: 'surface-card' },
  { name: 'surface-deck-sm', description: 'Floating menu', class: 'surface-deck-sm' },
  { name: 'surface-deck', description: 'Modal or drawer', class: 'surface-deck' },
  { name: 'surface-well', description: 'Input or well', class: 'surface-well' },
  { name: 'surface-well-sm', description: 'Small control', class: 'surface-well-sm' },
  { name: 'surface-pressed', description: 'Active / pressed', class: 'surface-pressed' },
  { name: 'surface-nav', description: 'Navigation item', class: 'surface-nav' },
  { name: 'surface-header', description: 'Sticky app header', class: 'surface-header' },
  { name: 'surface-canvas', description: 'Page background', class: 'surface-canvas' }
]

const installs = {
  neumorphism: {
    name: 'Neumorphism',
    icon: 'i-lucide-circle-dot',
    description: 'Dual shadows, one light source, pressed-in inputs. The default skin.',
    css: '@import "@neu-nuxt/ui/skins/neumorphism.css";',
    var: '--neu-bg: #e4eaf2;'
  },
  glass: {
    name: 'Glassmorphism',
    icon: 'i-lucide-scan-line',
    description: 'Translucent frosted panels, hairline borders and soft depth on an aurora canvas.',
    css: '@import "@neu-nuxt/ui/skins/glass.css";',
    var: '--glass-surface: #ffffff8c;'
  },
  'neo-brutalism': {
    name: 'Neo Brutalism',
    icon: 'i-lucide-zap',
    description: 'Thick ink borders, hard offset shadows and flat blocks of saturated colour on dotted paper.',
    css: '@import "@neu-nuxt/ui/skins/neo-brutalism.css";',
    var: '--brutal-accent-yellow: #ffd93d;'
  }
} as const

const usage = [
  {
    title: 'Build-time',
    description: 'Pick a skin in your Vite config. Scans theme sources and sets data-skin automatically.',
    code: "import { skin } from '@neu-nuxt/ui/vite'\n// plugins: [vue(), skin('glass')]"
  },
  {
    title: 'Runtime',
    description: 'Switch skins without rebuilding. NeuProvider sets data-skin and applies the theme.',
    code: "app.use(NeuUI, { skin: 'glass' })\n// or: <NeuProvider skin=\"glass\">"
  },
  {
    title: 'Imperative',
    description: 'Swap from anywhere — the reactive app config updates every component.',
    code: "import { applySkin } from '@neu-nuxt/ui'\napplySkin('neumorphism')"
  }
]
</script>

<template>
  <div>
    <PageHeader
      title="Skins & theming"
      description="A skin is a Nuxt UI theme plus its design tokens and surface utilities. Components stay the same; the surface language changes."
      badge="Design system"
    />

    <div class="space-y-10">
      <Demo title="Skins" description="Three skins ship in this package. Switch at runtime — no reload.">
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="option in skinOptions"
            :key="option.value"
            class="rounded-2xl p-5 transition-transform"
            :class="skin === option.value ? 'surface-well' : 'surface-card'"
          >
            <div class="flex items-start gap-3">
              <div class="grid size-10 shrink-0 place-items-center rounded-xl bg-default surface-card">
                <UIcon :name="installs[option.value as keyof typeof installs].icon" class="size-5 text-primary" />
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <p class="text-sm font-semibold text-highlighted">{{ option.label }}</p>
                  <UBadge v-if="skin === option.value" label="active" color="success" variant="soft" size="sm" />
                </div>
                <p class="mt-1 text-xs leading-relaxed text-muted">
                  {{ installs[option.value as keyof typeof installs].description }}
                </p>
                <code class="mt-2 block truncate text-[10px] text-dimmed">
                  {{ installs[option.value as keyof typeof installs].css }}
                </code>
              </div>
            </div>

            <UButton
              class="mt-4"
              size="sm"
              :variant="skin === option.value ? 'soft' : 'solid'"
              :color="skin === option.value ? 'neutral' : 'primary'"
              :label="skin === option.value ? 'Active' : `Switch to ${option.label}`"
              :disabled="skin === option.value"
              @click="setSkin(option.value)"
            />
          </div>
        </div>

        <p class="mt-4 text-xs text-muted">
          The showcase persists your choice and sets
          <code class="text-primary">data-skin</code> on <code>&lt;html&gt;</code> so scoped skin CSS can activate.
        </p>
      </Demo>

      <Demo
        title="Shared surface utilities"
        description="Pages should use these skin-agnostic classes. Each skin maps them to its own visual language."
      >
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <div
            v-for="surface in surfaces"
            :key="surface.name"
            class="flex h-24 flex-col items-center justify-center gap-1 rounded-2xl bg-default text-center"
            :class="[surface.class, surface.name === 'surface-nav' ? 'is-active' : '']"
          >
            <code class="px-1 text-[11px] font-semibold text-highlighted">.{{ surface.name }}</code>
            <span class="px-2 text-[10px] leading-tight text-muted">{{ surface.description }}</span>
          </div>
        </div>

        <pre class="mt-5 overflow-x-auto rounded-2xl bg-default p-4 text-xs leading-relaxed text-toned surface-well"><code>// neumorphism maps .surface-panel to a dual-shadow clay panel
// glass maps the same class to a translucent, blurred deck
// neo-brutalism maps it to a thick ink border with a hard offset shadow
&lt;div class="surface-panel rounded-2xl"&gt;…&lt;/div&gt;</code></pre>
      </Demo>

      <Demo
        title="Design tokens"
        description="Surfaces, borders, blur and shadows are CSS variables. Dark mode is a variable swap."
      >
        <div class="grid gap-4 lg:grid-cols-3">
          <div class="rounded-2xl bg-default p-4 surface-well">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Neumorphism · light</p>
            <pre class="mt-2 text-xs leading-relaxed text-toned"><code>--neu-bg: #e4eaf2;
--neu-shadow-light: #ffffff;
--neu-shadow-dark: #aab8cc;
--ui-radius: 0.35rem;</code></pre>
          </div>
          <div class="rounded-2xl bg-default p-4 surface-well">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Glassmorphism · light</p>
            <pre class="mt-2 text-xs leading-relaxed text-toned"><code>--glass-surface: #ffffff8c;
--glass-blur: 16px;
--glass-border: #ffffff61;
--glass-shadow: #0f172a1f;</code></pre>
          </div>
          <div class="rounded-2xl bg-default p-4 surface-well">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Neo Brutalism · light</p>
            <pre class="mt-2 text-xs leading-relaxed text-toned"><code>--brutal-accent-yellow: #ffd93d;
--brutal-border-width: 3px;
--brutal-shadow: 5px 5px 0 0 #111;
--ui-radius: 0px;</code></pre>
          </div>
        </div>

        <p class="mt-4 text-sm text-muted">
          Override tokens after importing the skin stylesheet:
        </p>

        <pre class="mt-3 overflow-x-auto rounded-2xl bg-default p-4 text-xs leading-relaxed text-toned surface-well"><code>@import "tailwindcss";
@import "@nuxt/ui";
@import "@neu-nuxt/ui/skins/neumorphism.css";
@import "@neu-nuxt/ui/skins/glass.css";
@import "@neu-nuxt/ui/skins/neo-brutalism.css";

[data-skin='neo-brutalism'] {
  --brutal-border-width: 4px;
  --ui-primary: #ffd93d;
}</code></pre>
      </Demo>

      <Demo
        title="Semantic colors"
        description="Every Nuxt UI color alias is available in every skin. Override them globally or per skin."
      >
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          <div
            v-for="color in colors"
            :key="color.name"
            class="rounded-2xl bg-default p-3 surface-card"
          >
            <div class="h-14 rounded-xl" :class="color.class" />
            <p class="mt-2 truncate text-xs font-semibold text-highlighted">{{ color.name }}</p>
            <p class="text-[11px] text-dimmed">color</p>
          </div>
        </div>

        <pre class="mt-5 overflow-x-auto rounded-2xl bg-default p-4 text-xs leading-relaxed text-toned surface-well"><code>// vite.config.ts
skin({
  skin: 'glass',
  ui: {
    colors: { primary: 'violet', neutral: 'zinc' }
  }
})</code></pre>
      </Demo>

      <Demo
        title="Integration modes"
        description="Pick build-time, runtime or imperative. Every mode applies the full theme, variants included."
      >
        <div class="grid gap-4 lg:grid-cols-3">
          <div
            v-for="mode in usage"
            :key="mode.title"
            class="rounded-2xl bg-default p-4 surface-well-sm"
          >
            <p class="text-sm font-semibold text-highlighted">{{ mode.title }}</p>
            <p class="mt-1 text-xs leading-relaxed text-muted">{{ mode.description }}</p>
            <pre class="mt-3 overflow-x-auto rounded-xl bg-default p-2.5 text-[10px] leading-relaxed text-toned surface-well"><code>{{ mode.code }}</code></pre>
          </div>
        </div>

        <p class="mt-4 text-xs text-muted">
          Runtime mode alone still needs Tailwind's <code class="text-primary">@source</code> for the theme
          sources. The Vite plugin injects it automatically; otherwise add
          <code class="text-primary">@source "../node_modules/@neu-nuxt/ui/src/skins";</code> to your CSS.
        </p>
      </Demo>
    </div>
  </div>
</template>
