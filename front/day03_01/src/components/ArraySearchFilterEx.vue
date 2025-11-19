<script setup>
import { ref, computed } from 'vue';

const keyword = ref('');
const items = ref(['apple', 'banana', 'grape', 'orange']);

const filteredList = computed(() => {
  return items.value.filter((item) =>
    item.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <input v-model="keyword" placeholder="검색어 입력" />
    <ul>
      <li v-for="item in filteredList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
