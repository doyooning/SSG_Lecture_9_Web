<script>
import practice1 from './components/practice1.vue';
import practice2 from './components/practice2.vue';
import practice2Child from './components/practice2Child.vue';

export default {
  components: {
    // practice1,
    practice2,
    practice2Child,
  },
};
</script>
<template>
  <!-- <practice1 /> -->
  <practice2 />
  <practice2Child />
</template>
