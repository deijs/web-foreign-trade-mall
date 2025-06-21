/*
 * @Author: Loong wentloop@gmail.com
 * @Date: 2025-06-17 23:14:33
 * @LastEditors: Loong wentloop@gmail.com
 * @LastEditTime: 2025-06-20 23:08:51
 * @FilePath: \web-foreign-trade-mall\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// import ProductListPage from '../pages/home/components/ProductListPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue'),
    },
    // {
    //   path: '/category/:categoryId/:subcategoryName',
    //   name: 'product-list',
    //   component: ProductListPage,
    //   props: true,
    // },
  ],
})

export default router
