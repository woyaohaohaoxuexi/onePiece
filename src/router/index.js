import Vue from 'vue';
import VueRouter from 'vue-router';
import LayOut from '@layout/index';
Vue.use(VueRouter);

// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: LayOut,
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import('@pages/home/index')
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/index',
    component: LayOut,
    children: [
      {
        path: 'index/:id',
        name: 'Article',
        component: () => import('@pages/article/index')
      }
    ]
  }
];

const router = new VueRouter({ routes });

export default router;