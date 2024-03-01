<template>
  <ul class="dashboard__lists">
    <SubjectItem v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script setup lang="ts">
import SubjectItem from './Subject/SubjectItem.vue';
import useMainStore from '@/stores/main';
import { computed } from 'vue';

const mainStore = useMainStore();

const items = computed(() => mainStore.GET_SUBJECTS);
</script>

<style scoped>
.dashboard__lists {
  margin: 3rem 0;

  /* margin: 3rem 2rem; */
}
</style>
