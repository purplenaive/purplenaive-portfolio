import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from "./routes/index";
import store from "./store/index";
import common from "./assets/js/common";
import VueClipboard from "vue-clipboard2";

const app = createApp(App);

VueClipboard.config.autoSetContainer = true;
app.config.globalProperties.$http = axios;

app.use(store).use(router).use(VueClipboard).use(common).mount("#app");
