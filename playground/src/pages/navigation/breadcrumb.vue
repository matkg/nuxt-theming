<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const page = ref(1)

const items = [
  { label: 'Home', icon: 'i-lucide-house', to: '/' },
  { label: 'Components', icon: 'i-lucide-layout-grid', to: '/components' },
  { label: 'Navigation', icon: 'i-lucide-compass', to: '/navigation/tabs' },
  { label: 'Breadcrumb' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Breadcrumb & Pagination"
      description="Wayfinding components with rounded hover pills and raised page buttons."
      badge="Navigation"
    />

    <div class="space-y-10">
      <Demo title="Breadcrumb">
        <div class="space-y-6">
          <UBreadcrumb :items="items" />
          <UBreadcrumb :items="items.slice(0, 2)" />
          <UBreadcrumb :items="items" :ui="{ link: 'text-primary' }" />
        </div>
      </Demo>

      <Demo title="Pagination">
        <div class="space-y-6">
          <UPagination v-model:page="page" :total="120" :items-per-page="10" />
          <UPagination v-model:page="page" :total="64" :items-per-page="8" size="lg" />
          <UPagination v-model:page="page" :total="42" :items-per-page="6" show-edges />
        </div>
        <p class="mt-4 text-xs text-muted">Current page: <span class="font-semibold text-highlighted">{{ page }}</span></p>
      </Demo>

      <Demo title="In context">
        <div class="rounded-2xl bg-default p-4 surface-card">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <UBreadcrumb :items="items" />
            <UPagination v-model:page="page" :total="120" :items-per-page="10" size="sm" />
          </div>
          <USeparator class="my-4" />
          <div class="space-y-2">
            <div v-for="row in 3" :key="row" class="flex items-center gap-3 rounded-xl bg-default px-3 py-2 surface-well-sm">
              <USkeleton class="size-7 rounded-full" />
              <div class="flex-1 space-y-1.5">
                <USkeleton class="h-2.5 w-1/3" />
                <USkeleton class="h-2.5 w-2/3" />
              </div>
              <UBadge label="draft" color="neutral" variant="soft" size="sm" />
            </div>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
