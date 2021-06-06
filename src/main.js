import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$http = axios.create({
  baseURL: '/web/api'
})
app.mount('#app')
