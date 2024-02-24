<template>
  <div class="dashboard">
    <TheCockpit />
    <DashboardSubjects />
  </div>
</template>

<script setup lang="ts">
import TheCockpit from './Cockpit/TheCockpit.vue';
import DashboardSubjects from './DashboardSubjects.vue';
</script>

<style scoped>
@media only screen and (min-width: 769px) {
  .dashboard {
    margin-top: 3.5rem;
    padding-inline: 2rem;
  }
}
@media only screen and (min-width: 1024px) {
  .dashboard {
    padding-right: 0;
  }
}
</style>
