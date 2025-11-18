<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },

  data() {
    return {
      todo: [],
      current: 'all',
    };
  },

  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), // todo id를 고유값으로 랜덤 저장
        msg: inputMsg, // 할일 텍스트
        complete: false, // 할일 완료 여부
      };
      this.todo.push(item);
    },
    updateTab(tab) {
      this.current = tab;
    },

    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },

    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    },
  },

  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    },
  },
};
</script>

<template>
  <div class="todo">
    <!-- TodoInput으로 전달받은 현재 todo TodoHeader에 전달 -->

    <TodoHeader :current="current" @update-tab="updateTab" />
    <!-- TodoList 컴포넌트로 computedTodo 데이터를 보냄 -->
    <TodoList
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
