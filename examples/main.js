import Vue from "vue";
import App from "./App.vue";
import router from "router";
import store from "store";
import "../packages/_style/index.scss"
import MEOW from '../packages/index.js'
Vue.use(MEOW)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
