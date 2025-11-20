<script setup>
import { ref } from 'vue';

// 사용자 입력 저장
const greet = ref('');

// 상위로 보낼 이벤트 정의
// payload 검증이 가능한 형태로 defineEmits 사용
const emit = defineEmits({
  greetingEvent: null, // 인자 없음

  // 인자를 전달할 때 payload 검증
  greetingArgEvent: (payload) => {
    if (payload.trim().length != 0) {
      return true;
    } else {
      console.warn('인사말 입력 !!!');
      return false;
    }
  },
});
</script>

<template>
  <div class="child">
    <h2>Child Component</h2>

    <!-- 인자 없는 emit -->
    <div class="div-btn">
      <button @click="emit('greetingEvent')">인자 없는 인사하기</button>
    </div>

    <!-- 인자 있는 emit -->
    <div>
      <input v-model="greet" placeholder="인사말 입력" />

      <button @click="emit('greetingArgEvent', greet)">
        인자 포함 인사하기
      </button>
    </div>
  </div>
</template>

<style scoped>
.child {
  background-color: rgb(244, 210, 236);
  padding: 20px;
}
.div-btn {
  margin: 10px;
}
</style>
