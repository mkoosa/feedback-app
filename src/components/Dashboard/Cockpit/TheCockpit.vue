<template>
  <div class="dashboard__cockpit cockpit indent">
    <CockpitSort />
    <TheButtonVue @@eventFromBtn="click" element="button" bgc="lila" text="add feedback"
      >+</TheButtonVue
    >
  </div>
</template>

<script setup lang="ts">
import CockpitSort from './CockpitSort.vue';
import TheButtonVue from '@/components/Shared/TheButton.vue';

const click = (): void => console.log('ok');
</script>

<style scoped>
.cockpit {
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--white);
  background: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
