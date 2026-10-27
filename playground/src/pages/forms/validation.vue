<script setup lang="ts">
import { reactive, ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const toast = useToast()
const state = reactive({ name: '', email: '', role: 'pro' })
const errors = reactive<{ name?: string, email?: string }>({})
const submitted = ref(false)

const roles = [
  { label: 'Starter', value: 'starter' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise' }
]

function onSubmit() {
  errors.name = state.name.trim() ? undefined : 'Please enter your name'
  errors.email = /\S+@\S+\.\S+/.test(state.email) ? undefined : 'Please enter a valid email'
  submitted.value = !errors.name && !errors.email

  if (submitted.value) {
    toast.add({ title: 'Form submitted', description: `Thanks ${state.name}!`, icon: 'i-lucide-circle-check', color: 'success' })
  }
}
</script>

<template>
  <div>
    <PageHeader
      title="Validation & fields"
      description="FormField keeps labels, hints, help text and error messages coherent — even on an inset surface."
      badge="Form"
    />

    <div class="space-y-10">
      <Demo title="Field anatomy">
        <div class="grid gap-6 sm:grid-cols-2">
          <UFormField label="Default" name="default" description="Helper text below the field.">
            <UInput placeholder="Value" class="w-full" />
          </UFormField>

          <UFormField label="Required" name="required" required hint="Required">
            <UInput placeholder="Value" class="w-full" />
          </UFormField>

          <UFormField label="With error" name="error" error="This value is not valid.">
            <UInput model-value="nope" class="w-full" />
          </UFormField>

          <UFormField label="Horizontal" name="horizontal" orientation="horizontal">
            <USwitch :model-value="true" />
          </UFormField>
        </div>
      </Demo>

      <Demo title="Live validation" description="Submit while empty to see the fields turn red.">
        <UForm :state="state" class="grid gap-5 sm:grid-cols-2" @submit="onSubmit">
          <UFormField label="Name" name="name" required :error="errors.name">
            <UInput v-model="state.name" placeholder="Ada Lovelace" class="w-full" />
          </UFormField>

          <UFormField label="Email" name="email" required :error="errors.email">
            <UInput v-model="state.email" placeholder="ada@example.com" icon="i-lucide-mail" class="w-full" />
          </UFormField>

          <UFormField label="Role" name="role" class="sm:col-span-2">
            <USelect v-model="state.role" :items="roles" class="w-full" />
          </UFormField>

          <div class="flex items-center gap-3 sm:col-span-2">
            <UButton type="submit" icon="i-lucide-check" label="Submit" />
            <UButton type="reset" color="neutral" variant="soft" label="Reset" @click="state.name = ''; state.email = ''; errors.name = undefined; errors.email = undefined" />
            <UBadge v-if="submitted" label="Valid" color="success" variant="soft" icon="i-lucide-circle-check" />
          </div>
        </UForm>
      </Demo>

      <Demo title="Server errors" description="Errors can be attached to any field, including server responses.">
        <div class="grid gap-5 sm:grid-cols-2">
          <UFormField label="API key" name="api" error="This key has expired. Generate a new one.">
            <UInput model-value="sk_live_…" icon="i-lucide-key-round" class="w-full" />
          </UFormField>
          <UFormField label="Webhook URL" name="webhook" hint="Optional">
            <UInput placeholder="https://example.com/hooks" icon="i-lucide-webhook" class="w-full" />
          </UFormField>
        </div>
      </Demo>
    </div>
  </div>
</template>
