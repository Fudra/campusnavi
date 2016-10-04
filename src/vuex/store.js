import Vue from 'vue';
import Vuex from 'vuex';
import positions from './modules/positions';

import config from '../config';

const { menu, sidebar } = config;

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    positions
  },

  state: {
    menu,
    sidebar
  },

  mutations: {

  }
});

console.log(store);

export default store;
