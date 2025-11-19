<script setup>
import { reactive, computed } from 'vue';

const fruits = reactive([
  { name: '사과', checked: false },
  { name: '바나나', checked: false },
  { name: '딸기', checked: false },
]);

const selectedCount = computed(() => {
  return fruits.filter((f) => f.checked).length;
});

const message = computed(() => {
  return selectedCount.value === 0
    ? '과일을 선택해주세요.'
    : `${selectedCount.value}개 선택됨`;
});
</script>

<template>
  <div>
    <div v-for="f in fruits" :key="f.name">
      <input type="checkbox" v-model="f.checked" /> {{ f.name }}
    </div>
    <p>{{ message }}</p>
  </div>
</template>
