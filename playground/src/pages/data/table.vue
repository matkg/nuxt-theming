<script setup lang="ts">
import { h, ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

interface Row {
  id: number
  component: string
  group: string
  status: 'stable' | 'beta' | 'new'
  coverage: number
}

const rows: Row[] = [
  { id: 1, component: 'Button', group: 'Elements', status: 'stable', coverage: 100 },
  { id: 2, component: 'Input', group: 'Forms', status: 'stable', coverage: 100 },
  { id: 3, component: 'Select', group: 'Forms', status: 'stable', coverage: 96 },
  { id: 4, component: 'Table', group: 'Data', status: 'beta', coverage: 84 },
  { id: 5, component: 'Timeline', group: 'Data', status: 'new', coverage: 72 },
  { id: 6, component: 'Modal', group: 'Overlays', status: 'stable', coverage: 100 }
]

const statusColor = {
  stable: 'success',
  beta: 'warning',
  new: 'primary'
} as const

const columns = [
  { accessorKey: 'component', header: 'Component' },
  { accessorKey: 'group', header: 'Group' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: { row: { original: Row } }) =>
      h('span', {}, row.original.status)
  },
  { accessorKey: 'coverage', header: 'Coverage' }
]

const selection = ref<Row[]>([])
</script>

<template>
  <div>
    <PageHeader
      title="Table"
      description="A raised data grid: subtle header tint, hoverable rows and inset-friendly cells."
      badge="Data"
    />

    <div class="space-y-10">
      <Demo title="Basic table">
        <UTable :data="rows" :columns="columns" class="w-full">
          <template #component-cell="{ row }">
            <div class="flex items-center gap-2">
              <div class="grid size-7 place-items-center rounded-lg bg-default surface-well-sm">
                <UIcon name="i-lucide-component" class="size-3.5 text-primary" />
              </div>
              <span class="font-medium text-highlighted">{{ row.original.component }}</span>
            </div>
          </template>

          <template #group-cell="{ row }">
            <UBadge :label="row.original.group" color="neutral" variant="soft" size="sm" />
          </template>

          <template #status-cell="{ row }">
            <UBadge
              :label="row.original.status"
              :color="statusColor[row.original.status]"
              variant="soft"
              size="sm"
              class="capitalize"
            />
          </template>

          <template #coverage-cell="{ row }">
            <div class="flex items-center gap-2">
              <UProgress :model-value="row.original.coverage" size="xs" class="w-16" />
              <span class="text-xs text-muted">{{ row.original.coverage }}%</span>
            </div>
          </template>
        </UTable>
      </Demo>

      <Demo title="Selectable">
        <UTable v-model:row-selection="selection" :data="rows" :columns="columns.slice(0, 3)" class="w-full" />
        <p class="mt-3 text-xs text-muted">Selected: {{ selection.length }} row(s)</p>
      </Demo>

      <Demo title="Loading & empty">
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl bg-default p-4 surface-well-sm">
            <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-dimmed">Loading</p>
            <UTable :data="[]" :columns="columns.slice(0, 3)" loading loading-color="primary" class="w-full" />
          </div>
          <div class="rounded-2xl bg-default p-4 surface-well-sm">
            <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-dimmed">Empty</p>
            <UTable :data="[]" :columns="columns.slice(0, 3)" class="w-full" />
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
