<template>
  <ul class="dashboard__lists">
    <SubjectItem v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script setup lang="ts">
import SubjectItem from './Subject/SubjectItem.vue';

import { computed } from 'vue';
import useSubjectsStore from '@/stores/subjects';

const subjectStore = useSubjectsStore();

const items = computed(() => subjectStore.GET_SUBJECTS_ON_PAGE);
</script>

<style scoped>
.dashboard__lists {
  margin: 3rem 0;
}
</style>
