import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';

import useMainStore from './main';

import type { Subjects, Subject } from '@/types/request';
const useSubjectsStore = defineStore('subjectsStore', () => {
  const mainStore = useMainStore();
  const subjects = ref<Subjects | null>(null);

  const quantitySubjectsOnPage = ref(6);
  const subjectsOnPage = ref<Subject[] | undefined>([]);

  const objectsOnPage = (start: number, end: number) => {
    subjectsOnPage.value = subjects.value?.requests.slice(start, end);
  };

  const GET_SUBJECTS = computed(() => {
    subjects.value = mainStore.subjects;
    subjectsOnPage.value = subjects.value?.requests.slice(0, quantitySubjectsOnPage.value);
    return subjects.value?.requests;
  });

  const GET_SUBJECTS_QUANTITY = computed(() => subjects.value?.requests.length);
  const GET_SUBJECTS_ON_PAGE = computed<Subject[] | undefined>(() => {
    GET_SUBJECTS.value;
    return subjectsOnPage.value;
  });

  return {
    subjects,
    GET_SUBJECTS,
    GET_SUBJECTS_QUANTITY,
    GET_SUBJECTS_ON_PAGE,
    objectsOnPage,
    subjectsOnPage,
    quantitySubjectsOnPage
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSubjectsStore, import.meta.hot));
}

export default useSubjectsStore;
