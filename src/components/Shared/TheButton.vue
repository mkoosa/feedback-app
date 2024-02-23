<template>
  <button
    @click="$emit('@eventFromBtn')"
    v-if="element === 'button'"
    :bgc="bgc"
    type="button"
    class="btn"
    :class="btnClass"
  >
    <slot></slot>
    {{ text }}
  </button>
  <button v-if="element === 'submit'" type="submit" class="btn" :bgc="bgc" :class="btnClass">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
const props = defineProps<{
  element: string;
  bgc: string;
  text: string;
}>();

const { bgc } = toRefs(props);

const btnClass = computed(() => bgc.value);

defineEmits<{
  (e: '@eventFromBtn'): void;
}>();
</script>

<style scoped>
.btn {
  padding: 0.85em 1.1em;
  background: #000;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: white;
  outline: none;
  border: none;

  text-transform: capitalize;
  border-radius: 1rem;
}

.lila {
  background: var(--lila);
}

.blue {
  background: var(--blue);
}

.dark-blue {
  background: var(--dark-blue);
}
</style>
