<template>
  <div class="header__headings">
    <h1 class="heading heading--main">{{ mainHeadingText }}</h1>
    <h2 class="heading">{{ headingText }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mainHeadingText = ref('Frontend Mentor');
const headingText = ref('Feedback Board');
</script>

<style scoped>
.header__headings {
  color: var(--white);
}
.heading {
  font-weight: 500;
  font-size: 1.4rem;
  opacity: 0.7;
}

.heading--main {
  font-size: 1.6rem;
  font-weight: 600;
  opacity: 1;
}
</style>
