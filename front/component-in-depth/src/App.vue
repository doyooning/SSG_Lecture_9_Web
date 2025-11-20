<script setup>
import { ref } from 'vue';
import AppPropsLiteral from './components/props/AppPropsLiteral.vue';
import AppPropsObject from './components/props/AppPropsObject.vue';
import ComponentEmitEventTemplate from './components/props/ComponentEmitEventTemplate.vue';
import ComponentEmitEventScriptSetup from './components/props/ComponentEmitEventScriptSetup.vue';

const view = ref('');
</script>
<template>
  <div class="container">
    <TheHeading />
    <div class="menu">
      <button :class="{ active: view === 'literal' }" @click="view = 'literal'">
        Props Literal
      </button>
      <button :class="{ active: view === 'object' }" @click="view = 'object'">
        Props Object
      </button>
      <button
        :class="{ active: view === 'template' }"
        @click="view = 'template'"
      >
        Component Events (template)
      </button>
      <button :class="{ active: view === 'script' }" @click="view = 'script'">
        Component Events (script setup)
      </button>
    </div>
    <AppPropsLiteral v-if="view === 'literal'" view-title="좋아하는 과일은?" />
    <AppPropsObject v-if="view === 'object'" view-title="좋아하는 과일은?" />
    <ComponentEmitEventTemplate v-if="view === 'template'" />
    <ComponentEmitEventScriptSetup v-if="view === 'script'" />
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
