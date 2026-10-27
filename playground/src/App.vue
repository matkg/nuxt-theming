<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NeuProvider } from '@neu-nuxt/ui'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'
import { navigation } from './data/navigation'
import { useSkinState } from './composables/skin'
import { closeSearch, openSearch, searchOpen } from './composables/search'

const router = useRouter()
const route = useRoute()
useSkinState()

const mobileOpen = ref(false)
const searchValue = ref('')
const searchTerm = ref('')

const searchGroups = computed(() =>
  navigation.map(group => ({
    id: group.label,
    label: group.label,
    items: group.items.map(item => ({
      label: item.label,
      icon: item.icon,
      to: item.to
    }))
  }))
)

function onSelect(value: unknown) {
  if (typeof value === 'string' && value) {
    router.push(value)
  }
  searchOpen.value = false
  searchTerm.value = ''
}

defineShortcuts({
  meta_k: openSearch,
  ctrl_k: openSearch,
  escape: closeSearch
})

watch(() => route.fullPath, () => {
  mobileOpen.value = false
  closeSearch()
})
</script>

<template>
  <NeuProvider>
    <div class="min-h-svh surface-canvas">
      <AppHeader @search="openSearch" @toggle-sidebar="mobileOpen = true" />

      <div class="mx-auto flex w-full max-w-[110rem] gap-10 px-4 sm:px-6 lg:px-8">
        <aside class="hidden w-64 shrink-0 py-8 lg:block">
          <div class="sticky top-24 max-h-[calc(100svh-7rem)] overflow-y-auto pe-2 pb-8">
            <AppSidebar />
          </div>
        </aside>

        <main class="min-w-0 flex-1 py-8 lg:py-10">
          <RouterView v-slot="{ Component }">
            <Transition
              mode="out-in"
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              leave-active-class="transition duration-100 ease-in"
              leave-to-class="opacity-0"
            >
              <component :is="Component" />
            </Transition>
          </RouterView>
        </main>
      </div>

      <AppFooter />

      <USlideover
        v-model:open="mobileOpen"
        side="left"
        :ui="{ content: 'max-w-[19rem] bg-default' }"
      >
        <template #body>
          <AppSidebar />
        </template>
      </USlideover>

      <Teleport to="body">
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0"
          leave-active-class="transition duration-150 ease-in"
          leave-to-class="opacity-0"
        >
          <div
            v-if="searchOpen"
            class="fixed inset-0 z-[100] flex justify-center px-4 pt-[10vh] pb-4 surface-overlay"
            @click.self="searchOpen = false"
          >
            <div class="flex max-h-[min(70vh,34rem)] w-full max-w-xl self-start flex-col overflow-hidden rounded-3xl bg-default surface-deck">
              <UCommandPalette
                v-model="searchValue"
                v-model:search-term="searchTerm"
                :groups="searchGroups"
                value-key="to"
                class="min-h-0"
                :close="false"
                placeholder="Search components and pages…"
                @update:model-value="onSelect"
              />
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </NeuProvider>
</template>
