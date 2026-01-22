<script setup>
import Logo from "./Logo.vue";
</script>
<template>
  <div class="footer">
    <div class="footer__top">
      <Logo />
      <a href="mailto:sergogrikurov@gmail.com"> sergogrikurov@gmail.com </a>
    </div>
    <div class="footer__desc">
      Front-end developer (Vue) with Laravel experience
    </div>
    <div class="footer__copy">© Copyright 2025. Made by SG</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: rem(30) rem(0);
  display: grid;
  place-items: center;
  border-top: rem(1) solid $gray;
  text-align: center;
  &__top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__desc {
    margin: rem(50) rem(0);
    @media (max-width: $mobile) {
      line-height: 1.4;
    }
  }
}
</style>
