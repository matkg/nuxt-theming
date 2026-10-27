<script setup lang="ts">
import { ref } from 'vue'
import { useSkinState } from '../composables/skin'
import { catalogCount } from '../data/catalog.generated'

const toast = useToast()
const { skin, setSkin } = useSkinState()
const email = ref('')
const remember = ref(true)

const features = [
  { icon: 'i-lucide-shapes', title: 'Every component', description: `All ${catalogCount} public Nuxt UI components re-exported with a Neu prefix. The active skin styles them.` },
  { icon: 'i-lucide-sun-moon', title: 'Light & dark', description: 'Both skins ship light and dark tokens, so switching modes never breaks the surface language.' },
  { icon: 'i-lucide-palette', title: 'Token driven', description: 'Surfaces, borders, blur and shadows live in CSS variables. Re-skin everything from one stylesheet.' },
  { icon: 'i-lucide-accessibility', title: 'Accessible by default', description: 'Built on Reka UI primitives: keyboard support, focus rings and ARIA semantics stay intact.' },
  { icon: 'i-lucide-feather', title: 'No runtime cost', description: 'Skins are class names, not wrapper components. No render overhead and no extra props.' },
  { icon: 'i-lucide-layers', title: 'Composable', description: 'Vite plugin, Vue plugin, scoped provider or imperative switch — pick your entry point.' }
]

const tiles = [
  {
    title: 'Buttons & actions',
    to: '/elements/button',
    icon: 'i-lucide-square-mouse-pointer',
    description: 'Raised, pressed, soft and ghost.'
  },
  {
    title: 'Forms & controls',
    to: '/forms/input',
    icon: 'i-lucide-text-cursor-input',
    description: 'Inset wells for every input.'
  },
  {
    title: 'Overlays',
    to: '/overlays/modal',
    icon: 'i-lucide-layers',
    description: 'Floating panels with deep shadows.'
  },
  {
    title: 'Data display',
    to: '/data/table',
    icon: 'i-lucide-table',
    description: 'Tables, timelines and trees.'
  }
]

function notify() {
  toast.add({
    title: 'Welcome to neu/ui',
    description: 'This toast is rendered by Nuxt UI with the neumorphic theme.',
    icon: 'i-lucide-sparkles',
    color: 'primary'
  })
}
</script>

<template>
  <div class="space-y-16">
    <section class="grid items-center gap-12 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:pt-10">
      <div>
        <UBadge label="Nuxt UI v4 · Vue 3 · 2 skins" color="primary" variant="soft" size="md" icon="i-lucide-sparkles" />
        <h1 class="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-highlighted sm:text-5xl xl:text-6xl">
          Nuxt UI,<br>
          <span class="text-primary">re-skinned.</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          A skin system for Nuxt UI. Every component — from buttons to data tables — is re-exported
          once and re-skinned with design tokens: neumorphism by default, glassmorphism on demand,
          and room for your own presets.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <NeuButton to="/elements/button" size="lg" icon="i-lucide-square-mouse-pointer">
            Explore components
          </NeuButton>
          <NeuButton to="/theming" size="lg" color="neutral" variant="soft" icon="i-lucide-palette">
            Theming
          </NeuButton>
          <UButton
            size="lg"
            color="neutral"
            variant="ghost"
            :icon="skin === 'glass' ? 'i-lucide-circle-dot' : 'i-lucide-scan-line'"
            @click="setSkin(skin === 'glass' ? 'neumorphism' : 'glass')"
          >
            {{ skin === 'glass' ? 'Try neumorphism' : 'Try glassmorphism' }}
          </UButton>
        </div>

        <dl class="mt-12 grid max-w-md grid-cols-3 gap-3">
          <div class="rounded-2xl bg-default surface-card px-4 py-3">
            <dt class="text-[11px] font-semibold uppercase tracking-widest text-dimmed">Components</dt>
            <dd class="mt-1 text-2xl font-semibold text-highlighted">{{ catalogCount }}</dd>
          </div>
          <div class="rounded-2xl bg-default surface-card px-4 py-3">
            <dt class="text-[11px] font-semibold uppercase tracking-widest text-dimmed">Colors</dt>
            <dd class="mt-1 text-2xl font-semibold text-highlighted">7</dd>
          </div>
          <div class="rounded-2xl bg-default surface-card px-4 py-3">
            <dt class="text-[11px] font-semibold uppercase tracking-widest text-dimmed">Skins</dt>
            <dd class="mt-1 text-2xl font-semibold text-highlighted">2+</dd>
          </div>
        </dl>
      </div>

      <div class="relative mx-auto w-full max-w-sm">
        <div class="absolute -inset-8 rounded-[3rem] bg-primary/10 blur-3xl" />

        <div class="relative rounded-[2rem] bg-default surface-deck p-6 sm:p-7">
          <div class="flex items-center gap-3">
            <UAvatar src="https://github.com/nuxt.png" alt="Nuxt" size="lg" />
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-highlighted">Welcome back</p>
              <p class="truncate text-xs text-muted">soft surfaces, sharp focus</p>
            </div>
            <UChip color="success" inset size="lg" class="ms-auto" />
          </div>

          <div class="mt-6 space-y-4">
            <UFormField label="Email" name="email">
              <NeuInput v-model="email" placeholder="you@example.com" icon="i-lucide-mail" class="w-full" />
            </UFormField>

            <UFormField label="Password" name="password">
              <NeuInput type="password" placeholder="••••••••" icon="i-lucide-lock" class="w-full" />
            </UFormField>

            <div class="flex items-center justify-between">
              <NeuCheckbox v-model="remember" label="Remember me" />
              <UButton variant="link" size="sm">Forgot?</UButton>
            </div>

            <NeuButton block size="lg" icon="i-lucide-arrow-right" trailing @click="notify">
              Sign in
            </NeuButton>
          </div>
        </div>

        <div class="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl bg-default px-3 py-2 surface-panel sm:flex">
          <UKbd>⌘</UKbd>
          <UKbd>K</UKbd>
          <span class="text-xs text-muted">Command palette</span>
        </div>

        <div class="absolute -right-4 -top-5 hidden items-center gap-2 rounded-2xl bg-default px-3 py-2 surface-panel sm:flex">
          <span class="size-2 rounded-full bg-success shadow-[0_0_10px] shadow-success/70" />
          <span class="text-xs font-medium text-toned">Dark mode ready</span>
        </div>
      </div>
    </section>

    <section>
      <div class="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-highlighted">One library, two surface languages</h2>
          <p class="mt-1 text-sm text-muted">Swap the skin and every component changes character — the API stays identical.</p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="rounded-3xl bg-default p-5 surface-card"
        >
          <div class="grid size-10 place-items-center rounded-xl bg-default surface-well">
            <UIcon :name="feature.icon" class="size-5 text-primary" />
          </div>
          <h3 class="mt-4 text-sm font-semibold text-highlighted">{{ feature.title }}</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-muted">{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section>
      <div class="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-highlighted">A taste of every surface</h2>
          <p class="mt-1 text-sm text-muted">Jump straight into a group and see the full set of variants.</p>
        </div>
        <UButton to="/components" variant="soft" color="neutral" trailing-icon="i-lucide-arrow-right">
          All components
        </UButton>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <RouterLink
          v-for="tile in tiles"
          :key="tile.to"
          :to="tile.to"
          class="group rounded-3xl bg-default p-5 transition-transform surface-card hover:-translate-y-0.5"
        >
          <div class="flex items-center gap-3">
            <div class="grid size-10 place-items-center rounded-xl bg-default surface-well">
              <UIcon :name="tile.icon" class="size-5 text-primary" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-sm font-semibold text-highlighted">{{ tile.title }}</h3>
              <p class="text-xs text-muted">{{ tile.description }}</p>
            </div>
            <UIcon name="i-lucide-arrow-right" class="size-4 text-dimmed transition-transform group-hover:translate-x-0.5" />
          </div>

          <div class="mt-5 flex flex-wrap items-center gap-2">
            <template v-if="tile.to === '/elements/button'">
              <UButton size="sm">Save</UButton>
              <UButton size="sm" color="neutral" variant="soft">Cancel</UButton>
              <UButton size="sm" color="neutral" variant="ghost">Later</UButton>
            </template>
            <template v-else-if="tile.to === '/forms/input'">
              <UInput placeholder="Search…" icon="i-lucide-search" size="sm" class="w-36" />
              <USwitch default-value />
              <UBadge label="3 new" />
            </template>
            <template v-else-if="tile.to === '/overlays/modal'">
              <UAvatar src="https://github.com/nuxt.png" size="sm" />
              <UAvatar src="https://github.com/vuejs.png" size="sm" />
              <UAvatar alt="+3" size="sm" />
              <UKbd>esc</UKbd>
            </template>
            <template v-else>
              <div class="w-full space-y-2">
                <UProgress :model-value="68" color="primary" size="sm" />
                <div class="flex items-center justify-between text-xs text-muted">
                  <span>Migration progress</span>
                  <span class="font-semibold text-highlighted">68%</span>
                </div>
              </div>
            </template>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="relative overflow-hidden rounded-[2rem] bg-default p-8 surface-panel sm:p-12">
      <div class="absolute -right-24 -top-24 size-64 rounded-full bg-primary/10 blur-3xl" />
      <div class="relative max-w-2xl">
        <h2 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">
          Two lines to a new surface.
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Drop the Vite plugin into your config, import a skin stylesheet — every Nuxt UI
          component instantly switches to that surface language.
        </p>

        <pre class="mt-6 overflow-x-auto rounded-2xl bg-default p-4 text-xs leading-relaxed text-toned surface-well"><code>// vite.config.ts
import { skin } from '@neu-nuxt/ui/vite'

export default defineConfig({
  plugins: [vue(), skin('glass')]
})

/* main.css — import only the skin(s) you use */
@import "tailwindcss";
@import "@nuxt/ui";
@import "@neu-nuxt/ui/skins/glass.css";</code></pre>

        <div class="mt-6 flex flex-wrap gap-3">
          <UButton to="/components" icon="i-lucide-layout-grid">Browse {{ catalogCount }} components</UButton>
          <UButton to="/theming" color="neutral" variant="soft" icon="i-lucide-palette">Customize the theme</UButton>
        </div>
      </div>
    </section>
  </div>
</template>
