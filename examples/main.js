import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "packages/_style/src/index.scss";
import '@/assets/responsive';
import MEOW from 'packages/index';
Vue.use(MEOW);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
