const state = {
  current_specialty: null,
  specialties: {
    "first": [],
    "second": [],
    "magistracy": []
  }
}

const mutations = {
  SET_SPECIALTY (state, payload) {
    state.current_specialty = payload
  },
  SET_SPECIALTIES (state, payload) {
    state.specialties[payload.education_program] = payload.specialties
  }
}

const actions = {
  activateSpecialty (context, payload) {
    context.commit('SET_SPECIALTY', payload)
  },
  async getSpecialtiesByEducationProgram (context, payload) {
    let specialties = await this.$axios.$get('/specialties', { params: payload })
    context.commit('SET_SPECIALTIES', { education_program: payload.education_program, specialties: specialties })
  }
}


const getters = {
  currentSpecialty: state => state.current_specialty,
  specialtiesByEducationProgram: (state) => (education_program) => {
    return state.specialties[education_program]
  }
}

const specialtyModule = {
  state,
  mutations,
  actions,
  getters
}

export default specialtyModule;
