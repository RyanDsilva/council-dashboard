import 'babel-polyfill';
import Vue from 'vue';
import VueSession from 'vue-session';
import Vuetify from 'vuetify';
import axios from 'axios';
import FullCalendar from 'vue-full-calendar';
import 'vuetify/dist/vuetify.min.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'vue-flash-message/dist/vue-flash-message.min.css';
import DatetimePicker from 'vuetify-datetime-picker';
import VueFlashMessage from 'vue-flash-message';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);
Vue.use(FullCalendar);
Vue.use(DatetimePicker);
Vue.use(VueFlashMessage);
Vue.use(VueSession, {
  persist: true,
});
Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://council-dashboard.herokuapp.com';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
