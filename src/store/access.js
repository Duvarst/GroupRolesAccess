import { dataAccess } from "../api/dataAccess";
export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    allAccess: (state) => state.items,
  },
  mutations: {
    setAccess(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.items = arr;
    },
  },
  actions: {
    async getAccess({ commit }) {
      let data = await dataAccess();
      commit("setAccess", data);
    },
  },
};
