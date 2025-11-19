<script>
export default {
  data() {
    return {
      // 입력받은 내용을 담을 memo
      memo: '',
    };
  },

  emits: ['add-todo'],
  methods: {
    addTodo() {
      this.$emit('add-todo', this.memo);
      this.memo = '';
    },
  },
};
</script>
<template>
  <div class="todo__input">
    <input
      v-model="memo"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요..."
      @keydown.enter="addTodo"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
<style></style>
