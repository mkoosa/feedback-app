<template>
  <div class="road">
    <RoadHeader />
    <RoadProgress />
  </div>
</template>
<script setup lang="ts">
import RoadHeader from './RoadHeader.vue';
import RoadProgress from './RoadProgress.vue';
</script>

<style scoped>
.road {
  background: var(--white);
  padding: 2rem 2rem 1.5rem 2rem;
  border-radius: 1rem;
}
</style>
