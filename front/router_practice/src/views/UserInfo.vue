<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const name = route.query.name;
const age = route.query.age;

console.log(name);
console.log(age);
</script>

<template>
  <h1>UserInfo View</h1>
  <h1>name: {{ name }}</h1>
  <h1>age: {{ age }}</h1>
</template>
