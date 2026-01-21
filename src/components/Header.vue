<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import Logo from "./Logo.vue";
import Chek from "@/assets/images/home/chek.svg";

const { locale, t } = useI18n();

const router = useRouter();
const route = useRoute();

const open = ref(false);
const langRef = ref(null);

const toggle = () => {
  open.value = !open.value;
};

const setLang = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);

  router.push({
    name: route.name,
    params: { ...route.params, lang },
    query: route.query,
  });

  open.value = false;
};

const handleClickOutside = (e) => {
  if (langRef.value && !langRef.value.contains(e.target)) {
    open.value = false;
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
  <div class="header">
    <div class="header__logo">
      <Logo />
    </div>

    <nav class="header__nav">
      <RouterLink
        class="header__nav_link"
        :to="{ name: 'home', params: { lang: locale } }"
      >
        <span>#</span>{{ t("nav.home") }}
      </RouterLink>

      <RouterLink
        class="header__nav_link"
        :to="{ name: 'works', params: { lang: locale } }"
      >
        <span>#</span>{{ t("nav.works") }}
      </RouterLink>

      <RouterLink
        class="header__nav_link"
        :to="{ name: 'about', params: { lang: locale } }"
      >
        <span>#</span>{{ t("nav.about") }}
      </RouterLink>

      <RouterLink
        class="header__nav_link"
        :to="{ name: 'contacts', params: { lang: locale } }"
      >
        <span>#</span>{{ t("nav.contacts") }}
      </RouterLink>

      <!-- LANG SWITCHER -->
      <div class="header__lang" ref="langRef" @click="toggle">
        {{ locale.toUpperCase() }}
        <img :src="Chek" alt="arrow" :class="{ open }" />

        <div v-if="open" class="header__lang-dropdown">
          <div @click.stop="setLang('en')">EN</div>
          <div @click.stop="setLang('ru')">RU</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: rem(80);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $gray;
    @include adaptive-value(gap, 30, 10);
    &_link {
      & span {
        color: $purple;
        margin-right: rem(1);
      }
      &:hover {
        color: $main-color;
      }
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
</style>
