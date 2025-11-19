<script setup>
import { reactive, computed } from 'vue';

const item1 = reactive({ price: 1000, count: 2 });
const item2 = reactive({ price: 2500, count: 4 });

const cart = reactive({
  item1,
  item2,
});

const totalPrice = computed(() => {
  return item1.price * item1.count + item2.price * item2.count;
});
</script>
<template>
  <p>{{ cart }}</p>
  <p>{{ totalPrice }}</p>
</template>
