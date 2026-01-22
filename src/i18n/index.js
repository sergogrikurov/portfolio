import { createI18n } from "vue-i18n";

const messages = {
  en: {
    works: { title: "Projects Page" },
    nav: {
      home: "home",
      projects: "projects",
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
      projects: "projects",
      viewAll: "View all",
      skills: "skills",
      languages: "Languages",
      databases: "Databases",
      tools: "Tools",
      others: "Others",
      frameworks: "Frameworks",
      readMore: "Read more",
      aboutP1: "Hello, I’m Sergo!",
      aboutP2:
        "I’m a front-end developer focused on Vue, with experience in Laravel back-end development. I build responsive and user-friendly websites, from idea to deployment.",
      aboutP3:
        "I enjoy turning ideas into real web projects and continuously improving my skills by working with modern technologies and tools. I’m always open to learning and growing as a developer.",
      contactText:
        "I’m interested in freelance opportunities. If you have any questions or would like to discuss a project, feel free to contact me.",
      messageMe: "Message me here",
    },
    footer: {
      desc: "Front-end developer (Vue) with Laravel experience",
      copy: "Copyright 2025. Made by SG",
    },
  },
  ru: {
    works: { title: "Страница Проектов" },
    nav: {
      home: "главная",
      projects: "проекты",
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
      projects: "проекты",
      viewAll: "Смотреть все",
      skills: "навыки",
      languages: "Языки",
      databases: "Базы данных",
      tools: "Инструменты",
      others: "Прочее",
      frameworks: "Фреймворки",
      readMore: "Посмотреть всё",
      aboutP1: "Привет, я Серго!",
      aboutP2:
        "Я фронтенд-разработчик, специализирующийся на Vue, с опытом разработки бэкенда на Laravel. Я создаю адаптивные и удобные для пользователя сайты — от идеи до деплоя.",
      aboutP3:
        "Мне нравится превращать идеи в реальные веб-проекты и постоянно развивать свои навыки, работая с современными технологиями и инструментами. Я всегда открыт к обучению и профессиональному росту.",
      contactText:
        "Я открыт к фриланс-предложениям. Если у вас есть вопросы или вы хотите обсудить проект — не стесняйтесь связаться со мной.",
      messageMe: "Напишите мне сюда",
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
