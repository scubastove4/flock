import { createWebHistory, createRouter } from 'vue-router'
import TimeCalculator from './src/pages/TimeCalculator.vue'

const routes = [
  { path: '/', component: TimeCalculator, name: 'TimeCalculator' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
