import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 라우터 인스턴스 사용 등록
const app = createApp(App);
app.use(router);
createApp(App).mount('#app');
