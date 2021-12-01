import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";

const app = createApp(App);
app.use(store);

store.dispatch("group/gettingData").then(() => {
  store.dispatch("roles/getRoles");
  store.dispatch("access/getAccess");
  app.mount("#app");
});
store.dispatch("group/extractData");
