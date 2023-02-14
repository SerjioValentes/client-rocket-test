import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import store from './store'

// createApp(App).use(Antd).mount('#app')

const app = createApp(App)
app.use(VueAxios, axios)
app.use(Antd)

app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')


