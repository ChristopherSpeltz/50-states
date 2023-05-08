import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

import router from '@/router'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

// createApp(App).mount('#app')
// .mount('#app')
app.use(router)

app.mount('#app')
