import { createRouter, createWebHistory } from 'vue-router'
import OverviewTable from '../components/OverviewTable.vue'
import FormPage from '../components/FormPage.vue'

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: OverviewTable,
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
