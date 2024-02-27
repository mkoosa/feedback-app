import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import useResource from '@/composables/useResource';

import type Request from '@/types/request';

const useMainStore = defineStore('mainStore', () => {
  const { fetchRequest } = useResource();

  // const request = ref<Request[]>([]);
  const request = ref<Request | null>(null);

  fetchRequest().then((data) => (request.value = data));
  const GET_REQUESTS = computed(() => request.value);
  const GET_REQUESTS1 = computed(() => request.value?.requests.length);

  return { fetchRequest, GET_REQUESTS, request, GET_REQUESTS1 };
});

export default useMainStore;
