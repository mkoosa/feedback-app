<template>
  <div class="road__header">
    <h2 class="road__heading">{{ heading }}</h2>
    <p class="road__view">{{ view }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const heading = ref('Roadmap');
const view = ref('view');
</script>

<style scoped>
.road {
  background: var(--white);
  padding: 2rem 2rem 1.5rem 2rem;
}

.road__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.road__heading {
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--very-dark-blue);
  opacity: 0.9;
}

.road__view {
  color: var(--blue);
  text-decoration: underline;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 600;
  align-self: flex-end;
}

@media only screen and (min-width: 1201px) {
  .road__view {
    cursor: pointer;
  }
}
</style>
