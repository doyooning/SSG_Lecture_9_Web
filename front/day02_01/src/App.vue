<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      notMatchMsg: '',
      status: {
        name: false,
        email: false,
        password: false,
        passwordConfirm: false,
      },
    };
  },
  computed: {
    isValid() {

      for (const element in this.status) {
        
        if (this.status[element] === false){
          console.log('isValid-false');
          return false;
        }        
      };
      console.log('isValid-true');
      return true;
    },
  },

  watch: {
    name: {
      handler(newValue, oldValue) {
        console.log(`old value: ${oldValue}`);
        console.log(`new value: ${newValue}`);
        if(newValue === ''){
          this.notMatchMsg = '';
        };

        if(newValue.length < 2){
          this.notMatchMsg = '이름은 두 글자 이상 입력해야 합니다.';
          this.status.name = false;
        } else {
          this.notMatchMsg = '';
          this.status.name = true;
        };
      },
      deep: true,
    },
    email: {
      handler(newValue, oldValue) {
        console.log(`old value: ${oldValue}`);
        console.log(`new value: ${newValue}`);
        if(newValue === ''){
          this.notMatchMsg = '';
        }
        
        if(!newValue.includes('@')){
          this.notMatchMsg = '올바른 이메일 형식이 아닙니다.';
          this.status.email = false;
        } else {
          this.notMatchMsg = '';
          this.status.email = true;
        };
      },
      deep: true,
    },
    password: {
      handler(newValue, oldValue) {
        console.log(`old value: ${oldValue}`);
        console.log(`new value: ${newValue}`);
        if(newValue === ''){
          this.notMatchMsg = '';
        }

        if(newValue.length < 8){
          this.notMatchMsg = '비밀번호는 8글자 이상이어야 합니다.';
          this.status.password = false;
        } else {
          this.notMatchMsg = '';
          this.status.password = true;
        };
      },
      deep: true,
    },
    passwordConfirm: {
      handler(newValue, oldValue) {
        const curPw = document.getElementById('password');
        console.log(`old value: ${oldValue}`);
        console.log(`new value: ${newValue}`);
        if(newValue === ''){
          this.notMatchMsg = '';
        }

        if(newValue !== curPw.value){
          this.notMatchMsg = '비밀번호가 일치하지 않습니다.';
          this.status.passwordConfirm = false;
        } else {
          this.notMatchMsg = '';
          this.status.passwordConfirm = true;
        };
      },
    },
  },

  methods: {
    getInputs(){
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const passwordConfirm = document.getElementById('passwordConfirm');
      
      alert(`${name.value} ${email.value} ${password.value} ${passwordConfirm.value}`);
    },
  }
}
  
</script>
<template>
  <form>
  <!-- 이름 2글자 이상 -->
    <div>
      <input id="name" type="text" v-model="name">이름</input>
    </div>
  
  <!-- 이메일 @ 포함 -->
    <div>
      <input id="email" type="text" v-model="email">이메일</input>
    </div>
  
  <!-- 비밀번호 8자 이상 -->
    <div>
      <input id="password" type="password" v-model="password">비밀번호</input>
    </div>

  <!-- 비밀번호와 동일 -->
    <div>
      <input id="passwordConfirm" type="password" v-model="passwordConfirm">비밀번호 확인</input>
    </div>

    <p style="color: red;">{{ notMatchMsg }}</p>

    <button id="register" type="reset" :disabled=!isValid @click="getInputs()">회원가입</button>
  </form>
</template>
<style></style>
