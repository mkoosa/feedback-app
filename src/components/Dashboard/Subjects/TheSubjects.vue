<template>
  <ul class="dashboard__lists">
    <TheLoader v-if="!maiStore.IS_DATA_LOADED" />
    <SubjectItem v-else v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script setup lang="ts">
import SubjectItem from './Subject/SubjectItem.vue';
import TheLoader from '@/components/Loader/TheLoader.vue';
import { computed } from 'vue';
import useSubjectsStore from '@/stores/subjects';
import useMainStore from '@/stores/main';

const maiStore = useMainStore();
const subjectStore = useSubjectsStore();

const items = computed(() => subjectStore.GET_SUBJECTS_ON_PAGE);
</script>

<style scoped>
.dashboard__lists {
  margin: 3rem 0;
  position: relative;
  min-height: 100vh;
}
</style>
