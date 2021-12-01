import { dataRoles } from "../api/dataRoles.js";

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    allRoles: (state) => state.items,
  },
  mutations: {
    setRoles(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.items = arr;
    },
  },
  actions: {
    async getRoles({ commit }) {
      let data = await dataRoles();
      commit("setRoles", data);
    },
  },
};
