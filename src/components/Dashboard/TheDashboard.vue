<template>
  <div class="dashboard">
    <TheCockpit />
    <SubjectItems />
  </div>
</template>

<script setup lang="ts">
import TheCockpit from './Cockpit/TheCockpit.vue';
import SubjectItems from './Subjects/SubjectItems.vue';
</script>

<style scoped>
.dashboard {
  background: var(--grey);
}
@media only screen and (min-width: 769px) {
  .dashboard {
    margin-top: 3.5rem;
    background: var(--grey);
  }
}
@media only screen and (min-width: 1024px) {
  .dashboard {
    padding-right: 0;
  }
}
</style>
