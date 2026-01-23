<script setup>
import { useI18n } from "vue-i18n";
import { useRouter, useRoute, RouterLink } from "vue-router";

import Image from "@/assets/images/home/image.png";
import Image2 from "@/assets/images/home/image2.png";
import MathGame from "@/assets/images/home/math-game-project.png";
import GameBox from "@/assets/images/home/game-box-project.png";
import Cafe from "@/assets/images/home/cafe-project.png";
import Email from "@/assets/images/home/email.svg";

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
    <section class="home__projects home-projects">
      <div class="home-projects__top">
        <div class="home-projects__top_wrapper">
          <h3>
            <span class="purple">#</span>
            {{ t("nav.projects") }}
          </h3>
          <p></p>
        </div>
        <RouterLink :to="{ name: 'projects', params: { lang: locale } }">
          <button>{{ t("home.viewAll") }}<span>~~></span></button>
        </RouterLink>
      </div>
      <div class="home-projects__cards home-projects-cards">
        <div class="home-projects-cards__card">
          <img :src="MathGame" alt="Math Game Image" />
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
          <div class="home-projects-cards__card_title-link">
            <h4>MathGame</h4>
            <a
              href="https://sergogrikurov.github.io/math-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>

        <div class="home-projects-cards__card">
          <img :src="GameBox" alt="GameBox Image" />
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Vue</li>
          </ul>
          <div class="home-projects-cards__card_title-link">
            <h4>GameBox</h4>
            <a
              href="https://gamebox-92bf6.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>

        <div class="home-projects-cards__card">
          <img :src="Cafe" alt="Cafe Image" />
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Vue</li>
          </ul>
          <div class="home-projects-cards__card_title-link">
            <h4>Cafe-Website</h4>
            <a
              href="https://sergogrikurov.github.io/cafe-website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="home__skills home-skills">
      <div class="home-skills__top">
        <div class="home-skills__top_wrapper">
          <h5>
            <span class="purple">#</span>
            {{ t("home.skills") }}
          </h5>
          <p></p>
        </div>
      </div>
      <div class="home-skills__cards home-skills-cards">
        <div class="home-skills-cards__card">
          <h6>{{ t("home.languages") }}</h6>
          <div class="home-skills-cards__card_content">
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>PHP</span>
          </div>
        </div>

        <div class="home-skills-cards__card">
          <h6>{{ t("home.databases") }}</h6>
          <div class="home-skills-cards__card_content">
            <span>MySQL</span>
            <span>SQL</span>
          </div>
        </div>

        <div class="home-skills-cards__card">
          <h6>{{ t("home.tools") }}</h6>
          <div class="home-skills-cards__card_content">
            <span>VSCode</span>
            <span>Figma</span>
            <span>Firebase Hosting</span>
          </div>
        </div>

        <div class="home-skills-cards__card">
          <h6>{{ t("home.others") }}</h6>
          <div class="home-skills-cards__card_content">
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
          </div>
        </div>

        <div class="home-skills-cards__card">
          <h6>{{ t("home.frameworks") }}</h6>
          <div class="home-skills-cards__card_content">
            <span>Laravel</span>
            <span>Vue</span>
          </div>
        </div>
      </div>
    </section>
    <section class="home__about home-about">
      <div class="home-about__content">
        <div class="home-about__content_wrapper">
          <h5>
            <span class="purple">#</span>
            {{ t("nav.about") }}
          </h5>
          <p></p>
        </div>
        <p>{{ t("home.aboutP1") }}</p>
        <p>{{ t("home.aboutP2") }}</p>
        <p>{{ t("home.aboutP3") }}</p>
        <RouterLink :to="{ name: 'about', params: { lang: locale } }">
          <button>{{ t("home.readMore") }}-></button>
        </RouterLink>
      </div>
      <div class="home-about__image">
        <img :src="Image2" alt="Image Two" />
      </div>
    </section>
    <section class="home__contacts home-contacts">
      <div class="home-contacts__top">
        <h5>
          <span class="purple">#</span>
          {{ t("nav.contacts") }}
        </h5>
        <p></p>
      </div>
      <div class="home-contacts__wrapper">
        <div class="home-contacts__left">
          <p>
            {{ t("home.contactText") }}
          </p>
        </div>
        <div class="home-contacts__right">
          <h6>{{ t("home.messageMe") }}</h6>
          <a href="mailto:sergogrikurov@gmail.com">
            <img :src="Email" alt="Email Icon" />
            sergogrikurov@gmail.com
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-first {
  @include adaptive-value(padding-top, 80, 40);
  @include adaptive-value(padding-bottom, 50, 25);
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
.home-projects {
  @include adaptive-value(padding-top, 50, 25);
  @include adaptive-value(padding-bottom, 50, 25);
  display: flex;
  flex-direction: column;
  @include adaptive-value(gap, 50, 30);
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
      & h3 {
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
    & button {
      background-color: inherit;
      color: inherit;
      font-weight: 500;
      & span {
        @media (max-width: $mobile) {
          display: none;
        }
      }
    }
  }
}
.home-projects-cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: rem(20);
  @media (max-width: $mobile) {
    flex-direction: column;
  }

  &__card {
    border: 1px solid $gray;
    @include adaptive-value(width, 330, 290);
    color: $gray;
    & img {
      display: block;
      width: 100%;
      height: 100%;
    }
    & ul {
      border-top: 1px solid $gray;
      border-bottom: 1px solid $gray;
      display: flex;
      align-items: center;
      gap: rem(10);
      padding: rem(8);
    }
    &_title-link {
      padding: rem(16);
      & > *:not(:last-child) {
        margin-bottom: rem(16);
      }
      & h4 {
        font-weight: 500;
        font-size: rem(24);
        color: $main-color;
      }
      & a {
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
  }
}
.home-skills {
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
.home-skills-cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: rem(16);
  &__card {
    max-width: rem(200);
    border: 1px solid $gray;
    padding: rem(8);
    & h6 {
      color: $main-color;
      font-weight: 500;
      border-bottom: 1px solid $gray;
      padding-bottom: rem(8);
    }
    &_content {
      padding-top: rem(8);
      color: $gray;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: rem(8);
    }
  }
}
.home-about {
  @include adaptive-value(padding-top, 50, 25);
  @include adaptive-value(padding-bottom, 50, 25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $mobile) {
    flex-direction: column;
  }
  &__content {
    @include adaptive-value(width, 515, 290);
    & > *:not(:last-child) {
      margin-bottom: rem(25);
    }
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
    & p {
      color: $gray;
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
    border-bottom: rem(1) solid $purple;
    @include adaptive-value(width, 340, 290);
    overflow: hidden;
    & img {
      @media (max-width: $mobile) {
        object-fit: cover;
        object-position: center left;
      }
    }
  }
}
.home-contacts {
  @include adaptive-value(padding-top, 50, 25);
  @include adaptive-value(padding-bottom, 50, 25);

  &__top {
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

  &__wrapper {
    @include adaptive-value(margin-top, 45, 30);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $mobile) {
      flex-direction: column;
      gap: rem(30);
    }
  }

  &__left {
    @include adaptive-value(width, 505, 290);
    font-weight: 500;
    color: $gray;
    line-height: 1.2;
    @media (max-width: $mobile) {
      max-width: rem(287);
    }
  }

  &__right {
    border: 1px solid $gray;
    padding: rem(16);
    & > *:not(:last-child) {
      margin-bottom: rem(16);
    }
    & h6 {
      font-weight: 600;
    }
    & a {
      color: $gray;
    }
  }
}
</style>
