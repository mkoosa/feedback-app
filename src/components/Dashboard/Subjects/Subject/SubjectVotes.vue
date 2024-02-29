<template>
  <div class="item__votes">
    <font-awesome-icon class="item__icon" :icon="['fas', 'angle-down']" />
    <p class="item__vote-quantity">22</p>
  </div>
</template>

<style scoped>
.item__votes {
  width: fit-content;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  background: var(--dark-grey);
  font-size: 1.5rem;
  border-radius: 1rem;
}

.item__icon {
  font-size: 1.3rem;
  color: black;
  /* align-self: flex-end; */
  margin-right: 1rem;
}

.item__vote-quantity {
  color: black;
  font-weight: 600;
}
</style>
