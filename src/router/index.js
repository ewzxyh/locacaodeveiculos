import { createRouter, createWebHistory } from 'vue-router';
import 'core-js/modules/es.array.filter';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    beforeEnter: (to, from, next) => {
      document.body.style.overflow = 'hidden'; // Ajusta o overflow do body quando entra na rota 
      next();
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach((to, from) => {
  if (from.path === '/login') {
    document.body.style.overflow = ''; // Restaura o overflow do body quando sai da rota de login
  }
});

export default router;
