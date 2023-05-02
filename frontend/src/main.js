import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import {bootstrap as bootstrap_js} from '../node_modules/bootstrap/dist/js/bootstrap'

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(bootstrap_js);

app.mount('#app');
