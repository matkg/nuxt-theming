<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const modalOpen = ref(false)
const slideoverOpen = ref(false)
const drawerOpen = ref(false)
const name = ref('')
</script>

<template>
  <div>
    <PageHeader
      title="Modal & drawers"
      description="Overlays float on a blurred clay scrim, with deep shadows and large radii. Esc, focus trap and scroll lock come from Reka UI."
      badge="Overlay"
    />

    <div class="space-y-10">
      <Demo title="Modal">
        <UButton label="Open modal" icon="i-lucide-gallery-horizontal-end" @click="modalOpen = true" />

        <UModal v-model:open="modalOpen" title="Create project" description="Give your new workspace a name.">
          <template #body>
            <div class="space-y-4">
              <UFormField label="Project name" name="project">
                <UInput v-model="name" placeholder="neu-dashboard" icon="i-lucide-folder-plus" class="w-full" />
              </UFormField>
              <UFormField label="Visibility" name="visibility" description="You can change this later.">
                <USelect :items="[{ label: 'Private', value: 'private' }, { label: 'Team', value: 'team' }, { label: 'Public', value: 'public' }]" placeholder="Private" class="w-full" />
              </UFormField>
            </div>
          </template>
          <template #footer>
            <div class="flex w-full items-center justify-end gap-2">
              <UButton label="Cancel" color="neutral" variant="ghost" @click="modalOpen = false" />
              <UButton label="Create" icon="i-lucide-plus" @click="modalOpen = false" />
            </div>
          </template>
        </UModal>
      </Demo>

      <Demo title="Slideover">
        <div class="flex flex-wrap gap-3">
          <UButton label="Open slideover" color="neutral" variant="soft" icon="i-lucide-panel-right" @click="slideoverOpen = true" />
        </div>

        <USlideover v-model:open="slideoverOpen" title="Filters" description="Refine the component list.">
          <template #body>
            <div class="space-y-5">
              <UFormField label="Category">
                <USelect :items="['Elements', 'Forms', 'Navigation', 'Overlays', 'Data']" placeholder="All categories" class="w-full" />
              </UFormField>
              <UFormField label="Color">
                <USelect :items="['primary', 'success', 'warning', 'error']" placeholder="Any color" class="w-full" />
              </UFormField>
              <USwitch label="Only with a demo page" :model-value="true" />
              <USeparator />
              <div class="flex gap-2">
                <UButton label="Reset" color="neutral" variant="soft" class="flex-1" />
                <UButton label="Apply" class="flex-1" @click="slideoverOpen = false" />
              </div>
            </div>
          </template>
        </USlideover>
      </Demo>

      <Demo title="Drawer">
        <UButton label="Open drawer" color="neutral" variant="soft" icon="i-lucide-panel-bottom" @click="drawerOpen = true" />

        <UDrawer v-model:open="drawerOpen" title="Share component" description="Pick a destination.">
          <template #body>
            <div class="space-y-3">
              <UButton block color="neutral" variant="soft" icon="i-lucide-link" label="Copy link" />
              <UButton block color="neutral" variant="soft" icon="i-lucide-mail" label="Send by email" />
              <UButton block color="neutral" variant="soft" icon="i-lucide-message-circle" label="Share in chat" />
            </div>
          </template>
        </UDrawer>
      </Demo>

      <Demo title="Composition" description="Overlays on top of cards still keep their shadow separation.">
        <div class="grid gap-4 sm:grid-cols-3">
          <div class="rounded-2xl bg-default p-4 surface-card">
            <p class="text-sm font-semibold text-highlighted">Modal</p>
            <p class="mt-1 text-xs text-muted">Centered dialog, max-w-lg by default.</p>
          </div>
          <div class="rounded-2xl bg-default p-4 surface-card">
            <p class="text-sm font-semibold text-highlighted">Slideover</p>
            <p class="mt-1 text-xs text-muted">Edge panel, great for filters.</p>
          </div>
          <div class="rounded-2xl bg-default p-4 surface-card">
            <p class="text-sm font-semibold text-highlighted">Drawer</p>
            <p class="mt-1 text-xs text-muted">Snap points and a grab handle.</p>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
