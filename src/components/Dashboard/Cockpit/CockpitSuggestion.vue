<template>
  <div class="cockpit__suggestion suggestion">
    <font-awesome-icon class="suggestion__icon" :icon="['fas', 'lightbulb']" />
    <p class="suggestion__paragraph"><span>6</span>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('Suggestions');
</script>
<style scoped>
.suggestion {
  display: none;
}

@media only screen and (min-width: 769px) {
  .suggestion {
    margin-right: 4rem;
    display: flex;
    align-items: center;
  }
  .suggestion__icon {
    color: var(--white);
    font-size: 2.3rem;
    margin-right: 2rem;
  }
  .suggestion__paragraph {
    font-size: 2rem;

    font-weight: 600;
  }

  .suggestion__paragraph span {
    font-weight: 600;
    margin-right: 0.5rem;
  }
}
</style>
