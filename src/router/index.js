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
    path: "/blog/:id",
    name: "Blog",
    component: () => import("../pages/Blog.vue"),
    props: (route) => {
      // console.log("rutas " + route.params.id);
      const postId = route.params.postId;
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1, postId: 1 } : { id, postId };
    },
  },
  {
    path: "/newblog",
    alias: "/NewBlog",
    name: "NewBlog",
    component: () => import("../pages/NewBlog.vue"),
  },
  {
    path: "/allBlogs",
    alias: "/AllBlogs",
    name: "AllBlogs",
    component: () => import("../pages/AllBlogs.vue"),
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
