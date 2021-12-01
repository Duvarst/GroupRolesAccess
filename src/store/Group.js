import { dataGroup } from "../api/data";

export default {
  namespaced: true,
  state: {
    data: [],
    id: null,
    groupGlobalArr: [],
    inputGlobalVal: "",
    searchTypeGlobal: "",
    pages: [],
    page: 1,
    itemsPerPage: 6,
    arrForDisplay: [],
  },
  getters: {
    allGroup: (state) => state.data,
    globalId: (state) => state.id,
    groupGlobalArr: (state) => state.groupGlobalArr,
    inputGlobalVal: (state) => state.inputGlobalVal,
    searchTypeGlobal: (state) => state.searchTypeGlobal,
    pages: (state) => state.pages,
    page: (state) => state.page,
    itemsPerPage: (state) => state.itemsPerPage,
    arrForDisplay: (state) => state.arrForDisplay,
  },
  mutations: {
    setData(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.data = arr;
    },
    changingArrForDisplay(state, val) {
      state.arrForDisplay = val;
    },
    pageNumbers(state, val) {
      state.page = val;
    },
    setPages(state) {
      let pageNumbers = Math.ceil(
        state.groupGlobalArr.length / state.itemsPerPage
      );
      let arr = [];
      for (let ind = 1; ind <= pageNumbers; ind++) {
        arr.push(ind);
      }
      state.pages = arr;
    },
    newGlobalId(state, val) {
      state.id = val;
    },
    newGlobalArr(state, val) {
      state.groupGlobalArr = val;
    },
    newInputGlobalVal(state, val) {
      state.inputGlobalVal = val;
    },
    newSearchTypeGlobal(state, val) {
      state.searchTypeGlobal = val;
    },
    extractData(state, data) {
      this.replaceState(Object.assign(state, data));
    },
  },
  actions: {
    async gettingData({ commit }) {
      let data = await dataGroup();
      commit("setData", data);
    },
    changingArrForDisplay({ commit }, val) {
      commit("changingArrForDisplay", val);
    },
    pageNumbers({ commit }, val) {
      commit("pageNumbers", val);
    },
    setPages({ commit }) {
      commit("setPages");
    },
    newGroupForData({ commit }, val) {
      commit("newGroupForData", val);
    },
    newGlobalId({ commit }, val) {
      commit("newGlobalId", val);
    },
    newGlobalArr({ commit }, val) {
      commit("newGlobalArr", val);
    },
    newInputGlobalVal({ commit }, val) {
      commit("newInputGlobalVal", val);
    },
    newSearchTypeGlobal({ commit }, val) {
      commit("newSearchTypeGlobal", val);
    },
    async extractData({ commit }) {
      if (localStorage.getItem("fulldata")) {
        let data = await JSON.parse(localStorage.getItem("fulldata"));
        commit("extractData", data);
      }
    },
  },
};
