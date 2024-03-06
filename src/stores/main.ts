import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';

import useResource from '@/composables/useResource';

import type { Subjects } from '@/types/request';

const useMainStore = defineStore('mainStore', () => {
  const { fetchRequest } = useResource();

  const subjects = ref<Subjects | null>(null);
  const isDataLoaded = ref(false);

  fetchRequest().then((data) => (subjects.value = data));

  const IS_DATA_LOADED = computed(() => {
    subjects.value?.requests.length ? (isDataLoaded.value = true) : (isDataLoaded.value = false);
    return isDataLoaded.value;
  });

  return { fetchRequest, subjects, IS_DATA_LOADED };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}

export default useMainStore;
