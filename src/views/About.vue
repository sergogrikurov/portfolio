<script setup>
import { useI18n } from "vue-i18n";
import { useRouter, useRoute, RouterLink } from "vue-router";

const { locale, t } = useI18n();

import Image2 from "@/assets/images/home/image2.png";
</script>

<template>
  <div class="about">
    <div class="about__title">
      <h2><span class="purple">/</span>{{ t("nav.about") }}</h2>
    </div>
    <section class="about__first about-first">
      <div class="about-first__wrapper">
        <p>{{ t("about.whoAmI") }}</p>
        <div class="about-first__image">
          <img :src="Image2" alt="Image Two" />
        </div>
      </div>

      <div class="about-first__content">
        <p>{{ t("home.aboutP1") }}</p>
        <p>{{ t("home.aboutP2") }}</p>
        <p>{{ t("home.aboutP3") }}</p>
      </div>
    </section>
    <section class="about__skills about-skills">
      <div class="about-skills__top">
        <div class="about-skills__top_wrapper">
          <h5><span class="purple">#</span>{{ t("home.skills") }}</h5>
          <p></p>
        </div>
      </div>
      <div class="about-skills__cards about-skills-cards">
        <div class="about-skills-cards__card">
          <h6>{{ t("home.languages") }}</h6>
          <div class="about-skills-cards__card_content">
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>PHP</span>
          </div>
        </div>

        <div class="about-skills-cards__card">
          <h6>{{ t("home.databases") }}</h6>
          <div class="about-skills-cards__card_content">
            <span>MySQL</span>
            <span>SQL</span>
          </div>
        </div>

        <div class="about-skills-cards__card">
          <h6>{{ t("home.tools") }}</h6>
          <div class="about-skills-cards__card_content">
            <span>VSCode</span>
            <span>Figma</span>
            <span>Firebase Hosting</span>
          </div>
        </div>

        <div class="about-skills-cards__card">
          <h6>{{ t("home.others") }}</h6>
          <div class="about-skills-cards__card_content">
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
          </div>
        </div>

        <div class="about-skills-cards__card">
          <h6>{{ t("home.frameworks") }}</h6>
          <div class="about-skills-cards__card_content">
            <span>Laravel</span>
            <span>Vue</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.about {
  &__title {
    @include adaptive-value(padding-top, 50, 25);
    @include adaptive-value(padding-bottom, 50, 25);
    & h2 {
      @include adaptive-value(font-size, 32, 28);
    }
  }
}
.about-first {
  @include adaptive-value(padding-top, 50, 25);
  @include adaptive-value(padding-bottom, 50, 25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(16);
  @media (max-width: $mobile) {
    flex-direction: column;
    gap: rem(30);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: rem(30);
    @include adaptive-value(width, 340, 290);
    & p {
      color: $gray;
    }
  }

  &__image {
    border-bottom: rem(1) solid $purple;
    overflow: hidden;
    & img {
      @media (max-width: $mobile) {
        object-fit: cover;
        object-position: center left;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(16);
    @include adaptive-value(width, 700, 290);
    & p {
      color: $gray;
      line-height: 1.2;
    }
  }
}

.about-skills {
  @include adaptive-value(padding-top, 50, 25);
  @include adaptive-value(padding-bottom, 50, 25);
  & > *:not(:last-child) {
    margin-bottom: rem(40);
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    &_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include adaptive-value(width, 700, 170);
      & h5 {
        @include adaptive-value(font-size, 32, 28);
        margin-right: rem(20);
        @media (max-width: $mobile) {
          margin-right: 0;
        }
      }
      & p {
        flex: 1 1 auto;
        border: 1px solid $purple;
        max-width: rem(500);
        @media (max-width: $mobile) {
          display: none;
        }
      }
    }
  }
}
.about-skills-cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: rem(16);
  &__card {
    max-width: rem(200);
    border: 1px solid $gray;
    padding: rem(8);
    display: flex;
    flex-direction: column;
    min-height: rem(100);
    & h6 {
      color: $main-color;
      font-weight: 500;
      border-bottom: 1px solid $gray;
      padding-bottom: rem(8);
    }
    &_content {
      flex: 1;
      padding-top: rem(8);
      color: $gray;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: rem(8);
    }
  }
}
</style>
