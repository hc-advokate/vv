import { createApp } from "vue";
import App from "./App.vue";
let app = createApp(App);

import Router from "@/router";
app.use(Router);

import Store from "@/store";
app.use(Store);

import mitt from "mitt";
app.config.globalProperties.$mittBus = mitt();

import "amfe-flexible";

import * as directives from "@/plugins/directive/index.js";
Object.keys(directives).forEach((key) => {
	app.directive(key, directives[key]);
});

import { ElMessage, ElMessageBox, ElNotification } from "element-plus"; // element 全局消息提示
app.config.globalProperties.elMessage = ElMessage;
app.config.globalProperties.elMessageBox = ElMessageBox;
app.config.globalProperties.elNotification = ElNotification;
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
import "element-plus/dist/index.css";

import Vant from "vant";
// vant
import "vant/lib/index.css";
app.use(Vant);

import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";

// import "swiper/css";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// import "./assets/styles/fonts.scss";
import "./assets/styles/index.scss";

app.mount("#app");
