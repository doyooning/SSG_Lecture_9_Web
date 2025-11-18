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

  data() {
    return {
      editingId: null, // 현재 편집 중인 항목의 id
      editingMsg: '', // 편집 중인 텍스트
    };
  },

  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
    editTodo(id, msg) {
      this.editingId = id;
      this.editingMsg = msg;
    },
    saveTodo(id) {
      if (this.editingMsg.trim()) {
        this.$emit('edit-todo', id, this.editingMsg);
      }
      this.editingId = null;
      this.editingMsg = '';
    },
    cancelEdit() {
      this.editingId = null;
      this.editingMsg = '';
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
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo(item.id)"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>
      <!-- 편집 모드가 아닐 때: 일반 텍스트 표시 -->
      <span v-if="editingId !== item.id" class="todo__item-text">{{
        item.msg
      }}</span>

      <!-- 편집 모드일 때: 입력창 표시 -->
      <input
        v-else
        v-model="editingMsg"
        type="text"
        class="todo__item-input"
        @keydown.enter="saveTodo(item.id)"
        @keydown.esc="cancelEdit"
      />

      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
        >delete
      </span>
      <!-- 편집: edit, 편집내용저장: save -->
      <span
        v-if="editingId !== item.id"
        class="material-symbols-outlined todo__edit-icon"
        @click="editTodo(item.id)"
        >edit
      </span>
      <span
        v-else
        class="material-symbols-outlined todo__save-icon"
        @click="saveTodo(item.id)"
      >
        check
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
