<template>
  <div class="cockpit__sort sort">
    <p class="sort__paragraph">{{ sortParagraph }}</p>
    <span>:</span>
    <DropDown
      :elements="sortElements"
      :style="{ fontSize: '14px', padding: '8px', display: 'flex' }"
      :drop-down-class="'cockpit__dropdown dropdown'"
      :dropdown-heading-class="'dropdown__heading'"
      :list-class="'dropdown__list'"
    />
  </div>
</template>

<script setup lang="ts">
import DropDown from '@/components/Shared/DropDown.vue';
import { ref } from 'vue';
const sortParagraph = ref('sort by');
const sortElements = ref<string[]>([
  'most votes',
  'least votes',
  'most comments',
  'least comments'
]);
</script>

<style scoped>
.sort {
  display: flex;
  align-items: center;
}

.sort__paragraph::first-letter {
  text-transform: uppercase;
}

.sort__paragraph {
  width: fit-content;
}
.sort__paragraph {
  font-size: 1.5rem;
}
.sort span {
  font-size: 1.5rem;
  margin: 0 0.5rem;
}
</style>
