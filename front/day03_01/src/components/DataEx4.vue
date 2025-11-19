<script setup>
import { reactive } from 'vue';

const state = reactive(0);

console.log(state.value);
setTimeout(() => {
  state.value++;
}, 1000);
</script>

<template>
  <h1>state : {{ state.value }}</h1>
</template>
