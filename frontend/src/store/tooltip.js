
export default {
  namespaced: true,
  state: () => ({
    targets: [],
    active: false,
  }),
  getters: {  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
      state.movie = {};
    },
  },
  actions: {
    assignTargets({state, dispatch, commit}) {
      const targets = document.querySelectorAll(".tooltipBox");
      
      commit("updateState", {targets});
    },
    activeTooltips({commit, dispatch}) {
      dispatch("assignTargets");
      commit("updateState", {active: true});
    },
  }
}
