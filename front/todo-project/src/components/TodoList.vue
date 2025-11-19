<script>
export default {
  //
  props: {
    filteredTodo: {
      type: Array,
      default() {
        const todos = todoInit();
        if (todos != null) {
          return todos;
        } else {
          return [];
        }
      },
    },
  },

  data() {
    return {
      editingId: null, // 현재 편집 중인 항목의 id
      editingMemo: '', // 편집 중인 텍스트
    };
  },

  methods: {
    // 삭제
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    // 상태변경
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
    // 내용수정
    editTodo(id, memo) {
      this.editingId = id;
      this.editingMemo = memo;
    },
    // 저장
    saveTodo(id) {
      if (this.editingMemo.trim()) {
        this.$emit('edit-todo', id, this.editingMemo);
      }
      // data 다시 원래 상태로
      this.editingId = null;
      this.editingMemo = '';
    },
    // 수정취소
    cancelEdit() {
      // data 다시 원래 상태로
      this.editingId = null;
      this.editingMemo = '';
    },
  },
};
</script>
<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 -->
    <!-- 완료 시 .todo__item--done 클래스 추가 -->
    <div></div>

    <div
      v-for="item in filteredTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--done': item.done }"
    >
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.done"
        @click="updateTodo(item.id)"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>

      <!-- 수정 안할 때: 일반 텍스트 표시 -->
      <span v-if="editingId !== item.id" class="todo__item-text">{{
        item.content
      }}</span>

      <!-- 수정할 때: 입력창 표시 -->
      <input
        v-else
        v-model="editingMemo"
        type="text"
        class="todo__item-input"
        @keydown.enter="saveTodo(item.id)"
        @keydown.esc="cancelEdit"
      />
      <!-- 수정: edit, 수정 내용 저장: save -->
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
        save
      </span>
      <!-- 삭제 버튼 -->
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
        >delete
      </span>
    </div>
    <!-- 할 일 목록이 없을 때 -->
    <div
      v-if="filteredTodo.length === 0"
      class="todo__item--no"
      style="display: none"
    >
      <p>할 일 목록이 없습니다.</p>
    </div>
  </div>
</template>
<style></style>
