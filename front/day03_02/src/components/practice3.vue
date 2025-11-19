<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');
const warningMessage = computed(() => {
  if (searchText.value.length > 10) {
    return '10자를 초과했습니다!';
  } else {
    return '';
  }
});
</script>
<template>
  <div>
    <input v-model="searchText" placeholder="검색어 입력" />
    <p>{{ warningMessage }}</p>
  </div>
</template>
