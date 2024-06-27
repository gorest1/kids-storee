import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ProductCatalog from './views/ProductCatalog.vue';
import CartPage from './views/CartPage.vue';
import ProductPage from './views/ProductPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog', component: ProductCatalog },
  { path: '/cart', component: CartPage },
  { path: '/product/:id', component: ProductPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
