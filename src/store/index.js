import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: localStorage.getItem('user'),
    isLoggedIn: false,
    events: [],
  },
  getters: {
    // eslint-disable-next-line
    getUser: state => {
      return JSON.parse(state.user);
    },
  },
  mutations: {
    setCurrentUser(state, val) {
      state.user = val;
    },
    setIsLoggedIn(state, val) {
      state.isLoggedIn = val;
    },
    setEvents(state, val) {
      state.events = val;
    },
  },
});

export default store;
