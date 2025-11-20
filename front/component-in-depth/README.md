# **1. props로 "색상(color)" 추가하여 배경색 변경하기**

부모 → 자식으로 `color` props를 보내고, 자식 영역 박스(`.child`)의 배경색을 부모가 지정한 색으로 동적으로 변경하시오.

**조건:**

- 부모에서 `<ComponentEmitEventTemplateChild color="pink" />` 형태로 전달
- 자식에서는 `defineProps`로 받아서 style에 적용하기

# **2. emit으로 “이름(name)” 입력받아 부모에서 환영 메시지 만들기**

자식에 `<input />`을 하나 만들고, 입력한 이름을 부모에게 emit(`welcome-event`, payload 포함)으로 보낸 뒤,

부모에서 `"[이름]님 환영합니다!"` 를 출력하는 기능을 구현하시오.

# **3. 자식이 보낸 메시지를 부모에서 누적 리스트로 만들기**

자식이 `@greeting-arg-event` 로 보낸 문자열을 부모에서 `messages: []` 배열에 저장하고, 부모 화면에 리스트로 표시하시오.

예:

```
- 안녕하세요 SSG-9차
- 뷰 공부 화이팅!
- Vue 너무 재밌어요~

```

# **4. 부모에서 props로 "isActive" 전달하여 버튼 비활성화 만들기**

부모가 `isActive` 값을 true/false로 넘기면 자식 컴포넌트의 “인사해요” 버튼을 활성/비활성 처리하시오.

# **5. emit으로 "토글(toggle-event)" 보내서 부모 상태 토글하기**

자식에 “토글하기” 버튼을 만들고, 버튼 누를 때마다 `toggle-event`를 emit 하도록 하시오.

부모에서는 message가

- `"활성화 상태입니다"`
- `"비활성화 상태입니다"`

두 값 중 하나로 토글되도록 하세요.

# **6. props 형태를 object로 바꿔서 한 번에 여러 데이터 전달하기**

자식에게 다음과 같은 형태의 props를 전달하여 출력하게 하시오.

```js
userInfo = {
  name: '신세계',
  age: 20,
  major: 'Computer Science',
};
```

자식은 세 개 각각을 화면에 예쁘게 출력.

# **7. 자식 → 부모 emit에 여러 개의 데이터를 객체 형태로 보내기**

자식에서 emit 이벤트를 아래처럼 객체로 보내도록 하시오:

```js
emit('multi-event', {
  msg: greet.value,
  timestamp: Date.now(),
  length: greet.value.length,
});
```

부모는 이 객체를 받아서 화면에 다음 형태로 출력:

```
메시지: [msg]
길이: [length]
전송시간: [timestamp]
```

# **8. App.vue의 메뉴를 props로 받아 동적 생성하도록 만들기**

현재 메뉴는 App.vue에서 하드코딩되어 있는데, 다음 배열을 만들어 자식 메뉴 컴포넌트(MenuBar.vue)에 props로 내려주고,

그 배열을 기반으로 자동 생성된 메뉴 버튼을 표시하시오.

```js
[
  { key: 'literal', label: 'Props Literal Demo' },
  { key: 'obj', label: 'Props Object Demo' },
  { key: 'template', label: 'Event Template Demo' },
  { key: 'script', label: 'Event Script Setup Demo' },
];
```

# **9. props로 초기 메시지를 전달받아 자식 input의 기본값으로 넣기**

부모에서:

```
<ComponentEmitEventTemplateChild defaultMsg="안녕하세요!!" />
```

자식에서는

`greet.value` 의 초기값을 `"안녕하세요!!"` 로 설정하시오.

# **10. 자식 컴포넌트에서 emit으로 에러 메시지 보내기**

자식의 input이 빈 값일 때 “인자 전달” 버튼을 누르면 emit으로 `"error-event"`를 보내고, 부모는 이를 받아 화면에 빨간색 글씨로 다음 메시지를 표시하시오:

```
입력값이 비어있습니다!
```
