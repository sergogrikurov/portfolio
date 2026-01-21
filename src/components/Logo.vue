<template>
  <div class="logo">
    <span class="logo__first-letter">S</span>
    <span class="logo__last-letter">G</span>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  display: inline-block;
  font-size: rem(20);
  position: relative;
  width: rem(17);
  height: rem(28);

  &__first-letter {
    position: absolute;
  }
  &__last-letter {
    position: absolute;
    top: rem(8);
    left: rem(3);
  }
}
</style>
