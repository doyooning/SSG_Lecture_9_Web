<script setup>
import { reactive } from 'vue';

const arr1 = ref([10]); // 배열로 반응형 데이터 생성
const arr2 = ref([10]);

console.log(count.value);
console.log(state.value.count);

setTimeout(() => {
  arr1.value = [10, 20]; // 배열의 값 자체를 변경
}, 1000);

setTimeout(() => {
  arr2.push(20); // 배열의 요소 변경(추가)
}, 1000);
</script>

<template>
  <h1>count : {{ arr1 }}</h1>
  <h1>state : {{ arr2 }}</h1>
</template>
