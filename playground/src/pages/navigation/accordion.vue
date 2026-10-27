<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const openItem = ref('what')

const items = [
  {
    label: 'What is neumorphism?',
    value: 'what',
    icon: 'i-lucide-lightbulb',
    content: 'A UI style built on a single surface color with two opposing shadows: a light one from the top-left and a dark one from the bottom-right. Elements look extruded from — or pressed into — the page.'
  },
  {
    label: 'How is it applied to Nuxt UI?',
    value: 'applied',
    icon: 'i-lucide-layers',
    content: 'The library overrides Nuxt UI’s design tokens and theme slots. Buttons, inputs, overlays and data components receive new surfaces, radii and shadows without changing their API.'
  },
  {
    label: 'Does dark mode work?',
    value: 'dark',
    icon: 'i-lucide-sun-moon',
    content: 'Yes. The shadow colors and surfaces are CSS variables that flip in the .dark class. Nothing is hard-coded.'
  }
]
</script>

<template>
  <div>
    <PageHeader
      title="Accordion"
      description="Each panel is its own raised card with generous padding. The chevron rotates in place."
      badge="Navigation"
    />

    <div class="space-y-10">
      <Demo title="Single">
        <UAccordion v-model="openItem" :items="items" :collapsible="true" class="w-full" />
      </Demo>

      <Demo title="Multiple" description="Every panel can be open at the same time.">
        <UAccordion :items="items" type="multiple" :default-value="['what', 'applied']" class="w-full" />
      </Demo>

      <Demo title="With slot content">
        <UAccordion
          :items="[
            { label: 'Package', icon: 'i-lucide-package', slot: 'package', value: 'package' },
            { label: 'Theme', icon: 'i-lucide-palette', slot: 'theme', value: 'theme' }
          ]"
          :default-value="['package']"
          class="w-full"
        >
          <template #package>
            <div class="space-y-2 text-sm text-muted">
              <p>Install the package alongside Nuxt UI:</p>
              <pre class="rounded-xl bg-default p-3 text-xs text-toned surface-well"><code>npm i @neu-nuxt/ui</code></pre>
            </div>
          </template>
          <template #theme>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="color in ['primary', 'secondary', 'success', 'info', 'warning', 'error']" :key="color" :color="color" :label="color" variant="soft" class="capitalize" />
            </div>
          </template>
        </UAccordion>
      </Demo>
    </div>
  </div>
</template>
