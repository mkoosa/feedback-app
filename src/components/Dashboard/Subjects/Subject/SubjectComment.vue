<template>
  <div class="item__comment comment">
    <font-awesome-icon class="comment__icon" :icon="['fas', 'comment']" />
    <p class="comment__quantity">{{ quantity || 0 }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ quantity: string | number | undefined }>();
</script>

<style scoped>
.comment__icon {
  color: var(--grey-blue);
  font-size: 2rem;
  opacity: 0.5;
}
.comment__quantity {
  font-size: 1.3rem;
  color: var(--grey-blue);
  font-weight: 700;
  margin-left: 0.5rem;
}
@media only screen and (min-width: 769px) {
  .comment__quantity {
    font-size: 1.5rem;
    color: #000;
    opacity: 0.9;
  }
}
</style>
