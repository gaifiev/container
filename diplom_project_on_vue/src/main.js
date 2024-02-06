import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';

const i18n = createI18n({
  locale: "en", // начальная локализация
  messages: {
    en: require("./i18n/en.json"), // загрузка файла перевода для английского
    ru: require("./i18n/ru.json"), // загрузка файла перевода для русского
  },
});

const app = createApp(App);

app.use(i18n);
app.use(router); // используем Vue Router
app.mount("#app");
