import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
import locales from './modules/locales';

Vue.use(Vuex);


const store = () => new Vuex.Store({
  modules: {
    modal, locales
  }
})

export default store
