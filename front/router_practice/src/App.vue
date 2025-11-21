<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import TheHeadingNavbar from './components/layout/TheHeadingNavbar.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
</script>
<template>
  <div>
    <TheHeadingNavbar />
    <!-- 현재 라우트에 맞는 Component가 렌더링 -->
    <router-view></router-view>
  </div>
  <RouterView />
</template>

<style scoped></style>
