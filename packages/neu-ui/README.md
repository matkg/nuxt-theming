# @neu-nuxt/ui

A **neumorphic (soft UI) skin for [Nuxt UI](https://ui.nuxt.com) v4** — in plain Vue 3.

Every public Nuxt UI component is re-exported with a `Neu` prefix and receives a soft,
clay-like surface: a single page color, dual shadows with a top-left light source, inset
wells for inputs, pressed states for controls and deep floating shadows for overlays.

- 🧱 **122 components** exported — nothing left unstyled
- 🌗 **Light & dark** — surfaces and shadows are CSS variables
- 🎨 **Token driven** — change the whole library from one CSS block
- ⚡ **Zero runtime overhead** — the theme is class names, not wrapper logic
- ♿ **Accessible** — Nuxt UI / Reka UI behaviour is untouched

---

## Installation

```bash
npm install @neu-nuxt/ui
```

Peer dependencies: `vue >= 3.5`, `@nuxt/ui >= 4`, `tailwindcss >= 4`.

## Quick start

### 1. Vite plugin (recommended)

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { neuUI } from '@neu-nuxt/ui/vite'

export default defineConfig({
  plugins: [vue(), neuUI()]
})
```

`neuUI()` wraps `@nuxt/ui/vite` with the neumorphic theme, so it accepts every Nuxt UI
option (`prefix`, `router`, `theme`, `icon`, …) and merges your own overrides on top:

```ts
neuUI({
  ui: {
    colors: { primary: 'teal', neutral: 'zinc' },
    button: { slots: { base: 'rounded-full' } }
  }
})
```

### 2. Styles

```css
/* src/assets/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
@import "@neu-nuxt/ui/theme.css";
```

`theme.css` overrides Nuxt UI's semantic tokens and ships the `neu-*` surface utilities.

### 3. App root

`UApp` is required by Nuxt UI for toasts, tooltips and overlays:

```vue
<template>
  <UApp>
    <RouterView />
  </UApp>
</template>
```

Optionally wrap it in `<NeuProvider>` (applies the theme at runtime — see below):

```vue
<script setup lang="ts">
import { NeuProvider } from '@neu-nuxt/ui'
</script>

<template>
  <NeuProvider>
    <RouterView />
  </NeuProvider>
</template>
```

### 4. Use the components

All Nuxt UI components keep working. `Neu*` exports are the same components, pre-themed:

```vue
<script setup lang="ts">
import { NeuButton, NeuCard, NeuInput } from '@neu-nuxt/ui'
</script>

<template>
  <NeuCard title="Hello">
    <NeuInput placeholder="Soft and pressed…" />
    <NeuButton label="Save" />
  </NeuCard>
</template>
```

…or register every `Neu*` component globally with the Vue plugin:

```ts
// main.ts
import ui from '@nuxt/ui/vue-plugin'
import NeuUI from '@neu-nuxt/ui'

app.use(ui)
app.use(NeuUI, { colors: { primary: 'indigo' } })
```

## Integration modes

| Mode | How | Full theme (variants, colors) | Notes |
| --- | --- | --- | --- |
| Build-time | `neuUI()` Vite plugin | ✅ | Recommended. Injects the Tailwind `@source` for you. |
| Runtime | `app.use(NeuUI)` / `<NeuProvider>` | ✅ | Works without touching `vite.config.ts`. |
| Scoped | `<NeuProvider theme="…">` | ✅ | Themes only the subtree that renders after it. |
| `ui` prop | `:ui="neuComponentUi.button"` | ⚠️ slots only | Variants cannot be expressed through `ui`. |

> **Runtime mode and Tailwind:** component theme files live inside `node_modules`, which
> Tailwind ignores by default. `neuUI()` injects an absolute `@source` for you. If you use
> only `<NeuProvider>` / `app.use(NeuUI)`, add this to your CSS entry:
>
> ```css
> @source "../node_modules/@neu-nuxt/ui/src/theme";
> ```
>
> (adjust the relative path to your CSS file).

## What "neumorphic" means here

| Utility | Use |
| --- | --- |
| `neu-raised-sm` | compact raised chip / key |
| `neu-raised` | card, panel |
| `neu-raised-lg` | floating menu |
| `neu-raised-xl` | modal, drawer, toast |
| `neu-inset-sm` | small control, well |
| `neu-inset` | input, track, empty state |
| `neu-pressed` | active / pressed |
| `neu-button` | raised → hover lift → pressed on click |
| `neu-nav` | flat → hover raise → inset when active |
| `neu-field` | inset form control with a deeper focus state |
| `neu-check`, `neu-track`, `neu-thumb` | checkbox/radio, switch track, thumb |
| `neu-overlay` | blurred clay scrim |
| `neu-canvas` | optional decorative page background |

These are plain CSS classes (not `@layer utilities`) on purpose: they must win over
variant classes such as `shadow-lg` or `ring` that Nuxt UI applies after the theme slots.

Tokens (light):

```css
--neu-bg: #e4eaf2;
--neu-shadow-light: #ffffff;
--neu-shadow-dark: #aab8cc;
--ui-radius: 0.35rem;
```

Dark mode flips the same variables; nothing is duplicated.

## Customising

Global theme overrides use the exact Nuxt UI `app.config.ui` shape:

```ts
neuUI({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'violet',
      neutral: 'slate'
    },
    card: {
      slots: {
        root: 'rounded-[2rem]'
      }
    },
    button: {
      slots: {
        base: 'tracking-wide'
      }
    }
  }
})
```

At runtime:

```ts
app.use(NeuUI, {
  theme: {
    colors: { primary: 'teal' },
    button: { slots: { base: 'rounded-full' } }
  }
})
```

Overrides are deep-merged: your values win, everything else comes from the neumorphic theme.

## Exports

- `NeuButton`, `NeuCard`, `NeuInput`, … — one re-export per public Nuxt UI component (121)
- `NeuChart` — separate entry point, requires the optional peer:

  ```ts
  import { NeuChart } from '@neu-nuxt/ui/chart'
  ```

- `neuTheme` — the raw theme object (app.config shape)
- `resolveNeuTheme(partial)` — merge a partial theme over the defaults
- `neuComponentUi` — flattened slot map for `<UTheme :ui>` / `:ui` props
- `applyNeuTheme(partial?)` — apply the theme to Nuxt UI's reactive app config
- `NeuProvider`, `NeuUI` (default export), `NeuUIPluginOptions`

## Notes

- Built for **Nuxt UI v4** and **Tailwind CSS v4** (CSS-first configuration).
- Dark mode uses the `.dark` class (Nuxt UI's color-mode integration / `useDark`).
- Nuxt UI's own icons, keyboard navigation, focus management and ARIA semantics are preserved.
- The neumorphic look is strongest on a uniform background — avoid putting busy imagery behind cards.

## License

MIT
