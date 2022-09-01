import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/teams",
      name: "teams",
      component: () => import("../views/TeamsView.vue"),
    },
    {
      path: "/players",
      name: "players",
      component: () => import("../views/PlayersView.vue"),
    },
    {
      path: "/matchs",
      name: "matchs",
      component: () => import("../views/MatchsView.vue"),
    },
  ],
});

export default router;
