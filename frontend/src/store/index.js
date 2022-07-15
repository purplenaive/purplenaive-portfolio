import { createStore } from "vuex"

import tooltip from "./tooltip"

export default createStore({
  modules: {
    tooltip,
  },
  state: () => ({
    spinner_active: true,
    toast: {
      active: false,
      text: "",
    }
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    inactiveLoadingSpinner({ commit }, payload) {
      commit("updateState", {
        spinner_active: false,
      });
    },
    activeToast({ commit, dispatch }, payload) {
      
      commit("updateState", {
        toast: {
          active: true,
          text: payload.text,
        }
      });
      dispatch("inactiveToast");
    },
    inactiveToast({ commit }, payload) {
      setTimeout(function() {
        commit("updateState", {
          toast: {
            active: false,
          }
        })
      }, 5000)
    }
  },
})
 