<script>
export default {
  data() {
    return {
      // 사용자 입력 데이터
      inputMsg: '',
    };
  },

  emits: ['addTodo'],
  methods: {
    addTodo() {
      // console.log(this.inputMsg);
      this.$emit('addTodo', this.inputMsg); // 부모 컴포넌트 이벤트 호출
      this.inputMsg = '';
    },
  },
};
</script>

<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
