<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const toast = useToast()

function basic() {
  toast.add({
    title: 'Settings saved',
    description: 'Your neumorphic preferences have been stored.',
    icon: 'i-lucide-circle-check',
    color: 'success'
  })
}

function withActions() {
  toast.add({
    title: 'File uploaded',
    description: 'component-map.json is ready to import.',
    icon: 'i-lucide-upload',
    color: 'info',
    actions: [
      { label: 'Undo', color: 'neutral', variant: 'soft', size: 'sm', onClick: () => {} },
      { label: 'Open', size: 'sm', onClick: () => {} }
    ]
  })
}

function error() {
  toast.add({
    title: 'Deploy failed',
    description: 'The build could not reach the registry.',
    icon: 'i-lucide-circle-x',
    color: 'error'
  })
}

async function promise() {
  toast.add({
    title: 'Publishing theme',
    description: 'Uploading tokens…',
    icon: 'i-lucide-loader-circle',
    color: 'primary',
    duration: 1600
  })
  await new Promise(resolve => setTimeout(resolve, 1600))
  toast.add({
    title: 'Theme published',
    description: 'All 126 components are up to date.',
    icon: 'i-lucide-sparkles',
    color: 'success'
  })
}

function warning() {
  toast.add({
    title: 'Contrast warning',
    description: 'This surface is slightly lighter than the page background.',
    icon: 'i-lucide-triangle-alert',
    color: 'warning'
  })
}
</script>

<template>
  <div>
    <PageHeader
      title="Toast"
      description="Toasts stack as floating clay cards in the bottom-right corner. The viewport, animation and swipe gestures are Nuxt UI's."
      badge="Overlay"
    />

    <div class="space-y-10">
      <Demo title="Basic">
        <div class="flex flex-wrap gap-3">
          <UButton label="Success toast" color="success" variant="soft" icon="i-lucide-circle-check" @click="basic" />
          <UButton label="Info toast" color="info" variant="soft" icon="i-lucide-info" @click="withActions" />
          <UButton label="Error toast" color="error" variant="soft" icon="i-lucide-circle-x" @click="error" />
          <UButton label="Warning toast" color="warning" variant="soft" icon="i-lucide-triangle-alert" @click="warning" />
        </div>
      </Demo>

      <Demo title="Async">
        <UButton label="Run async task" icon="i-lucide-loader-circle" @click="promise" />
      </Demo>

      <Demo title="Anatomy" description="Each toast is a raised card with an icon, title, description and optional actions.">
        <div class="mx-auto max-w-md rounded-2xl bg-default p-4 surface-deck">
          <div class="flex gap-2.5">
            <UIcon name="i-lucide-circle-check" class="mt-0.5 size-5 shrink-0 text-success" />
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium text-highlighted">Settings saved</p>
              <p class="mt-1 text-sm text-muted">Your neumorphic preferences have been stored.</p>
              <div class="mt-3 flex gap-1.5">
                <UButton size="sm" color="neutral" variant="soft" label="Undo" />
                <UButton size="sm" label="Open" />
              </div>
            </div>
            <UButton icon="i-lucide-x" color="neutral" variant="ghost" size="sm" square aria-label="Close" />
          </div>
        </div>
        <p class="mt-4 text-center text-xs text-muted">This static preview mirrors the real toast theme.</p>
      </Demo>
    </div>
  </div>
</template>
