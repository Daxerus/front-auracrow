import { createRouter, createWebHistory } from 'vue-router'
import paths from './paths'
import { useAuthStore } from '@/stores/auth'

const router = new createRouter({
  history: createWebHistory(),
  routes: paths
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log('Navegando a una ruta /admin')

    const authStore = useAuthStore()

    if (await authStore.isAuthenticated()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
