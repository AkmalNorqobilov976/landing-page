import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/scss/main.scss";
import 'remixicon/fonts/remixicon.css'

createApp(App).use(router).mount('#app')
