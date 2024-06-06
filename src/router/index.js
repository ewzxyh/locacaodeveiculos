import { createRouter, createWebHistory } from 'vue-router';
import 'core-js/modules/es.array.filter';
import notFound from '@/components/notFound.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
<<<<<<< HEAD
  },
  {
=======
    beforeEnter: (to, from, next) => {
      next();
    }
  }, {
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('../views/confirmation.vue'),
    beforeEnter: (to, from, next) => { // Ajusta o overflow do body quando entra na rota 
      next();
    }
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/password.vue')
  },
  {
    path: '/:pathMatch(.*)*', // Rota catch-all para capturar todas as rotas não definidas
    name: 'Notfound',
    component: notFound
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