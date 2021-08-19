import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//挂载全局 axios

createApp(App).use(store).use(router).mount('#app')
