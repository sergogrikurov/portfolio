<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./views/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
