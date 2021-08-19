import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './plugins/tailwind.css';
import Swoopy from './plugins/swoopy';

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(Swoopy)
  .mount('#app');
