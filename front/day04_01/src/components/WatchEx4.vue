<script setup>
import { reactive, ref, watch } from 'vue';

const state = reactive({ count: 0 });
// 반응형 데이터를 콜백 함수 형태로 사용한 인자로 watch()에게 넘겨주기
watch(
  () => state.count,
  (curVal, preVal) => {
    console.log(curVal, preVal);
  }
);
</script>
<template>
  <h1>reactive : {{ state.count }}</h1>
  <button @click="state.count++">증가</button>
  <button @click="state.count--">감소</button>
</template>
