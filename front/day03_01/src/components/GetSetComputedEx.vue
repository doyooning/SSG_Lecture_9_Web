<script setup>
import { ref, computed } from 'vue';

const firstName = ref('Yumi');
const lastName = ref('Seo');

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  set(value) {
    const [first, last] = value.split(' ');
    firstName.value = first;
    lastName.value = last;
  },
});
</script>

<template>
  <div>
    <input v-model="fullName" />
    <p>First: {{ firstName }}</p>
    <p>Last: {{ lastName }}</p>
  </div>
</template>
