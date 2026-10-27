<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const notifications = ref(true)
const darkMode = ref(false)
const volume = ref(64)
const price = ref(129)
const rating = ref(4)
</script>

<template>
  <div>
    <PageHeader
      title="Slider & Switch"
      description="Toggles and ranges use a pressed track with a raised thumb — the most physical part of the system."
      badge="Form"
    />

    <div class="space-y-10">
      <Demo title="Switch">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="space-y-5">
            <USwitch v-model="notifications" label="Notifications" description="Product updates and tips." />
            <USwitch v-model="darkMode" label="Dark mode" description="Follows the surface variables." />
            <USwitch :model-value="true" label="Enabled and disabled" disabled />
          </div>
          <div class="space-y-5">
            <div class="flex flex-wrap items-center gap-4">
              <USwitch v-for="color in ['primary', 'secondary', 'success', 'warning', 'error'] as const" :key="color" :color="color" :model-value="true" />
            </div>
            <div class="flex flex-wrap items-center gap-4">
              <USwitch v-for="size in ['xs', 'sm', 'md', 'lg', 'xl'] as const" :key="size" :size="size" :model-value="true" />
            </div>
          </div>
        </div>
      </Demo>

      <Demo title="Slider">
        <div class="grid gap-8 sm:grid-cols-2">
          <div class="space-y-6">
            <UFormField label="Volume" :hint="`${volume}%`">
              <USlider v-model="volume" />
            </UFormField>
            <UFormField label="Primary">
              <USlider :model-value="42" />
            </UFormField>
            <UFormField label="Success">
              <USlider :model-value="66" color="success" />
            </UFormField>
          </div>

          <div class="space-y-6">
            <div class="flex items-center gap-6">
              <USlider :model-value="25" size="sm" class="w-full" />
              <span class="text-xs text-muted">sm</span>
            </div>
            <div class="flex items-center gap-6">
              <USlider :model-value="70" size="lg" class="w-full" />
              <span class="text-xs text-muted">lg</span>
            </div>
            <div class="flex items-center gap-6">
              <USlider :model-value="50" disabled class="w-full" />
              <span class="text-xs text-muted">disabled</span>
            </div>
          </div>
        </div>
      </Demo>

      <Demo title="Input number">
        <div class="grid gap-3 sm:grid-cols-2">
          <UInputNumber v-model="price" :min="0" :step="10" class="w-full" />
          <UInputNumber :default-value="12" orientation="vertical" class="w-full" />
          <UInputNumber :default-value="3" :min="0" :max="10" size="sm" class="w-full" />
          <UInputNumber :default-value="1" disabled class="w-full" />
        </div>
      </Demo>

      <Demo title="Input rating">
        <div class="flex flex-wrap items-center gap-8">
          <UInputRating v-model="rating" />
          <UInputRating :model-value="3" color="warning" />
          <UInputRating :model-value="5" size="lg" color="error" />
          <UInputRating :model-value="2" disabled />
        </div>
        <p class="mt-3 text-xs text-muted">Rating: {{ rating }} / 5</p>
      </Demo>
    </div>
  </div>
</template>
