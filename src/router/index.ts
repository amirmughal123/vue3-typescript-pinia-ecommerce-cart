import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/Products.vue'
import Product from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/detail/:id',
      name: 'Product',
      component: Product
    }
  ]
})

export default router
