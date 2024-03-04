<template>
  <div class="dashboard">
    <TheCockpit />
    <TheSubjects />
    <SubjectsPagination />
  </div>
</template>

<script setup lang="ts">
import TheCockpit from './Cockpit/TheCockpit.vue';
import TheSubjects from './Subjects/TheSubjects.vue';
import SubjectsPagination from './Subjects/SubjectsPagination.vue';
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
