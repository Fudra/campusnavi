import Vue from 'vue';
import Vuex from 'vuex';
// import app from './modules/app';
import position from './modules/position';


import config from './../config';

Vue.use(Vuex);

const { menu, sidebar } = config;

const state = {
   menu,
   sidebar
};

const mutations = {};

const store = new Vuex.Store(
   {
      state,
      mutations,
      modules: {
         position
      }
      // strict: true
   }
);


export default store;
