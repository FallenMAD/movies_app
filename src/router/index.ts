import { createRouter, createWebHistory } from 'vue-router'
import { RoutePaths } from '../types/AppRouterPaths.enum'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePaths.HOME,
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: RoutePaths.CATEGORY,
      component: () => import('../views/RootView.vue'),
      children: [
        {
          path: '',
          name: 'movie',
          component: () => import('../views/MovieView.vue'),
        },
        {
          path: ':id',
          name: 'movie-item',
          component: () => import('../views/MovieItemView.vue'),
        },
      ],
    },
    {
      path: RoutePaths.NOT_FOUND,
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 100)
      })
    } else {
      return { top: 0 }
    }
  },
})

export default router
