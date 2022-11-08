import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import TheLoader from './components/TheLoader'

createApp(App).use(router).component('TheLoader', TheLoader).mount('#app')