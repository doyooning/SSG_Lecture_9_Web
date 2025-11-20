<script setup>
import { ref } from 'vue';
import ComponentEmitEventScriptSetupChild from './ComponentEmitEventScriptSetupChild.vue';

// 상위가 받는 props (App.vue에서 내려줌)
defineProps({
  viewTitle: String,
});

// 하위에서 emit을 받으면 message 내용이 갱신됨
const message = ref('');

// (이벤트 1) 인자 없는 greeting 이벤트
// Child에서 greeting-event 버튼을 클릭하면 실행됨
const greet = () => {
  message.value = '지금 이 순간도 너의 성공 이야기의 한 페이지야~';
};

// (이벤트 2) Child가 인자를 전달할 때
const greetArg = (greet) => {
  message.value = greet; // payload 반영
};
</script>

<template>
  <div>
    <!-- 상위에게 내려온 props 표시 -->
    <h1>{{ viewTitle }}</h1>

    <!-- 하위 컴포넌트에서 두 종류의 이벤트를 emit -->
    <ComponentEmitEventScriptSetupChild
      v-on:greeting-event="greet"
      @greeting-arg-event="greetArg"
    />

    <!-- 하위 emit 처리 결과 표시 -->
    <h3>{{ message }}</h3>
  </div>
</template>
