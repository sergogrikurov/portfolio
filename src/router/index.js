import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

const routes = [
  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      { path: "", name: "home", component: Home },
      { path: "projects", name: "projects", component: Projects },
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
