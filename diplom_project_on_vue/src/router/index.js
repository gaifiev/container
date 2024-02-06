import { createRouter, createWebHistory } from "vue-router";
// импортируем компоненты, которые будут использоваться в качестве страниц
import Home from "@/components/pages/Home.vue";
import Services from "@/components/pages/Services.vue";
import AboutUs from "@/components/pages/AboutUs.vue";
import ContactUs from "@/components/pages/Contact.vue";
import Doctors from "@/components/pages/Doctors.vue";
import Blog from "@/components/pages/Blog.vue";

// определяем маршруты
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/about",
    component: AboutUs,
  },
  {
    path: "/contact",
    component: ContactUs,
  },
  {
    path: "/roster",
    component: Doctors,
  },
  {
    path: "/blog",
    component: Blog,
  },
];
// создаем экземпляр Vue Router с определенными маршрутами
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
