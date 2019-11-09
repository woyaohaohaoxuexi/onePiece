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
    name: 'Home',
    redirect: '/home/index',
    component: LayOut,
    children: [
      {
        path: 'index',
        component: () => import('@pages/home/index')
      }
    ]
  },
  {
    path: '/article',
    name: 'Article',
    redirect: '/article/index',
    component: LayOut,
    children: [
      {
        path: 'index',
        component: () => import('@pages/article/index')
      }
    ]
  }
];

const router = new VueRouter({ routes });

export default router;