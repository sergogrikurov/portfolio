<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

import MathGame from "@/assets/images/home/math-game-project.png";
import GameBox from "@/assets/images/home/game-box-project.png";
import Cafe from "@/assets/images/home/cafe-project.png";
</script>
<template>
  <div class="projects">
    <section class="projects__top projects-top">
      <h2><span class="purple">/</span>{{ t("nav.projects") }}</h2>
      <p>{{ t("projects.list") }}</p>
    </section>
    <section class="projects__decent projects-decent">
      <div class="projects-decent__top">
        <h3><span class="purple">#</span>{{ t("projects.decent") }}</h3>
        <p></p>
      </div>
      <div class="projects-decent__cards projects-decent-cards">
        <div class="projects-decent-cards__card">
          <img :src="MathGame" alt="Math Game Image" />
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
          <div class="projects-decent-cards__card_title-link">
            <h4>MathGame</h4>
            <p>{{ t("projects.descMathGame") }}</p>
            <div>
              <a
                href="https://sergogrikurov.github.io/math-game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>

              <a
                href="https://github.com/sergogrikurov/math-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="projects-decent-cards__card">
          <img :src="GameBox" alt="GameBox Image" />
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Vue</li>
          </ul>
          <div class="projects-decent-cards__card_title-link">
            <h4>GameBox</h4>
            <p>{{ t("projects.descGameBox") }}</p>
            <div>
              <a
                href="https://gamebox-92bf6.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/sergogrikurov/game-box"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="projects-decent-cards__card">
          <img :src="Cafe" alt="Cafe Image" />
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Vue</li>
          </ul>
          <div class="projects-decent-cards__card_title-link">
            <h4>Cafe-Website</h4>
            <p>{{ t("projects.descCafe") }}</p>
            <div>
              <a
                href="https://sergogrikurov.github.io/cafe-website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>

              <a
                href="https://github.com/sergogrikurov/cafe-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.projects-top {
  @include adaptive-value(padding-top, 50, 25);
  @include adaptive-value(padding-bottom, 50, 25);

  & > *:not(:last-child) {
    margin-bottom: rem(15);
  }
  & h2 {
    @include adaptive-value(font-size, 32, 28);
  }
  & p {
    color: $gray;
  }
}
.projects-decent {
  @include adaptive-value(padding-top, 50, 25);
  @include adaptive-value(padding-bottom, 50, 25);
  display: flex;
  flex-direction: column;
  @include adaptive-value(gap, 50, 30);
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include adaptive-value(width, 700, 170);
    & h3 {
      @include adaptive-value(font-size, 32, 28);
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
.projects-decent-cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: rem(16);
  &__card {
    @include adaptive-value(min-height, 380, 350);
    border: 1px solid $gray;
    @include adaptive-value(width, 330, 290);
    display: flex;
    flex-direction: column;

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
      display: flex;
      flex-direction: column;
      padding: rem(16);
      flex: 1;

      & > *:not(:last-child) {
        margin-bottom: rem(16);
      }
      & h4 {
        font-weight: 500;
        font-size: rem(24);
        color: $main-color;
      }
      & p {
        flex: 1;
        line-height: 1.2;
      }
      & div {
        display: flex;
        align-items: center;
        gap: rem(16);
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
}
</style>
