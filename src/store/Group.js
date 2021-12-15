import { dataGroup } from "../api/data";

export default {
  namespaced: true,
  state: {
    data: [],
    id: null,
    searchResultData: [],
    pages: [],
    page: 1,
    itemsPerPage: 6,
  },
  getters: {
    allData: (state) => state.data,
    globalId: (state) => state.id,
    searchResultData: (state) => state.searchResultData,
    pages: (state) => state.pages,
    page: (state) => state.page,
    itemsPerPage: (state) => state.itemsPerPage,
  },
  mutations: {
    addNewGroup(state, obj) {
      state.data.push(obj);
    },
    deleteGroup(state) {
      let indexGroup = state.data.findIndex((e) => e.id === state.id);
      state.data.splice(indexGroup, 1);
      state.id = null;
    },

    addNewTitle(state, val) {
      let itemGroup = state.data.find((el) => el.id === state.id);
      itemGroup.title = val;
    },
    addRolesInGroup(state, val) {
      let rolesIngroup = state.data.find((el) => el.id === state.id);
      rolesIngroup.roles = val;
    },
    addAccessInGroup(state, val) {
      console.log(state.groupGlobalArr);
      let accessIngroup = state.data.find((el) => el.id === state.id);
      accessIngroup.accessright = val;
    },

    pageNumbers(state, val) {
      state.page = val;
    },
    setPages(state) {
      let pageNumbers = Math.ceil(state.data.length / state.itemsPerPage);
      let arr = [];
      for (let ind = 1; ind <= pageNumbers; ind++) {
        arr.push(ind);
      }
      state.pages = arr;
    },
    newGlobalId(state, id) {
      state.id = id;
    },
    newSearchData(state, val) {
      state.searchResultData = val;
    },
    setData(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.data = arr;
    },

    extractData(state, data) {
      this.replaceState(Object.assign(state, data));
    },
  },
  actions: {
    async gettingData({ commit }) {
      let data = await dataGroup();
      commit("setData", data);
      commit("setPages");
    },
    setDynamicArr({ commit }, data) {
      commit("setDynamicArr", data);
    },
    addNewGroup({ commit }, obj) {
      commit("addNewGroup", obj);
      commit("setPages");
    },
    deleteGroup({ commit }) {
      commit("deleteGroup");
      commit("setPages");
    },
    addNewTitle({ commit }, val) {
      commit("addNewTitle", val);
    },
    addRolesInGroup({ commit }, val) {
      commit("addRolesInGroup", val);
    },
    addAccessInGroup({ commit }, val) {
      commit("addAccessInGroup", val);
    },
    pageNumbers({ commit }, val) {
      commit("pageNumbers", val);
      commit("newGlobalId", null);
    },
    setPages({ commit }) {
      commit("setPages");
    },
    newGlobalId({ commit }, id) {
      commit("newGlobalId", id);
    },
    newSearchData({ commit }, val) {
      commit("newSearchData", val);
    },

    async extractData({ commit }) {
      if (localStorage.getItem("fulldata")) {
        let data = await JSON.parse(localStorage.getItem("fulldata"));
        commit("extractData", data);
      }
    },
  },
};
