import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/aa",
      name: "home",
      component: resolve => require(["@/components/HelloWorld"], resolve)
    }
  ]
});

export default router;
