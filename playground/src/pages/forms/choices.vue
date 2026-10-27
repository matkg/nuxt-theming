<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const single = ref(true)
const terms = ref(false)
const selected = ref(['vue'])
const cardSelection = ref<Record<string, boolean>>({ vue: true, nuxt: false, vite: false })
const plan = ref('pro')

const options = [
  { label: 'Vue', value: 'vue', icon: 'i-lucide-component' },
  { label: 'Nuxt', value: 'nuxt', icon: 'i-lucide-hexagon' },
  { label: 'Vite', value: 'vite', icon: 'i-lucide-zap' }
]

const plans = [
  { label: 'Starter', value: 'starter', description: 'For side projects', icon: 'i-lucide-seedling' },
  { label: 'Pro', value: 'pro', description: 'For growing teams', icon: 'i-lucide-rocket' },
  { label: 'Enterprise', value: 'enterprise', description: 'Advanced controls', icon: 'i-lucide-building-2' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Choices"
      description="Checkboxes and radios are pressed-in squares and circles that pop out when selected."
      badge="Form"
    />

    <div class="space-y-10">
      <Demo title="Checkbox">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="space-y-4">
            <UCheckbox v-model="single" label="Subscribe to the newsletter" />
            <UCheckbox v-model="terms" label="I accept the terms" description="You can change this later." />
            <UCheckbox :model-value="true" label="Checked and disabled" disabled />
            <UCheckbox :model-value="false" label="Unchecked and disabled" disabled />
          </div>

          <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <UCheckbox v-for="color in ['primary', 'secondary', 'success', 'warning', 'error'] as const" :key="color" :color="color" :model-value="true" :label="color" class="capitalize" />
            </div>
            <div class="flex flex-wrap items-end gap-3">
              <UCheckbox v-for="size in ['xs', 'sm', 'md', 'lg', 'xl'] as const" :key="size" :size="size" :model-value="true" :label="size" />
            </div>
          </div>
        </div>
      </Demo>

      <Demo title="Checkbox card">
        <div class="grid gap-3 sm:grid-cols-3">
          <UCheckbox
            v-for="option in options"
            :key="option.value"
            v-model="cardSelection[option.value]"
            :label="option.label"
            :icon="option.icon"
            variant="card"
          />
        </div>
      </Demo>

      <Demo title="Checkbox group">
        <UCheckboxGroup
          v-model="selected"
          legend="Frameworks"
          description="Pick every framework you use."
          :items="options"
          orientation="horizontal"
        />
      </Demo>

      <Demo title="Radio group">
        <div class="grid gap-6 lg:grid-cols-2">
          <URadioGroup v-model="plan" legend="Plan" :items="plans" />
          <URadioGroup v-model="plan" legend="Plan cards" :items="plans" variant="card" />
        </div>
        <p class="mt-3 text-xs text-muted">Selected plan: <span class="font-semibold text-highlighted">{{ plan }}</span></p>
      </Demo>

      <Demo title="Radio list">
        <URadioGroup
          v-model="plan"
          :items="plans.map(p => ({ label: p.label, value: p.value }))"
          orientation="horizontal"
        />
      </Demo>
    </div>
  </div>
</template>
