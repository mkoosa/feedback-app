<template>
  <div role="list" class="cockpit__categories">
    <TheCategory
      role="listitem"
      v-for="category in categories"
      :key="category"
      :category="category"
      class="cockpit__category"
    />
  </div>
</template>

<script setup lang="ts">
// import CockpitSubject from './CockpitSubject.vue';

import { ref } from 'vue';
import TheCategory from '@/components/Shared/TheCategory.vue';

const categories = ref<string[]>(['all', 'UI', 'UX', 'enhancement', 'bug', 'feature']);
</script>

<style scoped>
.cockpit__categories {
  margin: 2rem 0;
  padding: 2rem 2rem 1.5rem 2rem;
  background: var(--white);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 0.5rem;
}

@media only screen and (min-width: 769px) {
  .cockpit__categories {
    margin: 0;
    border-radius: 1rem;
  }
}

@media only screen and (min-width: 1025px) {
  .cockpit__categories {
    margin: 1.4rem 0;
  }
}
</style>
