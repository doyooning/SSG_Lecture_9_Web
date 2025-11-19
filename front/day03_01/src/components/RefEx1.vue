<script setup>
import { ref } from 'vue';
const inputRef = ref(null);

setTimeout(() => {
  console.log(inputRef.value); // h1 태그에 해당하는 DOM 객체
  console.log(inputRef.value.innerText); // DOM 객체의 속성, 메서드 모두 사용
}, 1000);
</script>

<template>
  <h1 ref="inputRef">hello, Ref!</h1>
</template>
