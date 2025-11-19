<script setup>
import { ref, computed } from 'vue';

const a = ref(10);
const b = ref(20);

const sum = computed(() => a.value + b.value);
const average = computed(() => (a.value + b.value) / 2);
</script>

<template>
  <div>
    <input type="number" v-model.number="a" />
    <input type="number" v-model.number="b" />
    <p>합계: {{ sum }}</p>
    <p>평균: {{ average }}</p>
  </div>
</template>
