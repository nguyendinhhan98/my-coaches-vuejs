import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: () => import("../components/coaches/MyCoaches"),
  },
  {
    path: "/coaches/:id",
    name: "ViewDetail",
    component: () => import("../views/ViewDetail"),
  },
  {
    path: "/coaches/:id/contact",
    name: "ContactCoach",
    component: () => import("../views/ContactCoach"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../components/auth/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/coaches/CoachesRegister"),
    beforeEnter: (to, from, next) => {
      if (store.state.auth != null) {
        next();
      } else {
        next("/auth");
      }
    },
  },
  {
    path: "/request",
    name: "CoachesRequest",
    component: () => import("../components/request/CoachesRequest"),
  },
  {
    path: "/:pathMath(.*)*",
    name: "FileNotFound",
    component: () => import("../views/FileNotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
