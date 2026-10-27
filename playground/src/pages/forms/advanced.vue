<script setup lang="ts">
import { ref } from 'vue'
import { Time, getLocalTimeZone, today } from '@internationalized/date'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const date = ref(today(getLocalTimeZone()))
const time = ref(new Time(9, 30))
const pin = ref('')
const color = ref('#6366f1')
const files = ref<File[]>([])
</script>

<template>
  <div>
    <PageHeader
      title="Advanced forms"
      description="Calendars, segmented inputs, pin codes, uploads and color pickers — all reskinned with inset surfaces."
      badge="Form"
    />

    <div class="space-y-10">
      <Demo title="Calendar">
        <div class="grid gap-6 lg:grid-cols-[auto_1fr]">
          <UCalendar v-model="date" class="rounded-2xl bg-default p-3 neu-inset-sm" />
          <div class="space-y-4">
            <p class="text-sm text-muted">
              The calendar is a raised panel with inset day cells. Selected days switch to the
              primary fill while keeping their shadow.
            </p>
            <div class="rounded-2xl bg-default p-4 neu-inset-sm">
              <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Selected</p>
              <p class="mt-1 font-mono text-sm text-highlighted">{{ date.toString() }}</p>
            </div>
            <UButton icon="i-lucide-calendar-plus" label="Add to schedule" />
          </div>
        </div>
      </Demo>

      <Demo title="Date & time">
        <div class="grid gap-4 sm:grid-cols-2">
          <UFormField label="Date">
            <UInputDate v-model="date" class="w-full" />
          </UFormField>
          <UFormField label="Time">
            <UInputTime v-model="time" class="w-full" />
          </UFormField>
        </div>
      </Demo>

      <Demo title="Pin input">
        <div class="flex flex-col items-center gap-4">
          <UPinInput v-model="pin" :length="6" otp />
          <p class="font-mono text-sm text-muted">Value: {{ pin || '—' }}</p>
          <UBadge :label="pin.length === 6 ? 'Complete' : `${pin.length}/6 digits`" :color="pin.length === 6 ? 'success' : 'neutral'" variant="soft" />
        </div>
      </Demo>

      <Demo title="File upload">
        <UFileUpload v-model="files" multiple layout="grid" label="Drop files here" description="SVG, PNG, JPG up to 10MB" class="w-full" />
      </Demo>

      <Demo title="Color picker">
        <div class="flex flex-wrap items-center gap-6">
          <UColorPicker v-model="color" />
          <div class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-widest text-dimmed">Value</p>
            <div class="flex items-center gap-2 rounded-xl bg-default px-3 py-2 neu-inset-sm">
              <span class="size-4 rounded-md ring-1 ring-black/10" :style="{ backgroundColor: color }" />
              <code class="font-mono text-sm text-highlighted">{{ color }}</code>
            </div>
          </div>
        </div>
      </Demo>
    </div>
  </div>
</template>
