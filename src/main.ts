import { createApp } from 'vue'
import 'normalize.css'
import 'animate.css'

import App from './App.vue'
import router from './router'
import './styles/index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
