<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="header">Header</div>
    <div class="main">
      <RouterView />
    </div>
    <div class="footer">Footer</div>
  </div>
</template>
