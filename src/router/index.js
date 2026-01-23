import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "@/views/Home.vue";
import Works from "@/views/Works.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

const routes = [
  {
    path: "/portfolio/",
    redirect: "/portfolio/en",
  },
  {
    path: "/portfolio/:lang(en|ru)",
    component: RouterView,
    children: [
      { path: "", name: "home", component: Home },
      { path: "works", name: "works", component: Works },
      { path: "about", name: "about", component: About },
      { path: "contacts", name: "contacts", component: Contacts },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/portfolio/"),
  routes,
});

export default router;
