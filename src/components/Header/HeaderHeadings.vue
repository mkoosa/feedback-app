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

@media only screen and (min-width: 769px) {
  .header__headings {
    padding: 0 0 2.5rem 2.5rem;
    background-image: url('../../assets/shared/header/tablet/background-header.png');
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .heading {
    font-size: 1.5rem;
  }

  .heading--main {
    font-size: 2rem;
  }
}

@media only screen and (min-width: 1025px) {
  .header__headings {
    background-image: url('../../assets/shared/header/desktop/background-header.png');
    height: 15rem;
    width: 100%;
  }
}
</style>
