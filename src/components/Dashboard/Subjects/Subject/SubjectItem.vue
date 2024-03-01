<template>
  <li :item="item" class="dashboard__item item">
    <div class="item__content">
      <h2 class="item__header">{{ item.title }}</h2>
      <p class="item__paragraph">
        {{ item.description }}
      </p>
    </div>
    <TheCategory class="item__category" :category="item.category" />
    <div class="item__bottom">
      <SubjectVotes :quantity="item.upvotes" />
      <SubjectComment :quantity="item.comments?.length" />
    </div>
  </li>
</template>

<script setup lang="ts">
import TheCategory from '@/components/Shared/TheCategory.vue';
import SubjectVotes from './SubjectVotes.vue';
import SubjectComment from './SubjectComment.vue';
import type { Subject } from '@/types/request';

defineProps<{
  item: Subject;
}>();
</script>

<style scoped>
.item {
  margin: 0 2.5rem;
  padding: 2.5rem;
  border-radius: 1rem;
  background: var(--white);
  position: relative;
}
.item + .item {
  margin-top: 1.9rem;
}

.item__header::first-letter {
  text-transform: capitalize;
}

.item__header {
  margin-bottom: 0.8rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--dark-blue);
  opacity: 0.9;
}
.item__paragraph {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--grey-blue);
  opacity: 0.9;
}

.item__category {
  margin: 1.3rem 0 1.5rem 0;
}

.comment {
  display: flex;
  align-items: center;
}

.item__bottom {
  display: flex;
  justify-content: space-between;
}

@media only screen and (min-width: 769px) {
  .item {
    margin-left: 0;
    margin-right: 0;
  }
  .item__content {
    padding-left: 11rem;
  }

  .item__header {
    font-size: 1.8rem;
  }

  .item__category {
    margin-left: 11.2rem;
  }

  .item__bottom {
    position: absolute;
    width: 93%;
    top: 50%;
    transform: translateY(-50%);
  }

  .item__paragraph {
    font-size: 1.6rem;
    max-width: 87%;
  }
}
</style>
