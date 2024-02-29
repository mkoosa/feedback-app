<template>
  <li class="dashboard__item item">
    <h2 class="item__header">add tags for solution</h2>
    <p class="item__paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt non optio, accusamus
      illum consequuntur velit harum nesciunt. Ratione quam veniam tempore vero nisi doloribus.
    </p>
    <TheCategory class="item__category" category="enhancement" />
    <div>
      <SubjectVotes />
    </div>
  </li>
</template>

<script setup lang="ts">
import TheCategory from '@/components/Shared/TheCategory.vue';
import SubjectVotes from './SubjectVotes.vue';
</script>
