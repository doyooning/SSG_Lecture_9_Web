<script>
import TodoFilter from './components/TodoFilter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoFilter,
    TodoInput,
    TodoList,
  },

  data() {
    return {
      // 등록된 todo를 담을 todos 배열
      todos: [],
      filter: 'ongoing', // 상태(체크박스 관리): all, ongoing, done
    };
  },

  methods: {
    addTodo(memo) {
      const item = {
        id: new Date().getTime(), // id를 시간으로 설정(고유값)
        content: memo,
        done: false,
      };
      this.todos.push(item);
      this.saveTodo();
    },
    // 상단 탭 전환
    updateTab(tab) {
      this.filter = tab;
    },
    // todo 삭제
    deleteTodo(id) {
      // filter()로 todos 배열을 최신화 - 해당 id가 포함x
      this.todos = this.todos.filter((v) => v.id !== id);
      this.saveTodo();
    },
    // todo 상태 업데이트(체크박스 작동)
    updateTodo(id) {
      // filter()로 todos 배열을 최신화 - 해당 id의 완료 상태
      this.todos = this.todos.map((v) =>
        v.id === id ? { ...v, done: !v.done } : v
      );
      this.saveTodo();
    },
    // todo 내용 재작성 수정
    editTodo(id, memo) {
      this.todos = this.todos.map((v) =>
        v.id === id ? { ...v, content: memo } : v
      );
      this.saveTodo();
    },
    clearTodo() {
      this.todos = [];
      this.saveTodo();
    },
    // 현재 todos를 localStorage에 저장
    saveTodo() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },

  computed: {
    todoInit() {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos !== null) {
        const parsedTodos = JSON.parse(savedTodos);
        this.todos = parsedTodos;
      }
      return this.todos;
    },

    // todos를 필터링
    filteredTodo() {
      switch (this.filter) {
        case 'all':
          return this.todos;
        case 'ongoing':
          return this.todos.filter((v) => !v.done);
        case 'done':
          return this.todos.filter((v) => v.done);
      }
    },
  },
};
</script>

<template>
  <div class="todo">
    <TodoFilter :filter="filter" @update-tab="updateTab" />

    <TodoList
      :todo-init="todoInit"
      :filtered-todo="filteredTodo"
      @clear-todo="clearTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
    />

    <TodoInput @add-todo="addTodo" />
  </div>
</template>
<style></style>
