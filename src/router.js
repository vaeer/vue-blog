import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      redirect: '/article',
    },
    // {
    //   path: '/index',
    //   name: 'home',
    //   component: resolve => require([''], resolve),
    //   meta: {
    //     title: '首页'
    //   }
    // },
    {
      path: '/article',
      component: resolve => require(['@/routes/Article.vue'], resolve),
      meta: {
        title: '文章'
      }
    },
    {
      path: '/star',
      component: resolve => require(['@/routes/Article.vue'], resolve),
      meta: {
        title: '文章'
      }
    }
  ]
});

export default router;
