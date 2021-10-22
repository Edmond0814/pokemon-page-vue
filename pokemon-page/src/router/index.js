import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemon',
    name: 'Pokemon-Page',
    component: pokemon-page,
  },
  {
    path: '/pokemon/:id',
    name: 'Specific Pokemon page',
    component: specific-pokemon-page,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router