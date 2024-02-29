import './assets/main.css'

import { createApp, defineCustomElement } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

import CustomElement from './components/features/define-custome-elment.vue'

const element = defineCustomElement(CustomElement)

customElements.define('custom-element', element)