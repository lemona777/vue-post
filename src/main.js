import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalComponents from '@/plugins/global-components';
//import focus from './directives/focus';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';

const app = createApp(App);
//app.directive('focus', focus);
app.use(globalComponents);
app.use(router);
app.use(dayjs);
app.use(globalDirectives);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log(import.meta.env.MODE);
// console.log(import.meta.env.BASE_URL);
// console.log(import.meta.env.PROD);
// console.log(import.meta.env.DEV);
// console.log(import.meta.env.VITE_APP_API_URL);
