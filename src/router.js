import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
      component: resolve => require(['@/routes/article.vue'], resolve),
      meta: {
        title: 'Vaer\'s Blog'
      }
    },
    {
      path: '/article/:date/:title',
      component:resolve => require(['@/routes/detail.vue'], resolve),
      props: true,
      meta: {
        title: '文章'
      }
    },
    {
      path: '/star',
      component: resolve => require(['@/routes/article.vue'], resolve),
      meta: {
        title: '精选'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
