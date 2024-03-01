import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import useResource from '@/composables/useResource';

import type { Subjects } from '@/types/request';

const useMainStore = defineStore('mainStore', () => {
  const { fetchRequest } = useResource();

  const subjects = ref<Subjects | null>(null);

  fetchRequest().then((data) => (subjects.value = data));

  const GET_SUBJECTS = computed(() => subjects.value?.requests);

  return { fetchRequest, GET_SUBJECTS, subjects };
});

export default useMainStore;
