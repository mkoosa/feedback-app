<template>
  <a-pagination
    @change="displaySubjectsOnPage"
    class="pagination"
    v-model:current="current"
    :total="total"
    show-less-items
  />
</template>
<script lang="ts" setup>
import useSubjectsStore from '@/stores/subjects';
import { ref, computed } from 'vue';

const current = ref(1);
const subjectStore = useSubjectsStore();

const total = computed(() => subjectStore.GET_SUBJECTS_QUANTITY);

const displaySubjectsOnPage = () => {
  const firstSubjectOnPage = (current.value - 1) * subjectStore.quantitySubjectsOnPage;
  const lastSubjectOnPage = firstSubjectOnPage + subjectStore.quantitySubjectsOnPage;
  subjectStore.firstSubjectOnPage = firstSubjectOnPage;
  subjectStore.lastSubjectOnPage = lastSubjectOnPage;
};
</script>

<style scoped>
.pagination {
  text-align: center;
  padding-bottom: 2rem;
}
</style>
