<script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onBeforeMount(() => {
  const name = route.query.name;
  const age = route.query.age;
  console.log(name);
  console.log(age);
});
</script>

<template>
  <h1>UserView</h1>
  <h1>name: {{ name }}</h1>
  <h1>age: {{ age }}</h1>
</template>
