import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/server/axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//挂载全局 axios
App.$axios = axios
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
