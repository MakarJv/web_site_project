import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomePage')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./views/UserProfile')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('./views/TheMessages')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router