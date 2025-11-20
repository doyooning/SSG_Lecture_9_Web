<script setup>
import { reactive, ref, watchEffect } from 'vue';

const count = ref(0);
const state = reactive({ count: 0 });
// 반응형 데이터를 콜백 함수 형태로 사용한 인자로 watch()에게 넘겨주기
watchEffect(() => {
  console.log(count.value);
  console.log(state.count);
});
</script>
<template>
  <h1>count : {{ count }}</h1>
  <button @click="count++">증가</button>
  <button @click="count--">감소</button>

  <h1>reactive : {{ state.count }}</h1>
  <button @click="state.count++">증가</button>
  <button @click="state.count--">감소</button>
</template>
