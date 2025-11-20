<script setup>
import { ref, watch } from 'vue';

const state = ref({ count: 0 });

watch(
  state,
  (curVal, preVal) => {
    console.log(curVal, preVal);
  },
  { deep: true }
);
</script>
<template>
  <h1>ref : {{ state.count }}</h1>
  <button @click="state.count++">증가</button>
  <button @click="state.count--">감소</button>
</template>
