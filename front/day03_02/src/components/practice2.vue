<script setup>
import Practice2Child from './practice2Child.vue';

const childName = ref('Alice');
const handleGreeting = (message) => console.log(message);

// export default {
//   components: {
//     Practice2Child,
//   },
//   data() {
//     return {
//       childName: 'Alice',
//     };
//   },
//   methods: {
//     handleGreeting(message) {
//       console.log(message);
//     },
//   },
// };
</script>
<template>
  <div>
    <!-- <Practice2Child ref="componentRef" /> -->
    <Practice2Child :name="childName" @greet="handleGreeting" />
  </div>
</template>
