<script setup>
import { reactive, watch } from 'vue';

const state = reactive({ count: 0 });

watch(state, (curVal, preVal) => {
  console.log(curVal, preVal);
});
</script>
<template>
  <h1>reactive : {{ state.count }}</h1>
  <button @click="state.count++">증가</button>
  <button @click="state.count--">감소</button>
</template>
