import { createRouter, createWebHistory } from "vue-router";

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
});

export default router;
