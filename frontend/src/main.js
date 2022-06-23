import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from "./routes/index";
import store from "./store/index";

const app = createApp(App);

app.config.globalProperties.$http = axios;
app.use(store).use(router).mount("#app")
