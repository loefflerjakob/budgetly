import { createRouter, createWebHistory } from 'vue-router'
import FormPage from '@/views/FormPage.vue'
import MainPage from '@/views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main Page',
    component: MainPage,
  },
  {
    path: '/form',
    name: 'Form',
    component: FormPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
