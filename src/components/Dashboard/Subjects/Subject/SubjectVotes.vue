<template>
  <div :quantity="quantity" class="item__votes">
    <font-awesome-icon class="item__icon" :icon="['fas', 'angle-up']" />
    <p class="item__vote-quantity">{{ quantity }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  quantity: number | string;
}>();
</script>

<style scoped>
.item__votes {
  width: fit-content;
  padding: 0.43em 1em;
  display: flex;
  align-items: center;
  background: var(--dark-grey);
  font-size: 1.5rem;
  border-radius: 1rem;
}

.item__icon {
  font-size: 1.3rem;
  color: var(--dark-blue);
  margin-right: 1rem;
}

.item__vote-quantity {
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--dark-blue);
  opacity: 0.9;
}
@media only screen and (min-width: 769px) {
  .item__votes {
    flex-direction: column;
    padding: 1.4rem 0;
    margin-bottom: 3.3rem;

    /* align-items: center; */
  }

  .item__icon {
    padding: 0 1.5rem;
    margin: 0 0 0.6rem 0;
  }
}
@media only screen and (min-width: 1201px) {
  .item__votes {
    cursor: pointer;
    transition: background 0.2s;
  }
  .item__votes:hover {
    background: var(--very-dark-grey);
    transition: background 0.2s;
  }
}
</style>
