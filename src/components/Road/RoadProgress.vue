<template>
  <ul class="road__list">
    <li class="road__list-element element" v-for="progress in progresses" :key="progress">
      <div :class="progress" class="element__dot"></div>
      <p class="element__name">{{ progress }}</p>
      <span class="element__counter">3</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const progresses = ref<string[]>(['planned', 'in-progress', 'live']);
</script>

<style scoped>
.road__list {
  font-size: 1.5rem;
  margin-top: 1.2rem;
}
.road__list-element {
  display: flex;
  align-items: center;
}

.road__list-element:nth-of-type(2) {
  margin: 1rem 0;
}
.element__dot {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.8rem;
}

.element__name {
  margin-left: 1.4rem;
  font-weight: 400;
  text-transform: capitalize;
  color: var(--grey-blue);
  opacity: 0.8;
}

.element__counter {
  margin-left: auto;
  font-weight: 600;
  color: var(--grey-blue);
}
.live {
  background-color: var(--light-blue);
}
.in-progress {
  background-color: var(--lila);
}

.planned {
  background-color: var(--orange);
}

@media only screen and (min-width: 1201px) {
  .element__counter {
    font-weight: 700;
    font-size: 1.6rem;
  }
}
</style>
