<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../../components/Demo.vue'
import PageHeader from '../../components/PageHeader.vue'

const name = ref('')
const bio = ref('')
const email = ref('invalid-email')
const variants = ['outline', 'soft', 'subtle', 'ghost', 'none'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div>
    <PageHeader
      title="Input"
      description="Text fields are the signature neumorphic element: the surface is pressed in with an inset shadow."
      badge="Form"
    />

    <div class="space-y-10">
      <Demo title="Variants">
        <div class="grid gap-3 sm:grid-cols-2">
          <UInput v-for="variant in variants" :key="variant" :variant="variant" :placeholder="variant" class="w-full" />
        </div>
      </Demo>

      <Demo title="Sizes">
        <div class="flex flex-col gap-3">
          <UInput v-for="size in sizes" :key="size" :size="size" :placeholder="`Size ${size}`" class="w-full" />
        </div>
      </Demo>

      <Demo title="With icons & avatars">
        <div class="grid gap-3 sm:grid-cols-2">
          <UInput v-model="email" icon="i-lucide-mail" placeholder="you@example.com" class="w-full" />
          <UInput icon="i-lucide-search" placeholder="Search components…" color="primary" class="w-full" />
          <UInput icon="i-lucide-lock" type="password" placeholder="Password" class="w-full" />
          <UInput :avatar="{ src: 'https://github.com/nuxt.png', alt: 'Nuxt' }" placeholder="Assign to…" class="w-full" />
          <UInput loading placeholder="Loading value…" class="w-full" />
          <UInput placeholder="Disabled" disabled class="w-full" />
        </div>
      </Demo>

      <Demo title="Form field">
        <div class="grid gap-6 sm:grid-cols-2">
          <UFormField label="Full name" name="name" hint="Optional" description="As it appears on your ID.">
            <UInput v-model="name" placeholder="Ada Lovelace" class="w-full" />
          </UFormField>

          <UFormField label="Email" name="email" required :error="email && !email.includes('@') ? 'Enter a valid email address' : undefined">
            <UInput v-model="email" icon="i-lucide-mail" class="w-full" />
          </UFormField>
        </div>
      </Demo>

      <Demo title="Textarea">
        <div class="grid gap-4">
          <UTextarea v-model="bio" placeholder="Tell us about your project…" :rows="4" class="w-full" />
          <UTextarea placeholder="Autoresize" autoresize :rows="2" class="w-full" />
        </div>
      </Demo>

      <Demo title="Field group" description="Join an input with a button — the group keeps a single inset surface.">
        <UFieldGroup class="w-full max-w-md">
          <UInput placeholder="your-domain" icon="i-lucide-globe" class="w-full" />
          <UButton label="Check" color="neutral" variant="soft" />
        </UFieldGroup>
      </Demo>
    </div>
  </div>
</template>
