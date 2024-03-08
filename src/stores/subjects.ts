import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';

import useMainStore from './main';

import type { Subject } from '@/types/request';

const useSubjectsStore = defineStore('subjectsStore', () => {
  const mainStore = useMainStore();
  const totalSubjectsOnPage = 6;
  const firstSubjectOnPage = ref(0);
  const lastSubjectOnPage = ref(totalSubjectsOnPage);
  const quantitySubjectsOnPage = ref(totalSubjectsOnPage);
  const subjectsOnPage = ref<Subject[] | undefined>([]);

  const GET_SUBJECTS = computed(() => mainStore.subjects?.requests);
  const GET_SUBJECTS_QUANTITY = computed(() => mainStore.subjects?.requests.length);
  const GET_SUBJECTS_ON_PAGE = computed(() => {
    return mainStore.subjects?.requests.slice(firstSubjectOnPage.value, lastSubjectOnPage.value);
  });

  return {
    GET_SUBJECTS,
    GET_SUBJECTS_QUANTITY,
    GET_SUBJECTS_ON_PAGE,
    subjectsOnPage,
    quantitySubjectsOnPage,
    firstSubjectOnPage,
    lastSubjectOnPage
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSubjectsStore, import.meta.hot));
}

export default useSubjectsStore;
