<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

import Email from "@/assets/images/home/email.svg";
</script>
<template>
  <div class="contacts">
    <section class="contacts__content contacts-content">
      <div class="contacts-content__top">
        <h5><span class="purple">/</span>{{ t("nav.contacts") }}</h5>
        <p></p>
      </div>
      <div class="contacts-content__wrapper">
        <div class="contacts-content__left">
          <p>
            {{ t("home.contactText") }}
          </p>
        </div>
        <div class="contacts-content__right">
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
.contacts-content {
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
