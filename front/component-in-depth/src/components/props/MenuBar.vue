<script setup>
import { ref } from 'vue';
import AppPropsLiteral from './AppPropsLiteral.vue';
import AppPropsObject from './AppPropsObject.vue';
import ComponentEmitEventTemplate from './ComponentEmitEventTemplate.vue';
import ComponentEmitEventScriptSetup from './ComponentEmitEventScriptSetup.vue';

const view = ref('');

defineProps({
  arr: Array,
});
</script>
<template>
  <div class="menu">
    <button
      v-for="(item, index) in arr"
      :key="item.key"
      :class="{ active: view === item.key }"
      @click="view = item.key"
    >
      {{ item.label }}
    </button>
  </div>
  <AppPropsLiteral v-if="view === 'literal'" view-title="좋아하는 과일은?" />
  <AppPropsObject v-if="view === 'object'" view-title="좋아하는 과일은?" />
  <ComponentEmitEventTemplate v-if="view === 'template'" />
  <ComponentEmitEventScriptSetup v-if="view === 'script'" />
</template>
