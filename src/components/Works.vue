<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>
<template>
  <div>
    <h1>{{ t("works.title") }}</h1>
  </div>
</template>
