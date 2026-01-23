import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

const routes = [
  {
    path: "/",
    redirect: "/en",
  },
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
        path: "projects",
        name: "projects",
        component: Projects,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
