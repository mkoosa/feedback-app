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
          <a
            @click="eventHandler(element)"
            :class="index == 0 ? 'none' : ''"
            class="list-element"
            href="javascript:;"
            >{{ element }}</a
          >
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

const emit = defineEmits<{
  (e: '@eventFromDropdown', entry: string): void;
}>();

const eventHandler = (value: string) => {
  emit('@eventFromDropdown', value);
};

const { elements } = toRefs(props);
const listElement = ref(elements.value[0]);

const getElement = (element: string) => (listElement.value = element);
</script>

<style scoped>
/* cockpitSort component */
.dropdown {
  position: relative;
}

.dropdown__header {
  display: flex;
}
.dropdown__icon {
  transform: translateY(0.5rem);
  font-size: 1.5rem;
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

.cockpit__dropdown-heading {
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 500;
  margin-right: 0.5rem;
}

/* from CockPitSort component */
.cockpit__dropdown-list {
  margin-top: 1rem;
  width: 18rem;
  position: absolute;
  left: -2rem;
  border-radius: 0.4rem;
  overflow: hidden;
}
@media only screen and (min-width: 769px) {
  /* from CockPitSort component */
  .cockpit__dropdown-heading {
    margin-right: 0.8rem;
  }
  .cockpit__dropdown-list {
    left: -6rem;
    width: 20rem;
  }

  @media only screen and (min-width: 1201px) {
    .cockpit__dropdown-list {
      width: 25rem;
      top: 2rem;
    }
  }
}
</style>
