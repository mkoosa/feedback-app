import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref } from 'vue';

import useResource from '@/composables/useResource';

import type { Subjects } from '@/types/request';

const useMainStore = defineStore('mainStore', () => {
  const { fetchRequest } = useResource();

  const subjects = ref<Subjects | null>(null);

  fetchRequest().then((data) => (subjects.value = data));

  return { fetchRequest, subjects };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}

export default useMainStore;
