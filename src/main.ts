import './assets/main.css';

import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

const pinia = createPinia();

library.add(fas);
library.add(far);

const app = createApp(App);

app.use(Antd).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
