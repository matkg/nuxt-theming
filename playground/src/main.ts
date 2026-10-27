import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import NeuUI from '@neu-nuxt/ui'
import App from './App.vue'
import { routes } from './router'

// GitHub Pages serves 404.html for unknown paths. It redirects here with the
// original path in `?redirect=…`; restore that path before the router boots.
const redirect = new URLSearchParams(window.location.search).get('redirect')
if (redirect?.startsWith('/')) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  window.history.replaceState(null, '', `${base}${redirect}`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

const app = createApp(App)

app.use(router)
app.use(ui)
app.use(NeuUI)

app.mount('#app')
