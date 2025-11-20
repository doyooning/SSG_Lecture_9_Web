<script setup>
import { computed } from 'vue';

// defineProps에서 반환된 객체에서 fruit만 빼서 f라는 이름으로 사용
// const props = defineProps({ fruit: Object }) 와 같지만
// 구조 분해 할당을 사용해서 props.fruit 대신 f로 간단히 쓸 수 있음

const { fruit: f } = defineProps({
  fruit: Object,
});

// f.id 를 사용해서 이미지 경로 계산
const imgSrc = computed(() => {
  console.log(f.id); // 디버깅용 로그 (콘솔에서 현재 과일 id 확인)
  return new URL(`../../assets/${f.id}.png`, import.meta.url).href;
});
</script>

<template>
  <div class="div-fruit">
    <!-- 위 컴포넌트와 동일하지만, fruit 대신 f 사용 -->
    <input type="checkbox" :id="f.id" :checked="f.checked" />

    <label :for="f.id">
      <img :src="imgSrc" class="img-fruit" />
      {{ f.name }}
    </label>
  </div>
</template>

<style scoped>
.div-fruit {
  color: darkgray;
  margin-bottom: 5px;
  font-size: large;
}

.img-fruit {
  width: 20px;
  margin: 0 1px 0 5px;
}
</style>
