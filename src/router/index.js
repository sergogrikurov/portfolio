import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "@/views/Home.vue";
import Works from "@/views/Works.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

const routes = [
  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      {
        path: "works",
        name: "works",
        component: Works,
      },
    ],
  },

  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      {
        path: "about",
        name: "about",
        component: About,
      },
    ],
  },

  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      {
        path: "contacts",
        name: "contacts",
        component: Contacts,
      },
    ],
  },

  {
    path: "/",
    redirect: () => {
      const lang = localStorage.getItem("lang") || "en";
      return `/${lang}`;
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
