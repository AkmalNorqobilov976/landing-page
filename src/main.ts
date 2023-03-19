import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/scss/main.scss";
import 'remixicon/fonts/remixicon.css'
import vue3StarRatings from "vue3-star-ratings";
import { Waypoint } from 'vue-waypoint';
const app = createApp(App);
app.component('Waypoint', Waypoint);
app.component("vue3-star-ratings", vue3StarRatings);
app.use(router).mount('#app')
