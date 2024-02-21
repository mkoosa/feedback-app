<template>
  <div role="list" class="cockpit__subjects">
    <TheSubject
      role="listitem"
      v-for="subject in subjects"
      :key="subject"
      :subject="subject"
      subjectClass="cockpit__subject"
    />
  </div>
</template>

<script setup lang="ts">
// import CockpitSubject from './CockpitSubject.vue';
import TheSubject from '../Shared/TheSubject.vue';

import { ref } from 'vue';

const subjects = ref<string[]>(['all', 'UI', 'UX', 'enhancement', 'bug', 'feature']);
</script>

<style scoped>
.cockpit__subjects {
  margin: 2rem 0;
  padding: 2rem 2rem 1.5rem 2rem;
  background: var(--white);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 0.5rem;
}

@media only screen and (min-width: 769px) {
  .cockpit__subjects {
    margin: 0;
    border-radius: 1rem;
  }
}

@media only screen and (min-width: 1025px) {
  .cockpit__subjects {
    margin: 1.4rem 0;
  }
}
</style>
