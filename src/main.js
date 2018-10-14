import 'babel-polyfill';
import Vue from 'vue';
import VueSession from 'vue-session';
import Vuetify from 'vuetify';
import axios from 'axios';
import FullCalendar from 'vue-full-calendar';
import 'vuetify/dist/vuetify.min.css';
import 'fullcalendar/dist/fullcalendar.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);
Vue.use(FullCalendar);
Vue.use(VueSession, {
  persist: true,
});
Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:3000';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
