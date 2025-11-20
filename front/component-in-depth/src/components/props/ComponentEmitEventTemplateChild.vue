<script setup>
// 입력값을 반응형으로 관리하기 위해 ref 사용
import { ref, defineProps } from 'vue';

// greet: input과 v-model로 양방향 바인딩되는 문자열 상태
const greet = ref('');

defineProps({
  color: String,
  isActive: Boolean,
});
</script>

<template>
  <div class="child">
    <h3>Child 영역입니다</h3>

    <!-- 1) 인자 없이 이벤트만 올리는 버튼 -->
    <div class="div-btn">
      <!--
              @click="$emit('greetingEvent')"
              - 부모에게 'greetingEvent'라는 이름의 커스텀 이벤트를 보낸다.
              - payload(데이터)는 없음.
            -->
      <button @click="$emit('greetingEvent')" :disabled="!isActive">
        인사해요
      </button>
    </div>

    <!-- 2) 인자를 함께 보내는 버튼 -->
    <div class="div-btn">
      <!--
              v-model="greet"
              - input의 value와 greet(ref)을 양방향 바인딩
              - 사용자가 입력할 때마다 greet.value가 자동으로 갱신됨
            -->
      <input type="text" v-model="greet" />

      <!--
              @click="$emit('greetingArgEvent', greet)"
              - 'greetingArgEvent'라는 이름으로 이벤트를 발생시키면서
                두 번째 인자로 greet 값을 payload로 함께 보냄.
              - 템플릿 안이라서 ref 자동 언래핑 → greet는 greet.value로 전달된다고 보면 됨.
            -->
      <button @click="$emit('greetingArgEvent', greet)">
        인사해요(인자전달)
      </button>
      <button @click="$emit('toggleEvent', greet)">토글하기</button>
    </div>
  </div>
</template>

<style scoped>
/* 자식 영역 배경 스타일 */
.child {
  background-color: color;
  padding: 20px;
}

/* 버튼들과 input 주변 여백 */
.div-btn {
  margin: 10px;
}
</style>
