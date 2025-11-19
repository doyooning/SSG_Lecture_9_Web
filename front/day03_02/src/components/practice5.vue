<script setup>
import { ref } from 'vue';

const inputRef = ref(null);
const inputValue = ref('');
const inputFocus = () => {
  inputRef.value.focus();
  alert(inputValue.value);
};
</script>
<template>
  <button id="btn" @click="inputFocus">버튼</button>
  <input id="input" ref="inputRef" type="text" v-model="inputValue" />
</template>
<style>
#input:focus {
  outline-color: red;
}
</style>
