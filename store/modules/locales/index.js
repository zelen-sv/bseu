const state = {
  locales: ['en', 'ru', 'tm'],
  locale: 'ru'
}

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

const actions = {
  setLocale (context, payload) {
    context.commit('SET_LANG', payload)
  }
}


const getters = {
  currentLocale: state => state.locale,
  allLocales: state => state.locales
}

const modalModule = {
  state,
  mutations,
  actions,
  getters
}

export default modalModule;
