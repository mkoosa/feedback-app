<template>
  <MainComponent />
</template>

<script setup lang="ts">
import MainComponent from './components/View/MainComponent.vue';
import useMainStore from './stores/main';
import { onMounted } from 'vue';

onMounted(() => {
  useMainStore();
});
</script>
