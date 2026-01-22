<script setup>
import { useI18n } from "vue-i18n";
import { useRouter, useRoute, RouterLink } from "vue-router";

import Image from "@/assets/images/home/image.png";

// router
const router = useRouter();
const route = useRoute();

const { locale, t } = useI18n();
</script>
<template>
  <div class="home">
    <section class="home__first home-first">
      <div class="home-first__content">
        <h2>
          SG -
          <span class="home-first__content_purple">
            {{ t("home.frontEnd") }}
          </span>
          {{ t("home.developer") }}
          <span class="home-first__content_purple">
            {{ t("home.vue") }}
          </span>
          {{ t("home.width") }}
          <span class="home-first__content_purple">
            {{ t("home.laravel") }}
          </span>
          {{ t("home.experience") }}
        </h2>
        <p>{{ t("home.hero") }}</p>
        <RouterLink :to="{ name: 'contacts', params: { lang: locale } }">
          <button>{{ t("home.contactMe") }}</button>
        </RouterLink>
      </div>
      <div class="home-first__image">
        <img :src="Image" alt="Image" />
        <p><span></span>{{ t("home.workingOn") }}</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-first {
  @include adaptive-value(padding-top, 80, 40);
  @include adaptive-value(padding-bottom, 80, 40);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $mobile) {
    flex-direction: column;
    gap: rem(30);
  }
  &__content {
    @include adaptive-value(width, 540, 290);
    display: flex;
    flex-direction: column;
    @include adaptive-value(gap, 30, 20);
    & h2 {
      font-weight: 600;
      @include adaptive-value(font-size, 32, 24);
      line-height: 1.2;
    }
    &_purple {
      color: $purple;
    }
    & p {
      color: $gray;
      line-height: 1.25;
    }
    & button {
      width: fit-content;
      border: 1px solid $purple;
      background-color: transparent;
      font-weight: 500;
      color: $gray;
      padding: rem(8) rem(16);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: $purple;
        color: $main-color;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
  &__image {
    @include adaptive-value(width, 440, 290);
    display: flex;
    flex-direction: column;
    align-items: center;
    & img {
      display: block;
      width: 100%;
      height: 100%;
    }
    & p {
      display: flex;
      align-items: center;
      gap: rem(10);
      border: 1px solid $gray;
      padding: rem(10) rem(8);
      @media (max-width: $mobile) {
        text-align: center;
        line-height: 1.2;
      }
      & span {
        display: block;
        width: rem(16);
        height: rem(16);
        background-color: $purple;
      }
    }
  }
}
</style>
