import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'; // 引入Element UI
import 'element-plus/dist/index.css'; // 引入样式
createApp(App)
.use(router)
.use(ElementPlus)
.mount('#app')
