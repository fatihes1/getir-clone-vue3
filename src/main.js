import { createApp } from 'vue'
import App from './App.vue'
import './assets/output.css'
import 'vue3-carousel/dist/carousel.css';
import CountryFlag from 'vue-country-flag-next'
import vSelect from 'vue-select'



const app = createApp(App)
app.component('country-flag', CountryFlag)
app.component('v-select', vSelect);


app.mount('#app')
