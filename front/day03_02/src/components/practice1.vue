<script setup>
import { computed, ref, watch } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

const increment = () => count.value++;

// watch: {
//   count(newVal, oldVal) {
//     console.log(`Count changed from ${oldVal} to ${newVal}`);
//   },
watch(count, (oldVal, newVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});
</script>
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Doubled Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
