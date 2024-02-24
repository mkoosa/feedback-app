<template>
  <div class="dashboard__cockpit cockpit indent">
    <CockpitSuggestion />
    <CockpitSort />
    <div class="btn-wrapper">
      <TheButton @@eventFromBtn="click" element="button" bgc="lila" text="add feedback"
        >+</TheButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import CockpitSuggestion from './CockpitSuggestion.vue';
import CockpitSort from './CockpitSort.vue';
import TheButton from '@/components/Shared/TheButton.vue';

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
  /* justify-content: space-between; */
}
.btn-wrapper {
  margin-left: auto;
}

@media only screen and (min-width: 769px) {
  .cockpit {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 1rem;
  }
}
</style>
