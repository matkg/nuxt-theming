<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const variants = ['solid', 'outline', 'soft', 'subtle'] as const
const colors = ['primary', 'success', 'warning', 'error', 'neutral'] as const
</script>

<template>
  <div>
    <PageHeader
      title="Alert"
      description="Inline feedback with a lifted card, tinted icon and optional actions."
      badge="Element"
    />

    <div class="space-y-10">
      <Demo title="Variants">
        <div class="space-y-3">
          <UAlert
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            :title="`${variant[0]!.toUpperCase()}${variant.slice(1)} alert`"
            description="A short description of the situation and what to do next."
            icon="i-lucide-info"
            class="capitalize"
          />
        </div>
      </Demo>

      <Demo title="Semantic colors">
        <div class="space-y-3">
          <UAlert
            v-for="color in colors"
            :key="color"
            :color="color"
            variant="soft"
            :title="`${color[0]!.toUpperCase()}${color.slice(1)}`"
            :description="`This is a ${color} alert, useful for contextual feedback.`"
            :icon="color === 'success' ? 'i-lucide-circle-check' : color === 'warning' ? 'i-lucide-triangle-alert' : color === 'error' ? 'i-lucide-circle-x' : 'i-lucide-info'"
            class="capitalize"
          />
        </div>
      </Demo>

      <Demo title="With actions">
        <UAlert
          title="Update available"
          description="neu/ui 0.2.0 is ready to install. It includes 12 new component overrides."
          icon="i-lucide-arrow-up-circle"
          color="primary"
          variant="soft"
          :actions="[
            { label: 'Update now', color: 'primary', size: 'sm' },
            { label: 'Later', color: 'neutral', variant: 'soft', size: 'sm' }
          ]"
        />
      </Demo>

      <Demo title="Dismissible" description="The close button is itself a raised control.">
        <UAlert
          title="Heads up"
          description="Neumorphism works best on a uniform background — avoid busy gradients behind surfaces."
          icon="i-lucide-lightbulb"
          color="warning"
          variant="subtle"
          close
        />
      </Demo>
    </div>
  </div>
</template>
