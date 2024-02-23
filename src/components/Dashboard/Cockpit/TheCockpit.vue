<template>
  <div class="dashboard__cockpit cockpit indent">
    <CockpitSort />
  </div>
</template>

<script setup lang="ts">
import CockpitSort from './CockpitSort.vue';
</script>

<style scoped>
.cockpit {
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--white);
  background: var(--dark-blue);
  display: flex;
  align-items: center;
}
</style>
