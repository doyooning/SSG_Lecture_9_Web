<script>
export default {
  // 부모 컴포넌트에서 전달한 computedTodo 데이터를
  // TodoList컴포넌트에서 props 옵션 속성으로 받는다
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
  },
};
</script>

<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->

    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }"
    >
      <input
        type="checkbox"
        id="chk"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>
      <span class="todo__item-text">{{ item.msg }}</span>
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
      >
        delete
      </span>
    </div>
    <!-- 할 일 목록이 없을 때 -->
    <div
      v-if="computedTodo.length === 0"
      class="todo__item--no"
      style="display: none"
    >
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>
