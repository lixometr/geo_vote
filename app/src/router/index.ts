import { createRouter, createWebHistory } from "vue-router";
import result from "./routes/result";
const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  ...result
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
export default router;
