<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <TheDashboard />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/Header/TheHeader.vue';
import TheDashboard from '../Dashboard/TheDashboard.vue';
</script>

<style scoped>
.wrapper {
  overflow-x: hidden;
  position: relative;
}
.main {
}

@media only screen and (min-width: 769px) {
  .wrapper {
    margin-inline: auto;
    max-width: 160rem;
    background: var(--grey);
    padding-inline: 4rem;
  }
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    padding-inline: 7rem;
    display: grid;
    grid-template-columns: 26rem 1fr;
  }

  .main {
    margin-left: 3rem;
  }
}
@media only screen and (min-width: 1201px) {
  .wrapper {
    padding-inline: 10rem;
    padding-top: 3.5rem;
    padding-inline: 14rem;
  }
  .main {
    margin-left: 5rem;
  }
}
</style>
