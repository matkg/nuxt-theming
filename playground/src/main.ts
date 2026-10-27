import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import NeuUI from '@neu-nuxt/ui'
import App from './App.vue'
import { routes } from './router'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

const app = createApp(App)

app.use(router)
app.use(ui)
app.use(NeuUI)

app.mount('#app')
