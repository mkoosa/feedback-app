<template>
  <header class="header indent">
    <HeaderHeadings />
    <HamburgerNav @@toggle-nav="closeOpen" :is-open-nav="isOpenNav" />
    <TheCockpit :is-open-nav="isOpenNav" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import HeaderHeadings from './HeaderHeadings.vue';
import HamburgerNav from './HamburgerNav.vue';
import TheCockpit from './Cockpit/TheCockpit.vue';

const isOpenNav = ref(false);
const closeOpen = () => (isOpenNav.value = !isOpenNav.value);
</script>

<style scoped>
.header {
  height: 7.5rem;
  background-image: url('../../assets/shared/header/mobile/background-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

@media only screen and (min-width: 769px) {
  .header {
    margin-top: 3rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    background-image: none;
    display: flex;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1.5rem;
    height: auto;
    background: var(--grey);
  }
}

@media only screen and (min-width: 1025px) {
  .header {
    margin-top: 3.5rem;
    padding-inline: 0;
    display: flex;
    justify-content: start;
    flex-direction: column;
  }
}
</style>
