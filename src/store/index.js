import { createStore } from "vuex";

import group from "./Group";
import roles from "./Roles";
import access from "./access";

const store = createStore({
  modules: {
    roles,
    group,
    access,
  },
});
store.subscribe((mutation, state) => {
  localStorage.setItem("fulldata", JSON.stringify(state));
});
export default store;
