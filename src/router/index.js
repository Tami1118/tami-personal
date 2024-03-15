import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue'),
      meta: { title: 'Project' },
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
})

router.beforeEach((to) => {
  document.title = to.meta.title !== undefined ? `Tami | ${to.meta.title}` : `Tami | Frontend Developer`;
})

export default router
