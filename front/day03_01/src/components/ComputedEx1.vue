<script setup>
import { computed, reactive, ref } from 'vue';

const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });
// ref() 데이터를 활용시 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2);
// reactive() 데이터는 value 속성이 필요 없음
const reactiveDoubleCount = computed(() => reactive * 2);

console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
