<template>
  <a-dropdown :class="dropDownClass" class="dropdown">
    <a class="dropdown__header" @click.prevent>
      <p :class="dropdownHeadingClass">{{ listElement }}</p>
      <font-awesome-icon :icon="['fas', 'angle-down']" class="dropdown__icon" />
    </a>
    <template #overlay>
      <a-menu :class="listClass">
        <a-menu-item
          @click="getElement(element)"
          v-for="(element, index) in elements"
          :key="index"
          :style="style"
        >
          <a :class="index == 0 ? 'none' : ''" class="list-element" href="javascript:;">{{
            element
          }}</a>
          <font-awesome-icon
            :class="listElement === element ? 'check' : ''"
            class="list-icon"
            :icon="['fas', 'check']"
          />
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';

const props = defineProps<{
  elements: string[];
  style: object;
  dropDownClass: string;
  dropdownHeadingClass: string;
  listClass: string;
}>();

const { elements } = toRefs(props);
const listElement = ref(elements.value[0]);

const getElement = (element: string) => (listElement.value = element);
</script>

<style scoped>
/* cockpitSort component */
.dropdown {
  position: relative;
}
.dropdown__heading {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.dropdown__header {
  display: flex;
}

.dropdown__heading {
  font-weight: 500;
  margin-right: 0.5rem;
}
.dropdown__icon {
  transform: translateY(0.5rem);
  font-size: 1.5rem;
}
.dropdown__list {
  margin-top: 1rem;
  width: 18rem;
  position: absolute;
  left: -2rem;
  border-radius: 0.4rem;
  overflow: hidden;
}

.list-element {
  padding: 0.3rem;
  font-size: 1.4rem;
  text-transform: capitalize;
}

.list-element::after {
  position: absolute;
  bottom: 0;
  left: -2rem !important;
  right: 0;
  content: '';
  width: 120%;
  height: 0.05rem;
  background: rgba(128, 128, 128, 0.5);
}

.list-element.none::after {
  display: none;
}

.list-icon {
  margin-left: auto;
  color: var(--lila);
  display: none;
}

.list-icon.check {
  display: block;
}

.ant-dropdown-menu-title-content {
  display: none;
}
</style>
