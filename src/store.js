import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidenav: true
  },
  getters: {
    sidenav: state => state.sidenav
  },
  mutations: {
    toggleSideNav: (state, value) => {
      if (typeof value === 'boolean') {
        state.sidenav = value;
        return;
      }
      state.sidenav = !state.sidenav;
    }
  },
  actions: {
    toggleSideNav({commit}, value) {
      commit('toggleSideNav', value)
    }
  }
})