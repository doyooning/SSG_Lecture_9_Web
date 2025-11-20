<script setup>
// Vue 3 컴포지션 API에서 reactive 함수를 import
import { computed, reactive, watch } from 'vue';

// 자식 컴포넌트 두 개 import
import AppPropsObjectChild from './AppPropsObjectChild.vue';
import AppPropsObjectChildDestructure from './AppPropsObjectChildDestructure.vue';

// 부모가 받을 props 타입 정의
// 부모도 상위에서 viewTitle이라는 문자열 props를 받아서 화면 제목으로 사용한다고 가정함
// defineProps는 <script setup> 안에서만 사용 가능한 매크로 함수
const props = defineProps({
  viewTitle: String, // viewTitle 이라는 문자열 타입의 props
});

// 과일 목록을 반응형 상태로 선언
// reactive()를 사용해서 배열 반응형데이터
const fruits = reactive([
  { id: 'f1', name: '사과', checked: true, price: 1200, origin: '한국' },
  { id: 'f2', name: '파인애플', checked: false, price: 1200, origin: '한국' },
  { id: 'f3', name: '포도', checked: false, price: 1200, origin: '한국' },
  { id: 'f4', name: '딸기', checked: true, price: 1200, origin: '한국' },
  { id: 'f5', name: '아보카도', checked: false, price: 1200, origin: '한국' },
  { id: 'f6', name: '메론', checked: false, price: 1200, origin: '한국' },
]);

const fruitsAmount = computed(() => {
  return fruits.filter((f) => f.checked).length;
});
</script>

<template>
  <div>
    <!-- 상위에서 내려받은 viewTitle props 출력 -->
    <!-- script 에서 const props = defineProps(...) 했기 때문에 props.viewTitle 로 접근 -->
    <h2>{{ props.viewTitle }}</h2>
    <h3>{{ fruitsAmount }}개 선택됨</h3>
    <div class="fruits">
      <h3>일반 props 객체로 사용</h3>
      <!-- fruits 배열을 반복해서 AppPropsObjectChild 에 한 개씩 전달 -->
      <!-- v-for 로 fruit 를 하나씩 꺼내고, :fruit 으로 props 전달 -->
      <!-- :key 는 리스트 렌더링 성능 및 경고 방지를 위해 필수 -->
      <AppPropsObjectChild
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit="fruit"
      />

      <hr />

      <h3>props 구조 분해 할당 버전</h3>
      <!-- 같은 fruits 데이터를 다른 자식 컴포넌트에 전달 -->
      <!-- 여기서는 자식 안에서 { fruit: f } 로 구조 분해 할당하여 사용 -->
      <AppPropsObjectChildDestructure
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit="fruit"
      />
    </div>
  </div>
</template>

<style scoped>
/* 과일 리스트 전체 박스 스타일 */
.fruits {
  display: inline-block;
  width: 250px;
  text-align: left;
}
</style>
