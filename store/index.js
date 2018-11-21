import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal.js';
import visa from './modules/visa.js';
import specialties from './modules/specialties.js';

Vue.use(Vuex);


const store = () => new Vuex.Store({
  modules: {
    modal, specialties, visa
  }
})

export default store
