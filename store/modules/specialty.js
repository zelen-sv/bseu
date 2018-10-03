const state = {
  current_specialty: null
}

const mutations = {
  SET_SPECIALTY (state, payload) {
    state.current_specialty = payload
  }
}

const actions = {
  activateSpecialty (context, payload) {
    context.commit('SET_SPECIALTY', payload)
  }
}


const getters = {
  currentSpecialty: state => state.current_specialty
}

const specialtyModule = {
  state,
  mutations,
  actions,
  getters
}

export default specialtyModule;
