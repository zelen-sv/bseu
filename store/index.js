import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal.js';
import visa from './modules/visa.js';
import specialty from './modules/specialty.js';

Vue.use(Vuex);


const store = () => new Vuex.Store({
  modules: {
    modal, specialty, visa
  }
})

export default store
