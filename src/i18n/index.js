import { createI18n } from "vue-i18n";

const messages = {
  en: {
    works: { title: "Works Page" },
    nav: {
      home: "home",
      works: "works",
      about: "about-me",
      contacts: "contacts",
    },
  },
  ru: {
    works: { title: "Страница Работ" },
    nav: {
      home: "главная",
      works: "проекты",
      about: "о-себе",
      contacts: "контакты",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
