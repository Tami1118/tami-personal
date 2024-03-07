import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {title: '首頁'}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {title: '關於我'}
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectVite.vue'),
      meta: {title: '專案作品'},
    },
  ]
})

export default router
