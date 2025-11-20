<script setup>
// computed: 계산된 값을 만드는 반응형 유틸
import { computed } from 'vue';

// 부모에게서 받을 props 정의
// fruit 라는 이름의 props를 Object 타입으로 받겠다고 선언
const props = defineProps({
  fruit: Object,
});

// 이미지 경로를 계산하는 computed 속성
// props.fruit.id 를 이용해서 해당 id에 맞는 이미지를 불러옴
const imgSrc = computed(() => {
  // ../../assets 폴더 안의 "f1.png", "f2.png" ... 이런 파일을 불러온다고 가정
  return new URL(`../../assets/${props.fruit.id}.png`, import.meta.url).href;
});
</script>

<template>
  <div class="div-fruit">
    <!-- 체크박스: 과일의 id, 체크 상태를 바인딩 -->
    <!-- defineProps 로 받은 fruit 는 템플릿에서 바로 fruit로 쓸 수 있음 -->
    <input
      type="checkbox"
      :id="fruit.id"
      :checked="fruit.checked"
      :price="fruit.price"
      :origin="fruit.origin"
    />

    <!-- label 과 이미지, 과일 이름 출력 -->
    <label :for="fruit.id">
      <!-- 위에서 computed로 만든 imgSrc 를 바인딩 -->
      <img :src="imgSrc" class="img-fruit" />
      {{ fruit.name }} ({{ fruit.price }}원, {{ fruit.origin }})
    </label>
  </div>
</template>

<style scoped>
/* 과일 한 줄 스타일 */
.div-fruit {
  color: darkgray;
  margin-bottom: 5px;
  font-size: large;
}

/* 과일 이미지 스타일 */
.img-fruit {
  width: 20px;
  margin: 0 1px 0 5px;
}
</style>
