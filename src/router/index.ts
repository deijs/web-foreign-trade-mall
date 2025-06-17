import { createRouter, createWebHistory } from 'vue-router'
import ProductListPage from '../pages/home/components/ProductListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/category/:categoryId/:subcategoryName',
      name: 'product-list',
      component: ProductListPage,
      props: true,
    },
  ],
})

export default router
