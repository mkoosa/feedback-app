<template>
  <div :class="isOpenNav ? 'isOpen' : 'cockpit'" class="cockpit">
    <CockpitSubjects />
    <RoadMap />
  </div>
</template>

<script setup lang="ts">
import CockpitSubjects from './CockpitSubjects.vue';
import RoadMap from '../../Road/RoadMap.vue';

defineProps<{
  isOpenNav: boolean;
}>();
</script>

<style scoped>
.cockpit {
  padding: 0 2rem;
  width: 80%;
  max-width: 33rem;
  height: 100vh;
  background: var(--grey);
  position: absolute;
  right: 0;
  top: 7.5rem;
  transition: all 0.22s;
  transform: translateX(100%);
}

.cockpit.isOpen {
  transition: all 0.22s linear;
  transform: translateX(0);
}

@media only screen and (min-width: 769px) {
  .cockpit {
    padding: 0;
    transform: initial;
    position: initial;
    height: auto;
    width: initial;
    max-width: 100%;
    top: initial;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    background: var(--grey);
  }
}

@media only screen and (min-width: 1025px) {
  .cockpit {
    display: flex;
    flex-direction: column;
  }
}
</style>
