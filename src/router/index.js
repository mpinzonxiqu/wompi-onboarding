import { createRouter, createWebHistory } from 'vue-router'

import ProductPage from '../views/ProductPage.vue'
import CardDeliveryInfo from '../views/CardDeliveryInfo.vue'
import PaymentSummaryPage from '../views/PaymentSummaryPage.vue'
import PaymentResult from '../views/PaymentResult.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Product', component: ProductPage },
  { path: '/info', name: 'Info', component: CardDeliveryInfo },
  { path: '/summary', name: 'Summary', component: PaymentSummaryPage },
  { path: '/result', name: 'Result', component: PaymentResult },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
