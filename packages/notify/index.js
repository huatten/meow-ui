
import Vue from "vue";
import MNotify from "./notify";
import createInstance from "../_util/createInstance";
let vm;
const Notify = (message, {
  type = "default",
  duration = 3000
} = {}) => {
  vm = createInstance(Vue, MNotify);
  vm.type = type;
  vm.message = message;
  vm.duration = duration;
  // 防止两次 notifyShow的改变被合并成一次
  vm.$nextTick(() => {
    vm.notifyShow = true;
  })
  //监听
  vm.$on("input", val => {
    if (!val) {
      vm.value = false
    }
  })
  vm.$on("hide", () => {

  })
  return vm;
}
Notify.close = () => {
  Vue.nextTick(() => {
    vm.notifyShow = false;
  })
}
Vue.prototype.$notify = Notify;
export default MNotify;