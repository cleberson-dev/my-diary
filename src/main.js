import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store';

import HomePage from './pages/Home';
import RecordsPage from './pages/Records';
import RecordDetailsPage from './pages/RecordDetails';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HomePage },
  { path: '/registros', component: RecordsPage },
  { path: '/detalhes', component: RecordDetailsPage },
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')
