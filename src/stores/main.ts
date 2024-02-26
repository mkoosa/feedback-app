import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import useResource from '@/composables/useResource';

import type Request from '@/types/request';

const useMainStore = defineStore('mainStore', () => {
  const { fetchRequest } = useResource();

  // const request = ref<Request[]>([]);
  const request = ref<Request[]>([]);
  fetchRequest().then((data) => (request.value = data));
  const GET_REQUESTS = computed(() => request.value);

  return { fetchRequest, GET_REQUESTS, request };
});

export default useMainStore;
