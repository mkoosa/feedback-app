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

const subjectStore = useSubjectsStore();
const current = ref(1);
const total = computed(() => subjectStore.GET_SUBJECTS_QUANTITY);
const quantitySubjectsOnPage = 6;

const displaySubjectsOnPage = () => {
  let start = (current.value - 1) * quantitySubjectsOnPage;
  let end = start + quantitySubjectsOnPage;
  subjectStore.objectsOnPage(start, end);
};
</script>

<style scoped>
.pagination {
  text-align: center;
  padding-bottom: 2rem;
}
</style>
