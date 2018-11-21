const state = {
  namespaced: true,
  current_specialty: null,
  first: {
    loading: false,
    loaded: false,
    specialtiesList: [],
    locale: 'ru'
  },
  second: {
    loading: false,
    loaded: false,
    specialtiesList: [],
    locale: 'ru'
  },
  magistracy: {
    loading: false,
    loaded: false,
    specialtiesList: [],
    locale: 'ru'
  }
}

const mutations = {
  SET_CURRENT_SPECIALTY (state, payload) {
    state.current_specialty = payload
  },
  UPDATE_LOCALE (state, payload) {
    state[payload.education_program].locale = payload.locale
  },
  SET_SPECIALTIES (state, payload) {
    state[payload.education_program].specialtiesList = payload.specialties
  },
  SET_SPECIALTIES_LOADING_STATUS (state, payload) {
    state[payload.education_program].loading = payload.loading
  },
  SET_SPECIALTIES_LOADED (state, education_program) {
    state[education_program].loaded = true
  },
}

const actions = {
  setCurrentSpecialty (context, payload) {
    context.commit('SET_CURRENT_SPECIALTY', payload)
  },
  async getSpecialties (context, education_program) {
    let locale = context.rootState.i18n.locale,
        educationProgramData = context.state[education_program],
        params = { education_program: education_program, locale: locale }

    if (locale != educationProgramData.locale || educationProgramData.loaded != true) {
      context.commit('UPDATE_LOCALE', params )
      context.commit('SET_SPECIALTIES_LOADING_STATUS', { education_program: education_program, loading: true } )
      let specialties = await this.$axios.$get('/specialties', { params: params })
      context.commit('SET_SPECIALTIES', { education_program: education_program, specialties: specialties })
      context.commit('SET_SPECIALTIES_LOADING_STATUS', { education_program: education_program, loading: false })
      context.commit('SET_SPECIALTIES_LOADED', education_program )
    }
  }
}


const getters = {
  currentSpecialty: state => state.current_specialty,
  specialtiesList: state => education_program => {
    return state[education_program].specialtiesList
  },
  specialtiesLoadingStatus: state => education_program => {
    return state[education_program].loading
  },
  isSpecialtiesLoaded: state => education_program => {
    return state[education_program].loaded
  }
}

const specialtiesModule = {
  state,
  mutations,
  actions,
  getters
}

export default specialtiesModule;
