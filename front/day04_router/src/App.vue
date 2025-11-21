<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> &nbsp;&nbsp;
    <RouterLink to="/about">About</RouterLink> &nbsp;&nbsp;
    <RouterLink to="/user/info?name=ssg&age=20">UserInfo</RouterLink>
    &nbsp;&nbsp;
    <RouterLink to="/user/mike">UserView</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
