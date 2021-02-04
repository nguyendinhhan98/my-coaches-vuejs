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
      if (store.state.isRegister == true) {
        next("/notification-register");
      } else {
        next();
      }
    },
  },
  {
    path: "/request",
    name: "CoachesRequest",
    component: () => import("../components/request/CoachesRequest"),
  },
  {
    path: "/notification-register",
    name: "NotificationRegister",
    component: () => import("../views/NotificationRegister"),
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
});

export default router;
