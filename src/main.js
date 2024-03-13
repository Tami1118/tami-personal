import './assets/scss/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, fab, far);


// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const app = createApp(App)
app.use(createPinia())
   .use(router)
   .component("font-awesome-icon", FontAwesomeIcon)
   .mount('#app')
