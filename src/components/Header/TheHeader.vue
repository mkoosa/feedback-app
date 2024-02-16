<template>
  <header class="header indent">
    <HeaderHeadings />
    <nav class="navigation">
      <HamburgerNav />
    </nav>
    <TheCockpit />
  </header>
</template>

<script setup lang="ts">
import HeaderHeadings from './HeaderHeadings.vue';
import HamburgerNav from './HamburgerNav.vue';
import TheCockpit from '@/components/cockpit/TheCockpit.vue';
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
</style>
