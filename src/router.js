import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "layout",
      component: resolve => require(["@/layout/Layout"], resolve)
    }
  ]
});

export default router;
