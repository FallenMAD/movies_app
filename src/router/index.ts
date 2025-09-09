import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/popular',
      name: 'popular',
      component: () => import('../views/PopularView.vue'),
      children: [
        {
          path: ':id',
          name: 'popular-item',
          component: () => import('../views/PopularItemView.vue'),
        },
      ],
    },
    {
      path: '/top-rated',
      name: 'top-rated',
      component: () => import('../views/TopRatedView.vue'),
      children: [
        {
          path: ':id',
          name: 'top-rated-item',
          component: () => import('../views/TopRatedItemView.vue'),
        },
      ],
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: () => import('../views/UpcomingView.vue'),
      children: [
        {
          path: ':id',
          name: 'upcoming-item',
          component: () => import('../views/UpcomingItemView.vue'),
        },
      ],
    },
  ],
})

export default router
