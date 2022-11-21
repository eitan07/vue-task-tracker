import { createApp } from 'vue'
import App from './App.vue'
import titleMixin from './titleMixin'

const app = createApp(App)

app.mount('#app')
app.mixin(titleMixin)
