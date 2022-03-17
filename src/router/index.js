import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/login",
    alias: "/Login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () => import("../pages/Post.vue"),
    props: (route) => {
      // console.log("rutas " + route.params.id);
      const postId = route.params.postId;
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1, postId: 1 } : { id, postId };
    },
  },
  {
    path: "/newpost",
    alias: "/NewPost",
    name: "NewPost",
    component: () => import("../pages/NewPost.vue"),
  },
  {
    path: "/allPosts",
    alias: "/AllPosts",
    name: "AllPosts",
    component: () => import("../pages/AllPosts.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/NoPageFound.vue"),
    // redirect: '/home'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
