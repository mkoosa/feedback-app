<template>
  <div class="wrapper">
    <TheHeader />
  </div>
  <div></div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/Header/TheHeader.vue';
</script>

<style scoped>
.wrapper {
  height: 100vh;
  background: var(--grey);
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    padding-inline: 10rem;
    display: grid;
    grid-template-columns: 26rem 1fr;
  }
}
@media only screen and (min-width: 1201px) {
  .wrapper {
    padding-top: 3.5rem;
    padding-inline: 14rem;
  }
}
</style>
