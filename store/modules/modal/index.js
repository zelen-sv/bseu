const state = {
  visible: false,
  component: null
}

const mutations = {
  SHOW_MODAL (state, payload) {
    state.visible = true
    state.component = payload
  },
  CLOSE_MODAL (state) {
    state.visible = false
  }
}

const actions = {
  show (context, payload) {
    context.commit('SHOW_MODAL', payload)
  },
  close (context) {
    context.commit('CLOSE_MODAL')
  }
}


const getters = {
  modalState: state => state.visible,
  modalComponent: state => state.component
}

const modalModule = {
  state,
  mutations,
  actions,
  getters
}

export default modalModule;
