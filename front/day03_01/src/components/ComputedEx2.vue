<script setup>
import { computed, reactive, ref } from 'vue';
const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });
// ref() 데이터를 활용시 value 속성 사용
const refDoubleCount = computed({
  get() {
    return refCount.value * 2;
  },
  set(newValue) {
    refCount.value = newValue;
  },
});
// reactive() 데이터는 value 속성이 필요 없음
const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count * 2;
  },
  set(newValue) {
    reactiveCount.count = newValue;
  },
});
//1초 뒤에 refCount 와 reactiveCount 의 count 속성의 값을 변경한다.
//refCount 와 reactiveCount를 참조해서 계산하는 computed()함수의 데이터도 함깨 자동 변경시킨다.
setTimeout(() => {
  refCount.value = 10;
  reactiveCount.count = 20;
}, 1000);
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
