<script setup></script>

<template>
  <FirstChild /><SecondChild />
  <h1>App.vue</h1>
</template>

<!-- 이 컴포넌트 한정 스타일 -->
<!-- scoped 해제하면 자신 것만 적용 -->
<style scoped>
p {
  color: orange !important;
}
</style>
