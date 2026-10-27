<script setup lang="ts">
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const nav = [
  { label: 'Overview', icon: 'i-lucide-layout-dashboard', active: true },
  { label: 'Projects', icon: 'i-lucide-folder' },
  { label: 'Members', icon: 'i-lucide-users' },
  { label: 'Settings', icon: 'i-lucide-settings' }
]

const rows = [
  { name: 'Button', status: 'Stable' },
  { name: 'Input', status: 'Stable' },
  { name: 'Table', status: 'Beta' },
  { name: 'Timeline', status: 'New' }
]
</script>

<template>
  <div>
    <PageHeader
      title="App shell"
      description="The same layout this showcase uses: a sticky header, a raised navigation rail, inset content wells and floating actions."
      badge="Layout"
    />

    <div class="space-y-10">
      <Demo title="Dashboard preview" :padded="false">
        <div class="overflow-hidden rounded-3xl bg-default">
          <div class="flex h-[28rem]">
            <aside class="hidden w-52 shrink-0 flex-col border-e border-default/60 p-3 sm:flex">
              <div class="flex items-center gap-2 px-2 py-1">
                <span class="grid size-8 place-items-center rounded-lg bg-default neu-raised-sm">
                  <span class="size-2.5 rounded-full bg-primary" />
                </span>
                <span class="text-sm font-semibold text-highlighted">neu/ui</span>
              </div>

              <nav class="mt-6 space-y-1.5">
                <a
                  v-for="item in nav"
                  :key="item.label"
                  href="#"
                  class="neu-nav flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium"
                  :class="item.active ? 'is-active text-highlighted' : 'text-muted'"
                  @click.prevent
                >
                  <UIcon :name="item.icon" class="size-4" :class="item.active ? 'text-primary' : 'text-dimmed'" />
                  {{ item.label }}
                </a>
              </nav>

              <div class="mt-auto rounded-2xl bg-default p-3 neu-inset">
                <div class="flex items-center gap-2">
                  <UAvatar src="https://github.com/nuxt.png" size="xs" />
                  <div class="min-w-0">
                    <p class="truncate text-xs font-semibold text-highlighted">Nuxt UI</p>
                    <p class="truncate text-[10px] text-dimmed">Pro workspace</p>
                  </div>
                </div>
              </div>
            </aside>

            <div class="flex min-w-0 flex-1 flex-col">
              <header class="flex h-14 shrink-0 items-center gap-3 border-b border-default/60 px-4">
                <UInput icon="i-lucide-search" placeholder="Search…" size="sm" class="w-full max-w-xs" />
                <div class="ms-auto flex items-center gap-2">
                  <UBadge label="v0.1.0" color="neutral" variant="soft" />
                  <UButton icon="i-lucide-bell" color="neutral" variant="soft" square size="sm" aria-label="Notifications" />
                  <UButton icon="i-lucide-plus" size="sm" label="New" />
                </div>
              </header>

              <main class="flex-1 space-y-4 overflow-auto p-4">
                <div class="grid gap-3 sm:grid-cols-3">
                  <div v-for="stat in [
                    { label: 'Components', value: '122', icon: 'i-lucide-shapes' },
                    { label: 'Coverage', value: '94%', icon: 'i-lucide-gauge' },
                    { label: 'Build', value: '2.8s', icon: 'i-lucide-zap' }
                  ]" :key="stat.label" class="rounded-2xl bg-default p-3 neu-raised-sm">
                    <div class="flex items-center justify-between">
                      <p class="text-[10px] font-semibold uppercase tracking-widest text-dimmed">{{ stat.label }}</p>
                      <UIcon :name="stat.icon" class="size-4 text-primary" />
                    </div>
                    <p class="mt-1 text-xl font-semibold text-highlighted">{{ stat.value }}</p>
                  </div>
                </div>

                <div class="rounded-2xl bg-default p-3 neu-inset-sm">
                  <div class="mb-2 flex items-center justify-between">
                    <p class="text-xs font-semibold text-highlighted">Recent components</p>
                    <UBadge label="live" color="success" variant="soft" size="sm" />
                  </div>
                  <div class="space-y-2">
                    <div
                      v-for="row in rows"
                      :key="row.name"
                      class="flex items-center gap-3 rounded-xl bg-default px-3 py-2 neu-raised-sm"
                    >
                      <div class="grid size-7 place-items-center rounded-lg bg-default neu-inset-sm">
                        <UIcon name="i-lucide-component" class="size-3.5 text-primary" />
                      </div>
                      <span class="flex-1 text-xs font-medium text-highlighted">{{ row.name }}</span>
                      <UBadge
                        :label="row.status"
                        :color="row.status === 'Stable' ? 'success' : row.status === 'Beta' ? 'warning' : 'primary'"
                        variant="soft"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Demo>

      <Demo title="Anatomy" description="Three surfaces, one light source: chrome, content wells and floating actions.">
        <div class="grid gap-4 sm:grid-cols-3">
          <div class="rounded-2xl bg-default p-4 neu-raised-sm">
            <p class="text-sm font-semibold text-highlighted">Chrome</p>
            <p class="mt-1 text-xs text-muted">Header and rail use raised surfaces with subdued borders.</p>
          </div>
          <div class="rounded-2xl bg-default p-4 neu-inset-sm">
            <p class="text-sm font-semibold text-highlighted">Content wells</p>
            <p class="mt-1 text-xs text-muted">Lists and forms sit in inset wells to recede from the chrome.</p>
          </div>
          <div class="rounded-2xl bg-primary/10 p-4">
            <p class="text-sm font-semibold text-highlighted">Actions</p>
            <p class="mt-1 text-xs text-muted">Primary buttons are the only filled, colored surfaces.</p>
          </div>
        </div>
      </Demo>

      <Demo title="Nuxt UI layout components" description="Every one of these is themed and available as a Neu* export.">
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="name in ['Header', 'Main', 'Footer', 'Sidebar', 'Container', 'Page', 'PageHero', 'PageSection', 'PageCard', 'DashboardGroup', 'DashboardSidebar', 'DashboardNavbar', 'DashboardPanel', 'DashboardToolbar']" :key="name" class="flex items-center gap-3 rounded-xl bg-default px-3 py-2 neu-inset-sm">
            <UIcon name="i-lucide-layout-template" class="size-4 text-primary" />
            <code class="text-xs text-toned">Neu{{ name }}</code>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
