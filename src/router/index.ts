import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ProductListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('../views/ShoppingCartView.vue'),
    },
  ],
})

export default router
