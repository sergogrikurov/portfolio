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
    home: {
      frontEnd: "Front-end",
      developer: "developer",
      vue: "(Vue)",
      width: "with",
      laravel: "Laravel",
      experience: "experience",
      hero: "Building modern web applications using Vue and Laravel",
      contactMe: "Contact me",
      workingOn: "Currently working on Portfolio",
    },
    footer: {
      desc: "Front-end developer (Vue) with Laravel experience",
      copy: "Copyright 2025. Made by SG",
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
    home: {
      frontEnd: "Front-end",
      developer: "разработчик",
      vue: "(Vue)",
      width: "с",
      laravel: "Laravel",
      experience: "опытом работы",
      hero: "Создаю современные веб-приложения с использованием Vue и Laravel",
      contactMe: "Связаться со мной",
      workingOn: "Сейчас работаю над портфолио",
    },
    footer: {
      desc: "Front-end разработчик (Vue) с опытом работы с Laravel",
      copy: "Все права защищены 2025. Сделал SG",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
