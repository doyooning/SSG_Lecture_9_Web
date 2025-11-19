<script setup>
import { ref, computed } from 'vue';

const name = ref('sstar');

const upperName = computed(() => name.value.toUpperCase());
const lowerName = computed(() => name.value.toLowerCase());
</script>

<template>
  <div>
    <input v-model="name" />
    <p>대문자: {{ upperName }}</p>
    <p>소문자: {{ lowerName }}</p>
  </div>
</template>
