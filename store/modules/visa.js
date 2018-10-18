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
  }
}

const mutations = {
  VISA_MODE (state, page) {
    state[page].visa = true
  },
  VISA_FREE_MODE (state, page) {
    state[page].visa = false
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
  homePageViseMode: (state) => state.home.visa,
  firstHigherPageViseMode: (state) => state.firstHigher.visa,
  secondHigherPageViseMode: (state) => state.secondHigher.visa,
  magistracyPageViseMode: (state) => state.magistracy.visa,
  trainingAndCoursesViseMode: (state) => state.trainingAndCourses.visa
}

const visaModule = {
  state,
  mutations,
  actions,
  getters
}

export default visaModule;
