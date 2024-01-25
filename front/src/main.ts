import './assets/main.css'
import vClickOutside from './Directives/clickOutside'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive("click-outside",vClickOutside)

app.mount('#app')
