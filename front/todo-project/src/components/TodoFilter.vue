<script>
export default {
  props: {
    filter: {
      type: String,
      // 기본 보기를 진행중인 todo로 설정
      default() {
        return 'ongoing';
      },
    },
  },
  emits: ['update-tab'],
  methods: {
    updateTab(tab) {
      this.$emit('update-tab', tab);
    },
  },
};
</script>
<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <li
        :class="{ 'todo__tab--active': filter === 'all' }"
        @click="updateTab('all')"
      >
        전체보기
      </li>
      <li
        :class="{ 'todo__tab--active': filter === 'ongoing' }"
        @click="updateTab('ongoing')"
      >
        진행중
      </li>
      <li
        :class="{ 'todo__tab--active': filter === 'done' }"
        @click="updateTab('done')"
      >
        완료됨
      </li>
    </ul>
  </div>
</template>
<style></style>
