import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'
import Map from '../views/Map.vue'

const routes = [
  {
    path: '/',
    name: 'Map',
    component: Map
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
