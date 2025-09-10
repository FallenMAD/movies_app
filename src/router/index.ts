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
      path: RoutePaths.POPULAR,
      component: () => import('../views/RootView.vue'),
      children: [
        {
          path: '',
          name: 'popular',
          component: () => import('../views/PopularView.vue'),
        },
        {
          path: ':id',
          name: 'popular-item',
          component: () => import('../views/PopularItemView.vue'),
        },
      ],
    },
    {
      path: RoutePaths.TOP_RATED,
      component: () => import('../views/RootView.vue'),
      children: [
        {
          path: '',
          name: 'top-rated',
          component: () => import('../views/TopRatedView.vue'),
        },
        {
          path: ':id',
          name: 'top-rated-item',
          component: () => import('../views/TopRatedItemView.vue'),
        },
      ],
    },
    {
      path: RoutePaths.UPCOMING,
      component: () => import('../views/RootView.vue'),
      children: [
        {
          path: '',
          name: 'upcoming',
          component: () => import('../views/UpcomingView.vue'),
        },
        {
          path: ':id',
          name: 'upcoming-item',
          component: () => import('../views/UpcomingItemView.vue'),
        },
      ],
    },
    {
      path: RoutePaths.NOT_FOUND,
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
