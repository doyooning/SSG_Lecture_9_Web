<script>
export default {
  data() {
    return {
      output: null, // 출력칸에 표시되어 사용자에게 보여지는 값
      prev: null, // 이전에 입력된 값 또는 연산 결과
      cur: null, // 현재 입력된 값
      operator: null, // 연산자
      operationActions: {
        // 사칙연산 수행하는 함수를 각각의 객체로 정의
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        '*': (n1, n2) => n1 * n2,
        '/': (n1, n2) => n1 / n2,
      },
    };
  },

  methods: {
    clear() {
      this.output = null;
      this.prev = null;
      this.cur = null;
      this.operator = null;
    },
    calculate(n) {
      this.cur = Number(this.cur);

      if (this.operator !== null && this.prev !== null) {
        // operationActions 객체 활용
        this.prev = this.operationActions[this.operator](this.prev, this.cur);

        if (n === '=') {
          this.output = this.prev;
          this.operator = null;
          this.cur = this.prev;
        } else {
          this.output = this.prev;
          this.operator = n;
          this.cur = null;
        }
      } else {
        this.prev = Number(this.cur);
        this.operator = n;
        this.cur = null;
      }
    },

    userInput(n) {
      // 사용자가 입력한 숫자를 저장하는 로직을 함수로 분리
      // 사용자가 입력한 숫자(실제 문자열) 저장
      this.cur = this.cur === null ? n : (this.cur += n);
      // 입력한 값이 화면에 표시되도록 ouput 데이터에 저장
      this.output = this.cur;
    },

    operation(event) {
      // 클릭한 값(value) 읽기
      const n = event.currentTarget.value;
      if (n === 'C') {
        this.clear();
      } else if (['+', '-', '*', '/', '='].includes(n)) {
        this.calculate(n);
      } else {
        this.userInput(n);
      }
    },
  },
};
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly />
      <input type="button" class="clear" value="C" @click="operation" />
      <input type="button" class="operator" value="/" @click="operation" />
      <input type="button" value="1" @click="operation" />
      <input type="button" value="2" @click="operation" />
      <input type="button" value="3" @click="operation" />
      <input type="button" class="operator" value="*" @click="operation" />
      <input type="button" value="4" @click="operation" />
      <input type="button" value="5" @click="operation" />
      <input type="button" value="6" @click="operation" />
      <input type="button" class="operator" value="+" @click="operation" />
      <input type="button" value="7" @click="operation" />
      <input type="button" value="8" @click="operation" />
      <input type="button" value="9" @click="operation" />
      <input type="button" class="operator" value="-" @click="operation" />
      <input type="button" class="dot" value="." @click="operation" />
      <input type="button" value="0" @click="operation" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="operation"
      />
    </form>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>
