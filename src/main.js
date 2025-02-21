import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App);

import Router from "@/router";
app.use(Router);

import Store from "@/store";
app.use(Store);

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import { Message } from '@arco-design/web-vue';

app.use(ArcoVue);
app.use(ArcoVueIcon);
app.config.globalProperties.$message = Message;

import mitt from "mitt";
app.config.globalProperties.$mittBus = mitt();

import './assets/styles/reset.scss'
import './assets/styles/arco.scss'
import './assets/styles/fonts.scss'
import './assets/styles/common.scss'
import './assets/styles/layout.scss'

import 'amfe-flexible'

import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";

import * as directives from "@/plugins/directive/index.js";
Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key]);
});

app.mount('#app');
