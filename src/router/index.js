import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/ErrorPage.vue")
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/ErrorPage.vue")
  },
  {
    path: "/crew",
    name: "Crew",
    component: () => import("../views/ErrorPage.vue")
  },
  {
    path: "/kontakt",
    name: "kontakt",
    component: () => import("../views/ErrorPage.vue")
  },
  { path: "/:pathMatch(.*)*", component: () => import("../views/ErrorPage.vue") }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
