import { createApp } from 'vue';
import App from './App.vue';
// 컴포넌트 전역 등록
import FirstChild from './components/FirstChild.vue';
import SecondChild from './components/SecondChild.vue';
const app = createApp(App);
app.component('FirstChild', FirstChild);
app.component('SecondChild', SecondChild);
app.mount('#app');
