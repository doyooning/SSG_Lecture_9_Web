<script setup>
import { ref } from 'vue';

import MenuBar from './components/props/MenuBar.vue';

const arr = ref([
  { key: 'literal', label: 'Props Literal Demo' },
  { key: 'object', label: 'Props Object Demo' },
  { key: 'template', label: 'Event Template Demo' },
  { key: 'script', label: 'Event Script Setup Demo' },
]);
</script>
<template>
  <div class="container">
    <MenuBar :arr="arr" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
.menu {
  margin: 0.3rem 0;
}
button {
  margin: 0.2rem;
  padding: 0.5rem;
}
.active {
  background-color: steelblue;
  color: aliceblue;
  border: 0;
  border-radius: 5px;
}
</style>
