const state = {
  home: {
    visa: true
  },
  firstHigher: {
    visa: true
  },
  secondHigher: {
    visa: true
  },
  magistracy: {
    visa: true
  },
  trainingAndCourses: {
    visa: true
  },
  requalification: {
    visa: true
  }
}

const mutations = {
  VISA_MODE (state, mode) {
    state[mode].visa = true
  },
  VISA_FREE_MODE (state, mode) {
    state[mode].visa = false
  }
}

const actions = {
  setVisaMode (context, payload) {
    context.commit('VISA_MODE', payload)
  },
  setVisaFreeMode (context, payload) {
    context.commit('VISA_FREE_MODE', payload)
  }
}


const getters = {
  homeViseMode: (state) => state.home.visa,
  firstHigherViseMode: (state) => state.firstHigher.visa,
  secondHigherViseMode: (state) => state.secondHigher.visa,
  magistracyViseMode: (state) => state.magistracy.visa,
  trainingAndCoursesViseMode: (state) => state.trainingAndCourses.visa,
  requalificationViseMode: (state) => state.requalification.visa
}

const visaModule = {
  state,
  mutations,
  actions,
  getters
}

export default visaModule;
