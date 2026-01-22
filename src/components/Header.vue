<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

import Logo from "./Logo.vue";
import Chek from "@/assets/images/home/chek.svg";
import GitHub from "@/assets/images/home/github.svg";

// i18n
const { locale, t } = useI18n();

// router
const router = useRouter();
const route = useRoute();

// dropdown языка
const langOpen = ref(false);
const langRef = ref(null);

// мобильное меню
const menuOpen = ref(false);

// nav ссылки
const navLinks = [
  { name: "home", label: "nav.home" },
  { name: "works", label: "nav.works" },
  { name: "about", label: "nav.about" },
  { name: "contacts", label: "nav.contacts" },
];

// toggle dropdown языка
const toggleLang = () => {
  langOpen.value = !langOpen.value;
};

// переключение языка
const setLang = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);

  router.push({
    name: route.name,
    params: { ...route.params, lang },
    query: route.query,
  });

  langOpen.value = false;
  menuOpen.value = false; // закрываем мобильное меню, если открыт
};

// клик вне dropdown
const handleClickOutside = (e) => {
  if (langRef.value && !langRef.value.contains(e.target)) {
    langOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header class="header">
    <!-- Логотип слева -->
    <div class="header__logo">
      <Logo />
    </div>

    <!-- Desktop Nav -->
    <nav class="header__nav">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="{ name: link.name, params: { lang: locale } }"
        class="header__nav_link"
      >
        <span>#</span>{{ t(link.label) }}
      </RouterLink>

      <!-- LANG SWITCHER -->
      <div class="header__lang" ref="langRef" @click="toggleLang">
        {{ locale.toUpperCase() }}
        <img :src="Chek" alt="arrow" :class="{ open: langOpen }" />

        <div v-if="langOpen" class="header__lang-dropdown">
          <div @click.stop="setLang('en')">EN</div>
          <div @click.stop="setLang('ru')">RU</div>
        </div>
      </div>
    </nav>

    <!-- Burger button для мобильного -->
    <button class="header__burger" @click="menuOpen = true"></button>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="menuOpen" class="mobile-menu">
        <div class="mobile-menu__header">
          <Logo />
          <button class="mobile-menu__close" @click="menuOpen = false">
            ✕
          </button>
        </div>

        <nav class="mobile-menu__nav">
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="{ name: link.name, params: { lang: locale } }"
            class="mobile-menu__link"
            @click="menuOpen = false"
          >
            <span>#</span>{{ t(link.label) }}
          </RouterLink>

          <!-- LANG SWITCHER внутри nav -->
          <div class="mobile-menu__lang" ref="langRef" @click.stop="toggleLang">
            {{ locale.toUpperCase() }}
            <img :src="Chek" alt="arrow" :class="{ open: langOpen }" />

            <div v-if="langOpen" class="mobile-menu__lang-dropdown">
              <div @click.stop="setLang('en')">EN</div>
              <div @click.stop="setLang('ru')">RU</div>
            </div>
          </div>
        </nav>

        <div class="mobile-menu__footer">
          <a
            href="https://github.com/sergogrikurov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="GitHub" alt="GitHub Icon" />
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: rem(80);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &__logo {
    z-index: 60;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: rem(30);

    &_link {
      & span {
        color: $purple;
        margin-right: rem(1);
      }
      &:hover {
        color: $main-color;
      }
    }

    &__lang {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & img {
        transition: transform 0.2s ease;
      }
    }
    & img.open {
      transform: rotate(180deg);
    }
    &__lang-dropdown {
      position: absolute;
      top: 120%;
      left: 0;
      background: #111;
      border: 1px solid #333;
      padding: 0.5rem 0;
      min-width: 3rem;

      & div {
        padding: 0.25rem 0.75rem;
        cursor: pointer;
        &:hover {
          color: $main-color;
        }
      }
    }
  }

  .header__burger {
    display: none;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    width: rem(25);
    height: rem(15);
    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      width: rem(24);
      height: rem(2);
      background-color: #d9d9d9;
    }
    &::after {
      position: absolute;
      content: "";
      width: rem(15);
      height: rem(2);
      top: rem(5);
      right: 0;
      background-color: #d9d9d9;
    }
  }

  @media (max-width: 768px) {
    &__nav {
      display: none;
    }
    .header__burger {
      display: block;
    }
  }
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background-color: #111; // полностью непрозрачный
  z-index: 100;
  display: flex;
  flex-direction: column;
  color: white;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    flex: 1 1 auto;
  }
  &__footer {
    text-align: center;
    padding-bottom: rem(50);
  }

  &__link {
    font-size: 1.5rem;
    color: white;
    & span {
      color: $purple;
      margin-right: 0.5rem;
    }
  }

  &__close {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
  }

  &__lang {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & img {
      transition: transform 0.2s ease;
    }

    & img.open {
      transform: rotate(180deg);
    }
  }

  &__lang-dropdown {
    position: absolute;
    top: 120%;
    left: 0;
    background: #111;
    border: 1px solid #333;
    padding: 0.5rem 0;
    min-width: 3rem;

    & div {
      padding: 0.25rem 0.75rem;
      cursor: pointer;
      &:hover {
        color: $main-color;
      }
    }
  }
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
