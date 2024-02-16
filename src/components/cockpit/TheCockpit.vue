<template>
  <div class="cockpit"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.cockpit {
  width: 0%;
  height: 100vh;
  background: var(--grey);
  position: absolute;
  right: 0;
  top: 7.5rem;
  /* display: none; */
}

.cockpit.isOpen {
  width: 70%;
}
</style>
