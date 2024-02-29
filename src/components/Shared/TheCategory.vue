<template>
  <div class="category">
    <p class="text">{{ category }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: string;
}>();
</script>

<style scoped>
.category {
  width: fit-content;
  margin: 0 1.5rem 2rem 0;
  display: flex;
  background: var(--dark-grey);
  border-radius: 1rem;
}

.text {
  padding: 0.5rem 1em;
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--blue);
  text-transform: capitalize;
}
</style>
