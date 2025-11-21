import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import UserInfo from '@/views/UserInfo.vue';
import UserView from '@/views/UserView.vue';

const router = createRouter({
  // 라우트 구성 객체
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/user/info',
      name: 'userInfo',
      component: UserInfo,
    },
    {
      path: '/user/:id',
      name: 'userView',
      component: UserView,
    },
  ],
});
export default router;
