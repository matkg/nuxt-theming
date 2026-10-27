<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const popoverOpen = ref(false)
const toast = useToast()

function notify(label: string) {
  toast.add({ title: label, description: 'This action came from a floating menu.', icon: 'i-lucide-mouse-pointer-click', color: 'primary' })
}

const menuItems = [
  [
    { label: 'Edit', icon: 'i-lucide-pencil', kbds: ['meta', 'e'], onSelect: () => notify('Edit') },
    { label: 'Duplicate', icon: 'i-lucide-copy', kbds: ['meta', 'd'], onSelect: () => notify('Duplicate') }
  ],
  [
    { label: 'Archive', icon: 'i-lucide-archive', onSelect: () => notify('Archive') },
    { label: 'Move to project', icon: 'i-lucide-folder-input', children: [
      { label: 'neu/ui', icon: 'i-lucide-hexagon', onSelect: () => notify('Moved to neu/ui') },
      { label: 'playground', icon: 'i-lucide-flask-conical', onSelect: () => notify('Moved to playground') }
    ] }
  ],
  [
    { label: 'Delete', icon: 'i-lucide-trash-2', color: 'error' as const, onSelect: () => notify('Delete') }
  ]
]

const contextItems = [
  { label: 'Copy link', icon: 'i-lucide-link', onSelect: () => notify('Copy link') },
  { label: 'Open in new tab', icon: 'i-lucide-external-link', onSelect: () => notify('Open in new tab') },
  { label: 'Inspect', icon: 'i-lucide-code', onSelect: () => notify('Inspect') }
]
</script>

<template>
  <div>
    <PageHeader
      title="Menus & tooltips"
      description="Floating surfaces use the largest shadow in the system so they clearly sit above the page."
      badge="Overlay"
    />

    <div class="space-y-10">
      <Demo title="Dropdown menu">
        <UDropdownMenu :items="menuItems">
          <UButton label="Actions" icon="i-lucide-ellipsis" color="neutral" variant="soft" trailing-icon="i-lucide-chevron-down" />
        </UDropdownMenu>
      </Demo>

      <Demo title="Context menu" description="Right-click the card.">
        <UContextMenu :items="contextItems">
          <div class="grid h-40 cursor-context-menu place-items-center rounded-2xl bg-default text-sm text-muted surface-well-sm">
            <div class="text-center">
              <UIcon name="i-lucide-mouse-pointer-2" class="mx-auto size-6 text-dimmed" />
              <p class="mt-2">Right-click anywhere on this surface</p>
            </div>
          </div>
        </UContextMenu>
      </Demo>

      <Demo title="Popover">
        <UPopover v-model:open="popoverOpen">
          <UButton label="Open popover" icon="i-lucide-message-square" color="neutral" variant="soft" />

          <template #content>
            <div class="w-72 space-y-4 p-4">
              <div>
                <p class="text-sm font-semibold text-highlighted">Quick filter</p>
                <p class="text-xs text-muted">Applies to the current component list.</p>
              </div>
              <UFormField label="Search">
                <UInput placeholder="Button, input…" icon="i-lucide-search" class="w-full" size="sm" />
              </UFormField>
              <UCheckbox label="Only show demos" :model-value="true" />
              <div class="flex gap-2">
                <UButton size="sm" label="Reset" color="neutral" variant="soft" class="flex-1" />
                <UButton size="sm" label="Apply" class="flex-1" @click="popoverOpen = false" />
              </div>
            </div>
          </template>
        </UPopover>
      </Demo>

      <Demo title="Tooltip">
        <div class="flex flex-wrap items-center gap-3">
          <UTooltip text="Edit this component">
            <UButton icon="i-lucide-pencil" color="neutral" variant="soft" square aria-label="Edit" />
          </UTooltip>
          <UTooltip text="Copy to clipboard" :kbds="['meta', 'c']">
            <UButton icon="i-lucide-copy" color="neutral" variant="soft" square aria-label="Copy" />
          </UTooltip>
          <UTooltip text="Delete permanently">
            <UButton icon="i-lucide-trash-2" color="error" variant="soft" square aria-label="Delete" />
          </UTooltip>
        </div>
      </Demo>
    </div>
  </div>
</template>
