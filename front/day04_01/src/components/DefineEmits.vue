<script setup>
// 자식컴포넌트(현재)에서는 부모컴포넌트(App.vue)에서 전달한 이벤트를 defineEmits() 받음
import { defineEmits } from 'vue';
const emit = defineEmits(['count-increment', 'state-count-increment']);

const increment = () => {
  emit('count-increment', 10, 20, 30);
};
</script>
<template>
  <button @click="increment">count증가</button>
  <button @click="emit('state-count-increment', [50])">state.count 증가</button>
</template>
