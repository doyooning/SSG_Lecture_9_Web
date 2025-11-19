<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({ name: String });
const emits = defineEmits(['greet']);

const sendGreeting = () => {
  emits('greet', `Hello, ${props.name}!`);
};
</script>
<template>
  <div>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>
