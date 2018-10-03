import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal.js';
import specialty from './modules/specialty.js';

Vue.use(Vuex);


const store = () => new Vuex.Store({
  modules: {
    modal, specialty
  }
})

export default store
