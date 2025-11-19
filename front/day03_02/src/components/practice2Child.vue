<script setup>
import { computed, reactive, defineEmits, defineProps } from 'vue';

const props = defineProps({ name: String });
const emit = defineEmits(['greet']);

// const name = reactive({ name: String });
const sendGreeting = computed(() => {
  'greet', `Hello, ${name.name}!`;
});

// export default {
//   props: {
//     name: String,
//   },
//   emits: ['greet'],
//   methods: {
//     sendGreeting() {
//       this.$emit('greet', `Hello, ${this.name}!`);
//     },
//   },
// };
</script>
<template>
  <div>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>
