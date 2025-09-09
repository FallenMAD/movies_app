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
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/FavouritesView.vue'),
      children: [
        {
          path: ':id',
          name: 'favourite-item',
          component: () => import('../views/FavouriteItemView.vue'),
        },
      ],
    },
    {
      path: '/rated',
      name: 'rated',
      component: () => import('../views/RatedView.vue'),
      children: [
        {
          path: ':id',
          name: 'rated-item',
          component: () => import('../views/RatedItemView.vue'),
        },
      ],
    },
  ],
})

export default router
