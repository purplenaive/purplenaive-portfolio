import { createWebHistory, createRouter } from "vue-router";

import mainHome from "@/page/home.vue";
import postTemplate from "@/page/post.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: mainHome,
    },
    {
      path: "/post/:id",
      name: "post",
      component: postTemplate,
      props: true,
    },
  ],
});

export default router;
