import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

// createApp(App).mount('#app')
.mount('#app')
