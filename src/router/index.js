import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: () => import('@/views/Promotions.vue'),
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('@/views/Blogs.vue'),
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('@/views/ContactUs.vue'),
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/views/Faq.vue'),
  },
  {
    path: '/report-problem',
    name: 'ReportProblem',
    component: () => import('@/views/ReportProblem.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
